"use client";
import Layout from "@/custom_components/layout";
import Hero from "@/custom_components/hero";
import Projects from "@/custom_components/projects";
import About from "@/custom_components/about";
import Contact from "@/custom_components/contact";
import Header from "@/custom_components/header";
import TechStack from "@/custom_components/tech_stack";
import Footer from "@/custom_components/footer";
import { ScrollProgress } from "@/components/magicui/scroll-progress";
import { Meteors } from "@/components/magicui/meteors";
export default function Home() {
  return (
    <Layout>
      <div className="relative min-h-screen">
      <ScrollProgress className="fixed top-0 left-0 right-0 h-1 bg-indigo-500 z-[60]" />
        {/* Full black background */}
        <div className="absolute inset-0 -z-20 bg-black"></div>
        <Meteors
          number={100}
          className="fixed inset-0 -z-10 pointer-events-none"
        />
        <Meteors
          number={100}
          className="absolute inset-0 -z-10"
        />
        <Header />
        <Hero />
        <TechStack />
        <Projects />
        <About />
        <Contact />
        <Footer />
      </div>
    </Layout>
  );
}
