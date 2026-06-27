"use client";
import Layout from "@/custom_components/layout";
import Hero from "@/custom_components/hero";
import Projects from "@/custom_components/projects";
import About from "@/custom_components/about";
import Contact from "@/custom_components/contact";
import Header from "@/custom_components/header";
import Footer from "@/custom_components/footer";
import Preloader from "@/custom_components/preloader";
import { ScrollProgress } from "@/components/magicui/scroll-progress";
import { Meteors } from "@/components/magicui/meteors";
export default function Home() {
  return (
    <Layout>
      <Preloader />
      <div className="relative min-h-screen bg-background text-foreground">
        <ScrollProgress className="fixed top-0 left-0 right-0 h-1 z-[60]" />
        {/* Themed background */}
        <div className="fixed inset-0 -z-20 bg-background" />
        {/* Subtle radial accent glow */}
        <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,rgba(99,102,241,0.14),transparent_55%)]" />
        <Meteors
          number={60}
          className="fixed inset-0 -z-10 pointer-events-none"
        />
        <Header />
        <main className="mx-auto max-w-6xl px-6">
          <Hero />
          <Projects />
          <About />
          <Contact />
        </main>
        <Footer />
      </div>
    </Layout>
  );
}
