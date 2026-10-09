import { useEffect, useRef, useState } from "react";
import {
  CheckIcon,
  DownloadIcon,
  GitHubIcon,
  LinkedInIcon,
  MailIcon,
  MoonIcon,
  SunIcon,
} from "../components/icons";

const photoStudies = [
  {
    number: "01",
    label: "Falling water",
    src: "/photos/falling-water.jpg",
    alt: "Waterfalls descending through a granite mountain valley",
    position: "62% center",
  },
  {
    number: "02",
    label: "Through the pines",
    src: "/photos/through-the-pines.jpg",
    alt: "Layered mountain ridges framed by tall pine trees",
    position: "center 58%",
  },
  {
    number: "03",
    label: "Granite light",
    src: "/photos/granite-light.jpg",
    alt: "Sunlit granite ridges above a green forest",
    position: "center 50%",
  },
];

function Hero() {
  const [austinTime, setAustinTime] = useState("");
  const [isDaytime, setIsDaytime] = useState(true);
  const [copied, setCopied] = useState(false);
  const railRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const update = () => {
      const now = new Date();
      setAustinTime(
        now.toLocaleTimeString("en-US", {
          timeZone: "America/Chicago",
          hour: "numeric",
          minute: "2-digit",
          hour12: true,
        })
      );
      const hour = parseInt(
        now.toLocaleString("en-US", {
          timeZone: "America/Chicago",
          hour: "numeric",
          hour12: false,
        }),
        10
      );
      setIsDaytime(hour >= 6 && hour < 19);
    };
    update();
    const interval = window.setInterval(update, 60_000);
    return () => window.clearInterval(interval);
  }, []);

  const moveRail = (direction: number) => {
    const rail = railRef.current;
    if (!rail) return;
    rail.scrollBy({ left: direction * rail.clientWidth * 0.82, behavior: "smooth" });
  };

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText("mhatrepanav@gmail.com");
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1600);
    } catch {
      window.location.href = "mailto:mhatrepanav@gmail.com";
    }
  };

  return (
    <section id="about" className="scroll-mt-20 pb-16 pt-16 sm:pb-20 sm:pt-20">
      <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1fr)_340px] lg:gap-16">
        <div>
          <div className="mb-5 h-px w-12 bg-sky/40" aria-hidden="true" />
          <p className="mb-4 font-mono text-[10px] font-medium uppercase tracking-[0.18em] text-sky">
            [ Computer Science &amp; Statistics · UT Austin ]
          </p>
          <h1 className="mb-6 text-4xl font-semibold tracking-[-0.04em] text-neutral-100 sm:text-5xl">
            Panav Mhatre
          </h1>
          <p className="max-w-xl text-[15px] leading-7 text-neutral-400">
            I&apos;m a Computer Science and Statistics student at UT Austin working
            across robotics research, backend systems, and machine learning. My work
            ranges from training humanoid manipulation policies at UT&apos;s RobIn Lab to
            building trade infrastructure at Fidelity and forecasting systems at
            Stanford&apos;s S3L Lab. I also like building from first principles, then
            shipping the result for real people.
          </p>

          <div className="mt-5 flex flex-wrap items-center gap-x-3 gap-y-2 text-sm text-neutral-500">
            <span>Austin, Texas</span>
            {isDaytime ? (
              <SunIcon className="h-3 w-3 text-mint" aria-hidden="true" />
            ) : (
              <MoonIcon className="h-3 w-3 text-sky" aria-hidden="true" />
            )}
            <span className="font-mono text-[10px] uppercase tracking-[0.12em] text-neutral-600">
              {austinTime || "Central time"}
            </span>
            <span className="h-1 w-1 rounded-full bg-neutral-700" aria-hidden="true" />
            <span className="font-mono text-[10px] tracking-[0.1em] text-neutral-700">
              30.27°N, 97.74°W
            </span>
          </div>

          <div className="mt-7 flex flex-wrap items-center gap-6">
            <a
              href="https://github.com/panavmhatre"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex min-h-11 items-center gap-2 text-sm text-neutral-400 transition-colors hover:text-neutral-100"
            >
              <GitHubIcon className="h-4 w-4 text-neutral-500 transition-colors group-hover:text-sky" />
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/panavmhatre/"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex min-h-11 items-center gap-2 text-sm text-neutral-400 transition-colors hover:text-neutral-100"
            >
              <LinkedInIcon className="h-4 w-4 text-neutral-500 transition-colors group-hover:text-sky" />
              LinkedIn
            </a>
            <button
              type="button"
              onClick={copyEmail}
              className="group inline-flex min-h-11 items-center gap-2 text-sm text-neutral-400 transition-colors hover:text-neutral-100"
            >
              {copied ? (
                <CheckIcon className="h-4 w-4 text-mint" />
              ) : (
                <MailIcon className="h-4 w-4 text-neutral-500 transition-colors group-hover:text-sky" />
              )}
              {copied ? "Copied" : "Email"}
            </button>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex min-h-11 items-center gap-2 text-sm text-neutral-400 transition-colors hover:text-neutral-100"
            >
              <DownloadIcon className="h-4 w-4 text-neutral-500 transition-colors group-hover:text-sky" />
              Resume
            </a>
          </div>

          <div className="mt-8 h-px w-12 bg-sky/40" aria-hidden="true" />
        </div>

        <aside id="personal" aria-label="Personal nature photography">
          <div className="mb-4 flex items-end justify-between gap-4">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-neutral-500">
                Outside the terminal
              </p>
              <p className="mt-1 text-sm text-neutral-400">Places that made me stop.</p>
            </div>
            <div className="flex gap-2">
              <button
                type="button"
                onClick={() => moveRail(-1)}
                aria-label="Previous photograph"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-neutral-400 transition-colors hover:border-sky/40 hover:text-sky"
              >
                ←
              </button>
              <button
                type="button"
                onClick={() => moveRail(1)}
                aria-label="Next photograph"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-neutral-400 transition-colors hover:border-sky/40 hover:text-sky"
              >
                →
              </button>
            </div>
          </div>

          <div
            ref={railRef}
            className="photo-rail flex snap-x snap-mandatory gap-3 overflow-x-auto scroll-smooth pb-2"
            tabIndex={0}
            onKeyDown={(event) => {
              if (event.key === "ArrowLeft") moveRail(-1);
              if (event.key === "ArrowRight") moveRail(1);
            }}
          >
            {photoStudies.map((study, index) => (
              <figure
                key={study.number}
                className="photo-card group relative aspect-[4/5] min-w-[82%] snap-start overflow-hidden rounded-xl border border-white/10 bg-[#111419]"
              >
                <img
                  src={study.src}
                  alt={study.alt}
                  loading={index === 0 ? "eager" : "lazy"}
                  decoding="async"
                  width="1400"
                  height="1050"
                  className="photo-develop h-full w-full object-cover"
                  style={{ objectPosition: study.position, animationDelay: `${index * 160}ms` }}
                />

                {/* Viewfinder corners — a small nod to this being personal photography, not stock art. */}
                <span className="pointer-events-none absolute left-2.5 top-2.5 z-10 h-3 w-3 border-l border-t border-sky/50 transition-colors group-hover:border-sky" />
                <span className="pointer-events-none absolute right-2.5 top-2.5 z-10 h-3 w-3 border-r border-t border-sky/50 transition-colors group-hover:border-sky" />
                <span className="pointer-events-none absolute bottom-2.5 left-2.5 z-10 h-3 w-3 border-b border-l border-sky/50 transition-colors group-hover:border-sky" />
                <span className="pointer-events-none absolute bottom-2.5 right-2.5 z-10 h-3 w-3 border-b border-r border-sky/50 transition-colors group-hover:border-sky" />

                <figcaption className="absolute inset-x-0 bottom-0 z-10 flex items-end justify-between gap-3 p-4 text-white">
                  <span className="text-sm font-medium">{study.label}</span>
                  <span className="font-mono text-[9px] tracking-[0.14em] text-white/65">
                    F{study.number} / 03
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>
          <p className="mt-2 font-mono text-[9px] uppercase tracking-[0.12em] text-neutral-600">
            Scroll, drag, or use the arrows
          </p>
        </aside>
      </div>
    </section>
  );
}

export default Hero;
