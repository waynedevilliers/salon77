import { Metadata } from 'next';
import ImageGallery from '@/components/ImageGallery';
import EmailButton from '@/components/EmailButton';
import AnmeldenButton from '@/components/AnmeldenButton';

export const metadata: Metadata = {
  title: 'Klein-Montmartre | Salon77 - Kunsthandwerkermarkt Würzburg',
  description: 'Klein-Montmartre Kunsthandwerkermarkt - Deutschlands ältester und beliebtester Kunsthandwerkermarkt in Würzburg.',
};

const GALLERY_IMAGES = [
  { src: '/salon77/kleinmomatra/IMG_7469.jpeg', alt: 'Klein-Montmartre 1' },
  { src: '/salon77/kleinmomatra/IMG_7481_2.jpeg', alt: 'Klein-Montmartre 2' },
  { src: '/salon77/kleinmomatra/IMG_7527.jpeg', alt: 'Klein-Montmartre 3' },
  { src: '/salon77/kleinmomatra/Das_ist_Würzburg_-_Klein_Montmartre_am_Main01.jpeg', alt: 'Klein-Montmartre 4' },
  { src: '/salon77/kleinmomatra/IMG_7668.jpeg', alt: 'Klein-Montmartre 5' },
  { src: '/salon77/kleinmomatra/IMG_7795.jpeg', alt: 'Klein-Montmartre 6' },
];

export default function KleinMontmartre() {
  return (
    <div className="flex flex-col">
      <main className="flex-1">
        <div className="max-w-4xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
          {/* Header */}
          <div className="mb-12">
            <h1
              className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4"
              style={{ color: '#2c2c2c' }}
            >
              Klein-Montmartre
            </h1>
            <p
              className="text-lg sm:text-xl font-semibold mb-2"
              style={{ color: '#B9BCB5' }}
            >
              Kunsthandwerkermarkt | NEXT: 8.05.27
            </p>
            <p
              className="text-base sm:text-lg"
              style={{ color: '#666666' }}
            >
              📍 Leonhard-Frank-Promenade, Würzburg | 2x jährlich (Anfang Mai & Oktober)
            </p>
          </div>

          {/* Main Content */}
          <div className="space-y-8 mb-16">
            <section>
              <p
                className="text-base sm:text-lg leading-relaxed"
                style={{ color: '#666666' }}
              >
                Die Künstlerinitiative „Salon 77 e. V.“ präsentiert seit über 30 Jahren einen der ältesten und beliebtesten Kunsthandwerkermärkte in Würzburg.
              </p>
            </section>

            <section>
              <p
                className="text-base sm:text-lg leading-relaxed"
                style={{ color: '#666666' }}
              >
                Viele Aussteller mit Passion präsentieren und verkaufen ihre Handwerkskunst. Hier findest du Produkte aller Art wie zum Beispiel Taschen, Hüte, Bekleidung, Schmuck, Gemälde, Dekoartikel für Wohnung und Garten, Skulpturen, Geschirr, Seife, DIY-Produkte und vieles mehr aus allen erdenklichen (Natur-)Materialien wie unter anderem Holz, Metall, Fimo, Ton, Filz, Wolle, Leder, Glas, Papier, Stoff, Gips, Acrylfarbe, Trockenblumen und Edelsteinen.
              </p>
            </section>

            <section>
              <p
                className="text-base sm:text-lg leading-relaxed"
                style={{ color: '#666666' }}
              >
                Inspirierend, individuell, kreativ, beeindruckend und faszinierend sind Attribute, die man dem „Klein Montmartre“ zuweisen könnte. Die Veranstaltung zeichnet eine hohe Wertschätzung gegenüber jeder Handwerkskunst aus - fernab von stumpfem Konsum und belanglosen 0815 Produkten.
              </p>
            </section>

            <section>
              <p
                className="text-base sm:text-lg leading-relaxed"
                style={{ color: '#666666' }}
              >
                Es erwartet dich eine entspannte Atmosphäre direkt im Grünen am Main auf der Leonhard-Frank-Promenade mit ganz viel Platz für interessante Begegnungen und herzlichster Einladung zum Bewundern, Bestaunen, Stöbern & Kaufen!
              </p>
            </section>

            <section>
              <p
                className="text-base sm:text-lg leading-relaxed"
                style={{ color: '#666666' }}
              >
                Komme auch Du in den Besitz von echten Unikaten, passionierter Handarbeit und Produkten mit Geschichte, Herz und Hingabe. Das Team vom „Klein Montmartre“ und alle Aussteller freuen sich auf Deinen Besuch!
              </p>
            </section>
          </div>

          {/* Contact & Links Section */}
          <div className="bg-white border border-gray-200 rounded-lg p-8 mb-16">
            <h2
              className="text-2xl font-bold mb-6"
              style={{ color: '#C9A961' }}
            >
              Weitere Informationen
            </h2>

            <div className="space-y-4">
              <p className="text-base" style={{ color: '#666666' }}>
                Mehr Impressionen findest du auf unserem Instagram Account{' '}
                <a
                  href="https://www.instagram.com/klein_montmartre/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:opacity-75"
                  style={{ color: '#B9BCB5' }}
                >
                  @klein_montmartre
                </a>
              </p>

              <p className="text-base" style={{ color: '#666666' }}>
                Du möchtest deine Kunst beim „Klein Montmartre“ ausstellen?
              </p>

              <EmailButton email="kmm@salon77.de" text="Email an kmm@salon77.de" />

              <p className="text-base mt-8" style={{ color: '#666666' }}>
                Oder melde dich direkt an:
              </p>

              <div className="mt-4">
                <AnmeldenButton
                  href="/veranstaltungen/klein-montmartre/anmelden"
                  text="Anmelden"
                />
              </div>

              <p className="text-base mt-6" style={{ color: '#666666' }}>
                Zur aktuellen Facebook Veranstaltung:{' '}
                <a
                  href="https://fb.me/e/4XfvnFiVE"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:opacity-75"
                  style={{ color: '#B9BCB5' }}
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
              style={{ color: '#C9A961' }}
            >
              Nächste Termine
            </h2>
            <div className="space-y-3">
              <p className="text-lg font-semibold" style={{ color: '#2c2c2c' }}>
                📅 Samstag, 08.05.2027
              </p>
              <p className="text-lg font-semibold" style={{ color: '#2c2c2c' }}>
                📅 Samstag, 02.10.2027
              </p>
            </div>
          </div>

          {/* Gallery */}
          <div>
            <h2
              className="text-2xl font-bold mb-8"
              style={{ color: '#C9A961' }}
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
