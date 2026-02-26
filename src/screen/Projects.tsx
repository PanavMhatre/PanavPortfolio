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
        <h1 className="text-xl font-bold text-black dark:text-white mb-8">
          Projects
        </h1>
        {projects.map((project, index) => (
          <div key={index}>
            <div className="py-5">
              <h3 className="text-black dark:text-white font-semibold text-base">
                {project.title}
              </h3>
              <p className="text-gray-500 dark:text-gray-500 text-sm mt-1">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mt-3">
                {project.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="text-xs px-2.5 py-1 rounded-md bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            {index < projects.length - 1 && (
              <hr className="border-gray-200 dark:border-gray-700/50" />
            )}
          </div>
        ))}
      </section>

      <section className="pb-20">
        <h1 className="text-xl font-bold text-black dark:text-white mb-8">
          Research
        </h1>
        {research.map((item, index) => (
          <div key={index}>
            <div className="py-5">
              <h3 className="text-black dark:text-white font-semibold text-base">
                {item.title}
              </h3>
              <p className="text-gray-500 dark:text-gray-500 text-sm mt-1">
                {item.description}
              </p>
              <div className="flex flex-wrap gap-2 mt-3">
                {item.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="text-xs px-2.5 py-1 rounded-md bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            {index < research.length - 1 && (
              <hr className="border-gray-200 dark:border-gray-700/50" />
            )}
          </div>
        ))}
      </section>
    </div>
  );
}

export default Projects;
