"use client";

import React from "react";
import { motion } from "framer-motion";

type Props = {};

const AboutSection = (props: Props) => {
  return (
    <section
      id="about"
      className="scroll-mt-12 border-b border-neutral-200 bg-white"
    >
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5, ease: [0.21, 0.47, 0.32, 0.98] }}
        className="p-6 md:p-8 border-b border-neutral-200 flex items-end justify-between"
      >
        <div>
          <span className="text-xs text-neutral-400 font-mono">// 01</span>
          <h2 className="text-2xl font-mono tracking-tight mt-1 text-neutral-900">
            about()
          </h2>
        </div>
        <div className="text-[11px] font-mono text-neutral-400 hidden sm:block">
          node: software_engineer // toronto_ca
        </div>
      </motion.div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-neutral-200">
        {/* Left Column: Manifesto & Background (7 cols) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="lg:col-span-7 p-6 md:p-8 space-y-6"
        >
          <div className="space-y-4 font-sans text-sm text-neutral-700 leading-relaxed">
            <motion.p
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="font-mono text-xs text-neutral-900 font-semibold uppercase tracking-wider"
            >
              &gt; Executive Summary
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="text-neutral-700"
            >
              I am a software engineering student at York University's Lassonde
              School of Engineering and the founder/lead architect at{" "}
              <strong className="font-mono text-neutral-900 font-medium">
                Suika Soft
              </strong>
              . My focus spans low-level systems programming in native C to
              distributed web architectures using Next.js, Spring Boot, and
              PostgreSQL.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="text-neutral-700"
            >
              Whether designing deterministic state graph kernels for complex
              legal reasoning engines or programming digital logic controllers
              in Verilog on FPGA boards, I prioritize mechanical sympathy,
              cache-conscious data structures, and deterministic operational
              boundaries over runtime bloat.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="pt-6 border-t border-neutral-200"
          >
            <p className="font-mono text-xs text-neutral-900 font-semibold uppercase tracking-wider mb-3">
              &gt; Engineering Invariants
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 font-mono text-xs">
              {[
                { num: "01", title: "Determinism", desc: "State transitions must be pure, verifiable, and free of side-effects." },
                { num: "02", title: "Memory Boundaries", desc: "Arena and contiguous memory layouts before arbitrary heap sprawl." },
                { num: "03", title: "Strict Typing", desc: "Zero untyped interfaces; API and database contracts stay synchronized." },
                { num: "04", title: "Discipline Over Chaos", desc: "Clean Git hygiene, exhaustive issue logs, and testable modules." },
              ].map((item, i) => (
                <motion.div
                  key={item.num}
                  initial={{ opacity: 0, scale: 0.95, y: 8 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: 0.45 + i * 0.08, ease: [0.21, 0.47, 0.32, 0.98] }}
                  className="p-3 border border-neutral-200 bg-neutral-50/40 hover:border-neutral-300 hover:bg-neutral-50 transition-colors"
                >
                  <span className="text-neutral-400 block mb-1">
                    {item.num}. {item.title}
                  </span>
                  <span className="text-neutral-800">{item.desc}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Right Column: Telemetry & Specs (5 cols) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.25, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="lg:col-span-5 divide-y divide-neutral-200 bg-neutral-50/20 font-mono text-xs"
        >
          {/* Education & Affiliations */}
          <div className="p-6">
            <span className="text-neutral-400 uppercase text-[10px] tracking-wider block mb-3">
              // academic_pedigree
            </span>
            <div className="space-y-3">
              <div>
                <div className="text-neutral-900 font-medium">
                  B.Eng. Software Engineering
                </div>
                <div className="text-neutral-500 text-[11px]">
                  York University — Lassonde School of Engineering
                </div>
                <div className="text-neutral-400 text-[10px]">
                  Expected Graduation: Aug 2027
                </div>
              </div>
              <div className="pt-2 border-t border-neutral-100 text-[11px] text-neutral-600">
                Calculus Class Representative (MATH 1013/1014) · Lassonde BEST
                Startup Mentor
              </div>
            </div>
          </div>

          {/* Primary Toolchain */}
          <div className="p-6">
            <span className="text-neutral-400 uppercase text-[10px] tracking-wider block mb-3">
              // runtime_environment
            </span>
            <div className="space-y-2">
              {[
                { label: "Core Systems:", value: "C (C11), Verilog (DE10-Lite FPGA)" },
                { label: "Backend & Runtimes:", value: "Bun, Java (Spring Boot), Node.js" },
                { label: "Databases:", value: "PostgreSQL, Prisma, Supabase, Neon" },
                { label: "Frontend Engine:", value: "Next.js (App Router), Tailwind, Framer" },
                { label: "Operating Env:", value: "Linux, macOS, GCC, Clang" },
              ].map((row, i) => (
                <motion.div
                  key={row.label}
                  initial={{ opacity: 0, x: -8 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.3 + i * 0.06 }}
                  className="flex justify-between items-center py-1 border-b border-neutral-100 last:border-b-0"
                >
                  <span className="text-neutral-500">{row.label}</span>
                  <span className="text-neutral-900">{row.value}</span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* External Disciplines */}
          <div className="p-6">
            <span className="text-neutral-400 uppercase text-[10px] tracking-wider block mb-2">
              // physical_discipline
            </span>
            <div className="text-neutral-800">
              2nd Dan Black Belt (Nidan) — Kyokushin Karate
            </div>
            <p className="text-[11px] text-neutral-500 mt-1 font-sans">
              Full-contact knockdown karate practitioner and tournament
              official. Applied focus on physical conditioning, deliberate
              execution, and endurance under pressure.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
