import { headers } from "next/headers";

/**
 * Returns an absolute base URL for server-side fetches.
 * Works behind proxies (Vercel/NGINX) and across multiple domains.
 *
 * Priority:
 * 1) NEXT_PUBLIC_BASE_URL or NEXT_PUBLIC_SITE_URL (explicit override)
 * 2) Request headers (x-forwarded-proto/host)
 * 3) http://localhost:3000 (dev fallback)
 */
export function getBaseUrl() {
  const envBase = process.env.NEXT_PUBLIC_BASE_URL || process.env.NEXT_PUBLIC_SITE_URL;
  if (envBase) return envBase.replace(/\/$/, "");

  try {
    const h = headers();
    const proto = (h.get("x-forwarded-proto") || "http").split(",")[0].trim();
    const host =
      (h.get("x-forwarded-host") || h.get("host") || "").split(",")[0].trim();

    if (host) return `${proto}://${host}`.replace(/\/$/, "");
  } catch {
    // headers() not available (client) - ignore
  }

  return "http://localhost:3000";
}
