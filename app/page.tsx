import { pageMetadata } from '@/lib/metadata';
import MenuCard from '@/components/MenuCard';
import Reveal from '@/components/Reveal';
import HomeIntro from '@/components/HomeIntro';
import UpcomingEvent from '@/components/UpcomingEvent';
import { Suspense } from 'react';
import { homeCards } from '@/content/home';

export const metadata = pageMetadata({
  title: 'Startseite | Salon77 - Würzburger Künstlerinitiative',
  description:
    'Salon77 - Die Würzburger Künstlerinitiative e.V. mit Kursen in Tanz, Bewegung, Musik und Fotografie.',
  path: '/',
});

export default function Home() {
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
            {homeCards.map((card, index) => (
              <Reveal key={card.href} className="h-full">
                <MenuCard {...card} priority={index === 0} />
              </Reveal>
            ))}
          </div>
        </section>
        <Suspense fallback={null}>
          <UpcomingEvent />
        </Suspense>
      </div>
    </div>
  );
}
