"use client";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="py-32 relative z-10">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-center gap-8">
        {/* Left: Animated text */}
        <div className="text-center md:text-left">
          <motion.h1
            className="text-5xl font-extrabold mb-4 tracking-tight text-white"
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

        {/* Right: Image */}
        <motion.img
          src="/images/id.png"
          alt="Kyle"
          className="w-48 h-48 md:w-64 md:h-64 rounded-full object-cover shadow-lg"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        />
      </div>
    </section>
  );
}
