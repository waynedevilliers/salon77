import { pageMetadata } from '@/lib/metadata';
import MenuCard from '@/components/MenuCard';

export const metadata = pageMetadata({
  title: 'Startseite | Salon77 - Würzburger Künstlerinitiative',
  description: 'Salon77 - Die Würzburger Künstlerinitiative e.V. mit Kursen in Tanz, Bewegung, Musik und Fotografie.',
  path: '/',
});

const MENU_CARDS = [
  {
    title: 'Unterricht',
    href: '/unterricht',
    image: {
      src: '/salon77/unterricht/DSC_2790_1_200x0.jpeg',
      alt: 'Unterricht - Kurse und Programme bei Salon77',
    },
  },
  {
    title: 'Veranstaltungen',
    href: '/veranstaltungen',
    image: {
      src: '/salon77/veranstaltung/IMG_7469.jpeg',
      alt: 'Veranstaltungen - Events bei Salon77',
    },
  },
  {
    title: 'Räumlichkeiten',
    href: '/raeumlichkeiten',
    image: {
      src: '/salon77/raumligkeiten/Balletsaal.png',
      alt: 'Räumlichkeiten - Unsere Studios und Räume',
    },
  },
];

export default function Home() {
  return (
    <div className="flex flex-col">
      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <h1
          className="text-center mb-12"
          style={{
            color: 'var(--color-text)',
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(1.5rem, 3vw, 2.25rem)',
            fontWeight: 600,
            letterSpacing: '-0.015em',
            lineHeight: 1.2,
          }}
        >
          Die Künstlerinitiative in Würzburg-Frauenland
        </h1>

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
