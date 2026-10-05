"use client";

import { useState } from "react";
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
  const [preloaderDone, setPreloaderDone] = useState(false);

  return (
    <Layout>
      <Preloader onComplete={() => setPreloaderDone(true)} />
      <div className="relative min-h-screen overflow-x-hidden bg-background text-foreground">
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
        <main className="mx-auto max-w-6xl px-4 sm:px-6">
          {preloaderDone && <Hero />}
          <Projects />
          <About />

          <section className="py-20 scroll-mt-24">
            <div className="grid gap-3 md:grid-cols-3">
              {[
                { value: "4+", label: "Years building web apps" },
                { value: "4", label: "Core stacks used" },
                { value: "100%", label: "Focus on quality" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-border bg-card/80 p-6 text-center shadow-sm backdrop-blur-sm"
                >
                  <div className="text-3xl font-bold text-primary">{stat.value}</div>
                  <div className="mt-2 text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </section>

          <section className="py-8 text-center">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary">
              Let’s build something meaningful
            </p>
            <h3 className="mt-3 text-3xl font-bold text-foreground">
              Ready to turn an idea into a polished product?
            </h3>
          </section>

          <Contact />
        </main>
        <Footer />
      </div>
    </Layout>
  );
}
