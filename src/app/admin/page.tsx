import prisma from "@/lib/prisma";
import { cookies } from "next/headers";
import Link from "next/link";
import {
  loginAdmin,
  logoutAdmin,
  createProject,
  updateProject,
  deleteProject,
} from "../../actions/admin";
import DeleteProjectButton from "@/components/DeleteProjectButton";

const COOKIE_NAME = "admin_auth_token";

export default async function AdminPage({
  searchParams,
}: {
  searchParams: Promise<{ edit?: string }>;
}) {
  const cookieStore = await cookies();
  const sessionToken = cookieStore.get(COOKIE_NAME);
  const isAuthenticated =
    sessionToken?.value ===
    (process.env.ADMIN_SESSION_SECRET || "authenticated");

  if (!isAuthenticated) {
    return (
      <div className="max-w-md mx-auto min-h-[70vh] flex flex-col justify-center px-6 font-mono text-xs">
        <div className="border border-neutral-200 bg-white p-6 shadow-xs">
          <span className="text-neutral-400">// access_gate.sh</span>
          <h1 className="text-base font-bold text-neutral-900 mt-2 mb-4">
            admin.authenticate()
          </h1>
          <form action={loginAdmin} className="space-y-4">
            <div>
              <label className="block text-neutral-500 mb-1">Passphrase</label>
              <input
                type="password"
                name="password"
                required
                className="w-full border border-neutral-300 p-2.5 outline-none focus:border-blue-600 bg-neutral-50/50"
              />
            </div>
            <button
              type="submit"
              className="w-full py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-mono cursor-pointer transition-colors"
            >
              verify_credentials() →
            </button>
          </form>
        </div>
      </div>
    );
  }

  const { edit: editId } = await searchParams;
  const projects = await prisma.project.findMany({
    orderBy: { createdAt: "desc" },
  });
  const editingProject = editId ? projects.find((p) => p.id === editId) : null;

  return (
    <div className="max-w-5xl mx-auto p-8 border-x border-neutral-200 min-h-screen bg-white font-mono text-xs">
      <div className="mb-8 pb-4 border-b border-neutral-200 flex justify-between items-end">
        <div>
          <span className="text-neutral-400">// internal pipeline</span>
          <h1 className="text-lg font-bold text-neutral-900 mt-1">
            {editingProject
              ? `edit_project(${editingProject.slug})`
              : "admin.control_panel()"}
          </h1>
        </div>
        <div className="flex gap-4 items-center">
          <Link href="/" className="text-neutral-500 hover:text-black">
            view_site()
          </Link>
          <form action={logoutAdmin}>
            <button
              type="submit"
              className="text-red-500 hover:underline cursor-pointer"
            >
              terminate_session()
            </button>
          </form>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Project Form (Create / Edit) */}
        <div className="lg:col-span-7">
          <div className="flex justify-between items-center mb-4">
            <span className="text-neutral-400 uppercase text-[10px] tracking-wider">
              {editingProject ? "Modify Record" : "Create New Entry"}
            </span>
            {editingProject && (
              <Link
                href="/admin"
                className="text-blue-600 hover:underline text-[11px]"
              >
                + new record
              </Link>
            )}
          </div>

          <form
            action={editingProject ? updateProject : createProject}
            className="space-y-4"
          >
            {editingProject && (
              <input type="hidden" name="id" value={editingProject.id} />
            )}

            <div>
              <label className="block text-neutral-500 mb-1">Title</label>
              <input
                name="title"
                defaultValue={editingProject?.title || ""}
                required
                className="w-full border border-neutral-300 p-2 outline-none focus:border-blue-600"
                placeholder="StudyPilot"
              />
            </div>

            <div>
              <label className="block text-neutral-500 mb-1">Subtitle</label>
              <input
                name="subtitle"
                defaultValue={editingProject?.subtitle || ""}
                required
                className="w-full border border-neutral-300 p-2 outline-none focus:border-blue-600"
                placeholder="Academic Workflow Engine"
              />
            </div>

            <div>
              <label className="block text-neutral-500 mb-1">Slug (URL)</label>
              <input
                name="slug"
                defaultValue={editingProject?.slug || ""}
                required
                className="w-full border border-neutral-300 p-2 outline-none focus:border-blue-600"
                placeholder="studypilot-workflow-engine"
              />
            </div>

            {/* Featured Highlight Checkbox */}
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
                <span className="text-blue-600 font-semibold">
                  [★ featured]
                </span>{" "}
                Highlight on top of repository matrix
              </label>
            </div>

            <div>
              <label className="block text-neutral-500 mb-1">
                Project Cover Image{" "}
                {editingProject && "(Leave empty to keep existing)"}
              </label>
              <input
                type="file"
                name="image"
                accept="image/*"
                required={!editingProject}
                className="w-full border border-neutral-300 p-2 text-neutral-600 outline-none file:mr-4 file:py-1 file:px-3 file:border-0 file:bg-neutral-100 file:text-xs file:font-mono file:text-neutral-700 hover:file:bg-neutral-200 cursor-pointer"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-neutral-500 mb-1">
                  Live URL (Optional)
                </label>
                <input
                  name="liveUrl"
                  defaultValue={editingProject?.liveUrl || ""}
                  className="w-full border border-neutral-300 p-2 outline-none focus:border-blue-600"
                />
              </div>
              <div>
                <label className="block text-neutral-500 mb-1">
                  Repo URL (Optional)
                </label>
                <input
                  name="repoUrl"
                  defaultValue={editingProject?.repoUrl || ""}
                  className="w-full border border-neutral-300 p-2 outline-none focus:border-blue-600"
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
                className="w-full border border-neutral-300 p-2 outline-none focus:border-blue-600"
                placeholder="TypeScript, Next.js, Spring Boot"
              />
            </div>

            <div>
              <label className="block text-neutral-500 mb-1">
                Summary (Short card description)
              </label>
              <textarea
                name="summary"
                defaultValue={editingProject?.summary || ""}
                required
                rows={2}
                className="w-full border border-neutral-300 p-2 outline-none focus:border-blue-600"
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
                rows={8}
                className="w-full border border-neutral-300 p-2 outline-none focus:border-blue-600"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-mono cursor-pointer transition-colors"
            >
              {editingProject ? "save_modifications()" : "commit_to_database()"}
            </button>
          </form>
        </div>

        {/* Existing Projects List */}
        <div className="lg:col-span-5 border-t lg:border-t-0 lg:border-l border-neutral-200 lg:pl-8">
          <span className="text-neutral-400 uppercase text-[10px] tracking-wider block mb-4">
            Published Projects ({projects.length})
          </span>

          <div className="space-y-3">
            {projects.map((proj) => (
              <div
                key={proj.id}
                className={`p-4 border ${proj.id === editId ? "border-blue-600 bg-blue-50/20" : "border-neutral-200 bg-neutral-50/50"}`}
              >
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <div className="font-semibold text-neutral-900 text-xs flex items-center gap-2">
                      {proj.title}
                      {proj.featured && (
                        <span className="text-[9px] bg-blue-600 text-white px-1.5 py-0.2">
                          FEATURED
                        </span>
                      )}
                    </div>
                    <div className="text-[11px] text-neutral-500 truncate max-w-50 mt-0.5">
                      {proj.subtitle}
                    </div>
                  </div>
                </div>

                <div className="mt-3 pt-3 border-t border-neutral-200 flex justify-between items-center text-[11px]">
                  <Link
                    href={`/admin?edit=${proj.id}`}
                    className="text-blue-600 hover:underline"
                  >
                    edit()
                  </Link>
                  {/* Replace the old form: */}
                  <form action={deleteProject}>
                    <input type="hidden" name="id" value={proj.id} />
                    <DeleteProjectButton />
                  </form>
                </div>
              </div>
            ))}
            {projects.length === 0 && (
              <div className="text-neutral-400 text-xs py-4">
                // No projects published.
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
