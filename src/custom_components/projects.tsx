"use client";

import { motion } from "framer-motion";
import { Github } from "lucide-react"; 

const projects = [
  {
    title: "Project 1",
    description: "My first cool project. Built with React and Next.js.",
    link: "https://github.com/yourusername/project1",
    image: "/images/project1.png",
  },
  {
    title: "Project 2",
    description: "Another awesome build. Featuring Tailwind and Supabase.",
    link: "https://github.com/yourusername/project2",
    image: "/images/project2.png",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-16">
      <h2 className="text-3xl font-bold mb-10 text-center text-white">Projects</h2>

      <div className="grid gap-8 md:grid-cols-2">
        {projects.map((proj, i) => (
          <motion.div
            key={i}
            className="block rounded-lg border border-gray-700 bg-gray-900 p-4 shadow-lg transition hover:border-indigo-500 hover:shadow-indigo-500/20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.2 }}
          >
            <img 
              src={proj.image} 
              alt={proj.title} 
              className="w-full h-40 object-cover rounded-md mb-4 border border-gray-800"
            />
            <h3 className="text-xl font-semibold text-white mb-2">{proj.title}</h3>
            <p className="text-sm text-gray-400 mb-4">{proj.description}</p>

            <a
              href={proj.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-gray-800 px-3 py-1 text-xs text-gray-300 hover:bg-gray-700 transition"
            >
              <Github className="w-4 h-4" />
              GitHub
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
