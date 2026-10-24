import { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Räumlichkeiten | Salon77 - Würzburger Künstlerinitiative',
  description: 'Entdecke unsere Räumlichkeiten und Studios für Tanz, Musik und Fotografie.',
};

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

          {/* Gallery - Row 1 (3 images) */}
          <div className="mb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {GALLERY_IMAGES.slice(0, 3).map((image) => (
                <div
                  key={image.alt}
                  className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow"
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={400}
                    height={300}
                    className="w-full h-64 sm:h-72 object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Gallery - Row 2 (3 images) */}
          <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {GALLERY_IMAGES.slice(3, 6).map((image) => (
                <div
                  key={image.alt}
                  className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow"
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={400}
                    height={300}
                    className="w-full h-64 sm:h-72 object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
