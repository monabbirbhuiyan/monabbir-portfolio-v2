"use client";

import { useState } from "react";
import { createProject, updateProject } from "@/actions/admin";

interface ProjectFormProps {
  editingProject?: {
    id: string;
    title: string;
    subtitle: string;
    slug: string;
    summary: string;
    content: string;
    coverImage: string;
    liveUrl: string | null;
    repoUrl: string | null;
    tags: string[];
    featured: boolean;
  } | null;
}

export default function ProjectForm({ editingProject }: ProjectFormProps) {
  const [coverImage, setCoverImage] = useState<string>(
    editingProject?.coverImage || "",
  );
  const [preview, setPreview] = useState<string | null>(
    editingProject?.coverImage || null,
  );
  const [slug, setSlug] = useState<string>(editingProject?.slug || "");
  const [title, setTitle] = useState<string>(editingProject?.title || "");
  const [isCompressing, setIsCompressing] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Compresses uploaded files client-side to prevent Vercel 4.5MB Serverless payload crashes
  const compressImage = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = (event) => {
        const img = new Image();
        img.src = event.target?.result as string;
        img.onload = () => {
          const canvas = document.createElement("canvas");
          const MAX_WIDTH = 1400;
          const scale = Math.min(1, MAX_WIDTH / img.width);
          const width = img.width * scale;
          const height = img.height * scale;

          canvas.width = width;
          canvas.height = height;
          const ctx = canvas.getContext("2d");
          ctx?.drawImage(img, 0, 0, width, height);

          // Export as lightweight WebP
          const compressedDataUrl = canvas.toDataURL("image/webp", 0.82);
          resolve(compressedDataUrl);
        };
        img.onerror = (err) => reject(err);
      };
      reader.onerror = (err) => reject(err);
    });
  };

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    try {
      setIsCompressing(true);
      const compressedDataUrl = await compressImage(file);
      setCoverImage(compressedDataUrl);
      setPreview(compressedDataUrl);
    } catch {
      alert("Failed to process image file. Ensure it is a valid format.");
    } finally {
      setIsCompressing(false);
    }
  };

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newTitle = e.target.value;
    setTitle(newTitle);
    if (!editingProject) {
      const autoSlug = newTitle
        .toLowerCase()
        .trim()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-+|-+$/g, "");
      setSlug(autoSlug);
    }
  };

  return (
    <form
      action={editingProject ? updateProject : createProject}
      onSubmit={() => setIsSubmitting(true)}
      className="space-y-4 font-mono text-xs"
    >
      {editingProject && (
        <input type="hidden" name="id" value={editingProject.id} />
      )}
      <input type="hidden" name="coverImage" value={coverImage} />

      <div>
        <label className="block text-neutral-500 mb-1">Title</label>
        <input
          name="title"
          value={title}
          onChange={handleTitleChange}
          required
          className="w-full border border-neutral-300 p-2 outline-none focus:border-blue-600 bg-white"
          placeholder="Mustakim — Modeling Portfolio"
        />
      </div>

      <div>
        <label className="block text-neutral-500 mb-1">Subtitle</label>
        <input
          name="subtitle"
          defaultValue={editingProject?.subtitle || ""}
          required
          className="w-full border border-neutral-300 p-2 outline-none focus:border-blue-600 bg-white"
          placeholder="Editorial Lookbook & High-Fidelity Digital Comp-Card"
        />
      </div>

      <div>
        <label className="block text-neutral-500 mb-1">
          Slug (URL identifier)
        </label>
        <input
          name="slug"
          value={slug}
          onChange={(e) => setSlug(e.target.value)}
          required
          className="w-full border border-neutral-300 p-2 outline-none focus:border-blue-600 bg-white"
          placeholder="mustakim-modelling-portfolio"
        />
      </div>

      {/* Featured Checkbox */}
      <div className="p-3 border border-neutral-200 bg-neutral-50 flex items-center gap-3">
        <input
          type="checkbox"
          id="featured"
          name="featured"
          defaultChecked={editingProject?.featured || false}
          className="h-4 w-4 rounded-none accent-blue-600 cursor-pointer"
        />
        <label
          htmlFor="featured"
          className="text-xs text-neutral-800 cursor-pointer select-none"
        >
          <span className="text-blue-600 font-semibold">[★ featured]</span>{" "}
          Highlight on top of repository matrix
        </label>
      </div>

      {/* Cover Image Pipeline */}
      <div className="border border-neutral-200 p-3 bg-neutral-50/60 space-y-2">
        <label className="block text-neutral-500">
          Cover Image Ingestion{" "}
          {editingProject && "(Leave unchanged to preserve)"}
        </label>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div>
            <span className="block text-[10px] text-neutral-400 mb-1">
              Upload local image (Auto-compressed)
            </span>
            <input
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              disabled={isCompressing}
              className="w-full border border-neutral-300 p-1.5 text-neutral-600 text-[11px] bg-white file:mr-2 file:py-1 file:px-2 file:border-0 file:bg-neutral-100 file:text-neutral-700 hover:file:bg-neutral-200 cursor-pointer"
            />
          </div>

          <div>
            <span className="block text-[10px] text-neutral-400 mb-1">
              Or public URL / path (e.g. /assets/projects/...)
            </span>
            <input
              type="text"
              value={coverImage.startsWith("data:") ? "" : coverImage}
              onChange={(e) => {
                setCoverImage(e.target.value);
                setPreview(e.target.value || null);
              }}
              placeholder="/assets/projects/mustakim-cover.jpg"
              className="w-full border border-neutral-300 p-2 outline-none focus:border-blue-600 bg-white"
            />
          </div>
        </div>

        {isCompressing && (
          <div className="text-[11px] text-blue-600 animate-pulse">
            // optimizing_frame_payload()...
          </div>
        )}

        {preview && (
          <div className="mt-2 pt-2 border-t border-neutral-200 flex items-center gap-3">
            <div className="relative w-20 h-14 border border-neutral-300 bg-neutral-100 overflow-hidden shrink-0">
              <img
                src={preview}
                alt="Frame preview"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="text-[10px] text-neutral-500 truncate">
              Preview verified. Payload ready for persistence.
            </div>
          </div>
        )}
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-neutral-500 mb-1">
            Live URL (Optional)
          </label>
          <input
            name="liveUrl"
            defaultValue={editingProject?.liveUrl || ""}
            className="w-full border border-neutral-300 p-2 outline-none focus:border-blue-600 bg-white"
            placeholder="https://..."
          />
        </div>
        <div>
          <label className="block text-neutral-500 mb-1">
            Repo URL (Optional)
          </label>
          <input
            name="repoUrl"
            defaultValue={editingProject?.repoUrl || ""}
            className="w-full border border-neutral-300 p-2 outline-none focus:border-blue-600 bg-white"
            placeholder="https://github.com/..."
          />
        </div>
      </div>

      <div>
        <label className="block text-neutral-500 mb-1">
          Tags (comma-separated)
        </label>
        <input
          name="tags"
          defaultValue={editingProject?.tags.join(", ") || ""}
          className="w-full border border-neutral-300 p-2 outline-none focus:border-blue-600 bg-white"
          placeholder="TypeScript, Next.js, Web Performance"
        />
      </div>

      <div>
        <label className="block text-neutral-500 mb-1">Summary</label>
        <textarea
          name="summary"
          defaultValue={editingProject?.summary || ""}
          required
          rows={2}
          className="w-full border border-neutral-300 p-2 outline-none focus:border-blue-600 bg-white"
          placeholder="A high-performance editorial digital comp-card..."
        />
      </div>

      <div>
        <label className="block text-neutral-500 mb-1">
          Article Content (Markdown supported)
        </label>
        <textarea
          name="content"
          defaultValue={editingProject?.content || ""}
          required
          rows={10}
          className="w-full border border-neutral-300 p-2 outline-none focus:border-blue-600 bg-white font-mono"
          placeholder="# System Architecture & Retrospective..."
        />
      </div>

      <button
        type="submit"
        disabled={isCompressing || isSubmitting}
        className="w-full py-3 bg-blue-600 hover:bg-blue-700 disabled:opacity-50 text-white font-mono cursor-pointer transition-colors"
      >
        {isSubmitting
          ? "committing_record()..."
          : editingProject
            ? "save_modifications()"
            : "commit_to_database()"}
      </button>
    </form>
  );
}
