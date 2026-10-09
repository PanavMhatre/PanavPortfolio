import utaustinLogo from "../assets/logos/utaustin.png";

const skills = [
  {
    category: "Languages",
    items: "Java, Python, C, C++, SQL, TypeScript, JavaScript, Swift, Kotlin, R",
  },
  {
    category: "Frameworks",
    items: "Spring Boot, React, Node.js, Express.js, Next.js, PyTorch, MongoDB, MySQL",
  },
  {
    category: "Tools",
    items: "Git, Linux/Unix, AWS, Azure, Docker, Kubernetes, Jenkins, GitHub Actions, Claude Code, Cursor",
  },
];

const awards = [
  { title: "Goldman Sachs Software Emerging Leader", date: "2026" },
  { title: "MLH Hook 'Em Hacks, 1st Place", date: "2026" },
  { title: "LinkedIn Scholarship", date: "2025" },
  { title: "Wells Fargo Scholarship Winner", date: "2025" },
  { title: "Apple Swift Student Challenge Winner", date: "2025" },
  { title: "USACO Gold", date: "" },
];

function Skills() {
  return (
    <section id="skills" className="scroll-mt-20 pb-4 pt-10">
      <h2 className="section-label mb-2">Skills</h2>
      <div className="divide-y divide-white/[0.07]">
        {skills.map((skill) => (
          <div key={skill.category} className="flex items-start py-5">
            <div className="w-28 flex-shrink-0">
              <span className="font-mono text-[10px] font-medium uppercase tracking-[0.12em] text-neutral-500">
                {skill.category}
              </span>
            </div>
            <p className="flex-1 text-sm leading-relaxed text-neutral-400">{skill.items}</p>
          </div>
        ))}
      </div>

      <div className="mt-16">
        <h2 className="section-label mb-2">Education</h2>
        <div className="-mx-3 flex items-center rounded-lg px-3 py-5 transition-colors hover:bg-white/[0.025]">
          <div className="mr-4 flex h-10 w-10 flex-shrink-0 items-center justify-center overflow-hidden rounded-md bg-[#BF5700] ring-1 ring-white/5">
            <img
              src={utaustinLogo}
              alt="University of Texas at Austin"
              className="h-full w-full object-contain p-1"
            />
          </div>
          <div className="min-w-0 flex-1">
            <h3 className="text-[15px] font-semibold tracking-tight text-neutral-100">
              The University of Texas at Austin
            </h3>
            <p className="mt-0.5 text-sm text-neutral-500">
              B.S. Computer Science &amp; B.S. Statistics and Data Science
            </p>
          </div>
          <span className="ml-4 flex-shrink-0 font-mono text-[10px] uppercase tracking-[0.08em] text-neutral-600 tabular-nums">
            May 2028
          </span>
        </div>
        <p className="mt-3 px-3 text-sm leading-relaxed text-neutral-500">
          <span className="text-neutral-600">Organizations:</span> ColorStack, UT ACM,
          Management Leadership for Tomorrow, CodePath, UT Genesis
        </p>
        <p className="mt-2 px-3 text-sm leading-relaxed text-neutral-500">
          <span className="text-neutral-600">Coursework:</span> Data Structures and
          Algorithms, Database Systems, Operating Systems, Computer Architecture
        </p>
      </div>

      <div className="mt-16">
        <h2 className="section-label mb-2">Awards</h2>
        <div className="divide-y divide-white/[0.07]">
          {awards.map((award) => (
            <div
              key={award.title}
              className="-mx-3 flex items-center justify-between rounded-lg px-3 py-4 transition-colors hover:bg-white/[0.025]"
            >
              <h3 className="text-sm text-neutral-300">{award.title}</h3>
              <span className="font-mono text-[10px] text-neutral-600 tabular-nums">
                {award.date}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
