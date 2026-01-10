import { getBaseUrl } from "@/lib/baseUrl";

export const dynamic = "force-dynamic";

async function getNews() {
  const base = getBaseUrl();

  const res = await fetch(`${base}/api/news`, { cache: "no-store" });
  if (!res.ok) return [];
  return res.json();
}

export default async function NewsPage() {
  const posts = await getNews();

  return (
    <main className="grid" style={{ maxWidth: 980 }}>
      <section className="card">
        <h2 style={{ marginTop: 0 }}>Χρήσιμα & Νέα</h2>
        <p className="muted">
          Οδηγοί, χρήσιμα links, νόμοι, επαφές υπηρεσιών, tips και ενημερώσεις.
        </p>
      </section>

      {posts.length === 0 ? (
        <section className="card muted">
          Δεν υπάρχουν δημοσιευμένα άρθρα ακόμα.
        </section>
      ) : (
        <section className="grid">
          {posts.map((p: any) => (
            <article key={p.id} className="card">
              <div className="row" style={{ justifyContent: "space-between" }}>
                <strong>{p.title}</strong>
                <span className="badge">{p.category || "Γενικά"}</span>
              </div>
              {p.excerpt && <p className="muted">{p.excerpt}</p>}
              <div className="row">
                <a className="btn secondary" href={`/news/${p.slug}`}>
                  Δες άρθρο →
                </a>
              </div>
            </article>
          ))}
        </section>
      )}
    </main>
  );
}
