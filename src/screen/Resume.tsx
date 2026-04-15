import goldmanLogo from "../assets/logos/goldman.png";
import mitLogo from "../assets/logos/mit.jpg";
import stanfordLogo from "../assets/logos/stanford.jpg";
import dartmouthLogo from "../assets/logos/dartmouth.png";
import appleLogo from "../assets/logos/apple.png";
import utaustinLogo from "../assets/logos/utaustin.png";
import convergentLogo from "../assets/logos/txconvergent.png";
import senateLogo from "../assets/logos/senate.png";
import ribbonLogo from "../assets/logos/ribbon.svg";

interface ResumeItem {
  title: string;
  description: string;
  date: string;
  logo: string;
  logoBg: string;
  logoImage?: string;
  /** e.g. slightly zoom wordmarks that read small at fixed tile size */
  logoImageClassName?: string;
}

function Resume() {
  const experiences: { year: number; items: ResumeItem[] }[] = [
    {
      year: 2026,
      items: [
        {
          title: "Convergent",
          description: "Software Developer",
          date: "Jan 2026 — Present",
          logo: "C",
          logoBg: "bg-[#2D2D2D]",
          logoImage: convergentLogo,
        },
        {
          title: "Goldman Sachs",
          description: "Software Engineering Fellow",
          date: "Jan 2026 — Apr 2026",
          logo: "",
          logoBg: "bg-[#7399C6]",
          logoImage: goldmanLogo,
        },
      ],
    },
    {
      year: 2024,
      items: [
        {
          title: "Stanford University",
          description: "Research Assistant",
          date: "Jul 2024 — Present",
          logo: "S",
          logoBg: "bg-[#8C1515]",
          logoImage: stanfordLogo,
        },
        {
          title: "Dartmouth College",
          description: "Machine Learning Researcher",
          date: "May 2024 — Jun 2025",
          logo: "D",
          logoBg: "bg-[#00693E]",
          logoImage: dartmouthLogo,
        },
        {
          title: "Beacon of Hope",
          description: "Co-Founder",
          date: "Jan 2024 — Present",
          logo: "B",
          logoBg: "bg-[#FFF3E0]",
          logoImage: ribbonLogo,
        },
      ],
    },
    {
      year: 2023,
      items: [
        {
          title: "University of North Texas",
          description: "Machine Learning Researcher",
          date: "Jul 2023 — Apr 2025",
          logo: "UNT",
          logoBg: "bg-[#00853E]",
        },
        {
          title: "Massachusetts Institute of Technology",
          description: "Scientific Researcher",
          date: "Jul 2023 — Aug 2023",
          logo: "",
          logoBg: "bg-[#E8E8E8]",
          logoImage: mitLogo,
          logoImageClassName: "scale-[2.1] origin-center",
        },
      ],
    },
  ];

  const awards: ResumeItem[] = [
    {
      title: "Apple Swift Student Challenge Winner",
      description: "Built a climate change education app using Swift",
      date: "2024",
      logo: "",
      logoBg: "bg-gray-100 dark:bg-gray-800",
      logoImage: appleLogo,
    },
    {
      title: "Congressional Gold Award",
      description: "Recognized for community service and leadership",
      date: "2024",
      logo: "★",
      logoBg: "bg-[#263B7A]",
      logoImage: senateLogo,
    },
  ];

  const skills = [
    {
      category: "Languages",
      items: "Python, Java, Swift, SQL, HTML, CSS, JavaScript, TypeScript, Dart",
    },
    {
      category: "ML/AI",
      items: "TensorFlow, PyTorch, Keras, NumPy, Pandas, Matplotlib, Seaborn",
    },
    {
      category: "Frameworks",
      items: "React, Flutter, Next.js, Tailwind CSS",
    },
    {
      category: "Tools",
      items: "Git, Docker, AWS, Firebase",
    },
  ];

  return (
    <div className="w-full max-w-3xl mx-auto px-6 animate-fade-up">
      <section className="pt-16 pb-20">
        {experiences.map((group) => (
          <div key={group.year}>
            {group.items.map((item, index) => (
              <div key={index}>
                <div className="flex items-center py-5 px-3 -mx-3 rounded-lg transition-colors hover:bg-white/[0.03] cursor-default">
                  <div className="w-14 flex-shrink-0 tabular-nums">
                    {index === 0 && (
                      <span className="text-[11px] font-medium uppercase tracking-[0.18em] text-neutral-500">
                        {group.year}
                      </span>
                    )}
                  </div>
                  <div
                    className={`w-10 h-10 rounded-md ${item.logoBg} flex items-center justify-center flex-shrink-0 mr-4 overflow-hidden ring-1 ${
                      item.logoBg === "bg-[#E8E8E8]"
                        ? "ring-black/10"
                        : "ring-white/5"
                    }`}
                  >
                    {item.logoImage ? (
                      <img
                        src={item.logoImage}
                        alt={item.title}
                        className={`h-full w-full object-contain ${
                          item.logoBg === "bg-[#E8E8E8]" ? "p-1.5" : "p-1"
                        } ${item.logoImageClassName ?? ""}`}
                      />
                    ) : (
                      <span className="text-white text-xs font-bold">
                        {item.logo}
                      </span>
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-[15px] font-semibold text-neutral-100 tracking-tight">
                      {item.title}
                    </h3>
                    <p className="text-sm text-neutral-500 mt-0.5">
                      {item.description}
                    </p>
                  </div>
                  <div className="flex-shrink-0 ml-4 text-right">
                    <span className="text-xs text-neutral-600 whitespace-nowrap">
                      {item.date}
                    </span>
                  </div>
                </div>
                <div className="ml-14 h-px bg-white/[0.06]" />
              </div>
            ))}
          </div>
        ))}

        <div className="mt-20">
          <h2 className="text-[11px] font-medium uppercase tracking-[0.2em] text-neutral-500 mb-8">
            Awards
          </h2>
          {awards.map((award, index) => (
            <div key={index}>
              <div className="flex items-center py-5 px-3 -mx-3 rounded-lg transition-colors hover:bg-white/[0.03] cursor-default">
                <div
                  className={`w-10 h-10 rounded-md ${award.logoBg} flex items-center justify-center flex-shrink-0 mr-4 overflow-hidden ring-1 ring-white/5`}
                >
                  {award.logoImage ? (
                    <img src={award.logoImage} alt={award.title} className="w-full h-full object-contain p-1" />
                  ) : (
                    <span className="text-white text-sm font-bold">
                      {award.logo}
                    </span>
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-[15px] font-semibold text-neutral-100 tracking-tight">
                    {award.title}
                  </h3>
                  <p className="text-sm text-neutral-500 mt-0.5">
                    {award.description}
                  </p>
                </div>
                <div className="flex-shrink-0 ml-4">
                  <span className="text-xs text-neutral-600 tabular-nums">
                    {award.date}
                  </span>
                </div>
              </div>
              {index < awards.length - 1 && (
                <div className="h-px bg-white/[0.06]" />
              )}
            </div>
          ))}
        </div>

        <div className="mt-20">
          <h2 className="text-[11px] font-medium uppercase tracking-[0.2em] text-neutral-500 mb-8">
            Education
          </h2>
          <div className="flex items-center py-5 px-3 -mx-3 rounded-lg transition-colors hover:bg-white/[0.03] cursor-default">
            <div className="w-10 h-10 rounded-md bg-[#BF5700] flex items-center justify-center flex-shrink-0 mr-4 overflow-hidden ring-1 ring-white/5">
              <img src={utaustinLogo} alt="University of Texas at Austin" className="w-full h-full object-contain p-1" />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="text-[15px] font-semibold text-neutral-100 tracking-tight">
                University of Texas at Austin
              </h3>
              <p className="text-sm text-neutral-500 mt-0.5">
                B.S. Computer Science
              </p>
            </div>
          </div>
        </div>

        <div className="mt-20">
          <h2 className="text-[11px] font-medium uppercase tracking-[0.2em] text-neutral-500 mb-8">
            Skills
          </h2>
          {skills.map((skill, index) => (
            <div key={index}>
              <div className="flex items-start py-5">
                <div className="w-28 flex-shrink-0">
                  <span className="text-[11px] font-medium uppercase tracking-[0.15em] text-neutral-500">
                    {skill.category}
                  </span>
                </div>
                <div className="flex-1">
                  <p className="text-sm text-neutral-400 leading-relaxed">
                    {skill.items}
                  </p>
                </div>
              </div>
              {index < skills.length - 1 && (
                <div className="h-px bg-white/[0.06]" />
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Resume;
