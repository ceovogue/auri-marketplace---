import { getBaseUrl } from "@/lib/baseUrl";
import Link from "next/link";

async function getProducts() {
  const res = await fetch(`${getBaseUrl()}/api/products`, { cache: "no-store" });
  return res.json();
}

export default async function ProductsPage() {
  const products = await getProducts();

  return (
    <main className="grid">
      <section className="card">
        <h2 style={{ marginTop: 0 }}>Προϊόντα</h2>
        <p className="muted">Demo catalog (seeded). Κάνε click σε “Ενδιαφέρομαι” για να δημιουργηθεί lead.</p>
      </section>

      <section className="grid" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))" }}>
        {products.map((p: any) => (
          <div key={p.id} className="card">
            <div className="badge">{p.category || "—"}</div>
            <h3 style={{ marginTop: 10 }}>{p.name}</h3>
            <p className="muted">{p.description || ""}</p>
            <div className="row">
              <Link className="btn" href={`/interest/${p.id}`}>Ενδιαφέρομαι</Link>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}
