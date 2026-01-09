"use client";

import { useState } from "react";
import Link from "next/link";

export default function AiPage() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState<string | null>(null);

  return (
    <main style={{ padding: 24, maxWidth: 980, margin: "0 auto" }}>
      <Link href="/" style={{ color: "#2563eb", fontWeight: 700 }}>
        ← Αρχική
      </Link>

      <h1 style={{ marginTop: 12 }}>🤖 AI Βοηθός για το Σπίτι</h1>

      <p style={{ color: "#666", marginTop: 6 }}>
        Ο AI βοηθός θα απαντά με <strong>γενικές ασφαλείς οδηγίες</strong> και,
        όταν ο χρήστης συγκρίνει/επιλέγει προϊόντα, θα χρησιμοποιεί και
        <strong>ειδικές προδιαγραφές</strong> που έχουν ανεβάσει συνεργάτες ή
        προέρχονται από κατασκευαστές.
      </p>

      <div
        style={{
          marginTop: 16,
          padding: 12,
          borderRadius: 12,
          background: "#f3f7ff",
          border: "1px solid #c7d2fe",
          color: "#1d4ed8",
          fontWeight: 700,
        }}
      >
        ℹ️ Disclaimer: Οι ειδικές προδιαγραφές/οδηγίες προϊόντων προέρχονται από τον κατασκευαστή ή τον συνεργάτη/αντιπρόσωπο που διαθέτει το προϊόν.
      </div>

      <section
        style={{
          marginTop: 18,
          border: "1px solid #e5e7eb",
          borderRadius: 14,
          padding: 16,
        }}
      >
        <h3 style={{ marginTop: 0 }}>Δοκιμή (placeholder)</h3>
        <p style={{ color: "#666" }}>
          Προς το παρόν δεν είναι ενεργό. Μπορείς όμως να γράψεις μια ερώτηση και να
          δεις πώς θα “κάθεται” το UI.
        </p>

        <label style={{ fontWeight: 800, display: "block", marginBottom: 8 }}>
          Ερώτηση
        </label>

        <textarea
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          rows={4}
          placeholder="π.χ. Τι κόλλα να διαλέξω για πλακάκια σε μπαλκόνι;"
          style={{
            width: "100%",
            padding: 12,
            borderRadius: 12,
            border: "1px solid #e5e7eb",
            outline: "none",
          }}
        />

        <div style={{ marginTop: 12, display: "flex", gap: 10, flexWrap: "wrap" }}>
          <button
            onClick={() =>
              setAnswer(
                "🧪 Placeholder απάντηση: Ο AI βοηθός εδώ θα σου εξηγεί τα βασικά κριτήρια επιλογής, και αν έχεις διαλέξει προϊόντα, θα τα συγκρίνει με βάση specs (κατανάλωση/m², χρήση, χρόνους κλπ)."
              )
            }
            style={{
              padding: "10px 12px",
              borderRadius: 10,
              background: "#111827",
              color: "#fff",
              fontWeight: 800,
              border: "none",
              cursor: "pointer",
            }}
          >
            Δοκίμασε →
          </button>

          <Link
            href="/compare"
            style={{
              padding: "10px 12px",
              borderRadius: 10,
              border: "1px solid #111827",
              color: "#111827",
              fontWeight: 800,
              textDecoration: "none",
            }}
          >
            Πήγαινε στη Σύγκριση
          </Link>

          <Link
            href="/categories"
            style={{
              padding: "10px 12px",
              borderRadius: 10,
              border: "1px solid #e5e7eb",
              color: "#111827",
              fontWeight: 800,
              textDecoration: "none",
            }}
          >
            Κατηγορίες
          </Link>
        </div>

        {answer && (
          <div
            style={{
              marginTop: 14,
              borderTop: "1px solid #e5e7eb",
              paddingTop: 14,
            }}
          >
            <h4 style={{ margin: 0 }}>Απάντηση</h4>
            <p style={{ marginTop: 8, color: "#111827", lineHeight: 1.6 }}>{answer}</p>
          </div>
        )}
      </section>

      <section style={{ marginTop: 22 }}>
        <h2 style={{ marginTop: 0 }}>Τι θα γίνει μετά (roadmap)</h2>
        <ol style={{ color: "#444", lineHeight: 1.7 }}>
          <li>AI endpoint (server) με γενικές ασφαλείς απαντήσεις</li>
          <li>Σύνδεση με specs προϊόντων (από συνεργάτες / κατασκευαστές)</li>
          <li>Σύγκριση 2 προϊόντων με πίνακα + τελική σύσταση</li>
          <li>Προτροπή σε διαθέσιμα καταστήματα ανά περιοχή</li>
        </ol>
      </section>
    </main>
  );
}
