export const dynamic = "force-dynamic";

import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getBearerToken, verifyJwt } from "@/lib/auth";
import { Role } from "@prisma/client";

export async function GET(req: Request) {
  const token = getBearerToken(req.headers.get("authorization"));
  const user = token ? verifyJwt(token) : null;

  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  if (user.role !== Role.BRAND) {
    return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  }

  // Βρίσκουμε το Brand του χρήστη
  const brand = await prisma.brand.findUnique({
    where: { userId: user.id },
    select: { id: true },
  });

  if (!brand) {
    return NextResponse.json(
      { error: "Brand profile missing. Create brand first." },
      { status: 400 }
    );
  }

  // Στο minimal schema ΔΕΝ υπάρχει relation Brand.products,
  // οπότε παίρνουμε products μέσω brandId από το Product table (αν υπάρχει).
  const products = await prisma.product.findMany({
    where: { brandId: brand.id },
    orderBy: { createdAt: "desc" },
  });

  return NextResponse.json(products);
}
