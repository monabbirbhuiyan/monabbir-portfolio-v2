"use client";

import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function ContactSection() {
  return (
    <motion.section
      id="contact"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, ease: [0.21, 0.47, 0.32, 0.98] as [number, number, number, number] }}
      className="grid grid-cols-1 lg:grid-cols-12 border-b border-neutral-200"
    >
      <motion.div
        initial={{ opacity: 0, x: -12 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1, duration: 0.4 }}
        className="lg:col-span-3 p-8 border-b lg:border-b-0 lg:border-r border-neutral-200"
      >
        <span className="text-xs text-neutral-400">// 04</span>
        <h2 className="text-2xl font-mono tracking-tight mt-1">contact()</h2>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 12 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.15, duration: 0.4 }}
        className="lg:col-span-9 p-8 lg:p-12"
      >
        <h3 className="text-2xl lg:text-3xl font-mono text-neutral-900 leading-tight">
          // Got a system worth building?
          <br />
          <span className="text-blue-600">Let's talk.</span>
        </h3>
        <div className="mt-8 flex flex-wrap gap-4 text-xs font-mono">
          <motion.a
            href="mailto:monabbir.179@gmail.com"
            whileHover={{ scale: 1.02, y: -1 }}
            whileTap={{ scale: 0.98 }}
            className="px-4 py-2.5 border border-neutral-200 hover:border-neutral-400 bg-white flex items-center gap-2 text-neutral-800 transition-colors"
          >
            <MdEmail /> email
          </motion.a>
          <motion.a
            href="https://github.com/monabbirbhuiyan"
            target="_blank"
            whileHover={{ scale: 1.02, y: -1 }}
            whileTap={{ scale: 0.98 }}
            className="px-4 py-2.5 border border-neutral-200 hover:border-neutral-400 bg-white flex items-center gap-2 text-neutral-800 transition-colors"
          >
            <FaGithub /> github
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/monabbir-bhuiyan-763247206/"
            target="_blank"
            whileHover={{ scale: 1.02, y: -1 }}
            whileTap={{ scale: 0.98 }}
            className="px-4 py-2.5 border border-neutral-200 hover:border-neutral-400 bg-white flex items-center gap-2 text-neutral-800 transition-colors"
          >
            <FaLinkedin /> linkedin
          </motion.a>
        </div>
      </motion.div>
    </motion.section>
  );
}
