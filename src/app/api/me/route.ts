import { NextResponse } from "next/server";
import { getBearerToken, verifyJwt } from "@/lib/auth";

export async function GET(req: Request) {
  const token = getBearerToken(req.headers.get("authorization"));
  const user = token ? verifyJwt(token) : null;
  if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  return NextResponse.json(user);
}
