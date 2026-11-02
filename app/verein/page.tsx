import JsonLd from '@/components/JsonLd';
import { breadcrumbJsonLd } from '@/lib/structured-data';
import { pageMetadata } from '@/lib/metadata';
import BackButton from '@/components/BackButton';

export const metadata = pageMetadata({
  title: 'Verein | Salon77 - Würzburger Künstlerinitiative',
  description:
    'Erfahren Sie mehr über die Würzburger Künstlerinitiative Salon77',
  path: '/verein',
});

const FOCUS_AREAS = [
  'Tanz und Bewegung',
  'Musik und Gesang',
  'Fotografie',
  'Künstlerische Darbietungen',
];

export default function Verein() {
  return (
    <div className="flex flex-col">
      <JsonLd data={breadcrumbJsonLd('/verein')} />
      <main className="flex-1">
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 pb-12 sm:pb-16 lg:pb-20">
          <h1 className="page-title" style={{ color: 'var(--color-text)' }}>
            Verein
          </h1>
          <p
            className="text-lg sm:text-xl mb-12"
            style={{ color: 'var(--color-text-muted)' }}
          >
            Die Künstlerinitiative
          </p>

          {/* Sections use the same heading, text and spacing as Räumlichkeiten */}
          <div className="space-y-8 mb-16">
            <div>
              <h2
                className="text-2xl sm:text-3xl font-bold mb-3"
                style={{ color: 'var(--color-accent)' }}
              >
                Der Salon 77
              </h2>
              <p
                className="text-base sm:text-lg leading-relaxed"
                style={{ color: 'var(--color-text-muted)' }}
              >
                Der Salon 77 ist für Würzburg einzigartig. Er besteht als
                gemeinnütziger Verein seit dem Jahre 1977. Gefördert werden
                künstlerische Darbietungen in den Bereichen Tanz, Bewegung,
                Musik und Fotografie.
              </p>
            </div>

            <div>
              <h2
                className="text-2xl sm:text-3xl font-bold mb-3"
                style={{ color: 'var(--color-accent)' }}
              >
                Unsere Mission
              </h2>
              <p
                className="text-base sm:text-lg leading-relaxed mb-4"
                style={{ color: 'var(--color-text-muted)' }}
              >
                Salon77 unterstützt und fördert künstlerische Aktivitäten in
                Würzburg. Wir bieten Kurse, Workshops und Veranstaltungen an,
                die Menschen die Möglichkeit geben, ihre künstlerischen
                Fähigkeiten zu entwickeln und ihre Leidenschaft für Kunst, Tanz,
                Musik und Fotografie auszudrücken.
              </p>
              <p
                className="text-base sm:text-lg leading-relaxed"
                style={{ color: 'var(--color-text-muted)' }}
              >
                Unser Verein arbeitet mit erfahrenen Künstlern und Pädagogen
                zusammen, um eine inspirierende und unterstützende Umgebung für
                alle Altersgruppen und Fähigkeitsstufen zu schaffen.
              </p>
            </div>

            <div>
              <h2
                className="text-2xl sm:text-3xl font-bold mb-3"
                style={{ color: 'var(--color-accent)' }}
              >
                Fokus Bereiche
              </h2>
              <ul className="list-disc space-y-2 pl-6 marker:text-[var(--color-accent-text)]">
                {FOCUS_AREAS.map((area) => (
                  <li
                    key={area}
                    className="text-base sm:text-lg"
                    style={{ color: 'var(--color-text-muted)' }}
                  >
                    {area}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2
                className="text-2xl sm:text-3xl font-bold mb-3"
                style={{ color: 'var(--color-accent)' }}
              >
                Seit 1977
              </h2>
              <p
                className="text-base sm:text-lg leading-relaxed"
                style={{ color: 'var(--color-text-muted)' }}
              >
                Mit mehr als 45 Jahren Erfahrung hat sich Salon77 als eine
                führende Kunstinitiative in Würzburg etabliert. Wir sind stolz
                darauf, eine vielfältige Gemeinschaft von Künstlern,
                Studierenden und Kunstfreunden zu unterstützen und zu
                inspirieren.
              </p>
            </div>
          </div>

          <BackButton />
        </div>
      </main>
    </div>
  );
}
