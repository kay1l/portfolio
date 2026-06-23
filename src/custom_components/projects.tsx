"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Github, ExternalLink, ScanEye } from "lucide-react";

type Project = {
  title: string;
  description?: string;
  link?: string;
  site?: string;
  image?: string;
  tags?: string[];
};

const projects: Project[] = [
  {
    title: "Visitor Tracking System",
    description:
      "A multi-camera visitor-tracking pipeline using YOLOv8 person detection and ByteTrack identity tracking over live RTSP streams. Hybrid employee-vs-visitor classification (HSV uniform heuristics, ORB logo matching, and an optional PyTorch model) served through a runtime-configurable FastAPI API — containerized with Docker.",
    link: "https://github.com/kay1l/visitor-tracking-system",
    image: "/images/visitor-tracking.svg",
    tags: ["Python", "YOLOv8", "ByteTrack", "OpenCV", "FastAPI", "PyTorch", "Docker"],
  },
  {
    title: "Tic-Tac-Toe",
    description:
      "A classic Tic-Tac-Toe game built with React and Next.js. Features clean UI, responsive design, and interactive gameplay.",
    link: "https://github.com/kay1l/tic-tac-toe",
    site: "https://tic-tac-toe-jet-one.vercel.app/",
    image: "/images/tic-tac-toe.jpg",
  },
  {
    title: "Marketplace Clone",
    description:
      "A functional marketplace clone created using Next.js, Tailwind CSS, and Supabase. Includes user authentication, listings, and a modern interface.",
    link: "https://github.com/kay1l/marketplace",
    site: "https://marketplace-six-inky.vercel.app/",
    image: "/images/marketplace.jpg",
  },
  {
    title: "Massage Therapy Page",
    description:
      "A massage therapy and booking platform built with Next.js and Tailwind CSS. Features appointment scheduling, user authentication, and a clean, modern interface.",
    link: "https://github.com/kay1l/massage-landing-page",
    site: "https://massage-landing-page.vercel.app/",
    image: "/images/massage.jpg",
  },
  {
    title: "Record Management System",
    description:
      "A Laravel-based system for PIT's Extension Services Office to manage and track extension activities, with dynamic updates, reporting, and reduced manual processing.",
    link: "https://github.com/kay1l/recordms",
    image: "/images/record.png",
  },
  {
    title: "Photographer Live App",
    description:
      "A Laravel-based live photo sharing app for photographers. Supports real-time album creation via QR code, instant uploads, email delivery, secure access, and ZIP downloads.",
    link: "https://github.com/kay1l/photographer-app",
    site: "https://webapp-photo-capture-g6hd.onrender.com/photographer/remote/1",
    image: "/images/photo.jpg",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-16 scroll-mt-24">
      <motion.h2
        className="text-3xl font-bold mb-10 text-center text-foreground"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Projects
      </motion.h2>

      <div className="grid auto-rows-[220px] grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((proj, i) => (
          <ProjectTile key={proj.title} proj={proj} index={i} featured={i === 0} />
        ))}
      </div>
    </section>
  );
}

function ProjectTile({
  proj,
  index,
  featured = false,
}: {
  proj: Project;
  index: number;
  featured?: boolean;
}) {
  return (
    <motion.div
      className={`group relative overflow-hidden rounded-2xl border border-border bg-card shadow-sm ${
        featured ? "row-span-2 sm:col-span-2 lg:col-span-2" : ""
      }`}
      initial={{ opacity: 0, scale: 0.96 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: (index % 3) * 0.08 }}
    >
      {/* Background image / placeholder */}
      {proj.image ? (
        <Image
          src={proj.image}
          alt={proj.title}
          fill
          sizes={featured ? "(max-width: 1024px) 100vw, 66vw" : "(max-width: 640px) 100vw, 33vw"}
          className="object-cover transition duration-700 ease-out group-hover:scale-105"
        />
      ) : (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-gradient-to-br from-indigo-500/20 to-violet-600/20">
          <ScanEye className="h-10 w-10 text-primary/70" strokeWidth={1.5} />
        </div>
      )}

      {/* Readability overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/45 to-transparent transition group-hover:from-black/95" />

      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-end p-5">
        <h3
          className={`font-semibold text-white drop-shadow ${
            featured ? "text-2xl" : "text-base"
          }`}
        >
          {proj.title}
        </h3>

        {proj.description && (
          <p
            className={`text-sm leading-relaxed text-gray-200 ${
              featured
                ? "mt-2 max-w-xl"
                : "mt-2 line-clamp-4 max-h-0 overflow-hidden opacity-0 transition-all duration-300 group-hover:max-h-40 group-hover:opacity-100"
            }`}
          >
            {proj.description}
          </p>
        )}

        {featured && proj.tags && (
          <div className="mt-3 flex flex-wrap gap-1.5">
            {proj.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-md bg-white/15 px-2 py-0.5 text-[11px] font-medium text-white backdrop-blur-sm"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* Links: always shown on the featured tile, revealed on hover for small tiles */}
        <div
          className={`flex flex-wrap gap-2 ${
            featured
              ? "mt-4"
              : "mt-3 translate-y-2 opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100"
          }`}
        >
          {proj.link && proj.link !== "#" && (
            <a
              href={proj.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full bg-white/15 px-3 py-1.5 text-xs font-medium text-white backdrop-blur-sm transition hover:bg-white/25"
            >
              <Github className="h-3.5 w-3.5" />
              GitHub
            </a>
          )}

          {proj.site && proj.site !== "#" && (
            <a
              href={proj.site}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full bg-primary px-3 py-1.5 text-xs font-medium text-primary-foreground transition hover:opacity-90"
            >
              <ExternalLink className="h-3.5 w-3.5" />
              Live
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}
