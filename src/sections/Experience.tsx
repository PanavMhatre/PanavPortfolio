interface Role {
  title: string;
  org: string;
  location: string;
  date: string;
  bullets: string[];
  tags: string[];
}

const experience: Role[] = [
  {
    title: "Undergraduate Researcher",
    org: "UT Austin, RobIn Lab",
    location: "Austin, TX",
    date: "Jan 2026 to Present",
    bullets: [
      "Built an Isaac Lab humanoid locomanipulation environment for object pushing across 3 randomized hidden properties: mass, size, and friction.",
      "Integrated a 2-policy control stack combining pretrained lower-body locomotion with upper-body manipulation.",
      "Increased cube-pushing task success rate by 87% through reward shaping and debug visualization, reducing jitter and reward-farming behavior.",
      "Designed a meta-RL adaptation module using Transformer-XL/RNN in-context memory on a 4-person team, enabling adaptation to unseen object dynamics without retraining.",
    ],
    tags: ["NVIDIA Isaac Sim", "Reinforcement Learning", "PyTorch", "HPC Cluster"],
  },
  {
    title: "Software Engineer Intern",
    org: "Fidelity Investments",
    location: "Westlake, TX",
    date: "Jun 2026 to Aug 2026",
    bullets: [
      "Built and deployed a Java Spring Boot backend service and REST API to process 2,000+ daily trades from Oracle and surface unconfirmed trades in real time.",
      "Reduced unconfirmed trade reconciliation time by 65% by automating trade filtering, broker email notifications, and manual handoff steps through the JavaMail API.",
      "Launched the pipeline for Fidelity's European Trade Operations team and presented the solution to the Chief Operations Officer as a scalable replacement for manual reconciliation.",
      "Tested trade filtering, broker email triggers, and exception paths with JUnit and SonarQube; deployed the application through Jenkins and IBM UrbanCode.",
    ],
    tags: ["Java", "Spring Boot", "Oracle", "Jenkins", "JUnit"],
  },
  {
    title: "Undergraduate Research Assistant",
    org: "Stanford University, S3L Lab",
    location: "Stanford, CA",
    date: "Jul 2024 to May 2026",
    bullets: [
      "Integrated Department of Energy API data covering regions serving 10M residents using Pandas and NumPy.",
      "Built a hybrid LSTM-XGBoost time-series forecasting framework using PyTorch and scikit-learn, reducing forecasting error by ~18% versus a baseline RNN.",
      "Developed real-time dashboards using Plotly for grid monitoring, enabling quick detection of grid blackouts.",
      "Automated ML workflows using AWS EC2, reducing manual setup and accelerating iteration across experiments.",
    ],
    tags: ["Python", "PyTorch", "scikit-learn", "Plotly", "AWS EC2"],
  },
];

const leadership: Role = {
  title: "Founder",
  org: "Beacon of Hope Charity",
  location: "Plano, TX",
  date: "Mar 2024 to Aug 2026",
  bullets: [
    "Organized a door-to-door fundraising campaign, leveraging public speaking and pitching skills to raise over $15,000 for pediatric cancer research across 300+ neighborhoods.",
    "Directed a team of 50+ volunteers, overseeing event planning, fundraising campaigns, and outreach initiatives.",
  ],
  tags: [],
};

function RoleCard({ role }: { role: Role }) {
  return (
    <article className="group py-8">
      <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
        <h3 className="text-[15px] font-semibold tracking-tight text-neutral-100">
          {role.title}{" "}
          <span className="font-normal text-neutral-500">· {role.org}</span>
        </h3>
        <span className="whitespace-nowrap font-mono text-[10px] uppercase tracking-[0.08em] text-neutral-600 tabular-nums">
          {role.date}
        </span>
      </div>
      <p className="mt-0.5 text-sm text-neutral-500">{role.location}</p>
      <ul className="mt-4 space-y-2.5">
        {role.bullets.map((bullet, i) => (
          <li key={i} className="flex gap-3 text-sm leading-relaxed text-neutral-400">
            <span className="mt-[7px] h-1 w-1 flex-shrink-0 rounded-full bg-sky/70" />
            <span>{bullet}</span>
          </li>
        ))}
      </ul>
      {role.tags.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-2">
          {role.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-md bg-white/[0.045] px-2.5 py-1 text-[11px] text-neutral-500 ring-1 ring-white/[0.06] transition-colors group-hover:text-neutral-400"
            >
              {tag}
            </span>
          ))}
        </div>
      )}
    </article>
  );
}

function Experience() {
  return (
    <section id="experience" className="scroll-mt-20 pb-4 pt-10">
      <h2 className="section-label mb-2">Experience</h2>
      <div className="divide-y divide-white/[0.07]">
        {experience.map((role) => (
          <RoleCard key={role.org} role={role} />
        ))}
      </div>

      <div className="mt-16">
        <h2 className="section-label mb-2">Leadership</h2>
        <RoleCard role={leadership} />
      </div>
    </section>
  );
}

export default Experience;
