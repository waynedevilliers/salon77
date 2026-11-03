import JsonLd from '@/components/JsonLd';
import { breadcrumbJsonLd, eventJsonLd } from '@/lib/structured-data';
import { kleinMontmartreDates } from '@/content/events';
import { pageMetadata } from '@/lib/metadata';
import ImageGallery from '@/components/ImageGallery';
import ActionLink from '@/components/ActionLink';

export const metadata = pageMetadata({
  title: 'Klein-Montmartre | Salon77 - Kunsthandwerkermarkt Würzburg',
  description:
    'Klein-Montmartre Kunsthandwerkermarkt - Deutschlands ältester und beliebtester Kunsthandwerkermarkt in Würzburg.',
  path: '/veranstaltungen/klein-montmartre',
});

const GALLERY_IMAGES = [
  { src: '/salon77/kleinmomatra/IMG_7469.jpeg', alt: 'Klein-Montmartre 1' },
  { src: '/salon77/kleinmomatra/IMG_7481_2.jpeg', alt: 'Klein-Montmartre 2' },
  { src: '/salon77/kleinmomatra/IMG_7527.jpeg', alt: 'Klein-Montmartre 3' },
  {
    src: '/salon77/kleinmomatra/Das_ist_Würzburg_-_Klein_Montmartre_am_Main01.jpeg',
    alt: 'Klein-Montmartre 4',
  },
  { src: '/salon77/kleinmomatra/IMG_7668.jpeg', alt: 'Klein-Montmartre 5' },
  { src: '/salon77/kleinmomatra/IMG_7795.jpeg', alt: 'Klein-Montmartre 6' },
  {
    src: '/salon77/kleinmomatra/Das_ist_Würzburg_-_Klein_Montmartre_Mai_2023_-_03.jpeg',
    alt: 'Klein-Montmartre 7',
  },
  {
    src: '/salon77/kleinmomatra/Das_ist_Würzburg_-_Klein_Montmartre_am_Main03.jpeg',
    alt: 'Klein-Montmartre 8',
  },
  { src: '/salon77/kleinmomatra/IMG_0472_3.jpeg', alt: 'Klein-Montmartre 9' },
  { src: '/salon77/kleinmomatra/IMG_5950_2.jpeg', alt: 'Klein-Montmartre 10' },
  { src: '/salon77/kleinmomatra/IMG_6127_4.jpeg', alt: 'Klein-Montmartre 11' },
  { src: '/salon77/kleinmomatra/IMG_7674_2.jpeg', alt: 'Klein-Montmartre 12' },
  { src: '/salon77/kleinmomatra/IMG_7729_2.jpeg', alt: 'Klein-Montmartre 13' },
  { src: '/salon77/kleinmomatra/IMG_7744_2.jpeg', alt: 'Klein-Montmartre 14' },
  { src: '/salon77/kleinmomatra/IMG_7763_2.jpeg', alt: 'Klein-Montmartre 15' },
  { src: '/salon77/kleinmomatra/IMG_7764_2.jpeg', alt: 'Klein-Montmartre 16' },
  { src: '/salon77/kleinmomatra/IMG_7895_2.jpeg', alt: 'Klein-Montmartre 17' },
  { src: '/salon77/kleinmomatra/IMG_8191.jpeg', alt: 'Klein-Montmartre 18' },
  {
    src: '/salon77/kleinmomatra/Plakat_Aufsteller_Bewerbung.png',
    alt: 'Klein-Montmartre 19',
  },
  {
    src: '/salon77/kleinmomatra/Sticker_Klein_Montmartre_2023_01.jpg',
    alt: 'Klein-Montmartre 20',
  },
  { src: '/salon77/kleinmomatra/flamenco.webp', alt: 'Klein-Montmartre 21' },
];

