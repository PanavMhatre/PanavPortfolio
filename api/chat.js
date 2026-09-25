/**
 * Vercel Serverless, Groq Chat Completions.
 * Set GROQ_API_KEY in your local env / Vercel project env.
 * https://console.groq.com/docs/text-chat
 */

const PORTFOLIO_CONTEXT = `
Current portfolio and resume context:
- Panav Mhatre is a Computer Science and Statistics & Data Science student at UT Austin (B.S., expected May 2028) based in Austin, Texas.
- Focus areas: backend systems, ML pipelines, and product-minded software engineering.
- Contact: mhatrepanav@gmail.com, GitHub @panavmhatre, LinkedIn linkedin.com/in/panavmhatre.

Experience:
- UT Austin, RobIn Lab, Austin, TX: Undergraduate Researcher (Jan 2026 to Present). Built an Isaac Lab humanoid locomanipulation environment for object pushing across 3 randomized hidden properties (mass, size, friction); integrated a 2-policy control stack combining pretrained lower-body locomotion with upper-body manipulation; increased cube-pushing task success rate by 87% through reward shaping; designed a meta-RL adaptation module using Transformer-XL/RNN in-context memory on a 4-person team, enabling adaptation to unseen object dynamics without retraining. Trained on an HPC cluster using NVIDIA Isaac Sim.
- Fidelity Investments, Westlake, TX: Software Engineer Intern (Jun 2026 to Aug 2026). Built and deployed a Java Spring Boot backend service and REST API processing 2,000+ daily trades from Oracle; reduced unconfirmed trade reconciliation time by 65% via automated broker email notifications through the JavaMail API; launched the pipeline for Fidelity's European Trade Operations team and presented it to the Chief Operations Officer; tested with JUnit/SonarQube and deployed via Jenkins and IBM UrbanCode.
- Stanford University, S3L Lab, Stanford, CA: Undergraduate Research Assistant (Jul 2024 to May 2026). Integrated Department of Energy API data covering regions serving 10M residents; built a hybrid LSTM-XGBoost time-series forecasting framework in PyTorch/scikit-learn that reduced forecasting error ~18% vs. a baseline RNN; built real-time Plotly dashboards for grid monitoring; automated ML workflows on AWS EC2.

Leadership:
- Beacon of Hope Charity, Plano, TX: Founder (Mar 2024 to Aug 2026). Organized a door-to-door fundraising campaign raising over $15,000 for pediatric cancer research across 300+ neighborhoods; directed a team of 50+ volunteers.

Projects currently featured on the site (grouped as "Systems & Low-Level" and "Projects"):
- ASML Interpreter (Jun 2025): custom instruction-set interpreter in C with 20+ low-level operations, hand-rolled interpreter stack, 64-bit register simulation, manual heap management.
- C Memory Manager (Mar 2026): custom umalloc()/ufree() allocator in C with 6 segregated free lists, block splitting, and physical-neighbor coalescing.
- UTCS Shell (Sep 2026): Unix shell in C with fork()/execv() dispatch, dup2()-based I/O redirection, and concurrent job groups reaped via wait()/waitpid().
- ArbPoly (Apr 2026): prediction-market arbitrage scanner comparing Kalshi and Polymarket orderbooks (TypeScript/Next.js), with a from-scratch rate limiter, an O(n) market-equivalence engine, and a hardcoded trading-disabled safety flag (read-only, no live orders).
- UT Austin Courses MCP Server (Mar 2026): local MCP (Model Context Protocol) server exposing UT Austin's course catalog to AI clients via typed tool endpoints, in Python with a pytest suite.
- Interval (Jun 2025): AI-powered iOS app in Swift/SwiftUI for 300+ student users, integrating the OpenAI API and MySQL pipelines to unify Apple Health, OCR, and provider records; 78% retention; won MLH Hook 'Em Hacks and presented to Pear VC, Entrepreneur First, and a16z.
- LearnX (May 2025): interactive course platform built with Node.js, Express.js, Next.js, and MongoDB; ~12 minute average session duration, 100+ users, CI/CD via Vercel and GitHub Actions.

Awards and education:
- Goldman Sachs Software Emerging Leader (2026).
- MLH Hook 'Em Hacks, 1st Place (2026).
- LinkedIn Scholarship (2025).
- Wells Fargo Scholarship Winner (2025).
- Apple Swift Student Challenge Winner (2025).
- USACO Gold.
- B.S. Computer Science and B.S. Statistics & Data Science, The University of Texas at Austin (May 2028). Organizations: ColorStack, UT ACM (Operational Officer), Management Leadership for Tomorrow, CodePath, UT Genesis.

Skills shown on the resume:
- Languages: Java, Python, C, C++, SQL, TypeScript, JavaScript, Swift, Kotlin, R.
- Frameworks/Databases: Spring Boot, React, Node.js, Express.js, Next.js, PyTorch, MongoDB, MySQL.
- Tools: Git, Linux/Unix, AWS, Azure, Docker, Kubernetes, Jenkins, GitHub Actions, Claude Code, Cursor.

Only use the facts above. Do not reference older public web signals (podcasts, DEV Community posts, other organizations) unless the visitor brings them up first, and even then flag them as unverified rather than resume facts.
`;

