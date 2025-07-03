"use client"

export default function Contact() {
    return (
      <section id="contact" className="py-16">
        <h2 className="text-2xl font-bold mb-4 text-center">Contact</h2>
        <p className="text-center text-gray-600 dark:text-gray-400 mb-4">
          Feel free to reach out via email:
        </p>
        <p className="text-center">
          <a href="mailto:your@email.com" className="underline">
            your@email.com
          </a>
        </p>
      </section>
    );
  }
  