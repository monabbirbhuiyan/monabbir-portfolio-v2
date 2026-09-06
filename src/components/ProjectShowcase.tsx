"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

interface Project {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  summary: string;
  coverImage: string;
  liveUrl?: string | null;
  repoUrl?: string | null;
  tags: string[];
  featured: boolean;
  isLive: boolean;
}

export default function ProjectShowcase({ projects }: { projects: Project[] }) {
  const [selectedTag, setSelectedTag] = useState<string>("all");

  // Collect unique tags sorted by popularity
  const sortedTags = useMemo(() => {
    const counts: Record<string, number> = {};
    projects.forEach((p) => {
      p.tags?.forEach((t) => {
        counts[t] = (counts[t] || 0) + 1;
      });
    });

    const tags = Object.keys(counts).sort((a, b) => counts[b] - counts[a]);
    return ["all", ...tags];
  }, [projects]);

  const filteredProjects = useMemo(() => {
    if (selectedTag === "all") return projects;
    return projects.filter((proj) =>
      proj.tags?.some((tag) => tag.toLowerCase() === selectedTag.toLowerCase()),
    );
  }, [projects, selectedTag]);

  return (
    <section
      id="projects"
      className="scroll-mt-12 border-b border-neutral-200 bg-white"
    >
      {/* 01. Section Header */}
      <div className="p-6 md:p-8 border-b border-neutral-200 flex items-end justify-between">
        <div>
          <span className="text-xs text-neutral-400 font-mono">// 02</span>
          <h2 className="text-2xl font-mono tracking-tight mt-1 text-neutral-900">
            repository()
          </h2>
        </div>
        <div className="text-[11px] font-mono text-neutral-400 hidden sm:block">
          showing {filteredProjects.length} of {projects.length} artifacts
        </div>
      </div>

      {/* 02. Spacious, Breathable Filter Toolbar */}
      <div className="px-6 md:px-8 py-4 border-b border-neutral-200 bg-neutral-50/40">
        <div className="flex flex-wrap items-center gap-2.5 sm:gap-3">
          <span className="text-neutral-400 font-mono text-xs select-none mr-1">
            filter:
          </span>

          {sortedTags.map((tag) => {
            const isActive = selectedTag.toLowerCase() === tag.toLowerCase();
            return (
              <button
                key={tag}
                type="button"
                onClick={() => setSelectedTag(tag)}
                className={`relative px-3.5 py-1.5 text-xs font-mono cursor-pointer transition-all duration-150 select-none border ${
                  isActive
                    ? "border-neutral-900 bg-neutral-900 text-white shadow-xs"
                    : "border-neutral-200 bg-white text-neutral-600 hover:text-neutral-900 hover:border-neutral-400"
                }`}
              >
                {tag}
              </button>
            );
          })}
        </div>
      </div>

      {/* 03. Project Grid */}
      <div className="p-6 md:p-8 bg-neutral-50/20">
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((proj) => (
              <motion.div
                key={proj.id}
                layout
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.2 }}
              >
                <Link
                  href={`/projects/${proj.slug}`}
                  className="group flex flex-col h-full bg-white border border-neutral-200 hover:border-neutral-400 hover:shadow-xs transition-all duration-200"
                >
                  <div className="relative aspect-4/3 w-full bg-neutral-100 border-b border-neutral-200 overflow-hidden">
                    <img
                      src={proj.coverImage}
                      alt={proj.title}
                      className="w-full h-full object-cover grayscale contrast-110 group-hover:scale-102 transition-transform duration-300"
                    />
                    {proj.featured && (
                      <div className="absolute top-2 left-2 bg-blue-600 text-white text-[9px] font-mono px-2 py-0.5 tracking-wider uppercase font-semibold">
                        ★ FEATURED
                      </div>
                    )}
                  </div>

                  <div className="p-6 flex flex-col flex-1 justify-between">
                    <div>
                      <div className="flex items-center justify-between gap-2">
                        <h3 className="text-xs font-semibold font-mono text-neutral-900 group-hover:text-blue-600 truncate">
                          {proj.title} — {proj.subtitle}
                        </h3>
                        {proj.isLive && (
                          <span className="inline-flex items-center gap-1.5 text-[10px] text-[#10b981] font-mono shrink-0">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#10b981]" />{" "}
                            live
                          </span>
                        )}
                      </div>
                      <p className="mt-2 text-xs text-neutral-500 leading-relaxed font-sans line-clamp-2">
                        {proj.summary}
                      </p>
                    </div>

                    <div className="mt-6 pt-4 border-t border-neutral-100 text-[11px] font-mono text-neutral-400 group-hover:text-blue-600 flex items-center justify-between">
                      <span>inspect_project()</span>
                      <span>→</span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredProjects.length === 0 && (
          <div className="p-8 text-center text-xs text-neutral-400 font-mono border border-neutral-200 bg-white">
            // No repositories matching filter [{selectedTag}].
          </div>
        )}
      </div>
    </section>
  );
}
