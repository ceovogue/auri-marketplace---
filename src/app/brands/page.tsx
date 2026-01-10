import Link from "next/link";

export default function BrandsPage() {
  return (
    <main style={{ padding: 24, maxWidth: 980, margin: "0 auto" }}>
      <Link href="/" style={{ color: "#2563eb", fontWeight: 800 }}>
        ← Αρχική
      </Link>

      <h1 style={{ marginTop: 12 }}>🏷️ Founder Brands</h1>

      <p style={{ color: "#666", marginTop: 6, lineHeight: 1.6 }}>
        Τα <strong>Founder Brands</strong> είναι στρατηγικοί συνεργάτες της πλατφόρμας.
        Έχουν προνομιακή προβολή, επιβεβαιωμένα στοιχεία και μπορούν να εμφανίζονται
        σε περισσότερες κατηγορίες, περιοχές και “οδηγούς αγοράς”.
      </p>

      <div
        style={{
          marginTop: 18,
          display: "grid",
          gap: 14,
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
        }}
      >
        <section style={{ border: "1px solid #e5e7eb", borderRadius: 14, padding: 16 }}>
          <h3 style={{ marginTop: 0 }}>Τι κερδίζει ένα Founder Brand</h3>
          <ul style={{ margin: 0, paddingLeft: 18, color: "#444", lineHeight: 1.7 }}>
            <li>Προβολή σε σχετικές κατηγορίες & οδηγούς</li>
            <li>Επιβεβαίωση brand + αξιοπιστία</li>
            <li>Παρουσία σε “Χρήσιμα & Νέα” άρθρα/links</li>
            <li>Προτεραιότητα σε features (π.χ. AI specs / comparison)</li>
          </ul>
        </section>

        <section style={{ border: "1px solid #e5e7eb", borderRadius: 14, padding: 16 }}>
          <h3 style={{ marginTop: 0 }}>Πώς εμφανίζεται στον χρήστη</h3>
          <p style={{ color: "#666", lineHeight: 1.6 }}>
            Η πλατφόρμα δεν προωθεί “τυχαία” brands.
            Ένα Founder Brand εμφανίζεται ως <strong>εγκεκριμένο</strong> και
            συνδέεται με διαθέσιμα καταστήματα / αντιπροσώπους ανά περιοχή.
          </p>
          <p style={{ color: "#666", lineHeight: 1.6, marginBottom: 0 }}>
            Δεν θα φαίνεται ότι “σπρώχνουμε” κάτι. Θα φαίνεται ότι είναι
            <strong>επίσημος πυλώνας</strong> της αγοράς.
          </p>
        </section>

        <section style={{ border: "1px solid #e5e7eb", borderRadius: 14, padding: 16 }}>
          <h3 style={{ marginTop: 0 }}>Σε ποιους ταιριάζει</h3>
          <ul style={{ margin: 0, paddingLeft: 18, color: "#444", lineHeight: 1.7 }}>
            <li>Brands με δίκτυο συνεργατών (dealers)</li>
            <li>Brands με τεχνικά datasheets & προδιαγραφές</li>
            <li>Brands που θέλουν “σοβαρή” παρουσία</li>
          </ul>
        </section>

        <section style={{ border: "1px solid #e5e7eb", borderRadius: 14, padding: 16 }}>
          <h3 style={{ marginTop: 0 }}>📩 Εκδήλωση ενδιαφέροντος</h3>
          <p style={{ color: "#666", lineHeight: 1.6 }}>
            Αν είσαι brand και θέλεις να μπεις σαν Founder Brand,
            συμπλήρωσε τη φόρμα και θα επικοινωνήσουμε.
          </p>

          <Link
            href="/brands/join"
            style={{
              display: "inline-block",
              marginTop: 8,
              padding: "10px 12px",
              borderRadius: 10,
              background: "#111827",
              color: "#fff",
              fontWeight: 900,
              textDecoration: "none",
            }}
          >
            Γίνε Founder Brand →
          </Link>
        </section>
      </div>

      <hr style={{ margin: "24px 0", border: "none", borderTop: "1px solid #e5e7eb" }} />

      <section>
        <h2 style={{ marginTop: 0 }}>✨ Σημείωση</h2>
        <p style={{ color: "#666", lineHeight: 1.6 }}>
          Το πρόγραμμα Founder Brands το κλειδώνουμε όταν ολοκληρωθεί:
          <strong> catalog → shops → specs → σύγκριση → AI</strong>.
          Έτσι δεν θα είναι απλά “λογότυπα”, αλλά πραγματική λειτουργική υπεραξία.
        </p>
      </section>
    </main>
  );
}
