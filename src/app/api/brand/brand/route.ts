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
  if (!name) return NextResponse.json({ error: "Missing field (name)" }, { status: 400 });

  const brand = await prisma.brand.upsert({
    where: { ownerId: user.id },
    update: { name },
    create: { name, ownerId: user.id },
  });

  return NextResponse.json(brand);
}
