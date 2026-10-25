import type { Metadata } from 'next';
import { Playfair_Display, Lato } from 'next/font/google';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import './globals.css';

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['700', '900'],
  variable: '--font-display',
});

const lato = Lato({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-sans',
});

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
    <html lang="de" className={`${playfair.variable} ${lato.variable}`}>
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
