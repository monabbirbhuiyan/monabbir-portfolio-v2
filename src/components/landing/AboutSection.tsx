import React from "react";

type Props = {};

const AboutSection = (props: Props) => {
  return (
    <section
      id="about"
      className="scroll-mt-12 border-b border-neutral-200 bg-white"
    >
      {/* Header */}
      <div className="p-6 md:p-8 border-b border-neutral-200 flex items-end justify-between">
        <div>
          <span className="text-xs text-neutral-400 font-mono">// 01</span>
          <h2 className="text-2xl font-mono tracking-tight mt-1 text-neutral-900">
            about()
          </h2>
        </div>
        <div className="text-[11px] font-mono text-neutral-400 hidden sm:block">
          node: software_engineer // toronto_ca
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-neutral-200">
        {/* Left Column: Manifesto & Background (7 cols) */}
        <div className="lg:col-span-7 p-6 md:p-8 space-y-6">
          <div className="space-y-4 font-sans text-sm text-neutral-700 leading-relaxed">
            <p className="font-mono text-xs text-neutral-900 font-semibold uppercase tracking-wider">
              &gt; Executive Summary
            </p>
            <p>
              I am a software engineering student at York University’s Lassonde
              School of Engineering and the founder/lead architect at{" "}
              <strong className="font-mono text-neutral-900 font-medium">
                Suika Soft
              </strong>
              . My focus spans low-level systems programming in native C to
              distributed web architectures using Next.js, Spring Boot, and
              PostgreSQL.
            </p>
            <p>
              Whether designing deterministic state graph kernels for complex
              legal reasoning engines or programming digital logic controllers
              in Verilog on FPGA boards, I prioritize mechanical sympathy,
              cache-conscious data structures, and deterministic operational
              boundaries over runtime bloat.
            </p>
          </div>

          <div className="pt-6 border-t border-neutral-200">
            <p className="font-mono text-xs text-neutral-900 font-semibold uppercase tracking-wider mb-3">
              &gt; Engineering Invariants
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 font-mono text-xs">
              <div className="p-3 border border-neutral-200 bg-neutral-50/40">
                <span className="text-neutral-400 block mb-1">
                  01. Determinism
                </span>
                <span className="text-neutral-800">
                  State transitions must be pure, verifiable, and free of
                  side-effects.
                </span>
              </div>
              <div className="p-3 border border-neutral-200 bg-neutral-50/40">
                <span className="text-neutral-400 block mb-1">
                  02. Memory Boundaries
                </span>
                <span className="text-neutral-800">
                  Arena and contiguous memory layouts before arbitrary heap
                  sprawl.
                </span>
              </div>
              <div className="p-3 border border-neutral-200 bg-neutral-50/40">
                <span className="text-neutral-400 block mb-1">
                  03. Strict Typing
                </span>
                <span className="text-neutral-800">
                  Zero untyped interfaces; API and database contracts stay
                  synchronized.
                </span>
              </div>
              <div className="p-3 border border-neutral-200 bg-neutral-50/40">
                <span className="text-neutral-400 block mb-1">
                  04. Discipline Over Chaos
                </span>
                <span className="text-neutral-800">
                  Clean Git hygiene, exhaustive issue logs, and testable
                  modules.
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Telemetry & Specs (5 cols) */}
        <div className="lg:col-span-5 divide-y divide-neutral-200 bg-neutral-50/20 font-mono text-xs">
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
              <div className="flex justify-between items-center py-1 border-b border-neutral-100">
                <span className="text-neutral-500">Core Systems:</span>
                <span className="text-neutral-900">
                  C (C11), Verilog (DE10-Lite FPGA)
                </span>
              </div>
              <div className="flex justify-between items-center py-1 border-b border-neutral-100">
                <span className="text-neutral-500">Backend & Runtimes:</span>
                <span className="text-neutral-900">
                  Bun, Java (Spring Boot), Node.js
                </span>
              </div>
              <div className="flex justify-between items-center py-1 border-b border-neutral-100">
                <span className="text-neutral-500">Databases:</span>
                <span className="text-neutral-900">
                  PostgreSQL, Prisma, Supabase, Neon
                </span>
              </div>
              <div className="flex justify-between items-center py-1 border-b border-neutral-100">
                <span className="text-neutral-500">Frontend Engine:</span>
                <span className="text-neutral-900">
                  Next.js (App Router), Tailwind, Framer
                </span>
              </div>
              <div className="flex justify-between items-center py-1">
                <span className="text-neutral-500">Operating Env:</span>
                <span className="text-neutral-900">
                  Linux, macOS, GCC, Clang
                </span>
              </div>
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
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
