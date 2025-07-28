"use client";
import { motion } from "framer-motion";
import { IconCloud } from "@/components/magicui/icon-cloud";

const slugs = [
  "laravel", "php", "react", "nextdotjs", "java", "python", "supabase",
  "codeigniter", "bootstrap", "tailwindcss", "shadcnui", "cpanel",
  "css3", "html5", "github", "typescript", "figma",
];

const techLabels: { slug: string; label: string }[] = slugs.map((slug) => ({
  slug,
  label: slug.charAt(0).toUpperCase() + slug.slice(1).replace("dotjs", ".js"),
}));

export default function Hero() {
  const images = slugs.map(
    (slug) => `https://cdn.simpleicons.org/${slug}/${slug}`
  );

  return (
    <section className="py-32 relative z-10">
      <div className="container mx-auto flex flex-col md:flex-row items-start justify-center gap-16">
        {/* Left Side: Image centered above content */}
        <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left">
          {/* Centered image */}
          <motion.div
            className="w-40 h-40 md:w-52 md:h-52 mb-6 rounded-full overflow-hidden shadow-xl border-4 border-indigo-500"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <img
              src="/images/id.png"
              alt="Kyle"
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Text and CTA */}
          <motion.h1
            className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight text-white"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Hello, I’m <span className="text-indigo-400">Kyle</span>
          </motion.h1>

          <motion.p
            className="max-w-xl text-lg text-gray-300 mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            A developer who loves building modern, elegant web apps with React, Next.js, and Tailwind CSS.
          </motion.p>

          <motion.a
            href="#projects"
            className="inline-block bg-indigo-600 text-white px-6 py-3 rounded-lg font-medium shadow hover:bg-indigo-700 transition"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            See My Work
          </motion.a>
        </div>

        {/* Right Side: Tech stack */}
        <div className="flex-1">
          <motion.h2
            className="text-3xl font-bold text-center md:text-left mb-6 text-white"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            My Development Toolkit
          </motion.h2>

          <div className="relative mb-10 flex items-center justify-center min-h-[300px]">
            <div className="absolute inset-0 z-0 rounded-full bg-indigo-500/10 blur-3xl"></div>
            <IconCloud images={images} />
          </div>

          <motion.div
            className="flex flex-wrap justify-center md:justify-start gap-3 px-4"
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
                className="inline-flex items-center gap-1 bg-gray-800 text-gray-200 text-sm px-3 py-1 rounded-full shadow hover:bg-gray-700 transition"
                variants={{
                  hidden: { opacity: 0, y: 10 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={`https://cdn.simpleicons.org/${tech.slug}/white`}
                  alt={tech.label}
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
