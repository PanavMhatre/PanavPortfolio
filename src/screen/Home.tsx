import { useState, useEffect, FormEvent } from "react";

import appleLogo from "../assets/logos/apple.png";
import linkedinLogo from "../assets/logos/linkedin.png";
import jpmcLogo from "../assets/logos/jpmc.png";
import mitLogo from "../assets/logos/mit.jpg";
import cmuLogo from "../assets/logos/cmu.jpeg";
import stanfordLogo from "../assets/logos/stanford.jpg";
import utaustinLogo from "../assets/logos/utaustin.png";
import dartmouthLogo from "../assets/logos/dartmouth.png";
import amazonLogo from "../assets/logos/amazon.png";
import unLogo from "../assets/logos/un.png";
import aforeLogo from "../assets/logos/afore.jpeg";
import AskPanavChat from "../components/AskPanavChat";

const logos: {
  src: string;
  alt: string;
  /** Extra zoom so small wordmarks (e.g. MIT) read clearly in the marquee */
  imgClassName?: string;
  wrapperClassName?: string;
}[] = [
  { src: appleLogo, alt: "Apple" },
  { src: amazonLogo, alt: "Amazon" },
  { src: linkedinLogo, alt: "LinkedIn" },
  { src: jpmcLogo, alt: "JPMorgan Chase" },
  { src: aforeLogo, alt: "Afore Capital" },
  { src: unLogo, alt: "United Nations" },
  {
    src: mitLogo,
    alt: "MIT",
    wrapperClassName: "overflow-hidden max-w-[100px]",
    imgClassName: "scale-[2.2] origin-center",
  },
  { src: cmuLogo, alt: "Carnegie Mellon" },
  { src: stanfordLogo, alt: "Stanford" },
  { src: utaustinLogo, alt: "UT Austin" },
  { src: dartmouthLogo, alt: "Dartmouth" },
];

function Home() {
  const [austinTime, setAustinTime] = useState("");
  const [showTime, setShowTime] = useState(false);
  const [formStatus, setFormStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

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
    <div className="w-full max-w-3xl mx-auto px-6 animate-fade-up">
      <section className="pt-20 pb-16">
        <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-neutral-500 mb-4">
          Computer Science · UT Austin
        </p>
        <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-neutral-100 mb-6">
          Panav Mhatre
        </h1>
        <p className="text-neutral-400 leading-relaxed max-w-xl text-[15px]">
          Hi! I'm a Computer Science student at UT Austin with a background in
          AI/ML, backend infrastructure, and low level programming. I love
          building things that solve real problems — from mobile apps to deep
          learning systems.
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
        <div className="flex gap-6 mt-7">
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
        </div>
      </section>

      <section className="pb-16">
        <div className="border-t border-white/[0.06] pt-10 overflow-hidden relative">
          <div className="pointer-events-none absolute inset-y-0 left-0 w-16 z-10 bg-gradient-to-r from-[#0a0a0a] to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-16 z-10 bg-gradient-to-l from-[#0a0a0a] to-transparent" />

          <div className="logo-track">
            {[...logos, ...logos].map(({ src, alt, imgClassName, wrapperClassName }, i) => (
              <div
                key={`${alt}-${i}`}
                className={`flex items-center justify-center mx-10 h-9 shrink-0 ${wrapperClassName ?? ""}`}
              >
                <img
                  src={src}
                  alt={alt}
                  className={`h-full w-auto max-w-[110px] object-contain ${imgClassName ?? ""}`}
                  draggable={false}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <AskPanavChat />

      <section className="pb-20">
        <h2 className="text-[11px] font-medium uppercase tracking-[0.2em] text-neutral-500 mb-8">
          Contact
        </h2>
        {formStatus === "sent" ? (
          <div className="w-full py-8">
            <h3 className="text-base font-semibold text-neutral-100 mb-2">
              Thanks for reaching out!
            </h3>
            <p className="text-neutral-500 text-sm">
              I've received your message and will get back to you as soon as I can.
            </p>
          </div>
        ) : (
          <form
            onSubmit={async (e: FormEvent<HTMLFormElement>) => {
              e.preventDefault();
              setFormStatus("sending");
              const form = e.currentTarget;
              const data = new FormData(form);
              try {
                await fetch("https://formsubmit.co/ajax/panav@utexas.edu", {
                  method: "POST",
                  headers: { Accept: "application/json" },
                  body: data,
                });
                setFormStatus("sent");
              } catch {
                setFormStatus("error");
              }
            }}
            className="w-full space-y-4"
          >
            <input type="text" name="_honey" className="hidden" />
            <input type="hidden" name="_captcha" value="false" />
            <div>
              <input
                type="text"
                name="name"
                required
                placeholder="Name"
                className="w-full px-3 py-2.5 text-sm bg-transparent border border-white/10 rounded-lg text-neutral-100 placeholder-neutral-600 focus:outline-none focus:border-white/25 transition-colors"
              />
            </div>
            <div>
              <input
                type="email"
                name="email"
                required
                placeholder="Email"
                className="w-full px-3 py-2.5 text-sm bg-transparent border border-white/10 rounded-lg text-neutral-100 placeholder-neutral-600 focus:outline-none focus:border-white/25 transition-colors"
              />
            </div>
            <div>
              <textarea
                name="message"
                required
                rows={4}
                placeholder="Message"
                className="w-full px-3 py-2.5 text-sm bg-transparent border border-white/10 rounded-lg text-neutral-100 placeholder-neutral-600 focus:outline-none focus:border-white/25 transition-colors resize-none"
              />
            </div>
            <button
              type="submit"
              disabled={formStatus === "sending"}
              className="px-5 py-2.5 text-sm font-medium bg-neutral-100 text-neutral-900 rounded-lg hover:bg-white transition-colors disabled:opacity-50"
            >
              {formStatus === "sending" ? "Sending..." : "Send"}
            </button>
            {formStatus === "error" && (
              <p className="text-red-500 text-sm">
                Something went wrong. Try emailing me directly at panav@utexas.edu
              </p>
            )}
          </form>
        )}
      </section>
    </div>
  );
}

export default Home;
