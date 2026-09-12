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

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

const projectCard = {
  hidden: { opacity: 0, y: 16, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.4,
      ease: [0.21, 0.47, 0.32, 0.98] as [number, number, number, number],
    },
  },
  exit: {
    opacity: 0,
    scale: 0.95,
    y: 8,
    transition: {
      duration: 0.2,
      ease: "easeInOut" as const,
    },
  },
};

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
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5, ease: [0.21, 0.47, 0.32, 0.98] as [number, number, number, number] }}
        className="p-6 md:p-8 border-b border-neutral-200 flex items-end justify-between"
      >
        <div>
          <span className="text-xs text-neutral-400 font-mono">// 02</span>
          <h2 className="text-2xl font-mono tracking-tight mt-1 text-neutral-900">
            repository()
          </h2>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.3 }}
          className="text-[11px] font-mono text-neutral-400 hidden sm:block"
        >
          showing {filteredProjects.length} of {projects.length} artifacts
        </motion.div>
      </motion.div>

      {/* 02. Spacious, Breathable Filter Toolbar */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.15 }}
        className="px-6 md:px-8 py-4 border-b border-neutral-200 bg-neutral-50/40"
      >
        <div className="flex flex-wrap items-center gap-2.5 sm:gap-3">
          <span className="text-neutral-400 font-mono text-xs select-none mr-1">
            filter:
          </span>

          {sortedTags.map((tag, i) => {
            const isActive = selectedTag.toLowerCase() === tag.toLowerCase();
            return (
              <motion.button
                key={tag}
                initial={{ opacity: 0, y: 8, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.3,
                  delay: 0.2 + i * 0.04,
                  ease: [0.21, 0.47, 0.32, 0.98] as [number, number, number, number],
                }}
                whileHover={{ scale: isActive ? 1 : 1.03, y: isActive ? 0 : -1 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => setSelectedTag(tag)}
                className={`relative px-3.5 py-1.5 text-xs font-mono cursor-pointer select-none border ${
                  isActive
                    ? "border-neutral-900 bg-neutral-900 text-white shadow-xs"
                    : "border-neutral-200 bg-white text-neutral-600 hover:text-neutral-900 hover:border-neutral-400"
                } transition-colors`}
              >
                {isActive && (
                  <motion.span
                    layoutId={`active-tag-${tag}`}
                    className="absolute inset-0 bg-blue-600/20 rounded-sm"
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  />
                )}
                {tag}
              </motion.button>
            );
          })}
        </div>
      </motion.div>

      {/* 03. Project Grid */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="p-6 md:p-8 bg-neutral-50/20"
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedTag}
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredProjects.map((proj) => (
              <motion.div
                key={proj.id}
                variants={projectCard}
                layout
                className="group"
              >
                <Link
                  href={`/projects/${proj.slug}`}
                  className="block bg-white border border-neutral-200 hover:border-neutral-400 hover:shadow-sm transition-all duration-300"
                >
                  <div className="relative aspect-4/3 w-full bg-neutral-100 border-b border-neutral-200 overflow-hidden">
                    <img
                      src={proj.coverImage}
                      alt={proj.title}
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                    />
                    {proj.featured && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.3, duration: 0.3 }}
                        className="absolute top-2 left-2 bg-blue-600 text-white text-[9px] font-mono px-2 py-0.5 tracking-wider uppercase font-semibold"
                      >
                        ★ FEATURED
                      </motion.div>
                    )}
                  </div>

                  <div className="p-6 flex flex-col flex-1 justify-between">
                    <div>
                      <div className="flex items-center justify-between gap-2">
                        <h3 className="text-xs font-semibold font-mono text-neutral-900 group-hover:text-blue-600 truncate transition-colors">
                          {proj.title} — {proj.subtitle}
                        </h3>
                        {proj.isLive && (
                          <motion.span
                            initial={{ opacity: 0, x: -4 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2 }}
                            className="inline-flex items-center gap-1.5 text-[10px] text-[#10b981] font-mono shrink-0"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-[#10b981]" />{" "}
                            live
                          </motion.span>
                        )}
                      </div>
                      <p className="mt-2 text-xs text-neutral-500 leading-relaxed font-sans line-clamp-2">
                        {proj.summary}
                      </p>
                    </div>

                    <div className="mt-6 pt-4 border-t border-neutral-100 text-[11px] font-mono text-neutral-400 group-hover:text-blue-600 flex items-center justify-between">
                      <span className="group-hover:translate-x-0.5 transition-transform">
                        inspect_project()
                      </span>
                      <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.15 }}
                        className="group-hover:translate-x-1 transition-transform"
                      >
                        →
                      </motion.span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="p-8 text-center text-xs text-neutral-400 font-mono border border-neutral-200 bg-white mt-2"
          >
            // No repositories matching filter [{selectedTag}].
          </motion.div>
        )}
      </motion.div>
    </section>
  );
}
