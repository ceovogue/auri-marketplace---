export const dynamic = "force-dynamic";

import { NextResponse } from "next/server";
import { getBearerToken, verifyJwt } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { Role } from "@prisma/client";

export async function POST(req: Request) {
  const token = getBearerToken(req.headers.get("authorization"));
  const user = token ? verifyJwt(token) : null;

  if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  if (user.role !== Role.BRAND) return NextResponse.json({ error: "Forbidden" }, { status: 403 });

  const body = await req.json().catch(() => ({}));
  const { name } = body as { name?: string };

  const cleanName = typeof name === "string" ? name.trim() : "";
  if (!cleanName) return NextResponse.json({ error: "Missing field (name)" }, { status: 400 });

  const existing = await prisma.brand.findFirst({
    where: { ownerId: user.id },
    select: { id: true },
  });

  const brand = existing
    ? await prisma.brand.update({
        where: { id: existing.id },
        data: { name: cleanName },
      })
    : await prisma.brand.create({
        data: { name: cleanName, ownerId: user.id },
      });

  return NextResponse.json(brand);
}

export async function DELETE(req: Request) {
  const token = getBearerToken(req.headers.get("authorization"));
  const user = token ? verifyJwt(token) : null;

  if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  if (user.role !== Role.BRAND) return NextResponse.json({ error: "Forbidden" }, { status: 403 });

  await prisma.brand.deleteMany({
    where: { ownerId: user.id },
  });

  return NextResponse.json({ success: true });
}
