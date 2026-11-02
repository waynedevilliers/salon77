import { pageMetadata } from '@/lib/metadata';
import BackButton from '@/components/BackButton';

export const metadata = pageMetadata({
  title: 'Verein | Salon77 - Würzburger Künstlerinitiative',
  description: 'Erfahren Sie mehr über die Würzburger Künstlerinitiative Salon77',
  path: '/verein',
});

export default function Verein() {
  return (
    <div className="flex flex-col">
      <main className="flex-1">
        <div className="max-w-4xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
          <h1
            className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-center"
            style={{ color: '#2c2c2c' }}
          >
            Verein
          </h1>
          <p
            className="text-lg text-center mb-12"
            style={{ color: '#666666' }}
          >
            Die Künstlerinitiative
          </p>

          <div className="space-y-8">
            {/* Main Content */}
            <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
              <div className="space-y-6">
                <div>
                  <h2
                    className="text-2xl sm:text-3xl font-bold mb-4"
                    style={{ color: '#2c2c2c' }}
                  >
                    Der Salon 77
                  </h2>
                  <p
                    className="text-base sm:text-lg leading-relaxed"
                    style={{ color: '#666666' }}
                  >
                    Der Salon 77 ist für Würzburg einzigartig. Er besteht als gemeinnütziger Verein
                    seit dem Jahre 1977. Gefördert werden künstlerische Darbietungen in den Bereichen
                    Tanz, Bewegung, Musik und Fotografie.
                  </p>
                </div>

                <div>
                  <h2
                    className="text-2xl sm:text-3xl font-bold mb-4"
                    style={{ color: '#2c2c2c' }}
                  >
                    Unsere Mission
                  </h2>
                  <p
                    className="text-base sm:text-lg leading-relaxed mb-4"
                    style={{ color: '#666666' }}
                  >
                    Salon77 unterstützt und fördert künstlerische Aktivitäten in Würzburg. Wir bieten
                    Kurse, Workshops und Veranstaltungen an, die Menschen die Möglichkeit geben, ihre
                    künstlerischen Fähigkeiten zu entwickeln und ihre Leidenschaft für Kunst, Tanz,
                    Musik und Fotografie auszudrücken.
                  </p>
                  <p
                    className="text-base sm:text-lg leading-relaxed"
                    style={{ color: '#666666' }}
                  >
                    Unser Verein arbeitet mit erfahrenen Künstlern und Pädagogen zusammen, um eine
                    inspirierende und unterstützende Umgebung für alle Altersgruppen und Fähigkeitsstufen
                    zu schaffen.
                  </p>
                </div>

                <div>
                  <h3
                    className="text-xl sm:text-2xl font-bold mb-4"
                    style={{ color: '#C9A961' }}
                  >
                    Fokus Bereiche
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span
                        className="inline-block w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0"
                        style={{ backgroundColor: '#ef3d6c' }}
                      />
                      <span
                        className="text-base sm:text-lg"
                        style={{ color: '#666666' }}
                      >
                        Tanz und Bewegung
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span
                        className="inline-block w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0"
                        style={{ backgroundColor: '#ef3d6c' }}
                      />
                      <span
                        className="text-base sm:text-lg"
                        style={{ color: '#666666' }}
                      >
                        Musik und Gesang
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span
                        className="inline-block w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0"
                        style={{ backgroundColor: '#ef3d6c' }}
                      />
                      <span
                        className="text-base sm:text-lg"
                        style={{ color: '#666666' }}
                      >
                        Fotografie
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span
                        className="inline-block w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0"
                        style={{ backgroundColor: '#ef3d6c' }}
                      />
                      <span
                        className="text-base sm:text-lg"
                        style={{ color: '#666666' }}
                      >
                        Künstlerische Darbietungen
                      </span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h2
                    className="text-2xl sm:text-3xl font-bold mb-4"
                    style={{ color: '#2c2c2c' }}
                  >
                    Seit 1977
                  </h2>
                  <p
                    className="text-base sm:text-lg leading-relaxed"
                    style={{ color: '#666666' }}
                  >
                    Mit mehr als 45 Jahren Erfahrung hat sich Salon77 als eine führende Kunstinitiative
                    in Würzburg etabliert. Wir sind stolz darauf, eine vielfältige Gemeinschaft von
                    Künstlern, Studierenden und Kunstfreunden zu unterstützen und zu inspirieren.
                  </p>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-gray-200">
                <BackButton />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
