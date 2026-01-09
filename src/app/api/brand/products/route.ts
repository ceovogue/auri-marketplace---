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

  const brand = await prisma.brand.findUnique({ where: { ownerId: user.id } });
  if (!brand) {
    return NextResponse.json({ error: "Brand profile missing. Call POST /api/brand/brand first." }, { status: 400 });
  }

  const body = await req.json().catch(() => ({}));
  const { name, category, description } = body as { name?: string; category?: string; description?: string };
  if (!name) return NextResponse.json({ error: "Missing field (name)" }, { status: 400 });

  const product = await prisma.product.create({
    data: { brandId: brand.id, name, category, description },
  });

  return NextResponse.json(product);
}
