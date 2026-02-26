import cowboysLogo from "../assets/logos/cowboys.png";
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
      ],
    },
    {
      year: 2025,
      items: [
        {
          title: "Dallas Cowboys",
          description: "Retail Technology",
          date: "Mar 2025 — Aug 2025",
          logo: "DC",
          logoBg: "bg-[#003594]",
          logoImage: cowboysLogo,
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
          logo: "MIT",
          logoBg: "bg-[#A31F34]",
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
                <div className="flex items-center py-4 px-3 -mx-3 rounded-lg transition-colors hover:bg-gray-100 dark:hover:bg-white/5 cursor-default">
                  <div className="w-16 flex-shrink-0">
                    {index === 0 && (
                      <span className="text-gray-500 dark:text-gray-400 text-sm font-medium">
                        {group.year}
                      </span>
                    )}
                  </div>
                  <div
                    className={`w-10 h-10 rounded-lg ${item.logoBg} flex items-center justify-center flex-shrink-0 mr-4 overflow-hidden`}
                  >
                    {item.logoImage ? (
                      <img src={item.logoImage} alt={item.title} className="w-full h-full object-contain p-1" />
                    ) : (
                      <span className="text-white text-xs font-bold">
                        {item.logo}
                      </span>
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-black dark:text-white font-semibold text-sm">
                      {item.title}
                    </h3>
                    <p className="text-gray-500 dark:text-gray-500 text-xs mt-0.5">
                      {item.description}
                    </p>
                  </div>
                  <div className="flex-shrink-0 ml-4">
                    <span className="text-gray-400 dark:text-gray-500 text-xs whitespace-nowrap">
                      {item.date}
                    </span>
                  </div>
                </div>
                <hr className="border-gray-100 dark:border-gray-800/50 ml-16" />
              </div>
            ))}
          </div>
        ))}

        <div className="mt-16">
          <h2 className="text-xl font-bold text-black dark:text-white mb-6">
            Awards
          </h2>
          {awards.map((award, index) => (
            <div key={index}>
              <div className="flex items-center py-4 px-3 -mx-3 rounded-lg transition-colors hover:bg-gray-100 dark:hover:bg-white/5 cursor-default">
                <div
                  className={`w-10 h-10 rounded-lg ${award.logoBg} flex items-center justify-center flex-shrink-0 mr-4 overflow-hidden`}
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
                  <h3 className="text-black dark:text-white font-semibold text-sm">
                    {award.title}
                  </h3>
                  <p className="text-gray-500 dark:text-gray-500 text-xs mt-0.5">
                    {award.description}
                  </p>
                </div>
                <div className="flex-shrink-0 ml-4">
                  <span className="text-gray-400 dark:text-gray-500 text-xs">
                    {award.date}
                  </span>
                </div>
              </div>
              {index < awards.length - 1 && (
                <hr className="border-gray-100 dark:border-gray-800/50" />
              )}
            </div>
          ))}
        </div>

        <div className="mt-16">
          <h2 className="text-xl font-bold text-black dark:text-white mb-6">
            Education
          </h2>
          <div className="flex items-center py-4 px-3 -mx-3 rounded-lg transition-colors hover:bg-gray-100 dark:hover:bg-white/5 cursor-default">
            <div className="w-10 h-10 rounded-lg bg-[#BF5700] flex items-center justify-center flex-shrink-0 mr-4 overflow-hidden">
              <img src={utaustinLogo} alt="University of Texas at Austin" className="w-full h-full object-contain p-1" />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="text-black dark:text-white font-semibold text-sm">
                University of Texas at Austin
              </h3>
              <p className="text-gray-500 dark:text-gray-500 text-xs mt-0.5">
                B.S. Computer Science
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16">
          <h2 className="text-xl font-bold text-black dark:text-white mb-6">
            Skills
          </h2>
          {skills.map((skill, index) => (
            <div key={index}>
              <div className="flex items-start py-4">
                <div className="w-28 flex-shrink-0">
                  <span className="text-gray-500 dark:text-gray-400 text-sm font-medium">
                    {skill.category}
                  </span>
                </div>
                <div className="flex-1">
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    {skill.items}
                  </p>
                </div>
              </div>
              {index < skills.length - 1 && (
                <hr className="border-gray-100 dark:border-gray-800/50" />
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Resume;
