import jwt from "jsonwebtoken";
import { Role } from "@prisma/client";

export type JwtUser = { id: string; email: string; role: Role };

const secret = process.env.JWT_SECRET || "dev-secret";

export function signJwt(user: JwtUser) {
  return jwt.sign(user, secret, { expiresIn: "7d" });
}

export function verifyJwt(token: string): JwtUser | null {
  try {
    return jwt.verify(token, secret) as JwtUser;
  } catch {
    return null;
  }
}

export function getBearerToken(authHeader: string | null) {
  if (!authHeader) return null;
  const m = authHeader.match(/^Bearer\s+(.+)$/i);
  return m ? m[1] : null;
}
