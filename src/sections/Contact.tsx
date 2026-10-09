import { useState, FormEvent } from "react";

function Contact() {
  const [formStatus, setFormStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  return (
    <section id="contact" className="scroll-mt-20 pb-20 pt-10">
        <h2 className="section-label mb-8">Contact</h2>
        {formStatus === "sent" ? (
          <div className="w-full py-8">
            <h3 className="mb-2 text-base font-semibold text-neutral-100">
              Thanks for reaching out.
            </h3>
            <p className="text-sm text-neutral-500">
              I&apos;ve received your message and will get back to you as soon as I can.
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
                const response = await fetch("https://formsubmit.co/ajax/panav@utexas.edu", {
                  method: "POST",
                  headers: { Accept: "application/json" },
                  body: data,
                });
                if (!response.ok) throw new Error("Message could not be sent");
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
              <label htmlFor="contact-name" className="mb-2 block text-xs text-neutral-500">
                Name
              </label>
              <input
                id="contact-name"
                type="text"
                name="name"
                required
                autoComplete="name"
                className="w-full rounded-lg border border-white/10 bg-transparent px-3 py-3 text-sm text-neutral-100 transition-colors focus:border-sky/45 focus:outline-none"
              />
            </div>
            <div>
              <label htmlFor="contact-email" className="mb-2 block text-xs text-neutral-500">
                Email
              </label>
              <input
                id="contact-email"
                type="email"
                name="email"
                required
                autoComplete="email"
                className="w-full rounded-lg border border-white/10 bg-transparent px-3 py-3 text-sm text-neutral-100 transition-colors focus:border-sky/45 focus:outline-none"
              />
            </div>
            <div>
              <label htmlFor="contact-message" className="mb-2 block text-xs text-neutral-500">
                Message
              </label>
              <textarea
                id="contact-message"
                name="message"
                required
                rows={4}
                className="w-full resize-none rounded-lg border border-white/10 bg-transparent px-3 py-3 text-sm text-neutral-100 transition-colors focus:border-sky/45 focus:outline-none"
              />
            </div>
            <button
              type="submit"
              disabled={formStatus === "sending"}
              className="min-h-11 rounded-lg bg-neutral-100 px-5 py-2.5 text-sm font-medium text-neutral-900 transition-colors hover:bg-sky disabled:opacity-50"
            >
              {formStatus === "sending" ? "Sending…" : "Send message"}
            </button>
            {formStatus === "error" && (
              <p className="text-sm text-red-400">
                Something went wrong. Try emailing me directly at mhatrepanav@gmail.com
              </p>
            )}
          </form>
        )}
    </section>
  );
}

export default Contact;
