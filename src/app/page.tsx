"use client";
import Layout from "@/custom_components/layout";
import Hero from "@/custom_components/hero";
import Projects from "@/custom_components/projects";
import About from "@/custom_components/about";
import Contact from "@/custom_components/contact";
import Header from "@/custom_components/header";
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

export default function Home() {
  const images = slugs.map(
    (slug) => `https://cdn.simpleicons.org/${slug}/${slug}`
  );

  return (
    <Layout>
      <div className="relative">
        {/* Full black background */}
        <div className="absolute inset-0 -z-10 bg-black"></div>

        <Header />
        <Hero />

        <section className="py-20">
          <h2 className="text-2xl font-bold text-center mb-6 text-white">Tech I Use</h2>
          <div className="relative overflow-hidden">
            <IconCloud images={images} />
          </div>
        </section>

        <Projects />
        <About />
        <Contact />
      </div>
    </Layout>
  );
}
