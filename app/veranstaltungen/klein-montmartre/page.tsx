import { Suspense } from 'react';
import JsonLd from '@/components/JsonLd';
import KleinMontmartreFacts from '@/components/KleinMontmartreFacts';
import { breadcrumbJsonLd } from '@/lib/structured-data';
import { pageMetadata } from '@/lib/metadata';
import ImageGallery from '@/components/ImageGallery';
import ActionLink from '@/components/ActionLink';

export const metadata = pageMetadata({
  title: 'Klein-Montmartre | Salon77 - Kunsthandwerkermarkt Würzburg',
  description:
    'Klein-Montmartre Kunsthandwerkermarkt - Deutschlands ältester und beliebtester Kunsthandwerkermarkt in Würzburg.',
  path: '/veranstaltungen/klein-montmartre',
});

// TODO for the client: the alt texts marked "Impression vom Klein-Montmartre"
// are generic. Send a short description of each photo to replace them.
const GALLERY_IMAGES = [
  {
    src: '/klein_montmartre_images/IMG_7469.jpeg',
    alt: 'Blühende Kastanie vor Marktständen am Main',
  },
  {
    src: '/klein_montmartre_images/IMG_7481_2.jpeg',
    alt: 'Aussteller mit Tees, Kräutern und Seifen an seinem Stand',
  },
  {
    src: '/klein_montmartre_images/IMG_7527.jpeg',
    alt: 'Holzwaren von Stefan Weiß Design am Stand',
  },
  {
    src: '/klein_montmartre_images/Das_ist_Würzburg_-_Klein_Montmartre_am_Main01.jpeg',
    alt: 'Marktstände auf der Promenade am Main',
  },
  {
    src: '/klein_montmartre_images/IMG_7668.jpeg',
    alt: 'Zwei Ausstellerinnen mit Schmuck und Keramik',
  },
  {
    src: '/klein_montmartre_images/IMG_7795.jpeg',
    alt: 'Keramikaussteller mit Schalen und Krügen',
  },
  {
    src: '/klein_montmartre_images/Das_ist_Würzburg_-_Klein_Montmartre_Mai_2023_-_03.jpeg',
    alt: 'Marktstand auf einer Wiese mit Gänseblümchen',
  },
  {
    src: '/klein_montmartre_images/Das_ist_Würzburg_-_Klein_Montmartre_am_Main03.jpeg',
    alt: 'Luftaufnahme vom Markt am Mainufer mit Besuchern',
  },
  {
    src: '/klein_montmartre_images/IMG_0472_3.jpeg',
    alt: 'Keramik und Geschirr auf einem Tisch im Grünen',
  },
  {
    src: '/klein_montmartre_images/IMG_5950_2.jpeg',
    alt: 'Impression vom Klein-Montmartre',
  },
  {
    src: '/klein_montmartre_images/IMG_6127_4.jpeg',
    alt: 'Impression vom Klein-Montmartre',
  },
  {
    src: '/klein_montmartre_images/IMG_7674_2.jpeg',
    alt: 'Impression vom Klein-Montmartre',
  },
  {
    src: '/klein_montmartre_images/IMG_7729_2.jpeg',
    alt: 'Impression vom Klein-Montmartre',
  },
  {
    src: '/klein_montmartre_images/IMG_7744_2.jpeg',
    alt: 'Impression vom Klein-Montmartre',
  },
  {
    src: '/klein_montmartre_images/IMG_7763_2.jpeg',
    alt: 'Impression vom Klein-Montmartre',
  },
  {
    src: '/klein_montmartre_images/IMG_7764_2.jpeg',
    alt: 'Impression vom Klein-Montmartre',
  },
  {
    src: '/klein_montmartre_images/IMG_7895_2.jpeg',
    alt: 'Impression vom Klein-Montmartre',
  },
  {
    src: '/klein_montmartre_images/IMG_8191.jpeg',
    alt: 'Impression vom Klein-Montmartre',
  },
  {
    src: '/klein_montmartre_images/Plakat_Aufsteller_Bewerbung.png',
    alt: 'Plakat: Bewerbung als Aussteller beim Klein-Montmartre',
  },
  {
    src: '/klein_montmartre_images/Sticker_Klein_Montmartre_2023_01.jpg',
    alt: 'Sticker Klein-Montmartre mit Kontaktdaten',
  },
];

export default function KleinMontmartre() {
  return (
    <div className="flex flex-col">
      <JsonLd data={breadcrumbJsonLd('/veranstaltungen/klein-montmartre')} />
      <main className="flex-1">
        <div className="max-w-4xl mx-auto w-full px-4 sm:px-6 lg:px-8 pb-12 sm:pb-16 lg:pb-20">
          {/* Header */}
          <div className="mb-12">
            <h1 className="page-title" style={{ color: 'var(--color-text)' }}>
              Klein-Montmartre
            </h1>
            <p
              className="text-lg sm:text-xl font-semibold mb-4"
              style={{ color: 'var(--color-sage-text)' }}
            >
              Kunsthandwerkermarkt | NEXT: 8.05.27
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

          {/* Facts box, below the intro text */}
          <div className="mb-16">
            <Suspense fallback={null}>
              <KleinMontmartreFacts />
            </Suspense>
          </div>

          {/* Exhibitors */}
          <section className="mb-16">
            <h2
              className="text-2xl font-bold mb-6"
              style={{ color: 'var(--color-accent-text)' }}
            >
              Für Aussteller
            </h2>
            <p
              className="text-base sm:text-lg leading-relaxed mb-6"
              style={{ color: 'var(--color-text-muted)' }}
            >
              Du möchtest deine Kunst beim Klein-Montmartre ausstellen? Melde
              dich direkt online an oder schreib uns eine E-Mail.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <ActionLink
                href="/veranstaltungen/klein-montmartre/anmelden"
                className="px-8 py-3"
              >
                Jetzt anmelden
              </ActionLink>
              <ActionLink
                href="mailto:kmm@salon77.de"
                variant="secondary"
                className="px-8 py-3"
              >
                E-Mail schreiben
              </ActionLink>
            </div>
            <p
              className="mt-4 text-base"
              style={{ color: 'var(--color-text)' }}
            >
              E-Mail: kmm@salon77.de
            </p>
          </section>

          {/* Gallery */}
          <div>
            <h2
              className="text-2xl font-bold mb-8"
              style={{ color: 'var(--color-accent-text)' }}
            >
              Impressionen
            </h2>
            <ImageGallery images={GALLERY_IMAGES} previewCount={6} />
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <ActionLink
                href="https://www.instagram.com/klein_montmartre/"
                variant="secondary"
                className="w-full px-6 py-3 sm:w-auto"
              >
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  className="mr-2 h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <rect x="3" y="3" width="18" height="18" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                </svg>
                Mehr Bilder auf Instagram
                <span className="sr-only"> (öffnet in neuem Tab)</span>
              </ActionLink>
              <ActionLink
                href="https://fb.me/e/4XfvnFiVE"
                variant="secondary"
                className="w-full px-6 py-3 sm:w-auto"
              >
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  className="mr-2 h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <rect x="3" y="5" width="18" height="16" rx="2" />
                  <path d="M3 10h18M8 3v4M16 3v4" />
                </svg>
                Zur Facebook Veranstaltung
                <span className="sr-only"> (öffnet in neuem Tab)</span>
              </ActionLink>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
