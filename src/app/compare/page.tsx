export default function Home() {
  return (
    <main className="indexWrap">

      {/* HERO */}
      <section className="hero">
        <div className="heroInner">
          <h1>Κτίζω · Ανακαινίζω · Κατοικώ</h1>
          <p className="heroSub">
            Όλα για το σπίτι — υλικά, λύσεις, τεχνίτες, αγγελίες και χρήσιμες πληροφορίες.
          </p>

          <div className="heroActions">
            <a className="btn primary" href="/products">Δες Προϊόντα</a>
            <a className="btn soft" href="/news">Χρήσιμα & Νέα</a>
            <a className="btn soft" href="/brands">Founders / Brands</a>
          </div>
        </div>
      </section>

      {/* MAIN GRID */}
      <section className="gridBlocks">
        <article className="block tint">
          <h3>Δομικά Υλικά</h3>
          <p>Σκυρόδεμα, σίδερα, μονώσεις, υλικά κατασκευής.</p>
          <a href="/domika-ylika">Εξερεύνηση →</a>
        </article>

        <article className="block white">
          <h3>Κατασκευές & Προκατ Λύσεις</h3>
          <p>Έτοιμες λύσεις, πέργκολες, προκατ, εξωτερικές κατασκευές.</p>
          <a href="/kataskeves">Εξερεύνηση →</a>
        </article>

        <article className="block tint">
          <h3>Ενέργεια & Άνεση</h3>
          <p>Φωτοβολταϊκά, heat pump, θέρμανση, κλιματισμός.</p>
          <a href="/energia">Εξερεύνηση →</a>
        </article>

        <article className="block white">
          <h3>Εξοπλισμός Σπιτιού & Αυλής</h3>
          <p>Συσκευές, έπιπλα, κήπος, εξωτερικός χώρος.</p>
          <a href="/eksoplismos">Εξερεύνηση →</a>
        </article>

        <article className="block tint">
          <h3>Επαγγελματίες</h3>
          <p>Τεχνίτες και εταιρείες στην περιοχή σου.</p>
          <a href="/professionals">Εξερεύνηση →</a>
        </article>

        <article className="block white">
          <h3>Αγγελίες Ακινήτων</h3>
          <p>Πώληση και ενοικίαση ακινήτων — καταχώριση αγγελίας.</p>
          <a href="/classifieds">Εξερεύνηση →</a>
        </article>
      </section>

      {/* EXTRA ROW */}
      <section className="extraRow">
        <div className="extraCard">
          <h3>Ρώτα το AI</h3>
          <p>
            Πάρε βασικές απαντήσεις για υλικά, εργασίες και επιλογές.
            (Σε επόμενο βήμα θα “μαθαίνει” από οδηγίες προϊόντων συνεργατών.)
          </p>
          <a className="btn soft" href="/ai">Άνοιγμα AI →</a>
        </div>

        <div className="extraCard">
          <h3>Θέση Διαφήμισης</h3>
          <p>Προαιρετικό banner / προβολή συνεργάτη ή προσφοράς.</p>
          <span className="adTag">διαθέσιμο</span>
        </div>
      </section>

    </main>
  );
}
