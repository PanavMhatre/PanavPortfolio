import { useEffect, useState } from "react";
import {
  CheckIcon,
  DownloadIcon,
  GitHubIcon,
  LinkedInIcon,
  MailIcon,
  MoonIcon,
  SunIcon,
} from "../components/icons";
import headshot from "../assets/headshot.png";

const photoStudies = [
  {
    number: "01",
    label: "Falling water",
    src: "/photos/falling-water.jpg",
    alt: "Waterfalls descending through a granite mountain valley",
    position: "62% center",
    rotate: "rotate-2",
  },
  {
    number: "02",
    label: "Through the pines",
    src: "/photos/through-the-pines.jpg",
    alt: "Layered mountain ridges framed by tall pine trees",
    position: "center 58%",
    rotate: "-rotate-2",
  },
  {
    number: "03",
    label: "Granite light",
    src: "/photos/granite-light.jpg",
    alt: "Sunlit granite ridges above a green forest",
    position: "center 50%",
    rotate: "rotate-2",
  },
];

function Hero() {
  const [austinTime, setAustinTime] = useState("");
  const [isDaytime, setIsDaytime] = useState(true);
  const [copied, setCopied] = useState(false);

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
      <div>
        <div>
          <img
            src={headshot}
            alt="Panav Mhatre"
            width="80"
            height="80"
            className="mb-5 h-20 w-20 rounded-full border border-white/10 object-cover"
          />
          <h1 className="mb-6 text-5xl font-bold tracking-tight text-neutral-100 sm:text-6xl">
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

          <div className="mt-7 flex items-center gap-4">
            <a
              href="https://github.com/panavmhatre"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="flex h-11 w-11 items-center justify-center text-neutral-500 transition-colors hover:text-sky"
            >
              <GitHubIcon className="h-5 w-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/panavmhatre/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="flex h-11 w-11 items-center justify-center text-neutral-500 transition-colors hover:text-sky"
            >
              <LinkedInIcon className="h-5 w-5" />
            </a>
            <button
              type="button"
              onClick={copyEmail}
              aria-label={copied ? "Email copied" : "Copy email address"}
              className="flex h-11 w-11 items-center justify-center text-neutral-500 transition-colors hover:text-sky"
            >
              {copied ? <CheckIcon className="h-5 w-5 text-mint" /> : <MailIcon className="h-5 w-5" />}
            </button>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Resume"
              className="flex h-11 w-11 items-center justify-center text-neutral-500 transition-colors hover:text-sky"
            >
              <DownloadIcon className="h-5 w-5" />
            </a>
          </div>
        </div>

        <div
          aria-label="Personal nature photography"
          className="no-scrollbar mt-10 flex snap-x snap-mandatory justify-start gap-5 overflow-x-auto py-2 sm:justify-center sm:gap-8"
        >
          {photoStudies.map((study, index) => (
            <div
              key={study.number}
              className={`relative aspect-[9/10] w-40 flex-none snap-start overflow-hidden rounded-xl bg-[#111419] sm:w-64 sm:rounded-2xl md:w-72 ${study.rotate}`}
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Hero;
