"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const LINES = [
  "$ git clone kyle-gomez/portfolio.git",
  "  ✓ cloned into ~/dev/portfolio",
  "$ cd portfolio && npm install",
  "  ✓ 1042 packages resolved",
  "$ npm run dev",
  "  ▲ Next.js 15.3.4",
  "  ✓ ready in 1.2s",
  "  ◐ compiling experience...",
  "  ✓ welcome — enjoy your stay",
];

export default function Preloader() {
  const [visibleLines, setVisibleLines] = useState(0);
  const [progress, setProgress] = useState(0);
  const [done, setDone] = useState(false);

  // Reveal terminal lines one by one
  useEffect(() => {
    if (visibleLines >= LINES.length) return;
    const t = setTimeout(() => setVisibleLines((n) => n + 1), 520);
    return () => clearTimeout(t);
  }, [visibleLines]);

  // Drive the progress bar to 100%, then dismiss
  useEffect(() => {
    const id = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          clearInterval(id);
          // hold on the finished state before handing off
          setTimeout(() => setDone(true), 900);
          return 100;
        }
        return Math.min(p + Math.random() * 7 + 2.5, 100);
      });
    }, 220);
    return () => clearInterval(id);
  }, []);

  // Lock scroll while the loader is visible
  useEffect(() => {
    document.body.style.overflow = done ? "" : "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [done]);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-background"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.04, filter: "blur(8px)" }}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* radial accent glow to match the page */}
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(99,102,241,0.16),transparent_60%)]" />

          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="relative w-[90%] max-w-md rounded-xl border border-border bg-card/80 p-4 shadow-2xl backdrop-blur"
          >
            {/* fake macOS-style title bar */}
            <div className="mb-3 flex items-center gap-1.5">
              <span className="h-3 w-3 rounded-full bg-red-500/80" />
              <span className="h-3 w-3 rounded-full bg-yellow-500/80" />
              <span className="h-3 w-3 rounded-full bg-emerald-500/80" />
              <span className="ml-2 text-xs text-muted-foreground">
                kyle@portfolio: ~/dev
              </span>
            </div>

            {/* terminal output */}
            <div className="min-h-[150px] font-mono text-sm leading-relaxed">
              {LINES.slice(0, visibleLines).map((line, i) => (
                <motion.p
                  key={i}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.25 }}
                  className={
                    line.startsWith("$")
                      ? "text-foreground"
                      : "text-muted-foreground"
                  }
                >
                  {line}
                  {i === visibleLines - 1 && (
                    <motion.span
                      className="ml-0.5 inline-block h-4 w-2 -translate-y-px bg-primary align-middle"
                      animate={{ opacity: [1, 0] }}
                      transition={{ duration: 0.7, repeat: Infinity }}
                    />
                  )}
                </motion.p>
              ))}
            </div>

            {/* progress bar */}
            <div className="mt-4">
              <div className="mb-1 flex justify-between text-xs text-muted-foreground">
                <span>building</span>
                <span>{Math.floor(progress)}%</span>
              </div>
              <div className="h-1.5 w-full overflow-hidden rounded-full bg-secondary">
                <motion.div
                  className="h-full rounded-full bg-primary"
                  style={{ width: `${progress}%` }}
                  transition={{ ease: "easeOut" }}
                />
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
