import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import bcrypt from "bcryptjs";
import { Role } from "@prisma/client";

export async function POST(req: Request) {
  const body = await req.json().catch(() => ({}));
  const { email, password, role } = body as { email?: string; password?: string; role?: Role };

  if (!email || !password || !role) return NextResponse.json({ error: "Missing fields" }, { status: 400 });

  const exists = await prisma.user.findUnique({ where: { email }});
  if (exists) return NextResponse.json({ error: "Email already exists" }, { status: 409 });

  const passwordHash = await bcrypt.hash(password, 10);
  const user = await prisma.user.create({ data: { email, passwordHash, role }});

  return NextResponse.json({ id: user.id, email: user.email, role: user.role });
}
