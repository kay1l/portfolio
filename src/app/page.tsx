"use client";
import Layout from "@/custom_components/layout";
import Hero from "@/custom_components/hero";
import Projects from "@/custom_components/projects";
import About from "@/custom_components/about";
import Contact from "@/custom_components/contact";
import Header from "@/custom_components/header";
import TechStack from "@/custom_components/tech_stack";
import { InteractiveGridPattern } from "@/components/magicui/interactive-grid-pattern";
import { cn } from "@/lib/utils";
export default function Home() {
  return (
    <Layout>
      <div className="relative min-h-screen">
        {/* Full black background */}
        <div className="absolute inset-0 -z-20 bg-black"></div>

        {/* Interactive grid overlay
        <InteractiveGridPattern
        className={cn(
          "[mask-image:radial-gradient(400px_circle_at_center,white,transparent)]",
        )}
        width={20}
        height={20}
        squares={[80, 80]}
        squaresClassName="hover:fill-blue-500"
      />
 */}

        <Header />
        <Hero />
        <TechStack />
        <Projects />
        <About />
        <Contact />
      </div>
    </Layout>
  );
}
