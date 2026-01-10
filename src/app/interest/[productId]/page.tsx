"use client";

import { useParams } from "next/navigation";
import { useState } from "react";
import { api } from "@/lib/client";

export default function InterestPage() {
  const params = useParams<{ productId: string }>();
  const productId = params.productId;

  const [consumerName, setConsumerName] = useState("");
  const [consumerEmail, setConsumerEmail] = useState("");
  const [consumerPhone, setConsumerPhone] = useState("");
  const [postalCode, setPostalCode] = useState("10557");
  const [message, setMessage] = useState("");
  const [msg, setMsg] = useState<string | null>(null);

  return (
    <main className="grid" style={{ maxWidth: 620 }}>
      <div className="card">
        <h2 style={{ marginTop: 0 }}>Φόρμα ενδιαφέροντος</h2>
        <p className="muted">ProductId: <span className="badge">{productId}</span></p>

        <label className="muted">Ονοματεπώνυμο</label>
        <input className="input" value={consumerName} onChange={(e) => setConsumerName(e.target.value)} />

        <div style={{ height: 10 }} />
        <label className="muted">Email</label>
        <input className="input" value={consumerEmail} onChange={(e) => setConsumerEmail(e.target.value)} />

        <div style={{ height: 10 }} />
        <label className="muted">Τηλέφωνο (προαιρετικό)</label>
        <input className="input" value={consumerPhone} onChange={(e) => setConsumerPhone(e.target.value)} />

        <div style={{ height: 10 }} />
        <label className="muted">ΤΚ</label>
        <input className="input" value={postalCode} onChange={(e) => setPostalCode(e.target.value)} />

        <div style={{ height: 10 }} />
        <label className="muted">Μήνυμα</label>
        <textarea className="input" rows={4} value={message} onChange={(e) => setMessage(e.target.value)} />

        <div style={{ height: 14 }} />
        <button
          className="btn"
          onClick={async () => {
            setMsg(null);
            try {
              const data = await api<{ leadId: string; assignedDealer: any | null }>(
                "/api/leads",
                {
                  method: "POST",
                  body: JSON.stringify({ productId, consumerName, consumerEmail, consumerPhone, postalCode, message })
                }
              );
              if (data.assignedDealer) {
                setMsg(`✅ Καταχωρήθηκε! Ανατέθηκε στον dealer: ${data.assignedDealer.name}`);
              } else {
                setMsg("✅ Καταχωρήθηκε! (Δεν βρέθηκε ενεργός dealer για ανάθεση.)");
              }
            } catch (e: any) {
              setMsg(e.message || "Σφάλμα");
            }
          }}
        >
          Υποβολή
        </button>

        {msg && <p style={{ marginBottom: 0, marginTop: 12 }}>{msg}</p>}
      </div>
    </main>
  );
}
