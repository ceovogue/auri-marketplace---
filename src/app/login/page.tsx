"use client";

import { useState } from "react";
import { api, setToken } from "@/lib/client";

export default function LoginPage() {
  const [email, setEmail] = useState("admin@xspiti.gr");
  const [password, setPassword] = useState("Admin123!");
  const [msg, setMsg] = useState<string | null>(null);

  return (
    <main className="grid" style={{ maxWidth: 520 }}>
      <div className="card">
        <h2 style={{ marginTop: 0 }}>Σύνδεση</h2>
        <p className="muted">Χρησιμοποίησε τα seeded credentials από το README.</p>

        <label className="muted">Email</label>
        <input className="input" value={email} onChange={(e) => setEmail(e.target.value)} />

        <div style={{ height: 10 }} />
        <label className="muted">Password</label>
        <input className="input" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />

        <div style={{ height: 14 }} />
        <button
          className="btn"
          onClick={async () => {
            setMsg(null);
            try {
              const data = await api<{ token: string; user: { email: string; role: string } }>(
                "/api/auth/login",
                { method: "POST", body: JSON.stringify({ email, password }) }
              );
              setToken(data.token);
              setMsg(`OK! Συνδέθηκες ως ${data.user.email} (${data.user.role})`);
              window.location.href = "/dashboard";
            } catch (e: any) {
              setMsg(e.message || "Σφάλμα");
            }
          }}
        >
          Login
        </button>

        {msg && <p style={{ marginBottom: 0, marginTop: 12 }}>{msg}</p>}
      </div>
    </main>
  );
}
