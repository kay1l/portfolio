"use client";

import { Github, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="mt-16 py-6 border-t border-gray-800 bg-black/80 backdrop-blur">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-gray-400 text-sm">
        <p>
          &copy; {new Date().getFullYear()} Kyle.dev. All rights reserved.
        </p>

        <div className="flex items-center gap-4">
          <a
            href="https://github.com/kay1l"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-indigo-400 transition"
            aria-label="GitHub"
          >
            <Github className="w-6 h-6" />
          </a>
          <a
            href="https://www.linkedin.com/in/kyle-gomez-8aa6622aa/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-indigo-400 transition"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-6 h-6" />
          </a>
        </div>
      </div>
    </footer>
  );
}
