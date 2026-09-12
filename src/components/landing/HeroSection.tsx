"use client";

import Image from "next/image";
import { motion } from "framer-motion";

//icons
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

type Props = {
  projects: any[];
};

export default function HeroSection({ projects }: Props) {
  return (
    <motion.section
      id="hero"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
      className="grid grid-cols-1 lg:grid-cols-12 border-b border-neutral-200"
    >
      {/* Left Column */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, delay: 0.15, ease: [0.21, 0.47, 0.32, 0.98] }}
        className="lg:col-span-7 p-8 lg:p-12 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-neutral-200"
      >
        <div>
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.4 }}
            className="text-neutral-400 text-xs"
          >
            // engineer.profile.json
          </motion.span>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="mt-6 font-mono text-sm leading-relaxed text-neutral-800"
          >
            <span className="text-neutral-900">{`{`}</span>
            <div className="pl-6 space-y-1">
              <motion.div
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.35 }}
                className="text-neutral-800"
              >
                <span className="text-blue-600">"role"</span>:{" "}
                <span className="text-[#10b981]">"Software Engineer"</span>,
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.4 }}
                className="text-neutral-800"
              >
                <span className="text-blue-600">"name"</span>:{" "}
                <span className="text-[#10b981]">
                  "Monabbir Ahmed Bhuiyan"
                </span>
                ,
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.45 }}
                className="text-neutral-800"
              >
                <span className="text-blue-600">"location"</span>:{" "}
                <span className="text-[#10b981]">"Toronto, ON"</span>,
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.5 }}
                className="text-neutral-800"
              >
                <span className="text-blue-600">"focus"</span>: [
                <div className="pl-6 text-[#10b981]">
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3, delay: 0.55 }}
                  >
                    "full-stack-engineering",
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3, delay: 0.6 }}
                  >
                    "system-architecture",
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3, delay: 0.65 }}
                  >
                    "digital-logic-fpga"
                  </motion.div>
                </div>
                ],
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.7 }}
                className="text-neutral-800"
              >
                <span className="text-blue-600">"available"</span>:{" "}
                <span className="text-amber-600">true</span>,
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.75 }}
                className="text-neutral-800"
              >
                <span className="text-blue-600">"shipping"</span>:{" "}
                <span className="text-[#10b981]">"actively"</span>
              </motion.div>
            </div>
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.3 }}
              className="text-neutral-900"
            >{`}`}</motion.span>
          </motion.div>

          {/* Hero Action CTA */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex flex-wrap gap-4 mt-8"
          >
            <motion.a
              href="#projects"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.55 }}
              whileHover={{ scale: 1.02, y: -1 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-neutral-900 text-white font-mono text-xs hover:bg-neutral-800 transition-colors cursor-pointer"
            >
              <span>explore_repository()</span>
              <span>↓</span>
            </motion.a>
            <motion.a
              href="#contact"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.65 }}
              whileHover={{ scale: 1.02, y: -1 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 px-5 py-2.5 border border-neutral-300 text-neutral-700 font-mono text-xs hover:bg-neutral-50 transition-colors"
            >
              <span>open_connection()</span>
              <span>→</span>
            </motion.a>
          </motion.div>
        </div>

        {/* Inline Stats */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="grid grid-cols-3 border-t border-neutral-200 pt-8 mt-12"
        >
          <div className="text-3xl font-light text-black">
            <motion.span
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.65, duration: 0.3 }}
            >
              03+
            </motion.span>
            <div className="text-[10px] tracking-widest text-neutral-400 uppercase mt-1">
              YEARS
            </div>
          </div>
          <div className="border-l border-neutral-200 pl-6">
            <div className="text-3xl font-light text-black">
              <motion.span
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.75, duration: 0.3 }}
              >
                40+
              </motion.span>
            </div>
            <div className="text-[10px] tracking-widest text-neutral-400 uppercase mt-1">
              REPOS
            </div>
          </div>
          <div className="border-l border-neutral-200 pl-6">
            <div className="text-3xl font-light text-black">
              <motion.span
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.85, duration: 0.3 }}
              >
                2.8k
              </motion.span>
            </div>
            <div className="text-[10px] tracking-widest text-neutral-400 uppercase mt-1">
              COMMITS
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Right Column: Mechanical Switch Macro Asset */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.2, ease: [0.21, 0.47, 0.32, 0.98] }}
        className="lg:col-span-5 relative min-h-120 bg-neutral-100 flex items-center justify-center p-8"
      >
        <div className="relative w-full h-full min-h-110">
          <Image
            src="/assets/monabbir-b.jpg"
            alt="Monabbir Bhuiyan"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover contrast-110 hover:scale-105 transition-transform duration-700"
            priority
          />
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="absolute bottom-2 left-2 text-[10px] font-mono text-neutral-400 bg-white/80 px-2 py-0.5 border border-neutral-200"
          >
            monabbir_bhuiyan.py
          </motion.div>
        </div>
      </motion.div>
    </motion.section>
  );
}
