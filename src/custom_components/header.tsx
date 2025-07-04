"use client";
import { useState, useEffect } from "react";
import { TypingAnimation } from "@/components/magicui/typing-animation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sun, Moon } from "lucide-react";

export default function Header() {
  const [darkMode, setDarkMode] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="sticky top-0 z-50 grid grid-cols-[1fr_auto] items-center py-4 px-6 max-w-7xl mx-auto rounded-xl shadow-md bg-black/60 backdrop-blur-lg"
    >
      {/* Left: Logo */}
      <div className="flex items-center justify-start">
        <a href="/" className="text-xs font-extrabold tracking-tight text-indigo-400">
          <TypingAnimation>Kyle.dev</TypingAnimation>
        </a>
      </div>

      {/* Right: nav + controls */}
      <div className="flex items-center justify-end gap-10 space-x-2">
        <nav className="hidden md:flex space-x-8 font-medium">
          {["projects", "about", "contact"].map((section) => (
            <motion.a
              key={section}
              href={`#${section}`}
              className="relative text-gray-300"
              whileHover={{ scale: 1.05 }}
            >
              <span className="transition-colors hover:text-indigo-400">
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </span>
              <motion.span
                layoutId="nav-underline"
                className="absolute left-0 bottom-0 h-0.5 bg-indigo-400"
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
              />
            </motion.a>
          ))}
        </nav>

        {/* Dark mode button */}
        <motion.button
          whileTap={{ scale: 0.9 }}
          onClick={() => setDarkMode(!darkMode)}
          className="p-2  rounded-lg bg-gray-800/50 hover:bg-gray-700 transition text-gray-300"
          aria-label="Toggle dark mode"
        >
          {darkMode ? (
            <Sun className="w-5 h-5 text-yellow-400" />
          ) : (
            <Moon className="w-5 h-5 text-blue-400" />
          )}
        </motion.button>

        {/* Hamburger */}
        <motion.button
          whileTap={{ scale: 0.9 }}
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden p-2 rounded-lg hover:bg-gray-800 transition"
          aria-label="Toggle menu"
        >
          {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </motion.button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="absolute top-full left-0 right-0 bg-black/90 backdrop-blur p-4 rounded-b-xl shadow-md md:hidden"
          >
            <div className="flex flex-col space-y-4 text-center font-medium">
              {["projects", "about", "contact"].map((section) => (
                <motion.a
                  key={section}
                  href={`#${section}`}
                  onClick={() => setMenuOpen(false)}
                  whileHover={{ scale: 1.05 }}
                  className="text-gray-300 hover:text-indigo-400 transition"
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
