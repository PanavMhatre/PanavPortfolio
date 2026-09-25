import { useState, useEffect } from "react";

function Hero() {
  const [austinTime, setAustinTime] = useState("");
  const [showTime, setShowTime] = useState(false);

  useEffect(() => {
    if (!showTime) return;
    const update = () => {
      setAustinTime(
        new Date().toLocaleTimeString("en-US", {
          timeZone: "America/Chicago",
          hour: "numeric",
          minute: "2-digit",
          hour12: true,
        })
      );
    };
    update();
    const interval = setInterval(update, 1000);
    return () => clearInterval(interval);
  }, [showTime]);

  return (
    <section id="about" className="pt-20 pb-16 scroll-mt-20">
      <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-neutral-500 mb-4">
        Computer Science &amp; Statistics · UT Austin
      </p>
      <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-neutral-100 mb-6">
        Panav Mhatre
      </h1>
      <p className="text-neutral-400 leading-relaxed max-w-xl text-[15px]">
        Hi! I'm a Computer Science and Statistics &amp; Data Science student at
        UT Austin. I work across robotics research, backend systems, and ML,
        from training humanoid manipulation policies at UT's RobIn Lab to a
        Spring Boot trade-reconciliation service at Fidelity Investments and
        forecasting research at Stanford's S3L Lab. I also like building
        things from scratch: a custom instruction-set interpreter, a memory
        allocator and a Unix shell, while shipping things people actually use,
        from AI-powered iOS apps to ed-tech platforms.
      </p>
      <p className="text-neutral-500 text-sm mt-5">
        Austin, Texas{" "}
        <span
          className="text-neutral-600 cursor-default relative"
          onMouseEnter={() => setShowTime(true)}
          onMouseLeave={() => setShowTime(false)}
        >
          (UTC-6)
          {showTime && austinTime && (
            <span className="absolute left-1/2 -translate-x-1/2 -top-8 bg-neutral-100 text-neutral-900 text-xs px-2.5 py-1 rounded-md whitespace-nowrap shadow-lg">
              {austinTime}
            </span>
          )}
        </span>
      </p>
      <div className="flex flex-wrap gap-6 mt-7">
        <a
          href="https://github.com/panavmhatre"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-neutral-500 hover:text-neutral-100 transition-colors underline underline-offset-[6px] decoration-neutral-700 hover:decoration-neutral-400"
        >
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/panavmhatre/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-neutral-500 hover:text-neutral-100 transition-colors underline underline-offset-[6px] decoration-neutral-700 hover:decoration-neutral-400"
        >
          LinkedIn
        </a>
        <a
          href="mailto:mhatrepanav@gmail.com"
          className="text-sm text-neutral-500 hover:text-neutral-100 transition-colors underline underline-offset-[6px] decoration-neutral-700 hover:decoration-neutral-400"
        >
          Email
        </a>
      </div>
    </section>
  );
}

export default Hero;
