import Link from "next/link";

export default function ProductTypePage({ params }: { params: { id: string } }) {
  const id = decodeURIComponent(params.id);

  return (
    <main style={{ padding: 24, maxWidth: 920, margin: "0 auto" }}>
      <Link href="/categories" style={{ color: "#2563eb", fontWeight: 700 }}>
        ← Πίσω στις κατηγορίες
      </Link>

      <h1 style={{ marginTop: 12 }}>Είδος: {id.replaceAll("-", " ")}</h1>

      <p style={{ color: "#666", marginTop: 6 }}>
        Εδώ θα εμφανίζονται διαθέσιμα προϊόντα/μάρκες και καταστήματα ανά περιοχή.
      </p>

      <div
        style={{
          marginTop: 18,
          display: "grid",
          gap: 14,
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
        }}
      >
        {/* Placeholder: AI help */}
        <section style={{ border: "1px solid #e5e7eb", borderRadius: 14, padding: 16 }}>
          <h3 style={{ margin: 0 }}>🤖 Ρώτα το AI</h3>
          <p style={{ color: "#666", marginTop: 8 }}>
            Θα σε βοηθήσει να επιλέξεις σωστό τύπο λύσης (π.χ. C2/S1), πριν πας σε μάρκες ή shop.
          </p>
          <Link
            href="/ai"
            style={{
              display: "inline-block",
              marginTop: 10,
              padding: "10px 12px",
              borderRadius: 10,
              background: "#111827",
              color: "#fff",
              fontWeight: 700,
            }}
          >
            Άνοιγμα AI →
          </Link>
        </section>

        {/* Placeholder: Shops by area */}
        <section style={{ border: "1px solid #e5e7eb", borderRadius: 14, padding: 16 }}>
          <h3 style={{ margin: 0 }}>📍 Διαθέσιμα καταστήματα</h3>
          <p style={{ color: "#666", marginTop: 8 }}>
            Θα εμφανίζονται συνεργάτες ανά περιοχή (ΤΚ/πόλη) που διαθέτουν το είδος.
          </p>
          <div style={{ marginTop: 10, color: "#111827", fontWeight: 700 }}>
            (Προσωρινό)
          </div>
          <ul style={{ marginTop: 8, paddingLeft: 16, color: "#666" }}>
            <li>Κατάστημα Α — Αθήνα</li>
            <li>Κατάστημα Β — Πειραιάς</li>
            <li>Κατάστημα Γ — Θεσσαλονίκη</li>
          </ul>
        </section>

        {/* Placeholder: Compare */}
        <section style={{ border: "1px solid #e5e7eb", borderRadius: 14, padding: 16 }}>
          <h3 style={{ margin: 0 }}>🟦 Σύγκριση προϊόντων</h3>
          <p style={{ color: "#666", marginTop: 8 }}>
            Θα μπορείς να επιλέξεις 2 προϊόντα και να δεις κατανάλωση/m², χρόνο εφαρμογής, χρήσεις κλπ.
          </p>
          <Link
            href="/compare"
            style={{
              display: "inline-block",
              marginTop: 10,
              padding: "10px 12px",
              borderRadius: 10,
              background: "#2563eb",
              color: "#fff",
              fontWeight: 700,
            }}
          >
            Πήγαινε στη Σύγκριση →
          </Link>
        </section>
      </div>

      <hr style={{ margin: "24px 0", border: "none", borderTop: "1px solid #e5e7eb" }} />

      <section>
        <h2 style={{ marginTop: 0 }}>📌 Τι θα μπει εδώ αργότερα</h2>
        <ol style={{ color: "#444", lineHeight: 1.6 }}>
          <li>Φίλτρο περιοχής (ΤΚ / πόλη)</li>
          <li>Λίστα προϊόντων από shopowners (με link στο e-shop)</li>
          <li>Προαιρετικές τιμές / προσφορές</li>
          <li>Κουμπί: “Πρόσθεσε στη σύγκριση”</li>
          <li>AI: γενικές οδηγίες + ειδικές οδηγίες προϊόντων (με disclaimer)</li>
        </ol>
      </section>
    </main>
  );
}
