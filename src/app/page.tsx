export default function Home() {
  return (
    <main className="indexWrap">
      <section className="hero">
        <h1>Κτίζω · Ανακαινίζω · Κατοικώ</h1>
        <p className="heroSub">
          Υλικά, λύσεις και επαγγελματίες για κάθε έργο — από μικρή επισκευή έως πλήρη ανακαίνιση.
        </p>

        <div className="heroActions">
          <a className="btn primary" href="/products">Ξεκίνα</a>
          <a className="btn ghost" href="/professionals">Βρες Τεχνίτη</a>
          <a className="btn ghost" href="/ai">Ρώτα το AI</a>
        </div>
      </section>

      <section className="gridBlocks">
        <div className="block">
          <h3>Δομικά Υλικά</h3>
          <p>Σκυρόδεμα, σίδερα, μονώσεις, υλικά κατασκευής</p>
          <a href="/domika-ylika">Εξερεύνηση →</a>
        </div>

        <div className="block tint">
          <h3>Κατασκευές & Προκατ Λύσεις</h3>
          <p>Έτοιμες κατασκευές, πέργκολες, προκατασκευασμένες λύσεις</p>
          <a href="/kataskeves">Εξερεύνηση →</a>
        </div>

        <div className="block">
          <h3>Ενέργεια & Άνεση</h3>
          <p>Φωτοβολταϊκά, θέρμανση, κλιματισμός, αντλίες θερμότητας</p>
          <a href="/energia">Εξερεύνηση →</a>
        </div>

        <div className="block tint">
          <h3>Εξοπλισμός Σπιτιού & Αυλής</h3>
          <p>Συσκευές, έπιπλα, κήπος, εξωτερικός χώρος</p>
          <a href="/eksoplismos">Εξερεύνηση →</a>
        </div>

        <div className="block">
          <h3>Επαγγελματίες</h3>
          <p>Τεχνίτες και εταιρείες στην περιοχή σου</p>
          <a href="/professionals">Εξερεύνηση →</a>
        </div>

        <div className="block tint">
          <h3>Αγγελίες Ακινήτων</h3>
          <p>Πώληση / Ενοικίαση — καταχώριση αγγελίας</p>
          <a href="/classifieds">Εξερεύνηση →</a>
        </div>

        <div className="block">
          <h3>Founders / Brands</h3>
          <p>Παρουσία επιχείρησης & listing προϊόντων</p>
          <a href="/brands">Εξερεύνηση →</a>
        </div>

        <div className="block tint">
          <h3>Χρήσιμα & Νέα</h3>
          <p>Οδηγοί, νόμοι, links, χρήσιμες διευθύνσεις</p>
          <a href="/news">Δες →</a>
        </div>
      </section>
    </main>
  );
}
