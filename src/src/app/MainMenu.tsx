'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

type MenuItem = {
  label: string;
  href?: string;
  children?: MenuItem[];
};

const MENU: MenuItem[] = [
  {
    label: 'Χτίζω',
    children: [
      { label: 'Δομικά Υλικά', href: '/xtizo/domika-ylika' },
      { label: 'Προκατασκευασμένα', href: '/xtizo/prokataskeyes' },
    ],
  },
  {
    label: 'Ανακαινίζω',
    children: [
      { label: 'Εργασίες', href: '/anakenizo/ergasies' },
      { label: 'Τεχνίτες', href: '/anakenizo/texnites' },
    ],
  },
  {
    label: 'Κατοικώ',
    children: [
      { label: 'Εξοπλισμός', href: '/katoiko/exoplismos' },
      { label: 'Διακόσμηση', href: '/katoiko/diakosmisi' },
      { label: 'Εξωτερικός Χώρος', href: '/katoiko/exoterikos-xoros' },
    ],
  },
  {
    label: 'Ενέργεια & Άνεση',
    children: [
      { label: 'Θέρμανση & Ψύξη', href: '/energia/thermansi-psyxi' },
      { label: 'Ζεστό Νερό', href: '/energia/zesto-nero' },
      { label: 'Μόνωση', href: '/energia/monosi' },
      { label: 'ΑΠΕ', href: '/energia/ape' },
      { label: 'Smart Home', href: '/energia/smart-home' },
      { label: 'Τεχνίτες', href: '/energia/texnites' },
    ],
  },
  { label: 'Ζήτα Προσφορά', href: '/zita-prosfora' },
];

export default function MainMenu() {
  const pathname = usePathname();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <nav className="main-menu">
      <ul className="menu-root">
        {MENU.map((item, index) => {
          const isOpen = openIndex === index;
          const isActive = !!item.href && pathname?.startsWith(item.href);

          return (
            <li
              key={item.label}
              className={`menu-item ${isOpen ? 'open' : ''} ${isActive ? 'active' : ''}`}
              onMouseEnter={() => setOpenIndex(index)}
              onMouseLeave={() => setOpenIndex(null)}
            >
              {item.href ? <Link href={item.href}>{item.label}</Link> : <span className="menu-label">{item.label}</span>}

              {item.children && (
                <ul className="dropdown">
                  {item.children.map((child) => {
                    const childActive = !!child.href && pathname === child.href;
                    return (
                      <li key={child.label} className={childActive ? 'active' : ''}>
                        <Link href={child.href!}>{child.label}</Link>
                      </li>
                    );
                  })}
                </ul>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
