'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useMemo, useState } from 'react';

type MenuItem = { label: string };
type Group = { label: string; items: MenuItem[] };

// NOTE: For MVP demo/presentation, every menu item routes to a placeholder catalog page.
// Later, the same links can point to real category/product listings.
const MENU: Group[] = [
  {
    label: 'Χτίζω',
    items: [
      { label: 'Δομικά Υλικά' },
      { label: 'Κουφώματα' },
      { label: 'Μόνωση' },
      { label: 'Στέγες' },
      { label: 'Υλικά Φινιρίσματος' },
    ],
  },
  {
    label: 'Ανακαινίζω',
    items: [
      { label: 'Μπάνιο' },
      { label: 'Κουζίνα' },
      { label: 'Δάπεδα & Επενδύσεις' },
      { label: 'Ηλεκτρολογικά' },
      { label: 'Υδραυλικά' },
    ],
  },
  {
    label: 'Κατοικώ',
    items: [
      { label: 'Έπιπλα' },
      { label: 'Φωτισμός' },
      { label: 'Αποθήκευση' },
      { label: 'Κήπος & Εξωτερικοί Χώροι' },
      { label: 'Ασφάλεια' },
    ],
  },
  {
    label: 'Ενέργεια',
    items: [
      { label: 'Θέρμανση' },
      { label: 'Ψύξη / Κλιματισμός' },
      { label: 'Φωτοβολταϊκά' },
      { label: 'Αποθήκευση Ενέργειας' },
      { label: 'Smart / Έλεγχος' },
    ],
  },
];

function buildHref(basePath: string, title: string) {
  const sp = new URLSearchParams({ title });
  return `${basePath}/catalog?${sp.toString()}`;
}

export default function MainMenu() {
  const pathname = usePathname();
  const basePath = useMemo(() => (pathname?.startsWith('/pro') ? '/pro' : ''), [pathname]);

  const [openLabel, setOpenLabel] = useState<string | null>(null);

  return (
    <nav className="main-menu" aria-label="Κύριο Μενού">
      <div className="menu-row">
        <Link className="brand" href={basePath || '/'}>
          xspiti
        </Link>

        <div className="menu-groups">
          {MENU.map((g) => (
            <div key={g.label} className="menu-group">
              <button
                type="button"
                className="menu-group-btn"
                onClick={() => setOpenLabel((v) => (v === g.label ? null : g.label))}
                aria-expanded={openLabel === g.label}
              >
                {g.label}
              </button>

              {openLabel === g.label && (
                <div className="menu-dropdown" role="menu">
                  {g.items.map((it) => (
                    <Link
                      key={it.label}
                      className="menu-item"
                      role="menuitem"
                      href={buildHref(basePath, `${g.label} · ${it.label}`)}
                      onClick={() => setOpenLabel(null)}
                    >
                      {it.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}

          <Link className="menu-pro" href="/pro">
            Για Επαγγελματίες
          </Link>
        </div>
      </div>
    </nav>
  );
}
