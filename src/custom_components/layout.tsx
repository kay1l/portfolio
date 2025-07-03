"use client" 

import { useState } from "react";
import { ReactNode } from "react";

type LayoutProps = {
    children: ReactNode;
  };
export default function Layout({ children }: LayoutProps) {
    return <div>{children}</div>;
  
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark bg-gray-900 text-white" : "bg-white text-gray-900"}>
      <header className="flex justify-between items-center p-4 max-w-5xl mx-auto">
        <h1 className="font-bold text-lg">Kyle's Portfolio</h1>
        <nav className="space-x-4">
          <a href="#projects">Projects</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
          <button onClick={() => setDarkMode(!darkMode)} className="ml-2">
            {darkMode ? "🌞" : "🌙"}
          </button>
        </nav>
      </header>
      <main className="max-w-5xl mx-auto p-4">{children}</main>
      <footer className="text-center p-4">© 2025 Kyle Gomez</footer>
    </div>
  );
}
