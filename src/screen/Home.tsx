import { useState, useEffect, FormEvent } from "react";

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
        <h1 className="text-2xl font-bold text-black dark:text-white mb-6">
          Panav Mhatre
        </h1>
        <p className="text-gray-600 dark:text-gray-400 leading-relaxed max-w-xl">
          Hi! I'm a Computer Science student at UT Austin with a background in
          AI/ML, backend infrastructure, and low level programming. I love
          building things that solve real problems — from mobile apps to deep
          learning systems.
        </p>
        <p className="text-gray-500 dark:text-gray-500 text-sm mt-4">
          Austin, Texas{" "}
          <span
            className="text-gray-400 dark:text-gray-600 cursor-default relative"
            onMouseEnter={() => setShowTime(true)}
            onMouseLeave={() => setShowTime(false)}
          >
            (UTC-6)
            {showTime && austinTime && (
              <span className="absolute left-1/2 -translate-x-1/2 -top-8 bg-black dark:bg-white text-white dark:text-black text-xs px-2 py-1 rounded whitespace-nowrap">
                {austinTime}
              </span>
            )}
          </span>
        </p>
        <div className="flex space-x-3 mt-6">
          <a
            href="https://github.com/panavmhatre"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors underline underline-offset-4 decoration-gray-400 dark:decoration-gray-600 text-sm"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/panavmhatre/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors underline underline-offset-4 decoration-gray-400 dark:decoration-gray-600 text-sm"
          >
            LinkedIn
          </a>
        </div>
      </section>

      <section className="pb-20">
        <h2 className="text-xl font-bold text-black dark:text-white mb-6">
          Contact
        </h2>
        {formStatus === "sent" ? (
          <div className="max-w-xl py-8">
            <h3 className="text-lg font-semibold text-black dark:text-white mb-2">
              Thanks for reaching out!
            </h3>
            <p className="text-gray-500 dark:text-gray-400 text-sm">
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
            className="space-y-4 max-w-xl"
          >
            <input type="text" name="_honey" className="hidden" />
            <input type="hidden" name="_captcha" value="false" />
            <div>
              <input
                type="text"
                name="name"
                required
                placeholder="Name"
                className="w-full px-3 py-2 text-sm bg-transparent border border-gray-200 dark:border-gray-700 rounded-lg text-black dark:text-white placeholder-gray-400 dark:placeholder-gray-600 focus:outline-none focus:border-gray-400 dark:focus:border-gray-500 transition-colors"
              />
            </div>
            <div>
              <input
                type="email"
                name="email"
                required
                placeholder="Email"
                className="w-full px-3 py-2 text-sm bg-transparent border border-gray-200 dark:border-gray-700 rounded-lg text-black dark:text-white placeholder-gray-400 dark:placeholder-gray-600 focus:outline-none focus:border-gray-400 dark:focus:border-gray-500 transition-colors"
              />
            </div>
            <div>
              <textarea
                name="message"
                required
                rows={4}
                placeholder="Message"
                className="w-full px-3 py-2 text-sm bg-transparent border border-gray-200 dark:border-gray-700 rounded-lg text-black dark:text-white placeholder-gray-400 dark:placeholder-gray-600 focus:outline-none focus:border-gray-400 dark:focus:border-gray-500 transition-colors resize-none"
              />
            </div>
            <button
              type="submit"
              disabled={formStatus === "sending"}
              className="px-4 py-2 text-sm font-medium bg-black dark:bg-white text-white dark:text-black rounded-lg hover:opacity-80 transition-opacity disabled:opacity-50"
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
