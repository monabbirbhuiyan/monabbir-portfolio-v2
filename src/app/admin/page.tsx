import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export default function AdminPage() {
  async function createProject(formData: FormData) {
    "use server";

    const title = formData.get("title") as string;
    const subtitle = formData.get("subtitle") as string;
    const slug = formData.get("slug") as string;
    const summary = formData.get("summary") as string;
    const content = formData.get("content") as string;
    const coverImage = formData.get("coverImage") as string;
    const liveUrl = formData.get("liveUrl") as string;
    const repoUrl = formData.get("repoUrl") as string;
    const rawTags = formData.get("tags") as string;

    const tags = rawTags
      .split(",")
      .map((t) => t.trim())
      .filter(Boolean);

    await prisma.project.create({
      data: {
        title,
        subtitle,
        slug,
        summary,
        content,
        coverImage,
        liveUrl: liveUrl || null,
        repoUrl: repoUrl || null,
        tags,
      },
    });

    revalidatePath("/");
    redirect("/");
  }

  return (
    <div className="max-w-2xl mx-auto p-8 border-x border-neutral-200 min-h-screen bg-white font-mono text-xs">
      <div className="mb-6 pb-4 border-b border-neutral-200">
        <span className="text-neutral-400">// internal pipeline</span>
        <h1 className="text-lg font-bold text-neutral-900 mt-1">
          create_project_entry()
        </h1>
      </div>

      <form action={createProject} className="space-y-4">
        <div>
          <label className="block text-neutral-500 mb-1">Title</label>
          <input
            name="title"
            required
            className="w-full border border-neutral-300 p-2 outline-none focus:border-blue-600"
            placeholder="Ferry"
          />
        </div>

        <div>
          <label className="block text-neutral-500 mb-1">Subtitle</label>
          <input
            name="subtitle"
            required
            className="w-full border border-neutral-300 p-2 outline-none focus:border-blue-600"
            placeholder="gRPC Service Mesh"
          />
        </div>

        <div>
          <label className="block text-neutral-500 mb-1">Slug</label>
          <input
            name="slug"
            required
            className="w-full border border-neutral-300 p-2 outline-none focus:border-blue-600"
            placeholder="ferry-grpc-service-mesh"
          />
        </div>

        <div>
          <label className="block text-neutral-500 mb-1">Cover Image URL</label>
          <input
            name="coverImage"
            required
            className="w-full border border-neutral-300 p-2 outline-none focus:border-blue-600"
            placeholder="https://images.unsplash.com/..."
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-neutral-500 mb-1">
              Live URL (Optional)
            </label>
            <input
              name="liveUrl"
              className="w-full border border-neutral-300 p-2 outline-none focus:border-blue-600"
              placeholder="https://..."
            />
          </div>
          <div>
            <label className="block text-neutral-500 mb-1">
              Repo URL (Optional)
            </label>
            <input
              name="repoUrl"
              className="w-full border border-neutral-300 p-2 outline-none focus:border-blue-600"
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
            className="w-full border border-neutral-300 p-2 outline-none focus:border-blue-600"
            placeholder="TypeScript, Prisma, Next.js"
          />
        </div>

        <div>
          <label className="block text-neutral-500 mb-1">
            Summary (Short card description)
          </label>
          <textarea
            name="summary"
            required
            rows={2}
            className="w-full border border-neutral-300 p-2 outline-none focus:border-blue-600"
          />
        </div>

        <div>
          <label className="block text-neutral-500 mb-1">
            Article Content (Markdown / Detailed write-up)
          </label>
          <textarea
            name="content"
            required
            rows={8}
            className="w-full border border-neutral-300 p-2 outline-none focus:border-blue-600"
          />
        </div>

        <button
          type="submit"
          className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-mono mt-4 transition-colors"
        >
          commit_to_database()
        </button>
      </form>
    </div>
  );
}
