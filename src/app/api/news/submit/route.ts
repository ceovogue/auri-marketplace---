import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getBearerToken, verifyJwt } from "@/lib/auth";

function slugify(s: string) {
  return s
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

export async function POST(req: Request) {
  const token = getBearerToken(req.headers.get("authorization"));
  const user = token ? verifyJwt(token) : null;

  if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const body = await req.json().catch(() => ({}));
  const { title, excerpt, content, links, isPinned } = body as {
    title?: string;
    excerpt?: string;
    content?: string;
    links?: { label: string; url: string }[];
    isPinned?: boolean;
  };

  if (!title || !content) {
    return NextResponse.json({ error: "Missing fields (title, content)" }, { status: 400 });
  }

  const baseSlug = slugify(title);
  let slug = baseSlug;
  let i = 1;
  while (await prisma.newsPost.findUnique({ where: { slug } })) {
    slug = `${baseSlug}-${i++}`;
  }

  const created = await prisma.newsPost.create({
    data: {
      title,
      slug,
      excerpt,
      content,
      linksJson: links ? JSON.stringify(links) : null,
      isPinned: !!isPinned,
      authorId: user.id,
      status: "PENDING",
    },
  });

  return NextResponse.json({ ok: true, createdId: created.id, status: created.status });
}
