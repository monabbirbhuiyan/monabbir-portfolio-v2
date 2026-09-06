import AboutSection from "@/components/landing/AboutSection";
import ExperienceSection from "@/components/landing/ExperienceSection";
import ProjectShowcase from "@/components/ProjectShowcase";
import prisma from "@/lib/prisma";
import Image from "next/image";

//icons
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  let projects: any[] = [];
  try {
    projects = await prisma.project.findMany({
      orderBy: [{ featured: "desc" }, { createdAt: "desc" }],
    });
  } catch {
    projects = [];
  }

  return (
    <main className="w-full bg-white text-[#111111]">
      {/* 00 Index Hero */}
      <section
        id="hero"
        className="grid grid-cols-1 lg:grid-cols-12 border-b border-neutral-200"
      >
        {/* Left Column */}
        <div className="lg:col-span-7 p-8 lg:p-12 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-neutral-200">
          <div>
            <span className="text-neutral-400 text-xs">
              // engineer.profile.json
            </span>

            <div className="mt-6 font-mono text-sm leading-relaxed text-neutral-800">
              <span className="text-neutral-900">{"{"}</span>
              <div className="pl-6 space-y-1">
                <div>
                  <span className="text-blue-600">"role"</span>:{" "}
                  <span className="text-[#10b981]">"Software Engineer"</span>,
                </div>
                <div>
                  <span className="text-blue-600">"name"</span>:{" "}
                  <span className="text-[#10b981]">
                    "Monabbir Ahmed Bhuiyan"
                  </span>
                  ,
                </div>
                <div>
                  <span className="text-blue-600">"location"</span>:{" "}
                  <span className="text-[#10b981]">"Toronto, ON"</span>,
                </div>
                <div>
                  <span className="text-blue-600">"focus"</span>: [
                  <div className="pl-6 text-[#10b981]">
                    <div>"full-stack-engineering",</div>
                    <div>"system-architecture",</div>
                    <div>"digital-logic-fpga"</div>
                  </div>
                  ],
                </div>
                <div>
                  <span className="text-blue-600">"available"</span>:{" "}
                  <span className="text-amber-600">true</span>,
                </div>
                <div>
                  <span className="text-blue-600">"shipping"</span>:{" "}
                  <span className="text-[#10b981]">"actively"</span>
                </div>
              </div>
              <span className="text-neutral-900">{"}"}</span>
            </div>

            {/* Hero Action CTA */}
            <div className="flex flex-wrap gap-4 mt-8">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-neutral-900 text-white font-mono text-xs hover:bg-neutral-800 transition-colors cursor-pointer"
              >
                <span>explore_repository()</span>
                <span>↓</span>
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 border border-neutral-300 text-neutral-700 font-mono text-xs hover:bg-neutral-50 transition-colors"
              >
                <span>open_connection()</span>
                <span>→</span>
              </a>
            </div>
          </div>

          {/* Inline Stats */}
          <div className="grid grid-cols-3 border-t border-neutral-200 pt-8 mt-12">
            <div>
              <div className="text-3xl font-light text-black">03+</div>
              <div className="text-[10px] tracking-widest text-neutral-400 uppercase mt-1">
                YEARS
              </div>
            </div>
            <div className="border-l border-neutral-200 pl-6">
              <div className="text-3xl font-light text-black">40+</div>
              <div className="text-[10px] tracking-widest text-neutral-400 uppercase mt-1">
                REPOS
              </div>
            </div>
            <div className="border-l border-neutral-200 pl-6">
              <div className="text-3xl font-light text-black">2.8k</div>
              <div className="text-[10px] tracking-widest text-neutral-400 uppercase mt-1">
                COMMITS
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Mechanical Switch Macro Asset */}
        <div className="lg:col-span-5 relative min-h-120 bg-neutral-100 flex items-center justify-center p-8">
          <div className="relative w-full h-full min-h-110">
            <Image
              src="/assets/monabbir-b.jpg"
              alt="Monabbir Bhuiyan"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover contrast-110"
              priority // add if this image is above the fold in the hero
            />
            <div className="absolute bottom-2 left-2 text-[10px] font-mono text-neutral-400 bg-white/80 px-2 py-0.5 border border-neutral-200">
              monabbir_bhuiyan.py
            </div>
          </div>
        </div>
      </section>

      {/* 01 About Section */}
      <AboutSection />

      {/* 02 Repository Showcase */}
      <section
        id="projects"
        className="scroll-mt-12 border-b border-neutral-200"
      >
        <ProjectShowcase projects={projects} />
      </section>

      {/* 03 Experience Section */}
      <ExperienceSection />

      {/* 03 Contact Section */}
      <section
        id="contact"
        className="grid grid-cols-1 lg:grid-cols-12 border-b border-neutral-200"
      >
        <div className="lg:col-span-3 p-8 border-b lg:border-b-0 lg:border-r border-neutral-200">
          <span className="text-xs text-neutral-400">// 04</span>
          <h2 className="text-2xl font-mono tracking-tight mt-1">contact()</h2>
        </div>
        <div className="lg:col-span-9 p-8 lg:p-12">
          <h3 className="text-2xl lg:text-3xl font-mono text-neutral-900 leading-tight">
            // Got a system worth building?
            <br />
            <span className="text-blue-600">Let's talk.</span>
          </h3>
          <div className="mt-8 flex flex-wrap gap-4 text-xs font-mono">
            <a
              href="mailto:monabbir.179@gmail.com"
              className="px-4 py-2.5 border border-neutral-200 hover:border-neutral-400 bg-white flex items-center gap-2 text-neutral-800"
            >
              <MdEmail /> email
            </a>
            <a
              href="https://github.com/monabbirbhuiyan"
              target="_blank"
              className="px-4 py-2.5 border border-neutral-200 hover:border-neutral-400 bg-white flex items-center gap-2 text-neutral-800"
            >
              <FaGithub /> github
            </a>
            <a
              href="https://www.linkedin.com/in/monabbir-bhuiyan-763247206/"
              target="_blank"
              className="px-4 py-2.5 border border-neutral-200 hover:border-neutral-400 bg-white flex items-center gap-2 text-neutral-800"
            >
              <FaLinkedin /> linkedin
            </a>
          </div>
        </div>
      </section>

      {/* 04 Footer & System Telemetry */}
      <footer className="border-t border-neutral-200 bg-white font-mono text-xs">
        {/* Upper Footer: Status & Direct Inquiries */}
        <div className="grid grid-cols-1 md:grid-cols-12 divide-y md:divide-y-0 md:divide-x divide-neutral-200 border-b border-neutral-200">
          {/* Column 1: System Status & Core Node */}
          <div className="md:col-span-4 p-6 md:p-8 space-y-3">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#10b981] animate-pulse" />
              <span className="text-neutral-900 font-semibold uppercase tracking-wider text-[11px]">
                SYSTEMS_ONLINE // AVAILABLE_FOR_ROLES
              </span>
            </div>
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
              <a
                href="#about"
                className="hover:text-blue-600 transition-colors w-fit"
              >
                &gt; /about
              </a>
              <a
                href="#projects"
                className="hover:text-blue-600 transition-colors w-fit"
              >
                &gt; /repository
              </a>
              <a
                href="#experience"
                className="hover:text-blue-600 transition-colors w-fit"
              >
                &gt; /experience
              </a>
            </nav>
          </div>

          {/* Column 3: Communication & Relays */}
          <div className="md:col-span-4 p-6 md:p-8 space-y-3">
            <span className="text-neutral-400 uppercase text-[10px] tracking-wider block">
              // communication_relays
            </span>
            <div className="flex flex-col space-y-2">
              <a
                href="https://github.com/monabbirbhuiyan"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-700 hover:text-blue-600 transition-colors flex items-center justify-between group"
              >
                <span>github.com/monabbirbhuiyan</span>
                <span className="text-neutral-400 group-hover:text-blue-600">
                  ↗
                </span>
              </a>
              <a
                href="https://www.linkedin.com/in/monabbir-bhuiyan-763247206/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-700 hover:text-blue-600 transition-colors flex items-center justify-between group"
              >
                <span>linkedin/monabbir-bhuiyan</span>
                <span className="text-neutral-400 group-hover:text-blue-600">
                  ↗
                </span>
              </a>
              <a
                href="mailto:monabbir.179@gmail.com"
                className="text-neutral-700 hover:text-blue-600 transition-colors flex items-center justify-between group"
              >
                <span>monabbir.179@gmail.com</span>
                <span className="text-neutral-400 group-hover:text-blue-600">
                  ↗
                </span>
              </a>
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

          <a
            href="#top"
            className="text-neutral-500 hover:text-neutral-900 transition-colors flex items-center gap-1.5 mt-1"
          >
            <span>return_to_top()</span>
            <span>↑</span>
          </a>
        </div>
      </footer>
    </main>
  );
}
