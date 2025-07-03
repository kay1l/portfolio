"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-20">
      <motion.h2
        className="text-3xl font-bold mb-6 text-center text-white"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        About Me
      </motion.h2>

      <motion.p
        className="max-w-2xl mx-auto text-center text-gray-400 leading-relaxed"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        I’m a <span className="text-indigo-400 font-medium">web developer</span> passionate about creating modern, 
        user-friendly, and high-performance web applications. From crafting elegant UIs with 
        <span className="text-indigo-400 font-medium"> React</span> & <span className="text-indigo-400 font-medium">Next.js</span> to building robust backends with 
        <span className="text-indigo-400 font-medium"> Laravel</span> & <span className="text-indigo-400 font-medium">Supabase</span>, I love turning ideas into reality.
      </motion.p>

      <motion.div
        className="mt-6 flex justify-center gap-4 flex-wrap"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        <span className="inline-block bg-gray-800 text-gray-300 text-xs px-3 py-1 rounded-full">
          Frontend
        </span>
        <span className="inline-block bg-gray-800 text-gray-300 text-xs px-3 py-1 rounded-full">
          Backend
        </span>
        <span className="inline-block bg-gray-800 text-gray-300 text-xs px-3 py-1 rounded-full">
          Full-stack
        </span>
        <span className="inline-block bg-gray-800 text-gray-300 text-xs px-3 py-1 rounded-full">
          UI/UX
        </span>
      </motion.div>
    </section>
  );
}
