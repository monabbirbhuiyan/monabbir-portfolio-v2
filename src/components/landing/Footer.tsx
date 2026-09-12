"use client";

import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Footer() {
  return (
    <footer className="border-t border-neutral-200 bg-white font-mono text-xs">
      {/* Upper Footer: Status & Direct Inquiries */}
      <div className="grid grid-cols-1 md:grid-cols-12 divide-y md:divide-y-0 md:divide-x divide-neutral-200 border-b border-neutral-200">
        {/* Column 1: System Status & Core Node */}
        <div className="md:col-span-4 p-6 md:p-8 space-y-3">
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.4 }}
            className="flex items-center gap-2"
          >
            <motion.span
              animate={{
                boxShadow: [
                  "0 0 0 0 rgba(16, 185, 129, 0.4)",
                  "0 0 0 6px rgba(16, 185, 129, 0)",
                ],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeOut",
              }}
              className="w-2 h-2 rounded-full bg-[#10b981]"
            />
            <span className="text-neutral-900 font-semibold uppercase tracking-wider text-[11px]">
              SYSTEMS_ONLINE // AVAILABLE_FOR_ROLES
            </span>
          </motion.div>
          <p className="text-neutral-500 font-sans text-xs leading-relaxed">
            Software engineering student at York University & founder at Suika
            Soft. Focused on high-performance native systems, deterministic
            state machines, and modern distributed web platforms.
          </p>
          <div className="pt-2 text-[11px] text-neutral-400">
            location: Toronto, ON [43.6532° N, 79.3832° W]
          </div>
        </div>

        {/* Column 2: Direct Directory & Quick Navigation */}
        <div className="md:col-span-4 p-6 md:p-8 space-y-3">
          <span className="text-neutral-400 uppercase text-[10px] tracking-wider block">
            // directory_routing
          </span>
          <nav className="flex flex-col space-y-2 text-neutral-600">
            <motion.a
              href="#about"
              initial={{ opacity: 0, x: -8 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.3 }}
              whileHover={{ x: 2 }}
              className="hover:text-blue-600 transition-colors w-fit"
            >
              &gt; /about
            </motion.a>
            <motion.a
              href="#projects"
              initial={{ opacity: 0, x: -8 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.25, duration: 0.3 }}
              whileHover={{ x: 2 }}
              className="hover:text-blue-600 transition-colors w-fit"
            >
              &gt; /repository
            </motion.a>
            <motion.a
              href="#experience"
              initial={{ opacity: 0, x: -8 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.3 }}
              whileHover={{ x: 2 }}
              className="hover:text-blue-600 transition-colors w-fit"
            >
              &gt; /experience
            </motion.a>
          </nav>
        </div>

        {/* Column 3: Communication & Relays */}
        <div className="md:col-span-4 p-6 md:p-8 space-y-3">
          <span className="text-neutral-400 uppercase text-[10px] tracking-wider block">
            // communication_relays
          </span>
          <div className="flex flex-col space-y-2">
            <motion.a
              href="https://github.com/monabbirbhuiyan"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, x: -6 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.35, duration: 0.3 }}
              whileHover={{ x: 2 }}
              className="text-neutral-700 hover:text-blue-600 transition-colors flex items-center justify-between group"
            >
              <span>github.com/monabbirbhuiyan</span>
              <motion.span
                animate={{ x: [0, 3, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                className="text-neutral-400 group-hover:text-blue-600"
              >
                ↗
              </motion.span>
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/monabbir-bhuiyan-763247206/"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, x: -6 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.3 }}
              whileHover={{ x: 2 }}
              className="text-neutral-700 hover:text-blue-600 transition-colors flex items-center justify-between group"
            >
              <span>linkedin/monabbir-bhuiyan</span>
              <motion.span
                animate={{ x: [0, 3, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
                className="text-neutral-400 group-hover:text-blue-600"
              >
                ↗
              </motion.span>
            </motion.a>
            <motion.a
              href="mailto:monabbir.179@gmail.com"
              initial={{ opacity: 0, x: -6 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.45, duration: 0.3 }}
              whileHover={{ x: 2 }}
              className="text-neutral-700 hover:text-blue-600 transition-colors flex items-center justify-between group"
            >
              <span>monabbir.179@gmail.com</span>
              <motion.span
                animate={{ x: [0, 3, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
                className="text-neutral-400 group-hover:text-blue-600"
              >
                ↗
              </motion.span>
            </motion.a>
          </div>
        </div>
      </div>

      {/* Lower Footer: Completely Centered */}
      <div className="px-6 md:px-8 py-6 flex flex-col items-center justify-center gap-3 text-[11px] text-neutral-400 bg-neutral-50/40 text-center">
        <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1">
          <span suppressHydrationWarning>
            © {new Date().getFullYear()} Monabbir Bhuiyan
          </span>
          <span className="hidden sm:inline">·</span>
          <span>built_with: Next.js 16 + Tailwind CSS</span>
          <span className="hidden sm:inline">·</span>
          <span>env: production</span>
        </div>

        <motion.a
          href="#top"
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.95 }}
          className="text-neutral-500 hover:text-neutral-900 transition-colors flex items-center gap-1.5 mt-1"
        >
          <span>return_to_top()</span>
          <span>↑</span>
        </motion.a>
      </div>
    </footer>
  );
}
