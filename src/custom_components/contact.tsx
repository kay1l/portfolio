"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Loader2, CheckCircle2, AlertCircle } from "lucide-react";

// Web3Forms access key — get a free one at https://web3forms.com (tie it to
// gomezkyle3102@gmail.com). Set NEXT_PUBLIC_WEB3FORMS_KEY in .env.local, or
// replace the fallback string below.
const ACCESS_KEY =
  process.env.NEXT_PUBLIC_WEB3FORMS_KEY ?? "YOUR_WEB3FORMS_ACCESS_KEY";

type Status = "idle" | "loading" | "success" | "error";

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus("loading");

    const formData = new FormData(form);
    formData.append("access_key", ACCESS_KEY);
    formData.append("subject", "New message from your portfolio");
    formData.append("from_name", "Portfolio Contact Form");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const data = await res.json();
      if (data.success) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="py-20 scroll-mt-24">
      <motion.h2
        className="text-3xl font-bold mb-10 text-center text-foreground"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        Contact
      </motion.h2>

      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left: Contact info */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col justify-center space-y-4"
        >
          <p className="text-muted-foreground">
            Feel free to reach out via email or phone. I’m always happy to connect!
          </p>
          <p className="font-medium">
            <a
              href="mailto:gomezkyle3102@gmail.com"
              className="text-primary underline-offset-4 hover:underline"
            >
              gomezkyle3102@gmail.com
            </a>
          </p>
          <p className="font-medium">
            <a
              href="tel:+639564005089"
              className="text-primary underline-offset-4 hover:underline"
            >
              +63 956 400 5089
            </a>
          </p>
        </motion.div>

        {/* Right: Contact form */}
        <motion.form
          onSubmit={handleSubmit}
          className="bg-card border border-border p-6 rounded-2xl shadow-sm space-y-4"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {/* Honeypot spam trap (hidden from users) */}
          <input
            type="checkbox"
            name="botcheck"
            tabIndex={-1}
            autoComplete="off"
            className="hidden"
          />

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="w-full rounded-lg bg-background border border-border p-2.5 text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/30 focus:outline-none transition"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            className="w-full rounded-lg bg-background border border-border p-2.5 text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/30 focus:outline-none transition"
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            className="w-full rounded-lg bg-background border border-border p-2.5 text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/30 focus:outline-none transition"
            rows={4}
            required
          />
          <button
            type="submit"
            disabled={status === "loading"}
            className="flex w-full items-center justify-center gap-2 rounded-lg bg-primary text-primary-foreground font-medium py-2.5 transition hover:opacity-90 disabled:opacity-60"
          >
            {status === "loading" ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin" />
                Sending…
              </>
            ) : (
              "Send Message"
            )}
          </button>

          {status === "success" && (
            <p className="flex items-center gap-2 text-sm text-emerald-500">
              <CheckCircle2 className="h-4 w-4" />
              Thanks! Your message has been sent.
            </p>
          )}
          {status === "error" && (
            <p className="flex items-center gap-2 text-sm text-rose-500">
              <AlertCircle className="h-4 w-4" />
              Something went wrong. Please email me directly.
            </p>
          )}
        </motion.form>
      </div>
    </section>
  );
}
