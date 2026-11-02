import JsonLd from '@/components/JsonLd';
import { breadcrumbJsonLd, placeJsonLd } from '@/lib/structured-data';
import { pageMetadata } from '@/lib/metadata';
import ImageGallery from '@/components/ImageGallery';

export const metadata = pageMetadata({
  title: 'Räumlichkeiten | Salon77 - Würzburger Künstlerinitiative',
  description: 'Entdecke unsere Räumlichkeiten und Studios für Tanz, Musik und Fotografie.',
  path: '/raeumlichkeiten',
});

const ROOMS = [
  {
    title: 'Großer Tanzraum',
    description:
      'Unser großer Tanzraum ist die "Seele" des Salon77. Hier finden alle Tanzkurse & -workshops statt. Der Tanzraum ist auf einer Seite ganzseitig verspiegelt und ist mit einem, besonders für Tanz geeigneten, Schwingboden ausgestattet.',
  },
  {
    title: 'Kleiner Tanz- & Übungsraum',
    description:
      'Unser kleiner Tanz- und Musikraum ist optimal für Flamencotanz und für akustische Musik (z.B. Gitarre) in Kleingruppen geeignet.',
  },
  {
    title: 'Fotoatelier',
    description:
      'Unser Fotoatelier ist der ideale Raum für experimentierfreudige Fotografen. Die in den Raum hineinkonstruierte Hohlkehle ermöglicht schattenfreie Bildkonzeptionen. Das Fotoatelier kann nur von Mitgliedern, und nur nach ausführlicher Einweisung durch eine für Fotografie zuständige Person genutzt werden.',
  },
  {
    title: 'Weitere Räumlichkeiten',
    description:
      'Neben den oben aufgeführten (größten) Räumlichkeiten, existieren noch weitere nützliche Räume: Klavierraum (z.B. auch für Einzelunterricht in anderen Musikrichtungen), DJ-/Studioraum, kleine Küche (mit Kühlschrank, Spüle, Wasserkocher).',
  },
];

const GALLERY_IMAGES = [
  { src: '/salon77/raumligkeiten/Balletsaal.png', alt: 'Balletsaal' },
  { src: '/salon77/raumligkeiten/Klavierraum.png', alt: 'Klavierraum' },
  { src: '/salon77/raumligkeiten/Kleinen_Tanzsaal.png', alt: 'Kleiner Tanzsaal' },
  { src: '/salon77/raumligkeiten/Haus.png', alt: 'Haus Außenansicht' },
  { src: '/salon77/raumligkeiten/Eingang.png', alt: 'Eingang' },
  { src: '/salon77/raumligkeiten/GangInnen.png', alt: 'Gang Innen' },
];

export default function Raeumlichkeiten() {
  return (
    <div className="flex flex-col">
      <JsonLd data={breadcrumbJsonLd('/raeumlichkeiten')} />
      <JsonLd data={placeJsonLd()} />
      <main className="flex-1">
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
          <h1
            className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4"
            style={{ color: '#2c2c2c' }}
          >
            Räumlichkeiten
          </h1>
          <p
            className="text-lg sm:text-xl mb-12"
            style={{ color: '#666666' }}
          >
            Viel Platz für Bewegung - Raum für Kunst
          </p>

          {/* Room Descriptions */}
          <div className="space-y-8 mb-16">
            {ROOMS.map((room) => (
              <div key={room.title}>
                <h2
                  className="text-2xl sm:text-3xl font-bold mb-3"
                  style={{ color: '#C9A961' }}
                >
                  {room.title}
                </h2>
                <p
                  className="text-base sm:text-lg leading-relaxed"
                  style={{ color: '#666666' }}
                >
                  {room.description}
                </p>
              </div>
            ))}
          </div>

          {/* Image Gallery with Lightbox */}
          <ImageGallery images={GALLERY_IMAGES} />
        </div>
      </main>
    </div>
  );
}
