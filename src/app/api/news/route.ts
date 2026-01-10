import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  const posts = await prisma.newsPost.findMany({
    where: { status: "PUBLISHED" },
    orderBy: [{ isPinned: "desc" }, { publishedAt: "desc" }, { createdAt: "desc" }],
    take: 50,
  });

  return NextResponse.json(posts);
}
