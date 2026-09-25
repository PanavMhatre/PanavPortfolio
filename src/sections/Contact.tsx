import { useState, FormEvent } from "react";
import AskPanavChat from "../components/AskPanavChat";

function Contact() {
  const [formStatus, setFormStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  return (
    <>
      <AskPanavChat />

      <section id="contact" className="pt-6 pb-20 scroll-mt-20">
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
                Something went wrong. Try emailing me directly at mhatrepanav@gmail.com
              </p>
            )}
          </form>
        )}
      </section>
    </>
  );
}

export default Contact;
