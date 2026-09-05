"use server";

import prisma from "@/lib/prisma";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

const COOKIE_NAME = "admin_auth_token";

async function verifyAuth() {
  const cookieStore = await cookies();
  const token = cookieStore.get(COOKIE_NAME);
  if (token?.value !== (process.env.ADMIN_SESSION_SECRET || "authenticated")) {
    throw new Error("Unauthorized");
  }
}

export async function loginAdmin(formData: FormData) {
  const password = formData.get("password") as string;

  if (!process.env.ADMIN_PASSWORD || password !== process.env.ADMIN_PASSWORD) {
    redirect("/admin?error=invalid_passphrase");
  }

  const cookieStore = await cookies();
  cookieStore.set(
    COOKIE_NAME,
    process.env.ADMIN_SESSION_SECRET || "authenticated",
    {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
      maxAge: 60 * 60 * 24 * 7,
    },
  );

  redirect("/admin");
}

export async function logoutAdmin() {
  const cookieStore = await cookies();
  cookieStore.delete(COOKIE_NAME);
  redirect("/admin");
}

export async function createProject(formData: FormData) {
  await verifyAuth();

  const title = formData.get("title") as string;
  const subtitle = formData.get("subtitle") as string;
  const slug = formData.get("slug") as string;
  const summary = formData.get("summary") as string;
  const content = formData.get("content") as string;
  const liveUrl = formData.get("liveUrl") as string;
  const repoUrl = formData.get("repoUrl") as string;
  const rawTags = formData.get("tags") as string;
  const featured = formData.get("featured") === "on";
  const imageFile = formData.get("image") as File | null;

  let coverImage = "";
  if (imageFile && imageFile.size > 0) {
    const bytes = await imageFile.arrayBuffer();
    const buffer = Buffer.from(bytes);
    coverImage = `data:${imageFile.type};base64,${buffer.toString("base64")}`;
  }

  if (!coverImage) throw new Error("Cover image is required");

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
      featured,
    },
  });

  revalidatePath("/");
  revalidatePath("/admin");
  redirect("/admin");
}

export async function updateProject(formData: FormData) {
  await verifyAuth();

  const id = formData.get("id") as string;
  const title = formData.get("title") as string;
  const subtitle = formData.get("subtitle") as string;
  const slug = formData.get("slug") as string;
  const summary = formData.get("summary") as string;
  const content = formData.get("content") as string;
  const liveUrl = formData.get("liveUrl") as string;
  const repoUrl = formData.get("repoUrl") as string;
  const rawTags = formData.get("tags") as string;
  const featured = formData.get("featured") === "on";
  const imageFile = formData.get("image") as File | null;

  const dataToUpdate: any = {
    title,
    subtitle,
    slug,
    summary,
    content,
    liveUrl: liveUrl || null,
    repoUrl: repoUrl || null,
    tags: rawTags
      .split(",")
      .map((t) => t.trim())
      .filter(Boolean),
    featured,
  };

  if (imageFile && imageFile.size > 0) {
    const bytes = await imageFile.arrayBuffer();
    const buffer = Buffer.from(bytes);
    dataToUpdate.coverImage = `data:${imageFile.type};base64,${buffer.toString("base64")}`;
  }

  await prisma.project.update({
    where: { id },
    data: dataToUpdate,
  });

  revalidatePath("/");
  revalidatePath("/admin");
  redirect("/admin");
}

export async function deleteProject(formData: FormData) {
  await verifyAuth();
  const id = formData.get("id") as string;

  await prisma.project.delete({
    where: { id },
  });

  revalidatePath("/");
  revalidatePath("/admin");
  redirect("/admin");
}
