import type { Metadata } from "next";
import { Fira_Code } from "next/font/google";
import "./globals.css";

const firaCode = Fira_Code({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
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
    <html lang="en" className={firaCode.className} suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('theme');var d=t?t==='dark':true;document.documentElement.classList.toggle('dark',d);}catch(e){document.documentElement.classList.add('dark');}})();`,
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
