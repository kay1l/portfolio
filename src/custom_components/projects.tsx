"use client";

import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Tic-Tac-Toe",
    description:
      "A classic Tic-Tac-Toe game built with React and Next.js. Features clean UI, responsive design, and interactive gameplay.",
    link: "https://github.com/kay1l/tic-tac-toe",
    site: "https://tic-tac-toe-jet-one.vercel.app/",
    image: "/images/tic-tac-toe.png",
  },
  {
    title: "Marketplace-Clone",
    description:
      "A functional marketplace clone created using Next.js, Tailwind CSS, and Supabase. Includes user authentication, listings, and a modern interface.",
    link: "https://github.com/kay1l/marketplace",
    site: "https://marketplace-six-inky.vercel.app/",
    image: "/images/marketplace.png",
  },
  {
    title: "Coming Soon",
    comingSoon: true,
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-16">
      <motion.h2
        className="text-3xl font-bold mb-10 text-center text-white"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Projects
      </motion.h2>

      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((proj, i) => (
          <motion.div
            key={i}
            className="flex flex-col justify-center items-center rounded-lg border border-gray-700 bg-gray-900 p-6 shadow-lg hover:border-indigo-500 hover:shadow-indigo-500/30 transition min-h-64"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.2 }}
            whileHover={{ scale: proj.comingSoon ? 1 : 1.03 }}
          >
            {proj.comingSoon ? (
              <span className="inline-block rounded-full bg-gray-700 px-4 py-2 text-sm text-gray-300">
                Coming Soon
              </span>
            ) : (
              <>
                <motion.img
                  src={proj.image}
                  alt={proj.title}
                  className="w-full h-40 object-cover rounded-md mb-4 border border-gray-800"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: i * 0.2 + 0.2, duration: 0.5 }}
                />
                <h3 className="text-xl font-semibold text-white mb-2">{proj.title}</h3>
                <p className="text-sm text-gray-400 mb-4">{proj.description}</p>
                <div className="mt-auto flex justify-center gap-2 pt-2">
                  <motion.a
                    href={proj.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 rounded-full bg-gray-800 px-3 py-1 text-xs text-gray-300 hover:bg-gray-700 transition"
                    whileHover={{ scale: 1.1 }}
                  >
                    <Github className="w-4 h-4" />
                    GitHub
                  </motion.a>

                  <motion.a
                    href={proj.site}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 rounded-full bg-gray-800 px-3 py-1 text-xs text-gray-300 hover:bg-gray-700 transition"
                    whileHover={{ scale: 1.1 }}
                  >
                    <ExternalLink className="w-4 h-4" />
                    Live
                  </motion.a>
                </div>
              </>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
