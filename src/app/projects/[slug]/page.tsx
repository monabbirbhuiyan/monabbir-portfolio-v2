import prisma from "@/lib/prisma";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

export const dynamic = "force-dynamic";

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = await prisma.project.findUnique({
    where: { slug },
  });

  if (!project) notFound();

  return (
    <article className="max-w-4xl mx-auto border-x border-neutral-200 min-h-screen bg-white">
      {/* Return Link */}
      <div className="p-6 border-b border-neutral-200">
        <Link
          href="/"
          className="text-xs text-blue-600 hover:underline font-mono"
        >
          ← return cd ~/root
        </Link>
      </div>

      {/* Header */}
      <header className="p-8 lg:p-12 border-b border-neutral-200">
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-[10px] font-mono px-2 py-0.5 border border-neutral-200 bg-neutral-50 text-neutral-600"
            >
              {tag}
            </span>
          ))}
        </div>
        <h1 className="text-2xl md:text-3xl font-mono font-bold tracking-tight text-neutral-900">
          {project.title} — {project.subtitle}
        </h1>
        <p className="mt-4 text-sm md:text-base text-neutral-600 font-sans leading-relaxed">
          {project.summary}
        </p>
      </header>

      {/* Full Cover Image Display */}
      <div className="w-full border-b border-neutral-200 bg-neutral-50 p-4 sm:p-8 flex justify-center items-center">
        <img
          src={project.coverImage}
          alt={project.title}
          className="w-full h-auto max-h-187.5 object-contain border border-neutral-200 shadow-xs"
        />
      </div>

      {/* Markdown Article Content */}
      <div className="p-8 lg:p-12 font-sans text-neutral-800 text-sm leading-relaxed border-b border-neutral-200">
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          components={{
            h1: ({ node, ...props }) => (
              <h1
                className="text-2xl font-mono font-bold text-neutral-900 mt-8 mb-4 border-b border-neutral-200 pb-2"
                {...props}
              />
            ),
            h2: ({ node, ...props }) => (
              <h2
                className="text-xl font-mono font-semibold text-neutral-900 mt-6 mb-3"
                {...props}
              />
            ),
            h3: ({ node, ...props }) => (
              <h3
                className="text-base font-mono font-semibold text-neutral-900 mt-4 mb-2"
                {...props}
              />
            ),
            p: ({ node, ...props }) => (
              <p className="mb-4 leading-relaxed text-neutral-700" {...props} />
            ),
            ul: ({ node, ...props }) => (
              <ul
                className="list-disc list-inside mb-4 space-y-1 text-neutral-700 pl-2"
                {...props}
              />
            ),
            ol: ({ node, ...props }) => (
              <ol
                className="list-decimal list-inside mb-4 space-y-1 text-neutral-700 pl-2"
                {...props}
              />
            ),
            li: ({ node, ...props }) => (
              <li className="leading-relaxed" {...props} />
            ),
            // Style the <pre> block for multiline code snippets
            pre: ({ node, ...props }) => (
              <pre
                className="my-4 overflow-x-auto rounded-none border border-neutral-200 bg-neutral-900 p-4 text-neutral-100 font-mono text-xs"
                {...props}
              />
            ),
            // Style the <code> block for inline snippets or pass through if inside <pre>
            code: ({ node, className, children, ...props }: any) => {
              const isInline = !className || !className.includes("language-");

              if (isInline) {
                return (
                  <code
                    className="bg-neutral-100 text-neutral-900 px-1.5 py-0.5 rounded-xs font-mono text-xs border border-neutral-200"
                    {...props}
                  >
                    {children}
                  </code>
                );
              }

              // If it's a code block, the styling is handled by the <pre> wrapper above
              return (
                <code className={className} {...props}>
                  {children}
                </code>
              );
            },
            blockquote: ({ node, ...props }) => (
              <blockquote
                className="border-l-2 border-blue-600 pl-4 my-4 italic text-neutral-600"
                {...props}
              />
            ),
            a: ({ node, ...props }) => (
              <a
                className="text-blue-600 underline underline-offset-2 hover:text-blue-700 font-mono text-xs"
                target="_blank"
                {...props}
              />
            ),
            table: ({ node, ...props }) => (
              <div className="my-6 overflow-x-auto border border-neutral-200">
                <table
                  className="w-full text-left border-collapse text-xs font-mono"
                  {...props}
                />
              </div>
            ),
            th: ({ node, ...props }) => (
              <th
                className="border-b border-neutral-200 bg-neutral-50 px-4 py-2 font-semibold text-neutral-800"
                {...props}
              />
            ),
            td: ({ node, ...props }) => (
              <td
                className="border-b border-neutral-200 px-4 py-2 text-neutral-600"
                {...props}
              />
            ),
          }}
        >
          {project.content}
        </ReactMarkdown>
      </div>

      {/* External Actions */}
      <div className="p-8 flex gap-4 font-mono text-xs bg-neutral-50">
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noreferrer"
            className="px-4 py-2 bg-blue-600 text-white hover:bg-blue-700 transition-colors"
          >
            open_live_preview()
          </a>
        )}
        {project.repoUrl && (
          <a
            href={project.repoUrl}
            target="_blank"
            rel="noreferrer"
            className="px-4 py-2 border border-neutral-200 hover:bg-white transition-colors text-neutral-800"
          >
            inspect_source()
          </a>
        )}
      </div>
    </article>
  );
}
