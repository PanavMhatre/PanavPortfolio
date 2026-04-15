function Projects() {
  const projects = [
    {
      title: "GoFit",
      description: "Open source mobile app built with Java to help students get fit.",
      tags: ["React", "TypeScript", "Tailwind"],
    },
    {
      title: "Red Alert",
      description: "A real-time visualization tool that helps vulnerable populations be safe from natural disasters.",
      tags: ["React", "JavaScript", "Maps API"],
    },
    {
      title: "LearnX",
      description: "Platform for rural students to access curated learning paths with interactive coding challenges.",
      tags: ["React", "JavaScript", "NextUI"],
    },
    {
      title: "EarthDefenders",
      description: "Mobile app that gamifies climate action and educates users on sustainability through quizzes and AR.",
      tags: ["Swift", "SwiftUI", "ARKit"],
    },
  ];

  const research = [
    {
      title: "TextShield",
      description: "AI-powered text classification and content moderation system using deep learning.",
      tags: ["AI/ML", "Python", "TensorFlow"],
    },
  ];

  return (
    <div className="w-full max-w-3xl mx-auto px-6 animate-fade-up">
      <section className="pt-16 pb-10">
        <h1 className="text-[11px] font-medium uppercase tracking-[0.2em] text-neutral-500 mb-10">
          Projects
        </h1>
        {projects.map((project, index) => (
          <div key={index}>
            <div className="py-6">
              <h3 className="text-[15px] font-semibold text-neutral-100 tracking-tight">
                {project.title}
              </h3>
              <p className="text-sm text-neutral-500 mt-1.5 leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mt-4">
                {project.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="text-[11px] px-2.5 py-1 rounded-md bg-white/[0.06] text-neutral-400 ring-1 ring-white/[0.06]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            {index < projects.length - 1 && (
              <div className="h-px bg-white/[0.06]" />
            )}
          </div>
        ))}
      </section>

      <section className="pb-20">
        <h2 className="text-[11px] font-medium uppercase tracking-[0.2em] text-neutral-500 mb-10">
          Research
        </h2>
        {research.map((item, index) => (
          <div key={index}>
            <div className="py-6">
              <h3 className="text-[15px] font-semibold text-neutral-100 tracking-tight">
                {item.title}
              </h3>
              <p className="text-sm text-neutral-500 mt-1.5 leading-relaxed">
                {item.description}
              </p>
              <div className="flex flex-wrap gap-2 mt-4">
                {item.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="text-[11px] px-2.5 py-1 rounded-md bg-white/[0.06] text-neutral-400 ring-1 ring-white/[0.06]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            {index < research.length - 1 && (
              <div className="h-px bg-white/[0.06]" />
            )}
          </div>
        ))}
      </section>
    </div>
  );
}

export default Projects;
