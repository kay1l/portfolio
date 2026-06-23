export type Tech = { slug: string; label: string };

export const techStack: Tech[] = [
  { slug: "laravel", label: "Laravel" },
  { slug: "php", label: "PHP" },
  { slug: "react", label: "React" },
  { slug: "nextdotjs", label: "Next.js" },
  { slug: "java", label: "Java" },
  { slug: "python", label: "Python" },
  { slug: "supabase", label: "Supabase" },
  { slug: "codeigniter", label: "CodeIgniter" },
  { slug: "bootstrap", label: "Bootstrap" },
  { slug: "tailwindcss", label: "Tailwind CSS" },
  { slug: "shadcnui", label: "ShadCN UI" },
  { slug: "cpanel", label: "cPanel" },
  { slug: "css", label: "CSS" },
  { slug: "html5", label: "HTML5" },
  { slug: "github", label: "GitHub" },
  { slug: "typescript", label: "TypeScript" },
  { slug: "figma", label: "Figma" },
];

export const techSlugs = techStack.map((t) => t.slug);

export const techIconCloudImages = techSlugs.map(
  (slug) => `https://cdn.simpleicons.org/${slug}/${slug}`
);
