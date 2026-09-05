import prisma from "@/lib/prisma";
import Image from "next/image";
import Link from "next/link";

//icons
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  let projects: any[] = [];
  try {
    projects = await prisma.project.findMany({
      orderBy: { createdAt: "desc" },
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

            <div className="mt-8 flex gap-3">
              <a
                href="#projects"
                className="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-xs font-mono transition-colors"
              >
                view_projects()
              </a>
              <a
                href="#contact"
                className="px-5 py-2.5 border border-neutral-200 hover:bg-neutral-50 text-neutral-700 text-xs font-mono transition-colors"
              >
                open_connection()
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
              src="https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?auto=format&fit=crop&w=1200&q=80"
              alt="Switch macro"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute bottom-2 left-2 text-[10px] font-mono text-neutral-400 bg-white/80 px-2 py-0.5 border border-neutral-200">
              switch_macro_4k.raw
            </div>
          </div>
        </div>
      </section>

      {/* 01 About Section */}
      <section
        id="about"
        className="grid grid-cols-1 lg:grid-cols-12 border-b border-neutral-200"
      >
        <div className="lg:col-span-3 p-8 border-b lg:border-b-0 lg:border-r border-neutral-200">
          <span className="text-xs text-neutral-400">// 01</span>
          <h2 className="text-2xl font-mono tracking-tight mt-1">about()</h2>
        </div>
        <div className="lg:col-span-9 p-8 lg:p-12">
          <p className="text-sm md:text-base text-neutral-700 leading-relaxed font-sans max-w-3xl">
            Software engineer based in Toronto focused on architecting
            responsive full-stack applications, scalable backend systems, and
            hardware-level digital logic. I emphasize clean code, robust schema
            design, and performant developer workflows using modern toolchains.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 border border-neutral-200 p-6 bg-white">
            <div>
              <span className="text-[10px] tracking-wider text-neutral-400 uppercase font-mono">
                LANGUAGES
              </span>
              <ul className="mt-3 space-y-1.5 text-xs font-mono text-neutral-700">
                <li>
                  <span className="text-[#10b981]">+</span> TypeScript
                </li>
                <li>
                  <span className="text-[#10b981]">+</span> Java
                </li>
                <li>
                  <span className="text-[#10b981]">+</span> Verilog
                </li>
                <li>
                  <span className="text-[#10b981]">+</span> SQL
                </li>
                <li>
                  <span className="text-[#10b981]">+</span> Python
                </li>
              </ul>
            </div>
            <div>
              <span className="text-[10px] tracking-wider text-neutral-400 uppercase font-mono">
                BACKEND & DATA
              </span>
              <ul className="mt-3 space-y-1.5 text-xs font-mono text-neutral-700">
                <li>
                  <span className="text-[#10b981]">+</span> Spring Boot
                </li>
                <li>
                  <span className="text-[#10b981]">+</span> Node.js / Bun
                </li>
                <li>
                  <span className="text-[#10b981]">+</span> Prisma ORM
                </li>
                <li>
                  <span className="text-[#10b981]">+</span> PostgreSQL
                </li>
                <li>
                  <span className="text-[#10b981]">+</span> Supabase
                </li>
              </ul>
            </div>
            <div>
              <span className="text-[10px] tracking-wider text-neutral-400 uppercase font-mono">
                FRONTEND
              </span>
              <ul className="mt-3 space-y-1.5 text-xs font-mono text-neutral-700">
                <li>
                  <span className="text-[#10b981]">+</span> Next.js (App Router)
                </li>
                <li>
                  <span className="text-[#10b981]">+</span> React
                </li>
                <li>
                  <span className="text-[#10b981]">+</span> Tailwind CSS
                </li>
                <li>
                  <span className="text-[#10b981]">+</span> shadcn/ui
                </li>
                <li>
                  <span className="text-[#10b981]">+</span> Framer Motion
                </li>
              </ul>
            </div>
            <div>
              <span className="text-[10px] tracking-wider text-neutral-400 uppercase font-mono">
                SYSTEMS & OPS
              </span>
              <ul className="mt-3 space-y-1.5 text-xs font-mono text-neutral-700">
                <li>
                  <span className="text-[#10b981]">+</span> Linux / Unix
                </li>
                <li>
                  <span className="text-[#10b981]">+</span> FPGA (DE10-Lite)
                </li>
                <li>
                  <span className="text-[#10b981]">+</span> Git / GitHub
                </li>
                <li>
                  <span className="text-[#10b981]">+</span> Neon Serverless
                </li>
                <li>
                  <span className="text-[#10b981]">+</span> RESTful APIs
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 02 Repository Section */}
      <section id="projects" className="border-b border-neutral-200">
        <div className="p-8 border-b border-neutral-200 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <span className="text-xs text-neutral-400">// 02</span>
            <h2 className="text-2xl font-mono tracking-tight mt-1">
              repository()
            </h2>
          </div>
          <div className="flex flex-wrap gap-1 text-xs font-mono">
            <button className="px-3 py-1 bg-blue-600 text-white">all</button>
            <button className="px-3 py-1 border border-neutral-200 text-neutral-600 hover:bg-neutral-50">
              Next.js
            </button>
            <button className="px-3 py-1 border border-neutral-200 text-neutral-600 hover:bg-neutral-50">
              Spring Boot
            </button>
            <button className="px-3 py-1 border border-neutral-200 text-neutral-600 hover:bg-neutral-50">
              Prisma
            </button>
            <button className="px-3 py-1 border border-neutral-200 text-neutral-600 hover:bg-neutral-50">
              PostgreSQL
            </button>
            <button className="px-3 py-1 border border-neutral-200 text-neutral-600 hover:bg-neutral-50">
              Verilog
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 divide-y md:divide-y-0 md:divide-x border-neutral-200">
          {/* Card 1 */}
          <div className="group block bg-white">
            <div className="relative aspect-4/3 w-full bg-neutral-100 border-b border-neutral-200 p-6 flex items-center justify-center">
              <Image
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80"
                alt="StudyPilot"
                fill
                className="object-cover grayscale"
              />
            </div>
            <div className="p-6">
              <div className="flex items-center justify-between">
                <h3 className="text-xs font-semibold font-mono text-neutral-900">
                  StudyPilot — Academic Workflow Engine
                </h3>
                <span className="inline-flex items-center gap-1.5 text-[10px] text-[#10b981] font-mono">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#10b981]" />{" "}
                  live
                </span>
              </div>
              <p className="mt-2 text-xs text-neutral-500 leading-relaxed font-sans">
                Academic productivity platform powered by Spring Boot backend
                services and structured REST APIs.
              </p>
              <div className="mt-4 text-[11px] font-mono text-neutral-400 group-hover:text-blue-600">
                git push →
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="group block bg-white">
            <div className="relative aspect-4/3 w-full bg-neutral-100 border-b border-neutral-200 p-6 flex items-center justify-center">
              <Image
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80"
                alt="FPGA Digital Systems"
                fill
                className="object-cover grayscale"
              />
            </div>
            <div className="p-6">
              <div className="flex items-center justify-between">
                <h3 className="text-xs font-semibold font-mono text-neutral-900">
                  LogicCore — DE10-Lite FPGA Engine
                </h3>
                <span className="inline-flex items-center gap-1.5 text-[10px] text-[#10b981] font-mono">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#10b981]" />{" "}
                  built
                </span>
              </div>
              <p className="mt-2 text-xs text-neutral-500 leading-relaxed font-sans">
                Hardware digital logic and finite state machines built in
                Verilog for the Intel MAX 10 FPGA.
              </p>
              <div className="mt-4 text-[11px] font-mono text-neutral-400 group-hover:text-blue-600">
                git push →
              </div>
            </div>
          </div>

          {/* Dynamic database projects */}
          {projects.map((proj) => (
            <Link
              key={proj.id}
              href={`/projects/${proj.slug}`}
              className="group block bg-white hover:bg-neutral-50/70 transition-colors"
            >
              <div className="relative aspect-4/3 w-full bg-neutral-100 border-b border-neutral-200">
                <Image
                  src={proj.coverImage}
                  alt={proj.title}
                  fill
                  className="object-cover grayscale"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-xs font-semibold font-mono text-neutral-900 group-hover:text-blue-600">
                    {proj.title} — {proj.subtitle}
                  </h3>
                  {proj.isLive && (
                    <span className="inline-flex items-center gap-1.5 text-[10px] text-[#10b981] font-mono">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#10b981]" />{" "}
                      live
                    </span>
                  )}
                </div>
                <p className="mt-2 text-xs text-neutral-500 leading-relaxed font-sans line-clamp-2">
                  {proj.summary}
                </p>
                <div className="mt-4 text-[11px] font-mono text-neutral-400 group-hover:text-blue-600">
                  git push →
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 03 Contact Section */}
      <section
        id="contact"
        className="grid grid-cols-1 lg:grid-cols-12 border-b border-neutral-200"
      >
        <div className="lg:col-span-3 p-8 border-b lg:border-b-0 lg:border-r border-neutral-200">
          <span className="text-xs text-neutral-400">// 03</span>
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
    </main>
  );
}
