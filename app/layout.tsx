import type { Metadata } from 'next';
import { Playfair_Display, Lato } from 'next/font/google';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { site } from '@/content/site';
import { getCurrentYear } from '@/lib/current-year';
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
  metadataBase: new URL(site.url),
  title: 'Salon77 - Würzburger Künstlerinitiative',
  description: site.description,
  openGraph: {
    title: 'Salon77 - Würzburger Künstlerinitiative',
    description: site.description,
    url: site.url,
    siteName: site.name,
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
};

const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: site.legalName,
  image: `${site.url}${site.logoPath}`,
  description: 'Kunst, Tanz und Musik Förderung seit 1977',
  address: {
    '@type': 'PostalAddress',
    streetAddress: site.address.street,
    addressLocality: site.address.city,
    postalCode: site.address.postalCode,
    addressCountry: site.address.country,
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: site.geo.latitude,
    longitude: site.geo.longitude,
  },
  telephone: site.phone,
  email: site.email,
  url: site.url,
  sameAs: [site.instagramUrl],
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const year = await getCurrentYear();

  return (
    <html
      lang={site.language}
      className={`${playfair.variable} ${lato.variable}`}
    >
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd),
          }}
        />
      </head>
      <body className="h-full flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer year={year} />
      </body>
    </html>
  );
}
