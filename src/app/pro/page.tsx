import Link from 'next/link';

export default function ProHomePage() {
  return (
    <main className="pageWrap">
      <header className="pageHeader">
        <h1>Λειτουργία Επαγγελματία</h1>
        <p>Παρουσίαση της πλατφόρμας xspiti σε dealers & brands.</p>
      </header>

      <section className="contentSection">
        <ul>
          <li>Τα menus οδηγούν σε placeholders με τη λέξη <b>ΠΛΗΡΟΦΟΡΙΕΣ</b>.</li>
          <li>Στόχος: πλήρης παρουσίαση του concept χωρίς “ψεύτικα” προϊόντα.</li>
        </ul>
        <p style={{ marginTop: 16 }}>
          <Link href="/pro/catalog?title=Demo" style={{ fontWeight: 900 }}>
            Άνοιγμα Demo Καταλόγου →
          </Link>
        </p>
        <p style={{ marginTop: 24 }}>
          <Link href="/" style={{ fontWeight: 800 }}>
            Επιστροφή σε Καταναλωτή →
          </Link>
        </p>
      </section>
    </main>
  );
}
