"use client";
import Layout from "@/custom_components/layout";
import Hero from "@/custom_components/hero";
import Projects from "@/custom_components/projects";
import About from "@/custom_components/about";
import Contact from "@/custom_components/contact";
import Header from "@/custom_components/header";
import TechStack from "@/custom_components/tech_stack";



export default function Home() {

  return (
    <Layout>
      <div className="relative">
        {/* Full black background */}
        <div className="absolute inset-0 -z-10 bg-black"></div>

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
