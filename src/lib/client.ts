export function getToken() {
  if (typeof window === "undefined") return null;
  return localStorage.getItem("xspiti_token");
}
export function setToken(token: string) {
  if (typeof window === "undefined") return;
  localStorage.setItem("xspiti_token", token);
}
export function clearToken() {
  if (typeof window === "undefined") return;
  localStorage.removeItem("xspiti_token");
}
export async function api<T>(path: string, opts: RequestInit = {}): Promise<T> {
  const token = getToken();
  const headers = new Headers(opts.headers || {});
  headers.set("Content-Type", "application/json");
  if (token) headers.set("Authorization", `Bearer ${token}`);
  const res = await fetch(path, { ...opts, headers });
  const txt = await res.text();
  const data = txt ? JSON.parse(txt) : null;
  if (!res.ok) throw new Error(data?.error || res.statusText);
  return data as T;
}
