import type { Metadata } from 'next';
import './globals.css';
import MainMenu from './MainMenu';

export const metadata: Metadata = {
  title: 'xspiti',
  description: 'Χτίζω – Ανακαινίζω – Κατοικώ',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="el">
      <body>
        <header className="site-header">
          <div className="container">
            <MainMenu />
          </div>
        </header>

        <main className="site-main">{children}</main>
      </body>
    </html>
  );
}
