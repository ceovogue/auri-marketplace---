"use client";

import { useState } from "react";
import { api } from "@/lib/client";

export default function SubmitNewsPage() {
  const [title, setTitle] = useState("");
  const [excerpt, setExcerpt] = useState("");
  const [content, setContent] = useState("");
  const [links, setLinks] = useState([{ label: "", url: "" }]);
  const [msg, setMsg] = useState<string | null>(null);
  const [pinned, setPinned] = useState(false);

  return (
    <main className="grid" style={{ maxWidth: 820 }}>
      <div className="card">
        <h2 style={{ marginTop: 0 }}>Υποβολή — Χρήσιμα & Νέα</h2>
        <p className="muted">
          Γράψε άρθρο/οδηγία/νόμο/χρήσιμο link. Η δημοσίευση γίνεται μετά από έγκριση.
        </p>

        <label className="muted">Τίτλος</label>
        <input className="input" value={title} onChange={(e) => setTitle(e.target.value)} />

        <div style={{ height: 10 }} />
        <label className="muted">Σύνοψη (προαιρετικό)</label>
        <input className="input" value={excerpt} onChange={(e) => setExcerpt(e.target.value)} />

        <div style={{ height: 10 }} />
        <label className="muted">Κείμενο</label>
        <textarea className="input" rows={10} value={content} onChange={(e) => setContent(e.target.value)} />

        <div style={{ height: 10 }} />
        <label className="muted">
          <input type="checkbox" checked={pinned} onChange={(e) => setPinned(e.target.checked)} /> Προτεινόμενο (Pinned)
        </label>

        <div style={{ height: 14 }} />
        <h3 style={{ marginTop: 0 }}>Links</h3>

        {links.map((l, idx) => (
          <div key={idx} className="grid" style={{ gridTemplateColumns: "1fr 1fr", gap: 10, marginBottom: 10 }}>
            <input
              className="input"
              placeholder="Label (π.χ. Νόμος 4495/17)"
              value={l.label}
              onChange={(e) => {
                const next = [...links];
                next[idx].label = e.target.value;
                setLinks(next);
              }}
            />
            <input
              className="input"
              placeholder="URL"
              value={l.url}
              onChange={(e) => {
                const next = [...links];
                next[idx].url = e.target.value;
                setLinks(next);
              }}
            />
          </div>
        ))}

        <button className="btn secondary" type="button" onClick={() => setLinks([...links, { label: "", url: "" }])}>
          + Προσθήκη link
        </button>

        <div style={{ height: 14 }} />

        <button
          className="btn"
          onClick={async () => {
            setMsg(null);
            try {
              await api("/api/news/submit", {
                method: "POST",
                body: JSON.stringify({
                  title,
                  excerpt,
                  content,
                  isPinned: pinned,
                  links: links.filter((x) => x.label && x.url),
                }),
              });

              setMsg("✅ Υποβλήθηκε για έγκριση!");
              setTitle("");
              setExcerpt("");
              setContent("");
              setLinks([{ label: "", url: "" }]);
              setPinned(false);
            } catch (e: any) {
              setMsg(e.message || "Σφάλμα");
            }
          }}
        >
          Υποβολή
        </button>

        {msg && <p style={{ marginTop: 12 }}>{msg}</p>}
      </div>
    </main>
  );
}
