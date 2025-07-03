"use client"

import { motion } from "framer-motion";

const projects = [
  { title: "Project 1", description: "My first cool project.", link: "#" },
  { title: "Project 2", description: "Another awesome build.", link: "#" },
];

export default function Projects() {
  return (
    <section id="projects" className="py-16">
      <h2 className="text-2xl font-bold mb-6 text-center">Projects</h2>
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((proj, i) => (
          <motion.a
            key={i}
            href={proj.link}
            className="block p-4 border rounded-lg hover:shadow-lg transition"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.2 }}
          >
            <h3 className="font-semibold">{proj.title}</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">{proj.description}</p>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
