import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import './globals.css';
import '@/styles/tokens.css';

export const metadata: Metadata = {
  title: 'Salon77 - Würzburger Künstlerinitiative',
  description:
    'Salon77 bietet Kurse in Tanz, Bewegung, Musik und Fotografie in Würzburg',
  openGraph: {
    title: 'Salon77 - Würzburger Künstlerinitiative',
    description:
      'Salon77 bietet Kurse in Tanz, Bewegung, Musik und Fotografie in Würzburg',
    url: 'https://www.salon77.de',
    siteName: 'Salon77',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="h-full flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
