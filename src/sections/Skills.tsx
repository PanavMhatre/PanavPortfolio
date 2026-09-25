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
    <section id="skills" className="pb-4 pt-10 scroll-mt-20">
      <h2 className="text-[11px] font-medium uppercase tracking-[0.2em] text-neutral-500 mb-2">
        Skills
      </h2>
      <div className="divide-y divide-white/[0.06]">
        {skills.map((skill) => (
          <div key={skill.category} className="flex items-start py-5">
            <div className="w-28 flex-shrink-0">
              <span className="text-[11px] font-medium uppercase tracking-[0.15em] text-neutral-500">
                {skill.category}
              </span>
            </div>
            <div className="flex-1">
              <p className="text-sm text-neutral-400 leading-relaxed">{skill.items}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16">
        <h2 className="text-[11px] font-medium uppercase tracking-[0.2em] text-neutral-500 mb-2">
          Education
        </h2>
        <div className="flex items-center py-5 px-3 -mx-3 rounded-lg transition-colors hover:bg-white/[0.03] cursor-default">
          <div className="w-10 h-10 rounded-md bg-[#BF5700] flex items-center justify-center flex-shrink-0 mr-4 overflow-hidden ring-1 ring-white/5">
            <img
              src={utaustinLogo}
              alt="University of Texas at Austin"
              className="w-full h-full object-contain p-1"
            />
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="text-[15px] font-semibold text-neutral-100 tracking-tight">
              The University of Texas at Austin
            </h3>
            <p className="text-sm text-neutral-500 mt-0.5">
              B.S. Computer Science &amp; B.S. Statistics and Data Science
            </p>
          </div>
          <div className="flex-shrink-0 ml-4">
            <span className="text-xs text-neutral-600 tabular-nums">May 2028</span>
          </div>
        </div>
        <p className="text-sm text-neutral-500 leading-relaxed mt-3 px-3">
          <span className="text-neutral-600">Organizations:</span> ColorStack, UT
          ACM (Operational Officer), Management Leadership for Tomorrow, CodePath,
          UT Genesis
        </p>
        <p className="text-sm text-neutral-500 leading-relaxed mt-2 px-3">
          <span className="text-neutral-600">Coursework:</span> Data Structures
          &amp; Algorithms, Object-Oriented Programming, Database Systems,
          Operating Systems, Principles of Computer Architecture
        </p>
      </div>

      <div className="mt-16">
        <h2 className="text-[11px] font-medium uppercase tracking-[0.2em] text-neutral-500 mb-2">
          Awards
        </h2>
        <div className="divide-y divide-white/[0.06]">
          {awards.map((award) => (
            <div
              key={award.title}
              className="flex items-center justify-between py-4 px-3 -mx-3 rounded-lg transition-colors hover:bg-white/[0.03] cursor-default"
            >
              <h3 className="text-sm text-neutral-300">{award.title}</h3>
              <span className="text-xs text-neutral-600 tabular-nums">{award.date}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
