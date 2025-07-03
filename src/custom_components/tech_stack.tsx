"use client";
import { IconCloud } from "@/components/magicui/icon-cloud";

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
    <section className="py-20">
      <h2 className="text-3xl font-bold text-center mb-6 text-white">Tech I Use</h2>

      <div className="relative mb-10 flex items-center justify-center min-h-[300px]">
        <IconCloud images={images} />
      </div>

      <div className="flex flex-wrap justify-center gap-3">
        {techLabels.map((tech) => (
          <span
            key={tech.slug}
            className="inline-flex items-center gap-1 bg-gray-800 text-gray-200 text-sm px-3 py-1 rounded-full shadow hover:bg-gray-700 transition"
          >
            <img
              src={`https://cdn.simpleicons.org/${tech.slug}/white`}
              alt={tech.label}
              className="w-4 h-4"
            />
            {tech.label}
          </span>
        ))}
      </div>
    </section>
  );
}
