"use client";
import { IconCloud } from "@/components/magicui/icon-cloud";
import { motion } from "framer-motion";

const slugs = [
  "laravel",
  "php",
  "react",
  "nextdotjs",
  "java",
  "python",
  "supabase",
  "codeigniter",
  "bootstrap",
  "tailwindcss",
  "shadcnui",
  "cpanel",
  "css3",
  "html5",
  "github",
  "typescript",
  "figma",
];

const techLabels: { slug: string; label: string }[] = [
  { slug: "laravel", label: "Laravel" },
  { slug: "php", label: "PHP" },
  { slug: "react", label: "React" },
  { slug: "nextdotjs", label: "Next.js" },
  { slug: "python", label: "Python" },
  { slug: "supabase", label: "Supabase" },
  { slug: "codeigniter", label: "CodeIgniter" },
  { slug: "bootstrap", label: "Bootstrap" },
  { slug: "tailwindcss", label: "Tailwind CSS" },
  { slug: "shadcnui", label: "ShadCN UI" },
  { slug: "cpanel", label: "cPanel" },
  { slug: "css3", label: "CSS3" },
  { slug: "html5", label: "HTML5" },
  { slug: "github", label: "GitHub" },
  { slug: "typescript", label: "TypeScript" },
  { slug: "figma", label: "Figma" },
];

export default function TechStack() {
  const images = slugs.map(
    (slug) => `https://cdn.simpleicons.org/${slug}/${slug}`
  );

  return (
    <section className="py-20 relative">
      <motion.h2
        className="text-3xl font-bold text-center mb-6 text-white"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Tech I Use
      </motion.h2>

      <div className="relative mb-10 flex items-center justify-center min-h-[300px]">
        {/* Glow behind icon cloud */}
        <div className="absolute inset-0 z-0 rounded-full bg-indigo-500/10 blur-3xl"></div>

        <IconCloud images={images} />
      </div>

      <motion.div 
        className="flex flex-wrap justify-center gap-3"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.05
            }
          }
        }}
      >
        {techLabels.map((tech) => (
          <motion.span
            key={tech.slug}
            className="inline-flex items-center gap-1 bg-gray-800 text-gray-200 text-sm px-3 py-1 rounded-full shadow hover:bg-gray-700 transition"
            variants={{
              hidden: { opacity: 0, y: 10 },
              visible: { opacity: 1, y: 0 }
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
    </section>
  );
}
