"use client"
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="py-32 text-center relative z-10">
      <motion.h1
        className="text-5xl font-extrabold mb-4 tracking-tight text-gray-900 dark:text-white"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Hello, I’m <span className="text-indigo-600 dark:text-indigo-400">Kyle</span>
      </motion.h1>
      <motion.p
        className="max-w-xl mx-auto text-lg text-gray-600 dark:text-gray-400 mb-6"
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
    </section>
  );
}
