"use client";

import { useEffect, useState } from "react";

export type Theme = "light" | "dark";

/**
 * Reads/writes the active theme by toggling the `dark` class on <html>
 * and persisting the choice in localStorage. The initial class is applied
 * by an inline script in the document head (see layout.tsx) to avoid a
 * flash of the wrong theme on first paint.
 */
export function useTheme() {
  const [theme, setThemeState] = useState<Theme>("dark");

  useEffect(() => {
    const stored = localStorage.getItem("theme") as Theme | null;
    const initial =
      stored ??
      (document.documentElement.classList.contains("dark") ? "dark" : "light");
    setThemeState(initial);
  }, []);

  const setTheme = (next: Theme) => {
    setThemeState(next);
    document.documentElement.classList.toggle("dark", next === "dark");
    localStorage.setItem("theme", next);
  };

  const toggleTheme = () => setTheme(theme === "dark" ? "light" : "dark");

  return { theme, setTheme, toggleTheme };
}
