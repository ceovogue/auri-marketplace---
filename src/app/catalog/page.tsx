import Link from 'next/link';

export default function CatalogPlaceholderPage({
  searchParams,
}: {
  searchParams?: { title?: string };
}) {
  const title = searchParams?.title ?? 'Κατάλογος';

  return (
    <main className="pageWrap">
      <header className="pageHeader">
        <h1>{title}</h1>
        <p>Σε αυτό το σημείο θα εμφανίζονται τα προϊόντα/λύσεις της κατηγορίας.</p>
      </header>

      <section className="contentSection" style={{ textAlign: 'center', padding: '48px 0' }}>
        <div style={{ fontSize: 48, fontWeight: 900, letterSpacing: 2 }}>ΠΡΟΪΟΝ</div>
        <p style={{ marginTop: 12, color: 'var(--muted)' }}>
          (MVP demo placeholder για παρουσίαση)
        </p>
      </section>

      <section className="contentSection" style={{ textAlign: 'center' }}>
        <Link href="/pro" style={{ fontWeight: 800 }}>
          Μετάβαση σε λειτουργία Επαγγελματία →
        </Link>
      </section>
    </main>
  );
}
