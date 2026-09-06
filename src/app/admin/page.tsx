import prisma from "@/lib/prisma";
import { cookies } from "next/headers";
import Link from "next/link";
import { loginAdmin, logoutAdmin, deleteProject } from "@/actions/admin";
import DeleteProjectButton from "@/components/DeleteProjectButton";
import ProjectForm from "@/components/ProjectForm";

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

          <ProjectForm editingProject={editingProject} />
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
                className={`p-4 border ${
                  proj.id === editId
                    ? "border-blue-600 bg-blue-50/20"
                    : "border-neutral-200 bg-neutral-50/50"
                }`}
              >
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <div className="font-semibold text-neutral-900 text-xs flex items-center gap-2">
                      {proj.title}
                      {proj.featured && (
                        <span className="text-[9px] bg-blue-600 text-white px-1.5 py-0.5">
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
