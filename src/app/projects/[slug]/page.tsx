import prisma from "@/lib/prisma";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

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
      <div className="p-6 border-b border-neutral-200">
        <Link
          href="/"
          className="text-xs text-blue-600 hover:underline font-mono"
        >
          ← return cd ~/root
        </Link>
      </div>

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
        <h1 className="text-3xl font-mono font-bold tracking-tight text-neutral-900">
          {project.title} — {project.subtitle}
        </h1>
        <p className="mt-4 text-base text-neutral-600 font-sans leading-relaxed">
          {project.summary}
        </p>
      </header>

      <div className="relative aspect-16/9 w-full border-b border-neutral-200 bg-neutral-100">
        <Image
          src={project.coverImage}
          alt={project.title}
          fill
          className="object-cover grayscale"
        />
      </div>

      <div className="p-8 lg:p-12 font-sans text-neutral-800 leading-relaxed space-y-6 text-sm whitespace-pre-wrap">
        {project.content}
      </div>

      <div className="p-8 border-t border-neutral-200 flex gap-4 font-mono text-xs">
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            className="px-4 py-2 bg-blue-600 text-white hover:bg-blue-700"
          >
            open_live_preview()
          </a>
        )}
        {project.repoUrl && (
          <a
            href={project.repoUrl}
            target="_blank"
            className="px-4 py-2 border border-neutral-200 hover:bg-neutral-50"
          >
            inspect_source()
          </a>
        )}
      </div>
    </article>
  );
}
