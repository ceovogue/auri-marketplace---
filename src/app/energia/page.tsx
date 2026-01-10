// src/app/energia/page.tsx
"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";

type MenuKey = "energy" | "comfort" | null;

type MenuSection = {
  title: string;
  items: { label: string; href: string }[];
};

type MenuData = {
  key: Exclude<MenuKey, null>;
  icon: string;
  navLabel: string;
  title: string;
  subtitle: string;
  columns: MenuSection[];
  ctas: { label: string; href: string; kind: "primary" | "secondary" }[];
};

export default function EnergiaPage() {
  return (
    <div style={pageStyles.page}>
      <EnergyComfortMenu />

      <main style={pageStyles.main}>
        <div style={pageStyles.card}>
          <div style={pageStyles.h1}>Σελίδα: Ενέργεια</div>
          <p style={pageStyles.p}>
            Demo περιεχόμενο. Στόχος: να περνάει build και να βλέπεις το menu (desktop & mobile).
          </p>
        </div>
      </main>
    </div>
  );
}

function EnergyComfortMenu() {
  const [openDesktop, setOpenDesktop] = useState<MenuKey>(null);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const isMobile = useIsMobile(980);

  // ✅ SAFE: direct refs (no callback refs)
  const headerRef = useRef<HTMLElement | null>(null);
  const panelRef = useRef<HTMLDivElement | null>(null);
  const drawerRef = useRef<HTMLDivElement | null>(null);

  const data = useMemo<MenuData[]>(
    () => [
      {
        key: "energy",
        icon: "⚡",
        navLabel: "Ενέργεια",
        title: "ΕΝΕΡΓΕΙΑ",
        subtitle: "Παραγωγή, κατανάλωση και σωστές επιλογές ρεύματος & θέρμανσης.",
        columns: [
          {
            title: "ΠΑΡΟΧΟΙ ΕΝΕΡΓΕΙΑΣ",
            items: [
              { label: "Ρεύμα Οικιακό", href: "/energia/paroxoi/revma-oikiako" },
              { label: "Ρεύμα Επαγγελματικό", href: "/energia/paroxoi/revma-epaggelmatiko" },
              { label: "Φυσικό Αέριο", href: "/energia/paroxoi/fysiko-aerio" },
              { label: "Σύγκριση Παρόχων", href: "/energia/paroxoi/sygkrisi" },
              { label: "Αλλαγή Παρόχου", href: "/energia/paroxoi/allagi" },
            ],
          },
          {
            title: "ΘΕΡΜΑΝΣΗ & ΨΥΞΗ",
            items: [
              { label: "Αντλίες Θερμότητας", href: "/energia/thermansi/antlies-thermotitas" },
              { label: "Κλιματισμός", href: "/energia/thermansi/klimatismos" },
              { label: "Λέβητες", href: "/energia/thermansi/levites" },
              { label: "Ενδοδαπέδια Θέρμανση", href: "/energia/thermansi/endodapedio" },
            ],
          },
          {
            title: "ΑΝΑΝΕΩΣΙΜΕΣ ΠΗΓΕΣ",
            items: [
              { label: "Φωτοβολταϊκά", href: "/energia/ape/fotovoltaika" },
              { label: "Net Metering", href: "/energia/ape/net-metering" },
              { label: "Συστήματα Αποθήκευσης", href: "/energia/ape/apothikefsi" },
            ],
          },
          {
            title: "ΕΞΟΙΚΟΝΟΜΗΣΗ & ΑΝΑΒΑΘΜΙΣΗ",
            items: [
              { label: "Θερμομόνωση", href: "/energia/exoikonomisi/thermomonosi" },
              { label: "Κουφώματα Υψηλής Απόδοσης", href: "/energia/exoikonomisi/koufomata" },
              { label: "Ενεργειακός Έλεγχος", href: "/energia/exoikonomisi/elegxos" },
              { label: "Προγράμματα Επιδότησης", href: "/energia/exoikonomisi/epidotiseis" },
            ],
          },
        ],
        ctas: [
          { label: "Όλες οι λύσεις", href: "/energia", kind: "secondary" },
          { label: "Βρες τη σωστή ενεργειακή λύση", href: "/energia/quiz", kind: "primary" },
        ],
      },
      {
        key: "comfort",
        icon: "🏠",
        navLabel: "Άνεση",
        title: "ΑΝΕΣΗ",
        subtitle: "Πώς ζεις μέσα στο σπίτι — καθημερινότητα χωρίς καταπόνηση.",
        columns: [
          {
            title: "ΘΕΡΜΙΚΗ ΑΝΕΣΗ",
            items: [
              { label: "Σταθερή Θερμοκρασία", href: "/anesi/thermiki/statheri-thermokrasia" },
              { label: "Διαχείριση Υγρασίας", href: "/anesi/thermiki/ygrasia" },
              { label: "Ποιότητα Αέρα", href: "/anesi/thermiki/poiota-aera" },
            ],
          },
          {
            title: "ΦΩΤΙΣΜΟΣ & ΑΤΜΟΣΦΑΙΡΑ",
            items: [
              { label: "Φυσικός Φωτισμός", href: "/anesi/fotismos/fysikos" },
              { label: "Τεχνητός Φωτισμός", href: "/anesi/fotismos/texnitos" },
              { label: "Σενάρια Χώρου", href: "/anesi/fotismos/senaria" },
            ],
          },
          {
            title: "ΗΧΟΣ & ΙΔΙΩΤΙΚΟΤΗΤΑ",
            items: [
              { label: "Ηχομόνωση", href: "/anesi/ixos/ixomonosi" },
              { label: "Ακουστική Άνεση", href: "/anesi/ixos/akoustiki" },
              { label: "Προστασία Θορύβου", href: "/anesi/ixos/thoryvos" },
            ],
          },
          {
            title: "SMART ΚΑΤΟΙΚΙΑ",
            items: [
              { label: "Αυτοματισμοί", href: "/anesi/smart/automatismoi" },
              { label: "Έλεγχος Θέρμανσης & Φωτισμού", href: "/anesi/smart/elegxos" },
              { label: "Smart Σενάρια Καθημερινότητας", href: "/anesi/smart/senaria" },
            ],
          },
        ],
        ctas: [
          { label: "Όλες οι λύσεις", href: "/anesi", kind: "secondary" },
          { label: "Αναβάθμισε την άνεση του σπιτιού σου", href: "/anesi/quiz", kind: "primary" },
        ],
      },
    ],
    []
  );

  const desktopPanel = useMemo(() => data.find((d) => d.key === openDesktop) ?? null, [data, openDesktop]);

  // ESC closes everything
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setOpenDesktop(null);
        setDrawerOpen(false);
      }
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  // Close when clicking outside (desktop panel)
  useEffect(() => {
    function onDocClick(e: MouseEvent) {
      if (isMobile) return;
      if (!openDesktop) return;

      const t = e.target as Node | null;
      if (!t) return;

      const headerEl = headerRef.current;
      const panelEl = panelRef.current;

      if (headerEl?.contains(t)) return;
      if (panelEl?.contains(t)) return;

      setOpenDesktop(null);
    }

    document.addEventListener("click", onDocClick);
    return () => document.removeEventListener("click", onDocClick);
  }, [isMobile, openDesktop]);

  // Mobile overlay click closes drawer
  useEffect(() => {
    if (!isMobile) return;
    if (!drawerOpen) return;

    function onDocClick(e: MouseEvent) {
      const t = e.target as Node | null;
      if (!t) return;

      const drawerEl = drawerRef.current;
      if (drawerEl?.contains(t)) return;

      setDrawerOpen(false);
    }

    document.addEventListener("click", onDocClick);
    return () => document.removeEventListener("click", onDocClick);
  }, [isMobile, drawerOpen]);

  // Prevent background scroll when drawer open
  useEffect(() => {
    if (!(isMobile && drawerOpen)) return;
    const prevHtml = document.documentElement.style.overflow;
    const prevBody = document.body.style.overflow;
    document.documentElement.style.overflow = "hidden";
    document.body.style.overflow = "hidden";
    return () => {
      document.documentElement.style.overflow = prevHtml;
      document.body.style.overflow = prevBody;
    };
  }, [isMobile, drawerOpen]);

  // Mode switch sanity
  useEffect(() => {
    if (isMobile) setOpenDesktop(null);
    else setDrawerOpen(false);
  }, [isMobile]);

  return (
    <div style={styles.shell}>
      <header ref={headerRef} style={styles.header}>
        <div style={styles.bar}>
          <div style={styles.brand}>
            <span style={styles.dot} />
            <span>AURI / xspiti</span>
          </div>

          {!isMobile && (
            <nav style={styles.navDesktop} aria-label="Κύριο μενού">
              {data.map((m) => (
                <TopButton
                  key={m.key}
                  label={m.navLabel}
                  open={openDesktop === m.key}
                  onClick={() => setOpenDesktop(openDesktop === m.key ? null : m.key)}
                />
              ))}
            </nav>
          )}

          <div style={styles.utils}>
            <a href="/login" style={styles.pill}>
              Είσοδος
            </a>

            {isMobile && (
              <button
                style={styles.hamburger}
                type="button"
                aria-expanded={drawerOpen}
                aria-controls="mobile-drawer"
                onClick={() => setDrawerOpen((v) => !v)}
              >
                ☰
              </button>
            )}
          </div>
        </div>

        {!isMobile && desktopPanel && (
          <div ref={panelRef} style={styles.panel} role="dialog" aria-label={`Μενού ${desktopPanel.title}`}>
            <div style={styles.panelInner}>
              <div style={styles.panelHead}>
                <div style={styles.panelTitle}>
                  <span>{desktopPanel.icon}</span>
                  <span>{desktopPanel.title}</span>
                </div>
                <div style={styles.panelSub}>{desktopPanel.subtitle}</div>
              </div>

              <div style={styles.panelBody}>
                <div style={styles.grid}>
                  {desktopPanel.columns.map((col) => (
                    <div key={col.title} style={styles.card}>
                      <div style={styles.cardTitle}>{col.title}</div>
                      <div style={{ display: "grid", gap: 8 }}>
                        {col.items.map((it) => (
                          <a key={it.href} href={it.href} style={styles.link}>
                            <span>{it.label}</span>
                            <span style={styles.chev}>›</span>
                          </a>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div style={styles.panelFoot}>
              {desktopPanel.ctas.map((c) => (
                <a key={c.href} href={c.href} style={c.kind === "primary" ? styles.cta : styles.ghost}>
                  {c.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </header>

      {/* Mobile overlay */}
      {isMobile && drawerOpen && <div style={styles.overlay} aria-hidden="true" />}

      {/* Mobile drawer */}
      {isMobile && (
        <aside
          id="mobile-drawer"
          aria-hidden={!drawerOpen}
          style={{
            ...styles.drawer,
            transform: drawerOpen ? "translateX(0)" : "translateX(105%)",
          }}
        >
          <div ref={drawerRef} style={styles.drawerInner}>
            <div style={styles.drawerTop}>
              <strong>Μενού</strong>
              <button style={styles.closeBtn} type="button" aria-label="Κλείσιμο" onClick={() => setDrawerOpen(false)}>
                ✕
              </button>
            </div>

            <div style={styles.drawerScroll}>
              {data.map((m) => (
                <MobileAccordion key={m.key} menu={m} />
              ))}

              <div style={{ height: 14 }} />
              <a href="/login" style={{ ...styles.ghost, width: "100%", justifyContent: "center" }}>
                Είσοδος
              </a>
            </div>
          </div>
        </aside>
      )}
    </div>
  );
}

function TopButton({ label, open, onClick }: { label: string; open: boolean; onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-expanded={open}
      style={{
        ...styles.topBtn,
        ...(open ? styles.topBtnOpen : null),
      }}
    >
      {label}
    </button>
  );
}

function MobileAccordion({ menu }: { menu: MenuData }) {
  const [open, setOpen] = useState(false);

  return (
    <section style={styles.mSection}>
      <button type="button" style={styles.mHead} aria-expanded={open} onClick={() => setOpen((v) => !v)}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <span>{menu.icon}</span>
          <span style={{ fontWeight: 900 }}>{menu.navLabel}</span>
        </div>
        <span style={{ opacity: 0.7, fontWeight: 900 }}>{open ? "–" : "+"}</span>
      </button>

      {open && (
        <div style={styles.mBody}>
          {menu.columns.map((col) => (
            <div key={col.title}>
              <div style={styles.mH5}>{col.title}</div>
              {col.items.map((it) => (
                <a key={it.href} href={it.href} style={styles.mLink}>
                  {it.label}
                </a>
              ))}
            </div>
          ))}

          <div style={styles.mCTA}>
            {menu.ctas.map((c) => (
              <a
                key={c.href}
                href={c.href}
                style={c.kind === "primary" ? { ...styles.cta, width: "100%" } : { ...styles.ghost, width: "100%" }}
              >
                {c.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}

function useIsMobile(breakpointPx: number) {
  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia(`(max-width: ${breakpointPx}px)`);
    const update = () => setMobile(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, [breakpointPx]);

  return mobile;
}

const pageStyles: Record<string, React.CSSProperties> = {
  page: {
    minHeight: "100vh",
    background: "linear-gradient(180deg, #070a0f 0%, #0b0f14 70%)",
    color: "#e8eef7",
  },
  main: { maxWidth: 1120, margin: "0 auto", padding: "18px 16px 60px" },
  card: {
    border: "1px solid rgba(255,255,255,.10)",
    borderRadius: 14,
    background: "rgba(255,255,255,.02)",
    padding: 16,
  },
  h1: { fontSize: 18, fontWeight: 900, marginBottom: 6 },
  p: { margin: 0, opacity: 0.78, lineHeight: 1.4 },
};

const styles: Record<string, React.CSSProperties> = {
  shell: { maxWidth: 1120, margin: "0 auto", padding: "0 16px" },

  header: {
    position: "sticky",
    top: 0,
    zIndex: 50,
    background: "rgba(11,15,20,.75)",
    backdropFilter: "blur(10px)",
    border: "1px solid rgba(255,255,255,.10)",
    borderRadius: 14,
    marginTop: 14,
  },
  bar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    height: 64,
    gap: 12,
    padding: "0 12px",
  },
  brand: { display: "flex", alignItems: "center", gap: 10, fontWeight: 900, letterSpacing: 0.2 },
  dot: { width: 10, height: 10, borderRadius: 999, background: "#7dd3fc" },

  navDesktop: { display: "flex", alignItems: "center", gap: 6 },
  topBtn: {
    appearance: "none",
    border: "1px solid transparent",
    background: "transparent",
    color: "#e8eef7",
    padding: "10px 12px",
    borderRadius: 999,
    cursor: "pointer",
    fontWeight: 900,
  },
  topBtnOpen: { borderColor: "rgba(255,255,255,.10)", background: "rgba(255,255,255,.04)" },

  utils: { display: "flex", alignItems: "center", gap: 10 },
  pill: {
    border: "1px solid rgba(255,255,255,.10)",
    background: "rgba(255,255,255,.03)",
    padding: "10px 12px",
    borderRadius: 999,
    fontWeight: 900,
    color: "#e8eef7",
    textDecoration: "none",
    display: "inline-flex",
    alignItems: "center",
  },
  hamburger: {
    width: 44,
    height: 44,
    borderRadius: 12,
    border: "1px solid rgba(255,255,255,.10)",
    background: "rgba(255,255,255,.03)",
    color: "#e8eef7",
    cursor: "pointer",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
  },

  panel: {
    marginTop: 10,
    border: "1px solid rgba(255,255,255,.10)",
    borderRadius: 14,
    overflow: "hidden",
    background: "#0f1620",
    boxShadow: "0 20px 50px rgba(0,0,0,.35)",
  },
  panelInner: { display: "grid", gridTemplateColumns: "1.1fr 2fr", minHeight: 280 },
  panelHead: {
    padding: 18,
    borderRight: "1px solid rgba(255,255,255,.10)",
    background: "linear-gradient(180deg, rgba(255,255,255,.03), rgba(255,255,255,0))",
  },
  panelTitle: { display: "flex", gap: 10, alignItems: "center", fontSize: 18, fontWeight: 900, marginBottom: 6 },
  panelSub: { opacity: 0.75, fontSize: 13, lineHeight: 1.35 },
  panelBody: { padding: 14 },
  grid: { display: "grid", gridTemplateColumns: "repeat(2, minmax(0, 1fr))", gap: 12 },
  card: { background: "rgba(255,255,255,.03)", border: "1px solid rgba(255,255,255,.10)", borderRadius: 14, padding: 12 },
  cardTitle: { fontSize: 12, letterSpacing: 0.6, textTransform: "uppercase", opacity: 0.75, marginBottom: 8, fontWeight: 900 },
  link: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "10px 10px",
    borderRadius: 12,
    border: "1px solid transparent",
    background: "rgba(255,255,255,.02)",
    fontWeight: 900,
    color: "#e8eef7",
    textDecoration: "none",
  },
  chev: { opacity: 0.6 },

  panelFoot: {
    display: "flex",
    justifyContent: "flex-end",
    gap: 10,
    padding: "12px 14px",
    borderTop: "1px solid rgba(255,255,255,.10)",
    background: "rgba(0,0,0,.12)",
  },
  cta: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 12,
    padding: "12px 14px",
    border: "1px solid rgba(125,211,252,.35)",
    background: "rgba(125,211,252,.10)",
    fontWeight: 900,
    cursor: "pointer",
    whiteSpace: "nowrap",
    color: "#e8eef7",
    textDecoration: "none",
  },
  ghost: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 12,
    padding: "12px 14px",
    border: "1px solid rgba(255,255,255,.10)",
    background: "rgba(255,255,255,.03)",
    fontWeight: 900,
    cursor: "pointer",
    whiteSpace: "nowrap",
    color: "#e8eef7",
    textDecoration: "none",
  },

  overlay: { position: "fixed", inset: 0, background: "rgba(0,0,0,.55)", zIndex: 60 },

  drawer: {
    position: "fixed",
    top: 0,
    right: 0,
    bottom: 0,
    width: "min(92vw, 420px)",
    background: "#0f1620",
    borderLeft: "1px solid rgba(255,255,255,.10)",
    boxShadow: "0 20px 50px rgba(0,0,0,.35)",
    zIndex: 70,
    transition: "transform .25s ease",
    display: "flex",
    flexDirection: "column",
  },
  drawerInner: { height: "100%", display: "flex", flexDirection: "column" },
  drawerTop: {
    height: 64,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "0 14px",
    borderBottom: "1px solid rgba(255,255,255,.10)",
  },
  closeBtn: {
    width: 44,
    height: 44,
    borderRadius: 12,
    border: "1px solid rgba(255,255,255,.10)",
    background: "rgba(255,255,255,.03)",
    color: "#e8eef7",
    cursor: "pointer",
  },
  drawerScroll: { overflow: "auto", padding: 14 },

  mSection: {
    border: "1px solid rgba(255,255,255,.10)",
    borderRadius: 14,
    overflow: "hidden",
    background: "rgba(255,255,255,.03)",
    marginBottom: 12,
  },
  mHead: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "12px 12px",
    background: "rgba(255,255,255,.02)",
    border: "none",
    color: "#e8eef7",
    cursor: "pointer",
  },
  mBody: { padding: "10px 10px 12px", borderTop: "1px solid rgba(255,255,255,.10)" },
  mH5: { margin: "10px 6px 8px", fontSize: 11, letterSpacing: 0.6, textTransform: "uppercase", opacity: 0.75, fontWeight: 900 },
  mLink: {
    display: "block",
    padding: "12px 10px",
    borderRadius: 12,
    border: "1px solid transparent",
    background: "rgba(255,255,255,.02)",
    margin: "6px 0",
    fontWeight: 900,
    color: "#e8eef7",
    textDecoration: "none",
  },
  mCTA: { display: "grid", gap: 10, marginTop: 14 },
};
