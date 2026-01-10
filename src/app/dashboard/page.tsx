import Link from "next/link";

export default function Home() {
  return (
    <main className="indexWrap">
      {/* HERO */}
      <section className="hero">
        <h1>Κτίζω – Ανακαινίζω – Κατοικώ</h1>
        <p className="heroSub">
          Όλα για το σπίτι — υλικά, λύσεις, επαγγελματίες & αγγελίες. Βρες εύκολα αυτό που χρειάζεσαι.
        </p>
      </section>

      {/* CENTER BIG BUTTONS (consumer-first) */}
      <section className="centerButtons">
        <Link className="bigBtn" href="/domika-ylika">
          Δομικά Υλικά
          <span>Σκυρόδεμα, σίδερα, μονώσεις, υλικά κατασκευής</span>
        </Link>

        <Link className="bigBtn secondary" href="/kataskeves">
          Κατασκευές & Προκατ Λύσεις
          <span>Έτοιμες κατασκευές, πέργκολες, προκατ λύσεις</span>
        </Link>

        <Link className="bigBtn" href="/energia">
          Ενέργεια & Άνεση
          <span>Φωτοβολταϊκά, θέρμανση, κλιματισμός</span>
        </Link>

        <Link className="bigBtn secondary" href="/eksoplismos">
          Εξοπλισμός Σπιτιού & Αυλής
          <span>Συσκευές, έπιπλα, κήπος, εξωτερικός χώρος</span>
        </Link>

        <Link className="bigBtn" href="/epaggelmaties">
          Επαγγελματίες
          <span>Τεχνίτες και εταιρείες στην περιοχή σου</span>
        </Link>

        <Link className="bigBtn secondary" href="/classifieds">
          Αγγελίες Ακινήτων
          <span>Πώληση, ενοικίαση, αναζήτηση ακινήτων</span>
        </Link>
      </section>

      {/* EXTRA BLOCKS: Founders / News / AI / Ads */}
      <section className="gridBlocks">
        <div className="block white">
          <h3>Founders / Brands</h3>
          <p>
            Για εταιρείες και brands που θέλουν να μπουν πρώτοι και να «χτίσουν» παρουσία.
          </p>
          <Link href="/founders">Περισσότερα →</Link>
        </div>

        <div className="block tint">
          <h3>Χρήσιμα & Νέα</h3>
          <p>
            Οδηγοί, νόμοι, link πολεοδομιών, πρακτικές συμβουλές. Ένα σημείο αναφοράς.
          </p>
          <Link href="/news">Δες τα νέα →</Link>
        </div>

        <div className="block white">
          <h3>Ρώτα το AI</h3>
          <p>
            Ρώτα για υλικά, ποσότητες, εφαρμογές και σύγκριση προϊόντων — με βάση οδηγίες συνεργατών/κατασκευαστών.
          </p>
          <Link href="/ai">Άνοιξε το AI →</Link>
        </div>

        <div className="block tint">
          <h3>Θέση για Διαφήμιση</h3>
          <p>
            Εδώ μπορεί να μπει banner/προωθητικό συνεργάτη ή featured brand.
          </p>
          <a href="#">(θα το αποφασίσουμε στο τέλος)</a>
        </div>
      </section>
    </main>
  );
}
