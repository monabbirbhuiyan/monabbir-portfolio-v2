"use client";

import React from "react";
import { motion } from "framer-motion";

type Props = {};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.45,
      ease: [0.21, 0.47, 0.32, 0.98] as [number, number, number, number],
    },
  },
};

const ExperienceSection = (props: Props) => {
  const experiences = [
    {
      id: "suika",
      category: "suika_soft_ltd // venture",
      role: "Founder, CEO & Lead Architect",
      status: "active",
      date: "[2025.06 — PRESENT]",
      description: "Directing system architecture, product strategy, and core runtime engineering for structured legal sensemaking platforms. Engineered the headless Suika Kernel runtime in native C (C11) to compute graph entropy, evaluate relational evidence networks, and enforce acyclic invariants without garbage collection pauses. Developed companion web services using Next.js, PostgreSQL, and Prisma ORM.",
      tags: ["C11", "Systems Architecture", "Next.js", "PostgreSQL", "Prisma", "Graph Theory"],
    },
    {
      id: "lassonde",
      category: "lassonde_school_of_engineering // mentorship",
      role: "Startup & Technical Mentor — BEST Contest",
      date: "[2026.05 — 2026.06]",
      description: "Advised early-stage student technical founders through system design audits, MVP scoping, and database design. Conducted architecture reviews across distributed web applications, evaluating technical feasibility, REST API contracts, and AI-assisted workflow pipelines.",
      tags: ["System Design", "MVP Scoping", "Technical Strategy"],
    },
    {
      id: "york-karate",
      category: "york_university // student_athletics",
      role: "Founder & Club President — Kyokushin Karate @ YorkU",
      status: "active",
      date: "[2024.09 — 2025.04]",
      description: "Established and officially chartered the student Kyokushin Karate club under York University Athletics and Student Community Leadership. Direct club operations, secure facility allocations, lead regular training sessions across traditional fundamentals (kihon), forms (kata), and controlled sparring (kumite), and organize cross-dojo seminars for collegiate practitioners.",
      tags: ["Club Administration", "Martial Arts Instruction", "Student Governance", "Athletic Coordination", "Community Leadership"],
    },
    {
      id: "york-math",
      category: "dept_mathematics_and_statistics // leadership",
      role: "Class Representative — MATH 1013 / MATH 1014",
      date: "[2025.09 — 2026.04]",
      description: "Acted as formal liaison between the undergraduate engineering cohort and departmental faculty for differential and integral calculus curricula. Collected, structured, and presented student feedback on examination formats and course pace while running collaborative study channels.",
      tags: ["Academic Leadership", "Stakeholder Communication", "Cohort Advocacy"],
    },
    {
      id: "toronto-kyo",
      category: "toronto_kyokushinkai_karate // martial_arts",
      role: "Dojo Member & Volunteer Tournament Official",
      date: "[2024.01 — PRESENT]",
      description: "Active competitive practitioner holding a 2nd Dan Black Belt (Nidan) in Kyokushin Karate. Volunteer as a tournament official assisting with match coordination, tatami timekeeping, scoring verification, and competitor protocol during full-contact knockdown kumite tournaments across Ontario.",
      tags: ["Tournament Logistics", "Tatami Official", "Full-Contact Kumite"],
    },
    {
      id: "york-multimedia",
      category: "york_university // creative_tech",
      role: "Graphic Designer & Multimedia Assistant",
      date: "[2023.05 — 2023.09]",
      description: "Produced visual assets and digital collateral for university departments. Designed graphics compliant with institutional accessibility and typography guidelines across digital signage, event programs, and web properties.",
      tags: ["Graphic Design", "Visual Identity", "Digital Media"],
    },
    {
      id: "go-learning",
      category: "go_learning // software_engineering",
      role: "Junior Developer",
      date: "[2022.07 — 2022.12]",
      description: "Engineered responsive web components and resolved UI defects across client-facing learning portals. Collaborated via Git branching workflows, participated in team code reviews, and conducted regression testing across modern web browsers.",
      tags: ["JavaScript", "CSS3 / HTML5", "Git", "Front-End Engineering"],
    },
    {
      id: "daffodil",
      category: "daffodil_international_school // education",
      role: "Karate & Sports Teacher",
      date: "[2020 — 2022]",
      description: "Led martial arts instruction and physical education programming for primary and secondary student cohorts. Structured progressive technical curricula covering fundamental stances, physical conditioning routines, self-defense principles, and sportsmanship. Organized inter-school athletic meets and administered student grading assessments.",
      tags: ["Curriculum Delivery", "Athletic Conditioning", "Student Mentorship", "Physical Education"],
    },
    {
      id: "kyo-bangladesh",
      category: "kyokushin_karate_bangladesh // martial_arts_instruction",
      role: "Assistant Instructor (Senpai)",
      date: "[2015 — 2022]",
      description: "Assisted Head Instructors with conducting rigorous full-contact training sessions, kihon (basics), ido geiko (moving basics), and kata (forms). Coached junior practitioners through high-intensity conditioning and knockdown sparring drills, supervised belt promotion examinations, and maintained traditional dojo discipline standards.",
      tags: ["Kihon & Kata Instruction", "Kumite Coaching", "Dojo Operations", "Grading Examinations"],
    },
  ];

  return (
    <section
      id="experience"
      className="scroll-mt-12 border-b border-neutral-200 bg-white"
    >
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5, ease: [0.21, 0.47, 0.32, 0.98] as [number, number, number, number] }}
        className="p-6 md:p-8 border-b border-neutral-200 flex items-end justify-between"
      >
        <div>
          <span className="text-xs text-neutral-400 font-mono">// 03</span>
          <h2 className="text-2xl font-mono tracking-tight mt-1 text-neutral-900">
            experience()
          </h2>
        </div>
        <div className="text-[11px] font-mono text-neutral-400 hidden sm:block">
          track: systems_engineering_and_discipline
        </div>
      </motion.div>

      {/* Experience List */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="divide-y divide-neutral-200 font-mono text-xs"
      >
        {experiences.map((exp) => (
          <motion.div
            key={exp.id}
            variants={itemVariants}
            className="p-6 md:p-8 group cursor-default"
          >
            <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-2 mb-3">
              <div>
                <span className="text-neutral-400 text-[10px] uppercase tracking-wider block mb-1">
                  {exp.category}
                </span>
                <h3 className="text-base font-semibold text-neutral-900 group-hover:text-blue-600 transition-colors">
                  {exp.role}
                </h3>
              </div>
              <div className="flex items-center gap-2 text-neutral-500 text-[11px] shrink-0">
                {exp.status && (
                  <span className="inline-flex items-center gap-1 text-[#10b981]">
                    <motion.span
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                      className="w-1.5 h-1.5 rounded-full bg-[#10b981]"
                    />{" "}
                    {exp.status}
                  </span>
                )}
                <span>{exp.date}</span>
              </div>
            </div>

            <p className="font-sans text-sm text-neutral-700 leading-relaxed mb-4">
              {exp.description}
            </p>

            <div className="flex flex-wrap gap-2 text-[11px]">
              {exp.tags.map((tag) => (
                <motion.span
                  key={tag}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.2, delay: 0.1 }}
                  whileHover={{ scale: 1.05, backgroundColor: "rgb(243 244 246)" }}
                  className="px-2 py-0.5 border border-neutral-200 bg-neutral-100 text-neutral-800 transition-colors cursor-default"
                >
                  {tag}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default ExperienceSection;
