"use client"
import { useState } from "react";

export default function Header() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <header className="flex justify-between items-center py-4 px-6 max-w-7xl mx-auto backdrop-blur bg-white/70 dark:bg-gray-900/70 rounded-xl shadow-md">
      <a href="/" className="text-2xl font-extrabold tracking-tight text-indigo-600 dark:text-indigo-400">
        Kyle.dev
      </a>
      <nav className="hidden md:flex space-x-6 text-gray-700 dark:text-gray-300 font-medium">
        <a href="#projects" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition">
          Projects
        </a>
        <a href="#about" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition">
          About
        </a>
        <a href="#contact" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition">
          Contact
        </a>
      </nav>
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="ml-4 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition"
      >
        {darkMode ? "🌞" : "🌙"}
      </button>
    </header>
  );
}
