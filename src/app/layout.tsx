import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const firaCode = localFont({
  src: [
    {
      path: "./fonts/FiraCode-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/FiraCode-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/FiraCode-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-fira-code",
  display: "swap",
  fallback: [
    "ui-monospace",
    "SFMono-Regular",
    "Menlo",
    "Monaco",
    "Consolas",
    "Liberation Mono",
    "monospace",
  ],
});

const siteUrl = "https://kyle-portfolio.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Kyle Gomez — Full-Stack Web Developer",
    template: "%s | Kyle Gomez",
  },
  description:
    "Portfolio of Kyle Gomez, a full-stack web developer building modern, high-performance web apps with React, Next.js, Tailwind CSS, Laravel, and Supabase.",
  keywords: [
    "Kyle Gomez",
    "Web Developer",
    "Full-Stack Developer",
    "React",
    "Next.js",
    "Laravel",
    "Tailwind CSS",
    "Supabase",
    "Portfolio",
  ],
  authors: [{ name: "Kyle Gomez" }],
  openGraph: {
    type: "website",
    url: siteUrl,
    title: "Kyle Gomez — Full-Stack Web Developer",
    description:
      "Portfolio of Kyle Gomez, a full-stack web developer building modern web apps with React, Next.js, Laravel, and Supabase.",
    siteName: "Kyle Gomez",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kyle Gomez — Full-Stack Web Developer",
    description:
      "Portfolio of Kyle Gomez, a full-stack web developer building modern web apps with React, Next.js, Laravel, and Supabase.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={firaCode.variable} suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('theme');var d=t?t==='dark':true;document.documentElement.classList.toggle('dark',d);}catch(e){document.documentElement.classList.add('dark');}})();`,
          }}
        />
      </head>
      <body className="font-sans">{children}</body>
    </html>
  );
}
