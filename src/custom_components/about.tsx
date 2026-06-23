"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-20 scroll-mt-24">
      <motion.h2
        className="text-3xl font-bold mb-6 text-center text-foreground"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        About Me
      </motion.h2>

      <motion.p
        className="max-w-2xl mx-auto text-center text-muted-foreground leading-relaxed"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        I’m a <span className="text-primary font-medium">web developer</span> passionate about creating modern,
        user-friendly, and high-performance web applications. From crafting elegant UIs with
        <span className="text-primary font-medium"> React</span> & <span className="text-primary font-medium">Next.js</span> to building robust backends with
        <span className="text-primary font-medium"> Laravel</span> & <span className="text-primary font-medium">Supabase</span>, I love turning ideas into reality.
      </motion.p>

      <motion.div
        className="mt-6 flex justify-center gap-3 flex-wrap"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        {["Frontend", "Backend", "Full-stack", "UI/UX"].map((tag) => (
          <span
            key={tag}
            className="inline-block rounded-full border border-border bg-card text-muted-foreground text-xs px-3 py-1"
          >
            {tag}
          </span>
        ))}
      </motion.div>
    </section>
  );
}