export default function KleinMontmartre() {
  return (
    <div className="flex flex-col">
      <JsonLd data={breadcrumbJsonLd('/veranstaltungen/klein-montmartre')} />
      <JsonLd
        data={kleinMontmartreDates.map((startDate) =>
          eventJsonLd({ startDate, path: '/veranstaltungen/klein-montmartre' })
        )}
      />
      <main className="flex-1">
        <div className="max-w-4xl mx-auto w-full px-4 sm:px-6 lg:px-8 pb-12 sm:pb-16 lg:pb-20">
          {/* Header */}
          <div className="mb-12">
            <h1 className="page-title" style={{ color: 'var(--color-text)' }}>
              Klein-Montmartre
            </h1>
            <p
              className="text-lg sm:text-xl font-semibold mb-4"
              style={{ color: 'var(--color-primary)' }}
            >
              Kunsthandwerkermarkt | NEXT: 8.05.27
            </p>
            <p
              className="text-base sm:text-lg"
              style={{ color: 'var(--color-text-muted)' }}
            >
              📍 Leonhard-Frank-Promenade, Würzburg | 2x jährlich (Anfang Mai &
              Oktober)
            </p>
          </div>

          {/* Main Content */}
          <div className="space-y-8 mb-16">
            <section>
              <p
                className="text-base sm:text-lg leading-relaxed"
                style={{ color: 'var(--color-text-muted)' }}
              >
                Die Künstlerinitiative „Salon 77 e. V.“ präsentiert seit über 30
                Jahren einen der ältesten und beliebtesten Kunsthandwerkermärkte
                in Würzburg.
              </p>
            </section>

            <section>
              <p
                className="text-base sm:text-lg leading-relaxed"
                style={{ color: 'var(--color-text-muted)' }}
              >
                Viele Aussteller mit Passion präsentieren und verkaufen ihre
                Handwerkskunst. Hier findest du Produkte aller Art wie zum
                Beispiel Taschen, Hüte, Bekleidung, Schmuck, Gemälde,
                Dekoartikel für Wohnung und Garten, Skulpturen, Geschirr, Seife,
                DIY-Produkte und vieles mehr aus allen erdenklichen
                (Natur-)Materialien wie unter anderem Holz, Metall, Fimo, Ton,
                Filz, Wolle, Leder, Glas, Papier, Stoff, Gips, Acrylfarbe,
                Trockenblumen und Edelsteinen.
              </p>
            </section>

            <section>
              <p
                className="text-base sm:text-lg leading-relaxed"
                style={{ color: 'var(--color-text-muted)' }}
              >
                Inspirierend, individuell, kreativ, beeindruckend und
                faszinierend sind Attribute, die man dem „Klein Montmartre“
                zuweisen könnte. Die Veranstaltung zeichnet eine hohe
                Wertschätzung gegenüber jeder Handwerkskunst aus - fernab von
                stumpfem Konsum und belanglosen 0815 Produkten.
              </p>
            </section>

            <section>
              <p
                className="text-base sm:text-lg leading-relaxed"
                style={{ color: 'var(--color-text-muted)' }}
              >
                Es erwartet dich eine entspannte Atmosphäre direkt im Grünen am
                Main auf der Leonhard-Frank-Promenade mit ganz viel Platz für
                interessante Begegnungen und herzlichster Einladung zum
                Bewundern, Bestaunen, Stöbern & Kaufen!
              </p>
            </section>

            <section>
              <p
                className="text-base sm:text-lg leading-relaxed"
                style={{ color: 'var(--color-text-muted)' }}
              >
                Komme auch Du in den Besitz von echten Unikaten, passionierter
                Handarbeit und Produkten mit Geschichte, Herz und Hingabe. Das
                Team vom „Klein Montmartre“ und alle Aussteller freuen sich auf
                Deinen Besuch!
              </p>
            </section>
          </div>

          {/* Contact & Links Section */}
          <div className="bg-white border border-gray-200 rounded-lg p-8 mb-16">
            <h2
              className="text-2xl font-bold mb-6"
              style={{ color: 'var(--color-accent-text)' }}
            >
              Weitere Informationen
            </h2>

            <div className="space-y-4">
              <p
                className="text-base"
                style={{ color: 'var(--color-text-muted)' }}
              >
                Mehr Impressionen findest du auf unserem Instagram Account{' '}
                <a
                  href="https://www.instagram.com/klein_montmartre/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:opacity-75"
                  style={{ color: 'var(--color-primary)' }}
                >
                  @klein_montmartre
                </a>
              </p>

              <p
                className="text-base"
                style={{ color: 'var(--color-text-muted)' }}
              >
                Du möchtest deine Kunst beim „Klein Montmartre“ ausstellen?
              </p>

              <ActionLink href="mailto:kmm@salon77.de" className="px-6 py-3">
                Email an kmm@salon77.de
              </ActionLink>

              <p
                className="text-base mt-8"
                style={{ color: 'var(--color-text-muted)' }}
              >
                Oder melde dich direkt an:
              </p>

              <div className="mt-4">
                <ActionLink
                  href="/veranstaltungen/klein-montmartre/anmelden"
                  className="px-8 py-3"
                >
                  Anmelden
                </ActionLink>
              </div>

              <p
                className="text-base mt-6"
                style={{ color: 'var(--color-text-muted)' }}
              >
                Zur aktuellen Facebook Veranstaltung:{' '}
                <a
                  href="https://fb.me/e/4XfvnFiVE"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:opacity-75"
                  style={{ color: 'var(--color-primary)' }}
                >
                  fb.me/e/4XfvnFiVE
                </a>
              </p>
            </div>
          </div>

          {/* Next Dates */}
          <div className="mb-16">
            <h2
              className="text-2xl font-bold mb-6"
              style={{ color: 'var(--color-accent-text)' }}
            >
              Nächste Termine
            </h2>
            <div className="space-y-3">
              <p
                className="text-lg font-semibold"
                style={{ color: 'var(--color-text)' }}
              >
                📅 Samstag, 08.05.2027
              </p>
              <p
                className="text-lg font-semibold"
                style={{ color: 'var(--color-text)' }}
              >
                📅 Samstag, 02.10.2027
              </p>
            </div>
          </div>

          {/* Gallery */}
          <div>
            <h2
              className="text-2xl font-bold mb-8"
              style={{ color: 'var(--color-accent-text)' }}
            >
              Impressionen
            </h2>
            <ImageGallery images={GALLERY_IMAGES} />
          </div>
        </div>
      </main>
    </div>
  );
}