const SYSTEM = `You are the assistant on Panav Mhatre's personal portfolio site.

Use the portfolio context below as your source of truth. You may synthesize across facts, but do not invent internships, dates, awards, or project details that are not supported here.

Answer style:
- Warm, sharp, and professional.
- Usually 2 to 5 sentences.
- Be specific about projects and impact when possible.
- If something is uncertain, say so plainly.
- If asked about experience that only appears in public web signals, frame it as a public signal rather than a core resume fact.
- If asked something not covered, say you're not sure and suggest checking the project links or emailing Panav.

${PORTFOLIO_CONTEXT}`;

/** Groq's current featured flagship hosted model. */
const MODEL = process.env.GROQ_MODEL || "openai/gpt-oss-120b";

function sendJson(res, statusCode, payload) {
  if (typeof res.status === "function" && typeof res.json === "function") {
    return res.status(statusCode).json(payload);
  }

  res.statusCode = statusCode;
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify(payload));
  return res;
}

function sendEmpty(res, statusCode) {
  if (typeof res.status === "function") {
    return res.status(statusCode).end();
  }

  res.statusCode = statusCode;
  res.end();
  return res;
}

function buildChatContents(messages, systemText) {
  const contents = [];
  let i = 0;

  if (messages[0]?.role === "assistant") {
    systemText += `\n\nThe assistant already greeted the visitor with: "${messages[0].content}"`;
    i = 1;
  }

  for (; i < messages.length; i += 1) {
    const m = messages[i];
    if (m.role === "user") {
      contents.push({ role: "user", parts: [{ text: String(m.content) }] });
    } else if (m.role === "assistant") {
      contents.push({ role: "model", parts: [{ text: String(m.content) }] });
    }
  }

  return { contents, systemText };
}

function extractText(data) {
  return data?.candidates?.[0]?.content?.parts?.[0]?.text?.trim?.() ?? "";
}

async function generateGroq({
  apiKey,
  systemText,
  contents,
  temperature = 0.65,
  maxOutputTokens = 512,
}) {
  const url = "https://api.groq.com/openai/v1/chat/completions";

  const messages = [];

  if (systemText?.trim()) {
    messages.push({ role: "system", content: systemText });
  }

  for (const item of contents) {
    messages.push({
      role: item.role === "model" ? "assistant" : item.role,
      content: item.parts?.map((part) => part.text).join("\n") ?? "",
    });
  }

  const r = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      model: MODEL,
      messages,
      temperature,
      max_tokens: maxOutputTokens,
    }),
  });

  const data = await r.json();
  if (!r.ok) {
    return {
      ok: false,
      status: r.status,
      error: {
        error: "groq_error",
        detail: data?.error?.message ?? data,
      },
    };
  }

  return { ok: true, data };
}

export default async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    return sendEmpty(res, 204);
  }

  if (req.method !== "POST") {
    return sendJson(res, 405, { error: "Method not allowed" });
  }

  const apiKey = process.env.GROQ_API_KEY;
  if (!apiKey) {
    return sendJson(res, 503, {
      error: "missing_groq_key",
      message: "GROQ_API_KEY is not set.",
    });
  }

  let body;
  try {
    body = typeof req.body === "string" ? JSON.parse(req.body) : req.body;
  } catch {
    return sendJson(res, 400, { error: "Invalid JSON" });
  }

  try {
    const { messages } = body;
    if (!Array.isArray(messages)) {
      return sendJson(res, 400, { error: "messages required" });
    }

    const built = buildChatContents(messages, SYSTEM);
    if (built.contents.length === 0) {
      return sendJson(res, 400, { error: "no_valid_messages" });
    }

    const result = await generateGroq({
      apiKey,
      systemText: built.systemText,
      contents: built.contents,
    });

    if (!result.ok) {
      return sendJson(res, result.status, result.error);
    }

    const text = result.data?.choices?.[0]?.message?.content?.trim?.() ?? "";
    if (!text) {
      return sendJson(res, 502, {
        error: "empty_response",
        detail: "no text in response",
      });
    }

    return sendJson(res, 200, { reply: text });
  } catch (e) {
    return sendJson(res, 503, {
      error: "groq_down",
      message: "Groq is not working right now.",
      detail: String(e),
    });
  }
}
