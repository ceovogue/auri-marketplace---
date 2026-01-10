import Link from 'next/link';

export default function ProCatalogPlaceholderPage({
  searchParams,
}: {
  searchParams?: { title?: string };
}) {
  const title = searchParams?.title ?? 'Κατάλογος';

  return (
    <main className="pageWrap">
      <header className="pageHeader">
        <h1>{title}</h1>
        <p>Σε αυτό το σημείο θα εμφανίζονται πληροφορίες προϊόντων, specs και οδηγίες για επαγγελματίες.</p>
      </header>

      <section className="contentSection" style={{ textAlign: 'center', padding: '48px 0' }}>
        <div style={{ fontSize: 48, fontWeight: 900, letterSpacing: 2 }}>ΠΛΗΡΟΦΟΡΙΕΣ</div>
        <p style={{ marginTop: 12, color: 'var(--muted)' }}>
          (MVP demo placeholder για παρουσίαση σε επαγγελματίες)
        </p>
      </section>

      <section className="contentSection" style={{ textAlign: 'center' }}>
        <Link href="/" style={{ fontWeight: 800 }}>
          Επιστροφή σε λειτουργία Καταναλωτή →
        </Link>
      </section>
    </main>
  );
}
