import { pageMetadata } from '@/lib/metadata';
import MenuCard from '@/components/MenuCard';
import Reveal from '@/components/Reveal';
import HomeIntro from '@/components/HomeIntro';
import NextEvent from '@/components/NextEvent';
import { getTodayIso } from '@/lib/dates';
import { kleinMontmartreDates, kleinMontmartreTeaser } from '@/content/events';

export const metadata = pageMetadata({
  title: 'Startseite | Salon77 - Würzburger Künstlerinitiative',
  description:
    'Salon77 - Die Würzburger Künstlerinitiative e.V. mit Kursen in Tanz, Bewegung, Musik und Fotografie.',
  path: '/',
});

const MENU_CARDS = [
  {
    title: 'Unterricht',
    href: '/unterricht',
    image: {
      src: '/salon77/homepage/unterricht_card_1.jpg',
      alt: 'Unterricht - Kurse und Programme bei Salon77',
    },
  },
  {
    title: 'Veranstaltungen',
    href: '/veranstaltungen',
    image: {
      src: '/salon77/kleinmomatra/IMG_6127_4.jpeg',
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

export default async function Home() {
  const todayIso = await getTodayIso();
  return (
    <div className="flex flex-col">
      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 pb-12 sm:pb-16 lg:pb-20">
        <h1
          className="mb-2 pt-[var(--space-title-top)] text-center leading-[1.1] sm:mb-3 lg:mb-4"
          style={{
            color: 'var(--color-text)',
            fontFamily: 'var(--font-sans)',
            fontWeight: 700,
            fontSize: 'clamp(2rem, 3.5vw + 0.5rem, 3rem)',
          }}
        >
          Die Künstlerinitiative in Würzburg-Frauenland
        </h1>

        <HomeIntro />

        {/* Menu Cards */}
        <section>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {MENU_CARDS.map((card) => (
              <Reveal key={card.href} className="h-full">
                <MenuCard {...card} />
              </Reveal>
            ))}
          </div>
        </section>

        <NextEvent
          {...kleinMontmartreTeaser}
          dates={kleinMontmartreDates}
          todayIso={todayIso}
        />
      </div>
    </div>
  );
}
