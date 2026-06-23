"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { Download } from "lucide-react";
import { IconCloud } from "@/components/magicui/icon-cloud";
import { techStack as techLabels, techIconCloudImages } from "@/lib/tech";

export default function Hero() {
  const images = techIconCloudImages;

  return (
    <section className="py-28 md:py-32 relative z-10">
      <div className="flex flex-col md:flex-row items-center md:items-start justify-center gap-16">
        {/* Left Side: Image centered above content */}
        <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left">
          {/* Centered image */}
          <motion.div
            className="w-40 h-40 md:w-52 md:h-52 mb-6 rounded-full overflow-hidden shadow-xl ring-4 ring-primary/40"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <Image
              src="/images/id.png"
              alt="Kyle Gomez"
              width={208}
              height={208}
              priority
              className="w-full h-full object-cover"
            />
          </motion.div>

          <motion.span
            className="mb-4 inline-flex items-center gap-2 rounded-full border border-border bg-secondary/60 px-3 py-1 text-xs font-medium text-muted-foreground"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1, duration: 0.6 }}
          >
            <span className="h-2 w-2 rounded-full bg-emerald-500" />
            Available for work
          </motion.span>

          {/* Text and CTA */}
          <motion.h1
            className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight text-foreground"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Hello, I’m <span className="text-primary">Kyle</span>
          </motion.h1>

          <motion.p
            className="max-w-xl text-lg text-muted-foreground mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            A full-stack developer who loves building modern, elegant web apps
            with React, Next.js, and Tailwind CSS.
          </motion.p>

          <div className="flex flex-wrap items-center justify-center md:justify-start gap-3">
            <motion.a
              href="#projects"
              className="inline-flex items-center rounded-lg bg-primary text-primary-foreground px-6 py-3 font-medium shadow-sm transition hover:opacity-90"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              See My Work
            </motion.a>
            <motion.a
              href="#contact"
              className="inline-flex items-center rounded-lg border border-border bg-secondary/40 text-foreground px-6 py-3 font-medium transition hover:bg-secondary"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              Get in Touch
            </motion.a>
            <motion.a
              href="/resume.pdf"
              download
              className="inline-flex items-center gap-2 rounded-lg border border-border bg-secondary/40 text-foreground px-6 py-3 font-medium transition hover:bg-secondary"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.6 }}
            >
              <Download className="h-4 w-4" />
             Download Resume
            </motion.a>
          </div>
        </div>

        {/* Right Side: Tech stack */}
        <div className="flex-1 w-full">
          <motion.h2
            className="text-2xl md:text-3xl font-bold text-center md:text-left mb-6 text-foreground"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            My Development Toolkit
          </motion.h2>

          <div className="relative mb-10 flex items-center justify-center min-h-[300px]">
            <div className="absolute inset-0 z-0 rounded-full bg-primary/10 blur-3xl"></div>
            <IconCloud images={images} />
          </div>

          <motion.div
            className="flex flex-wrap justify-center md:justify-start gap-2.5"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.05,
                },
              },
            }}
          >
            {techLabels.map((tech) => (
              <motion.span
                key={tech.slug}
                className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card text-card-foreground text-sm px-3 py-1.5 shadow-sm transition hover:border-primary/50 hover:-translate-y-0.5"
                variants={{
                  hidden: { opacity: 0, y: 10 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={`https://cdn.simpleicons.org/${tech.slug}`}
                  alt=""
                  aria-hidden="true"
                  loading="lazy"
                  className="w-4 h-4"
                />
                {tech.label}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
