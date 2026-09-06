import React from "react";

type Props = {};

const ExperienceSection = (props: Props) => {
  return (
    <section
      id="experience"
      className="scroll-mt-12 border-b border-neutral-200 bg-white"
    >
      {/* Header */}
      <div className="p-6 md:p-8 border-b border-neutral-200 flex items-end justify-between">
        <div>
          <span className="text-xs text-neutral-400 font-mono">// 03</span>
          <h2 className="text-2xl font-mono tracking-tight mt-1 text-neutral-900">
            experience()
          </h2>
        </div>
        <div className="text-[11px] font-mono text-neutral-400 hidden sm:block">
          track: systems_engineering_and_discipline
        </div>
      </div>

      {/* Experience List */}
      <div className="divide-y divide-neutral-200 font-mono text-xs">
        {/* Role 01: Suika Soft LTD */}
        <div className="p-6 md:p-8 hover:bg-neutral-50/40 transition-colors">
          <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-2 mb-3">
            <div>
              <span className="text-neutral-400 text-[10px] uppercase tracking-wider block mb-1">
                suika_soft_ltd // venture
              </span>
              <h3 className="text-base font-semibold text-neutral-900">
                Founder, CEO & Lead Architect
              </h3>
            </div>
            <div className="flex items-center gap-2 text-neutral-500 text-[11px] shrink-0">
              <span className="inline-flex items-center gap-1 text-[#10b981]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#10b981]" />{" "}
                active
              </span>
              <span>[2025.06 — PRESENT]</span>
            </div>
          </div>

          <p className="font-sans text-sm text-neutral-700 leading-relaxed mb-4">
            Directing system architecture, product strategy, and core runtime
            engineering for structured legal sensemaking platforms. Engineered
            the headless{" "}
            <strong className="font-mono text-neutral-900 font-medium">
              Suika Kernel
            </strong>{" "}
            runtime in native C (C11) to compute graph entropy, evaluate
            relational evidence networks, and enforce acyclic invariants without
            garbage collection pauses. Developed companion web services using
            Next.js, PostgreSQL, and Prisma ORM.
          </p>

          <div className="flex flex-wrap gap-2 text-[11px]">
            <span className="px-2 py-0.5 border border-neutral-200 bg-neutral-100 text-neutral-800">
              C11
            </span>
            <span className="px-2 py-0.5 border border-neutral-200 bg-neutral-100 text-neutral-800">
              Systems Architecture
            </span>
            <span className="px-2 py-0.5 border border-neutral-200 bg-neutral-100 text-neutral-800">
              Next.js
            </span>
            <span className="px-2 py-0.5 border border-neutral-200 bg-neutral-100 text-neutral-800">
              PostgreSQL
            </span>
            <span className="px-2 py-0.5 border border-neutral-200 bg-neutral-100 text-neutral-800">
              Prisma
            </span>
            <span className="px-2 py-0.5 border border-neutral-200 bg-neutral-100 text-neutral-800">
              Graph Theory
            </span>
          </div>
        </div>

        {/* Role 02: Lassonde BEST Startup Contest */}
        <div className="p-6 md:p-8 hover:bg-neutral-50/40 transition-colors">
          <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-2 mb-3">
            <div>
              <span className="text-neutral-400 text-[10px] uppercase tracking-wider block mb-1">
                lassonde_school_of_engineering // mentorship
              </span>
              <h3 className="text-base font-semibold text-neutral-900">
                Startup & Technical Mentor — BEST Contest
              </h3>
            </div>
            <div className="text-neutral-500 text-[11px] shrink-0">
              [2026.05 — 2026.06]
            </div>
          </div>

          <p className="font-sans text-sm text-neutral-700 leading-relaxed mb-4">
            Advised early-stage student technical founders through system design
            audits, MVP scoping, and database design. Conducted architecture
            reviews across distributed web applications, evaluating technical
            feasibility, REST API contracts, and AI-assisted workflow pipelines.
          </p>

          <div className="flex flex-wrap gap-2 text-[11px]">
            <span className="px-2 py-0.5 border border-neutral-200 bg-neutral-100 text-neutral-800">
              System Design
            </span>
            <span className="px-2 py-0.5 border border-neutral-200 bg-neutral-100 text-neutral-800">
              MVP Scoping
            </span>
            <span className="px-2 py-0.5 border border-neutral-200 bg-neutral-100 text-neutral-800">
              Technical Strategy
            </span>
          </div>
        </div>

        {/* Role: York Karate Club */}
        <div className="p-6 md:p-8 hover:bg-neutral-50/40 transition-colors">
          <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-2 mb-3">
            <div>
              <span className="text-neutral-400 text-[10px] uppercase tracking-wider block mb-1">
                york_university // student_athletics
              </span>
              <h3 className="text-base font-semibold text-neutral-900">
                Founder & Club President — Kyokushin Karate @ YorkU
              </h3>
            </div>
            <div className="flex items-center gap-2 text-neutral-500 text-[11px] shrink-0">
              <span className="inline-flex items-center gap-1 text-[#10b981]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#10b981]" />{" "}
                active
              </span>
              <span>[2024.09 — 2025.04]</span>
            </div>
          </div>

          <p className="font-sans text-sm text-neutral-700 leading-relaxed mb-4">
            Established and officially chartered the student Kyokushin Karate
            club under York University Athletics and Student Community
            Leadership. Direct club operations, secure facility allocations,
            lead regular training sessions across traditional fundamentals
            (kihon), forms (kata), and controlled sparring (kumite), and
            organize cross-dojo seminars for collegiate practitioners.
          </p>

          <div className="flex flex-wrap gap-2 text-[11px]">
            <span className="px-2 py-0.5 border border-neutral-200 bg-neutral-100 text-neutral-800">
              Club Administration
            </span>
            <span className="px-2 py-0.5 border border-neutral-200 bg-neutral-100 text-neutral-800">
              Martial Arts Instruction
            </span>
            <span className="px-2 py-0.5 border border-neutral-200 bg-neutral-100 text-neutral-800">
              Student Governance
            </span>
            <span className="px-2 py-0.5 border border-neutral-200 bg-neutral-100 text-neutral-800">
              Athletic Coordination
            </span>
            <span className="px-2 py-0.5 border border-neutral-200 bg-neutral-100 text-neutral-800">
              Community Leadership
            </span>
          </div>
        </div>

        {/* Role 03: York University Academic Representative */}
        <div className="p-6 md:p-8 hover:bg-neutral-50/40 transition-colors">
          <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-2 mb-3">
            <div>
              <span className="text-neutral-400 text-[10px] uppercase tracking-wider block mb-1">
                dept_mathematics_and_statistics // leadership
              </span>
              <h3 className="text-base font-semibold text-neutral-900">
                Class Representative — MATH 1013 / MATH 1014
              </h3>
            </div>
            <div className="text-neutral-500 text-[11px] shrink-0">
              [2025.09 — 2026.04]
            </div>
          </div>

          <p className="font-sans text-sm text-neutral-700 leading-relaxed mb-4">
            Acted as formal liaison between the undergraduate engineering cohort
            and departmental faculty for differential and integral calculus
            curricula. Collected, structured, and presented student feedback on
            examination formats and course pace while running collaborative
            study channels.
          </p>

          <div className="flex flex-wrap gap-2 text-[11px]">
            <span className="px-2 py-0.5 border border-neutral-200 bg-neutral-100 text-neutral-800">
              Academic Leadership
            </span>
            <span className="px-2 py-0.5 border border-neutral-200 bg-neutral-100 text-neutral-800">
              Stakeholder Communication
            </span>
            <span className="px-2 py-0.5 border border-neutral-200 bg-neutral-100 text-neutral-800">
              Cohort Advocacy
            </span>
          </div>
        </div>

        {/* Role 04: Toronto Kyokushinkai Karate */}
        <div className="p-6 md:p-8 hover:bg-neutral-50/40 transition-colors">
          <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-2 mb-3">
            <div>
              <span className="text-neutral-400 text-[10px] uppercase tracking-wider block mb-1">
                toronto_kyokushinkai_karate // martial_arts
              </span>
              <h3 className="text-base font-semibold text-neutral-900">
                Dojo Member & Volunteer Tournament Official
              </h3>
            </div>
            <div className="text-neutral-500 text-[11px] shrink-0">
              [2024.01 — PRESENT]
            </div>
          </div>

          <p className="font-sans text-sm text-neutral-700 leading-relaxed mb-4">
            Active competitive practitioner holding a 2nd Dan Black Belt (Nidan)
            in Kyokushin Karate. Volunteer as a tournament official assisting
            with match coordination, tatami timekeeping, scoring verification,
            and competitor protocol during full-contact knockdown kumite
            tournaments across Ontario.
          </p>

          <div className="flex flex-wrap gap-2 text-[11px]">
            <span className="px-2 py-0.5 border border-neutral-200 bg-neutral-100 text-neutral-800">
              Tournament Logistics
            </span>
            <span className="px-2 py-0.5 border border-neutral-200 bg-neutral-100 text-neutral-800">
              Tatami Official
            </span>
            <span className="px-2 py-0.5 border border-neutral-200 bg-neutral-100 text-neutral-800">
              Full-Contact Kumite
            </span>
          </div>
        </div>

        {/* Role 06: York University Multimedia */}
        <div className="p-6 md:p-8 hover:bg-neutral-50/40 transition-colors">
          <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-2 mb-3">
            <div>
              <span className="text-neutral-400 text-[10px] uppercase tracking-wider block mb-1">
                york_university // creative_tech
              </span>
              <h3 className="text-base font-semibold text-neutral-900">
                Graphic Designer & Multimedia Assistant
              </h3>
            </div>
            <div className="text-neutral-500 text-[11px] shrink-0">
              [2023.05 — 2023.09]
            </div>
          </div>

          <p className="font-sans text-sm text-neutral-700 leading-relaxed mb-4">
            Produced visual assets and digital collateral for university
            departments. Designed graphics compliant with institutional
            accessibility and typography guidelines across digital signage,
            event programs, and web properties.
          </p>

          <div className="flex flex-wrap gap-2 text-[11px]">
            <span className="px-2 py-0.5 border border-neutral-200 bg-neutral-100 text-neutral-800">
              Graphic Design
            </span>
            <span className="px-2 py-0.5 border border-neutral-200 bg-neutral-100 text-neutral-800">
              Visual Identity
            </span>
            <span className="px-2 py-0.5 border border-neutral-200 bg-neutral-100 text-neutral-800">
              Digital Media
            </span>
          </div>
        </div>

        {/* Role 07: GO Learning */}
        <div className="p-6 md:p-8 hover:bg-neutral-50/40 transition-colors">
          <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-2 mb-3">
            <div>
              <span className="text-neutral-400 text-[10px] uppercase tracking-wider block mb-1">
                go_learning // software_engineering
              </span>
              <h3 className="text-base font-semibold text-neutral-900">
                Junior Developer
              </h3>
            </div>
            <div className="text-neutral-500 text-[11px] shrink-0">
              [2022.07 — 2022.12]
            </div>
          </div>

          <p className="font-sans text-sm text-neutral-700 leading-relaxed mb-4">
            Engineered responsive web components and resolved UI defects across
            client-facing learning portals. Collaborated via Git branching
            workflows, participated in team code reviews, and conducted
            regression testing across modern web browsers.
          </p>

          <div className="flex flex-wrap gap-2 text-[11px]">
            <span className="px-2 py-0.5 border border-neutral-200 bg-neutral-100 text-neutral-800">
              JavaScript
            </span>
            <span className="px-2 py-0.5 border border-neutral-200 bg-neutral-100 text-neutral-800">
              CSS3 / HTML5
            </span>
            <span className="px-2 py-0.5 border border-neutral-200 bg-neutral-100 text-neutral-800">
              Git
            </span>
            <span className="px-2 py-0.5 border border-neutral-200 bg-neutral-100 text-neutral-800">
              Front-End Engineering
            </span>
          </div>
        </div>

        {/* Role 08: Daffodil International School */}
        <div className="p-6 md:p-8 hover:bg-neutral-50/40 transition-colors">
          <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-2 mb-3">
            <div>
              <span className="text-neutral-400 text-[10px] uppercase tracking-wider block mb-1">
                daffodil_international_school // education
              </span>
              <h3 className="text-base font-semibold text-neutral-900">
                Karate & Sports Teacher
              </h3>
            </div>
            <div className="text-neutral-500 text-[11px] shrink-0">
              [2020 — 2022]
            </div>
          </div>

          <p className="font-sans text-sm text-neutral-700 leading-relaxed mb-4">
            Led martial arts instruction and physical education programming for
            primary and secondary student cohorts. Structured progressive
            technical curricula covering fundamental stances, physical
            conditioning routines, self-defense principles, and sportsmanship.
            Organized inter-school athletic meets and administered student
            grading assessments.
          </p>

          <div className="flex flex-wrap gap-2 text-[11px]">
            <span className="px-2 py-0.5 border border-neutral-200 bg-neutral-100 text-neutral-800">
              Curriculum Delivery
            </span>
            <span className="px-2 py-0.5 border border-neutral-200 bg-neutral-100 text-neutral-800">
              Athletic Conditioning
            </span>
            <span className="px-2 py-0.5 border border-neutral-200 bg-neutral-100 text-neutral-800">
              Student Mentorship
            </span>
            <span className="px-2 py-0.5 border border-neutral-200 bg-neutral-100 text-neutral-800">
              Physical Education
            </span>
          </div>
        </div>

        {/* Role 09: Kyokushin Karate Bangladesh */}
        <div className="p-6 md:p-8 hover:bg-neutral-50/40 transition-colors">
          <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-2 mb-3">
            <div>
              <span className="text-neutral-400 text-[10px] uppercase tracking-wider block mb-1">
                kyokushin_karate_bangladesh // martial_arts_instruction
              </span>
              <h3 className="text-base font-semibold text-neutral-900">
                Assistant Instructor (Senpai)
              </h3>
            </div>
            <div className="text-neutral-500 text-[11px] shrink-0">
              [2015 — 2022]
            </div>
          </div>

          <p className="font-sans text-sm text-neutral-700 leading-relaxed mb-4">
            Assisted Head Instructors with conducting rigorous full-contact
            training sessions, kihon (basics), ido geiko (moving basics), and
            kata (forms). Coached junior practitioners through high-intensity
            conditioning and knockdown sparring drills, supervised belt
            promotion examinations, and maintained traditional dojo discipline
            standards.
          </p>

          <div className="flex flex-wrap gap-2 text-[11px]">
            <span className="px-2 py-0.5 border border-neutral-200 bg-neutral-100 text-neutral-800">
              Kihon & Kata Instruction
            </span>
            <span className="px-2 py-0.5 border border-neutral-200 bg-neutral-100 text-neutral-800">
              Kumite Coaching
            </span>
            <span className="px-2 py-0.5 border border-neutral-200 bg-neutral-100 text-neutral-800">
              Dojo Operations
            </span>
            <span className="px-2 py-0.5 border border-neutral-200 bg-neutral-100 text-neutral-800">
              Grading Examinations
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
