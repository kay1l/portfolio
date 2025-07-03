"use client";
import { useState, useEffect } from "react";
import { TypingAnimation } from "@/components/magicui/typing-animation";
import { motion } from "framer-motion";

export default function Header() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    if (darkMode) { 
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <header className="flex justify-between items-center py-4 px-6 max-w-7xl mx-auto rounded-xl shadow-md bg-black/80 backdrop-blur">
      <a href="/" className="text-md font-extrabold tracking-tight text-indigo-400">
        <TypingAnimation>Kyle.dev</TypingAnimation>
      </a>

      <nav className="hidden md:flex space-x-8 font-medium">
        {["projects", "about", "contact"].map((section) => (
          <motion.a
            key={section}
            href={`#${section}`}
            className="relative text-gray-300"
            whileHover={{ scale: 1.1 }}
          >
            <span className="transition-colors hover:text-indigo-400">
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </span>
            <motion.span
              className="absolute left-0 bottom-0 h-0.5 bg-indigo-400"
              layoutId="nav-underline"
              initial={false}
              animate={{ width: "100%" }}
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
            />
          </motion.a>
        ))}
      </nav>

      <button
        onClick={() => setDarkMode(!darkMode)}
        className="ml-4 p-2 rounded-lg hover:bg-gray-800 transition"
        aria-label="Toggle dark mode"
      >
        {darkMode ? "🌞" : "🌙"}
      </button>
    </header>
  );
}
