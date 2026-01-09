export const dynamic = "force-dynamic";

import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getBearerToken, verifyJwt } from "@/lib/auth";
import { Role } from "@prisma/client";

export async function POST(req: Request) {
  const token = getBearerToken(req.headers.get("authorization"));
  const user = token ? verifyJwt(token) : null;

  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  if (user.role !== Role.BRAND) {
    return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  }

  const body = await req.json().catch(() => ({}));
  const name = typeof body.name === "string" ? body.name.trim() : "";

  if (!name) {
    return NextResponse.json({ error: "Missing field (name)" }, { status: 400 });
  }

  const brand = await prisma.brand.upsert({
    where: { userId: user.id },
    update: { name },
    create: {
      name,
      userId: user.id,
    },
  });

  return NextResponse.json(brand);
}

export async function DELETE(req: Request) {
  const token = getBearerToken(req.headers.get("authorization"));
  const user = token ? verifyJwt(token) : null;

  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  if (user.role !== Role.BRAND) {
    return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  }

  await prisma.brand.deleteMany({
    where: { userId: user.id },
  });

  return NextResponse.json({ success: true });
}
