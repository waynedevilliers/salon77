import { Metadata } from 'next';
import MenuCard from '@/components/MenuCard';

export const metadata: Metadata = {
  title: 'Startseite | Salon77 - Würzburger Künstlerinitiative',
  description:
    'Salon77 - Die Würzburger Künstlerinitiative e.V. mit Kursen in Tanz, Bewegung, Musik und Fotografie.',
  openGraph: {
    title: 'Salon77 - Würzburger Künstlerinitiative',
    description:
      'Salon77 bietet Kurse in Tanz, Bewegung, Musik und Fotografie in Würzburg',
  },
};

const MENU_CARDS = [
  {
    title: 'Übersicht',
    href: '/uebersicht',
    image: {
      src: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&h=600&fit=crop',
      alt: 'Übersicht - Kurse und Programme bei Salon77',
    },
  },
  {
    title: 'Veranstaltungen',
    href: '/veranstaltungen',
    image: {
      src: 'https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=800&h=600&fit=crop',
      alt: 'Veranstaltungen - Events bei Salon77',
    },
  },
  {
    title: 'Räumlichkeiten',
    href: '/raeumlichkeiten',
    image: {
      src: 'https://images.unsplash.com/photo-1442512595331-e89e04cc31ba?w=800&h=600&fit=crop',
      alt: 'Räumlichkeiten - Unsere Studios und Räume',
    },
  },
];

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        {/* Welcome Section */}
        <section className="mb-12 sm:mb-16">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Willkommen bei Salon77
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl">
            Entdecke die Vielfalt von Tanz, Bewegung, Musik und Fotografie.
            Salon77 ist die Künstlerinitiative Würzburg mit einer umfassenden
            Auswahl an Kursen und Veranstaltungen.
          </p>
        </section>

        {/* Menu Cards */}
        <section>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {MENU_CARDS.map((card) => (
              <MenuCard key={card.href} {...card} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
