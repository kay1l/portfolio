"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useTheme } from "@/lib/use-theme";

const sections = ["projects", "about", "contact"];

export default function Header() {
  const { theme, toggleTheme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);
  const isDark = theme === "dark";

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="sticky top-0 z-50 w-full border-b border-border bg-background/70 backdrop-blur-lg"
    >
      <div className="relative flex w-full items-center justify-end px-6 py-4 md:px-10">
      {/* Nav + controls */}
      <div className="flex items-center justify-end gap-4 md:gap-8">
        <nav className="hidden md:flex items-center gap-8 font-medium">
          {sections.map((section) => (
            <motion.a
              key={section}
              href={`#${section}`}
              className="group relative text-muted-foreground transition-colors hover:text-foreground"
              whileHover={{ y: -1 }}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
              <span className="absolute left-0 -bottom-1 h-0.5 w-0 rounded-full bg-primary transition-all duration-300 group-hover:w-full" />
            </motion.a>
          ))}
        </nav>

        {/* Theme toggle */}
        <motion.button
          whileTap={{ scale: 0.9 }}
          onClick={toggleTheme}
          className="p-2 rounded-lg border border-border bg-secondary/60 text-foreground transition hover:bg-secondary"
          aria-label="Toggle theme"
        >
          {isDark ? (
            <Sun className="w-5 h-5 text-amber-400" />
          ) : (
            <Moon className="w-5 h-5 text-indigo-500" />
          )}
        </motion.button>

        {/* Hamburger */}
        <motion.button
          whileTap={{ scale: 0.9 }}
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden p-2 rounded-lg border border-border bg-secondary/60 text-foreground transition hover:bg-secondary"
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
            className="absolute top-full left-0 right-0 mt-2 border border-border bg-background/95 backdrop-blur p-4 rounded-2xl shadow-md md:hidden"
          >
            <div className="flex flex-col space-y-4 text-center font-medium">
              {sections.map((section) => (
                <motion.a
                  key={section}
                  href={`#${section}`}
                  onClick={() => setMenuOpen(false)}
                  whileHover={{ scale: 1.03 }}
                  className="text-muted-foreground transition hover:text-foreground"
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}
