/**
 * Vercel Serverless — Groq Chat Completions.
 * Set GROQ_API_KEY in your local env / Vercel project env.
 * https://console.groq.com/docs/text-chat
 */

const PORTFOLIO_CONTEXT = `
Current portfolio and resume context:
- Panav Mhatre is a Computer Science student at UT Austin based in Austin, Texas.
- Focus areas: AI/ML, backend infrastructure, systems and low-level programming, and product-minded software engineering.
- Contact: panav@utexas.edu, GitHub @panavmhatre, LinkedIn linkedin.com/in/panavmhatre.

Current experience timeline shown on the site:
- Convergent — Software Developer (Jan 2026 to present).
- Goldman Sachs — Software Engineering Fellow (Jan 2026 to Apr 2026).
- Stanford University — Research Assistant (Jul 2024 to present).
- Dartmouth College — Machine Learning Researcher (May 2024 to Jun 2025).
- Beacon of Hope — Co-Founder (Jan 2024 to present), with a STEM outreach / access mission.
- University of North Texas — Machine Learning Researcher (Jul 2023 to Apr 2025).
- Massachusetts Institute of Technology — Scientific Researcher (Jul 2023 to Aug 2023).

Projects currently featured on the site:
- GoFit — student-focused fitness app.
- Red Alert — real-time disaster visualization tool meant to help vulnerable populations stay safe.
- LearnX — learning platform for rural students with curated paths and interactive coding challenges.
- EarthDefenders — climate action education app built with Swift / SwiftUI / AR ideas.
- TextShield — AI-powered text classification and content moderation project built with Python and TensorFlow.

Awards and education:
- Apple Swift Student Challenge winner.
- Congressional Gold Award.
- B.S. Computer Science at The University of Texas at Austin.

Skills shown on the resume:
- Languages: Python, Java, Swift, SQL, HTML, CSS, JavaScript, TypeScript, Dart.
- AI/ML: TensorFlow, PyTorch, Keras, NumPy, Pandas, Matplotlib, Seaborn.
- Frameworks: React, Flutter, Next.js, Tailwind CSS.
- Tools: Git, Docker, AWS, Firebase.

Public web signals that can be used carefully:
- GitHub profile describes Panav as focused on clean, efficient, scalable applications across frontend, backend, infrastructure, and machine learning. Pinned repos include EarthDefenders, LearnX, TweetAnalysis, and an ASML Command Interpreter.
- Amazon Music lists him as host of the Spot Robotics Podcast, with conversations spanning AI, software engineering, cybersecurity, medicine, and NASA ML.
- DEV Community shows March and April 2026 writing about keeping AI-assisted code maintainable over time.
- UNA-USA's Global Goals Ambassadors page highlights his Apple Swift Student Challenge recognition, research background, and STEM outreach work.

When current portfolio/resume details conflict with older third-party web pages, prefer the current portfolio/resume details first.
`;

const SYSTEM = `You are the assistant on Panav Mhatre's personal portfolio site.

Use the portfolio context below as your source of truth. You may synthesize across facts, but do not invent internships, dates, awards, or project details that are not supported here.

Answer style:
- Warm, sharp, and professional.
- Usually 2 to 5 sentences.
- Be specific about projects and impact when possible.
- If something is uncertain, say so plainly.
- If asked about experience that only appears in public web signals, frame it as a public signal rather than a core resume fact.
- If asked something not covered, say you're not sure and suggest checking the Resume / Projects pages or emailing Panav.

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
