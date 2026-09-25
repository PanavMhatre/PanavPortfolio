interface ProjectItem {
  title: string;
  date?: string;
  github?: string;
  bullets: string[];
  tags: string[];
}

const systemsProjects: ProjectItem[] = [
  {
    title: "ASML Interpreter",
    date: "Jun 2025",
    github: "https://github.com/PanavMhatre/ASML-Command-Interpreter",
    bullets: [
      "Developed a custom instruction-set interpreter from scratch, implementing 20+ low-level operations spanning arithmetic, bitwise logic, and control flow.",
      "Simulated hardware-level branching and function calls with a hand-rolled interpreter stack and a 64-bit register file (x0 to x31).",
      "Managed manual heap memory (malloc/free) to simulate system RAM, using pointer arithmetic and bitwise operations to drive machine-level data movement.",
    ],
    tags: ["C", "Assembly", "GDB", "Valgrind"],
  },
  {
    title: "C Memory Manager",
    date: "Mar 2026",
    github: "https://github.com/PanavMhatre/C-Memory-Manager",
    bullets: [
      "Implemented umalloc()/ufree() in C using aligned block headers, packed allocation metadata, and csbrk()-backed heap-region expansion.",
      "Designed 6 segregated free lists with size-based bin selection and first-fit search across bins for reusable blocks.",
      "Implemented block splitting and physical-neighbor coalescing, validating allocator invariants with heap-consistency checks and C/Python test drivers.",
    ],
    tags: ["C", "GDB", "Linux", "Make"],
  },
  {
    title: "UTCS Shell",
    date: "Sep 2026",
    bullets: [
      "Built a Unix shell in C with tokenization and command dispatch, running built-ins in the parent process and external programs via fork()/execv().",
      "Implemented command-scoped I/O redirection with open()/dup2(), validating redirect syntax and replacing child file descriptors before execv().",
      "Executed &-separated command groups concurrently, forking all children before synchronization and reaping them with wait()/waitpid().",
    ],
    tags: ["C", "POSIX", "Linux"],
  },
];

const projects: ProjectItem[] = [
  {
    title: "ArbPoly",
    date: "Apr 2026",
    github: "https://github.com/PanavMhatre/Arbpoly",
    bullets: [
      "Built a prediction-market arbitrage scanner comparing Kalshi and Polymarket orderbooks, computing VWAP-based cross-platform spreads with a risk-scored opportunity feed.",
      "Implemented a from-scratch rate-limiting layer with per-provider token buckets, TTL caching, and exponential backoff with jitter to stay within exchange API limits.",
      "Designed a market-equivalence engine that indexes candidates before comparison to avoid O(n²) blowup, with a deterministic fallback when the LLM-based matcher is unavailable.",
      "Shipped read-only by design (hardcoded trading-disabled flag, no live orders) with a full Vitest suite covering the risk classifier.",
    ],
    tags: ["TypeScript", "Next.js", "Prisma", "Vitest"],
  },
  {
    title: "UT Austin Courses MCP Server",
    date: "Mar 2026",
    github: "https://github.com/PanavMhatre/UT-Austin-Courses-MCP",
    bullets: [
      "Built a local MCP (Model Context Protocol) server exposing UT Austin's course catalog to any MCP-compatible AI client via typed tool and resource endpoints.",
      "Implemented search and detail tools (search_courses, get_course_details) backed by a structured course dataset, with a pytest suite covering server behavior.",
      "Applied the emerging agent-tooling standard end to end, using the same integration pattern that AI platform teams use to connect LLMs to internal data.",
    ],
    tags: ["Python", "MCP SDK", "pytest"],
  },
  {
    title: "Interval",
    date: "Jun 2025",
    github: "https://github.com/PanavMhatre/Interval",
    bullets: [
      "Engineered an AI-powered iOS application in Swift and SwiftUI for 300+ student users, integrating the OpenAI API via REST requests and JSON parsing to process health data and generate personalized insights.",
      "Built MySQL data pipelines to unify records from Apple Health, OCR-scanned documents, and medical providers, powering persistent profiles and personalized AI insights across sessions.",
      "Shipped health-tracking workflows that achieved 78% user retention and increased daily active usage by ~40%.",
      "Won MLH Hook 'Em Hacks and presented Interval to partners from Pear VC, Entrepreneur First, and a16z.",
    ],
    tags: ["Swift", "SwiftUI", "OpenAI API", "MySQL", "HealthKit"],
  },
  {
    title: "LearnX",
    date: "May 2025",
    github: "https://github.com/PanavMhatre/LearnX",
    bullets: [
      "Spearheaded end-to-end development of an interactive course platform with Node.js, Express.js, and Next.js, achieving an average user session duration of 12 minutes.",
      "Designed RESTful APIs and optimized MongoDB queries, improving data load speed and enabling seamless course progress tracking for 100+ users.",
      "Integrated automated CI/CD pipelines (Vercel, GitHub Actions), reducing deployment times from hours to a couple of minutes per release.",
      "Collaborated with 5+ content creators to tailor features based on user feedback, resulting in a 4/5 average rating.",
    ],
    tags: ["Express.js", "React", "Next.js", "MongoDB", "Vercel"],
  },
];

function ProjectCard({ project }: { project: ProjectItem }) {
  return (
    <div className="py-8">
      <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
        <div className="flex items-baseline gap-3">
          <h3 className="text-[15px] font-semibold text-neutral-100 tracking-tight">
            {project.github ? (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                {project.title}
              </a>
            ) : (
              project.title
            )}
          </h3>
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${project.title} source code on GitHub`}
              className="text-xs font-medium text-neutral-400 hover:text-white transition-colors underline underline-offset-4 decoration-neutral-600 hover:decoration-neutral-300"
            >
              View source on GitHub
            </a>
          )}
        </div>
        {project.date && (
          <span className="text-xs text-neutral-600 whitespace-nowrap tabular-nums">
            {project.date}
          </span>
        )}
      </div>
      <ul className="mt-4 space-y-2.5">
        {project.bullets.map((bullet, i) => (
          <li key={i} className="flex gap-3 text-sm text-neutral-400 leading-relaxed">
            <span className="mt-[7px] h-1 w-1 rounded-full bg-neutral-600 flex-shrink-0" />
            <span>{bullet}</span>
          </li>
        ))}
      </ul>
      <div className="flex flex-wrap items-center gap-2 mt-4">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="text-[11px] px-2.5 py-1 rounded-md bg-white/[0.06] text-neutral-400 ring-1 ring-white/[0.06]"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}

function Projects() {
  return (
    <section id="projects" className="pb-4 pt-10 scroll-mt-20">
      <h2 className="text-[11px] font-medium uppercase tracking-[0.2em] text-neutral-500 mb-2">
        Systems &amp; Low-Level
      </h2>
      <div className="divide-y divide-white/[0.06]">
        {systemsProjects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>

      <div className="mt-16">
        <h2 className="text-[11px] font-medium uppercase tracking-[0.2em] text-neutral-500 mb-2">
          Projects
        </h2>
        <div className="divide-y divide-white/[0.06]">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
