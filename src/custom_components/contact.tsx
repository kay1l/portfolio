"use client";

import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="py-20">
      <motion.h2
        className="text-3xl font-bold mb-10 text-center text-white"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        Contact
      </motion.h2>

      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left: Contact info */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col justify-center space-y-4"
        >
          <p className="text-gray-400">
            Feel free to reach out via email or phone. I’m always happy to connect!
          </p>
          <p className="text-indigo-400 font-medium">
            <a href="mailto:your@email.com" className="underline hover:text-indigo-300">
              gomezkyle3102@email.com
            </a>
          </p>
          <p className="text-indigo-400 font-medium">
            <a href="tel:+639123456789" className="underline hover:text-indigo-300">
              +63 927 467 0264
            </a>
          </p>
        </motion.div>

        {/* Right: Contact form */}
        <motion.form
          className="bg-gray-900 p-6 rounded-lg shadow-lg space-y-4"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          onSubmit={(e) => {
            e.preventDefault();
            alert("Message sent! (demo only)");
          }}
        >
          <input
            type="text"
            placeholder="Your Name"
            className="w-full rounded bg-gray-800 border border-gray-700 p-2 text-gray-200 focus:border-indigo-500 focus:outline-none"
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full rounded bg-gray-800 border border-gray-700 p-2 text-gray-200 focus:border-indigo-500 focus:outline-none"
            required
          />
          <textarea
            placeholder="Your Message"
            className="w-full rounded bg-gray-800 border border-gray-700 p-2 text-gray-200 focus:border-indigo-500 focus:outline-none"
            rows={4}
            required
          />
          <button
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 rounded transition"
          >
            Send Message
          </button>
        </motion.form>
      </div>
    </section>
  );
}
