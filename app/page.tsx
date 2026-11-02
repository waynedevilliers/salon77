import { pageMetadata } from '@/lib/metadata';
import MenuCard from '@/components/MenuCard';
import ActionLink from '@/components/ActionLink';
import { homeContent } from '@/content/home';

export const metadata = pageMetadata({
  title: 'Startseite | Salon77 - Würzburger Künstlerinitiative',
  description:
    'Salon77 - Die Würzburger Künstlerinitiative e.V. mit Kursen in Tanz, Bewegung, Musik und Fotografie.',
  path: '/',
});

export default function Home() {
  return (
    <div className="flex flex-col">
      <main className="mx-auto w-full max-w-[1140px] px-4 pb-12 pt-8 sm:pb-16 md:px-6 md:pt-10 lg:pt-16">
        {/* Hero */}
        <section className="mx-auto flex max-w-[720px] flex-col items-center gap-4 text-center">
          <h1
            className="font-bold leading-[1.2]"
            style={{
              color: 'var(--color-text)',
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(1.75rem, 3vw + 0.5rem, 2.5rem)',
              letterSpacing: '-0.015em',
            }}
          >
            {homeContent.headline}
          </h1>
          <p
            className="leading-[1.6] text-[17px] sm:text-[20px]"
            style={{ color: 'var(--color-text-muted)' }}
          >
            {homeContent.supportingLine}
          </p>
          <div className="mt-2 w-full sm:w-auto">
            <ActionLink
              href={homeContent.cta.href}
              className="flex min-h-12 w-full items-center justify-center px-8 py-3 text-base font-bold sm:inline-flex sm:w-auto"
              style={{ backgroundColor: 'var(--color-accent-text)' }}
            >
              {homeContent.cta.label}
            </ActionLink>
          </div>
        </section>

        {/* Cards */}
        <section
          aria-label="Bereiche"
          className="mt-10 grid grid-cols-1 gap-5 md:mx-auto md:max-w-[720px] md:gap-6 lg:mt-14 lg:max-w-none lg:grid-cols-3 lg:gap-8"
        >
          {homeContent.cards.map((card, index) => (
            <MenuCard key={card.href} {...card} priority={index === 0} />
          ))}
        </section>
      </main>
    </div>
  );
}
