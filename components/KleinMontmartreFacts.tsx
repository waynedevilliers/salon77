import JsonLd from '@/components/JsonLd';
import MapConsent from '@/components/MapConsent';
import { kleinMontmartreDates, kleinMontmartreFacts } from '@/content/events';
import {
  formatGermanWeekdayDate,
  getTodayIso,
  upcomingDates,
} from '@/lib/dates';
import { eventJsonLd } from '@/lib/structured-data';

const ICON_CLASS = 'h-5 w-5 shrink-0';

/**
 * Upcoming dates, place and frequency of Klein-Montmartre, with event data for
 * each upcoming date. Reads today's date per request, so it is wrapped in
 * Suspense on the page.
 */
export default async function KleinMontmartreFacts() {
  const todayIso = await getTodayIso();
  const dates = upcomingDates(kleinMontmartreDates, todayIso);

  return (
    <>
      <JsonLd
        data={dates.map((startDate) =>
          eventJsonLd({
            startDate,
            path: '/veranstaltungen/klein-montmartre',
          })
        )}
      />
      <div className="bg-white border border-gray-200 rounded-lg p-8">
        <div className="grid gap-8 md:grid-cols-2">
          <dl className="space-y-6">
            <div>
              <dt
                className="flex items-center gap-2 text-lg font-bold"
                style={{ color: 'var(--color-accent-text)' }}
              >
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  className={ICON_CLASS}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="3" y="5" width="18" height="16" rx="2" />
                  <path d="M3 10h18M8 3v4M16 3v4" />
                </svg>
                Nächste Termine
              </dt>
              <dd
                className="mt-2 space-y-1 pl-7 text-lg font-semibold"
                style={{ color: 'var(--color-text)' }}
              >
                {dates.length > 0 ? (
                  dates.map((date) => (
                    <time key={date} dateTime={date} className="block">
                      {formatGermanWeekdayDate(date)}
                    </time>
                  ))
                ) : (
                  <span className="block">Termin folgt in Kürze</span>
                )}
              </dd>
            </div>

            <div>
              <dt
                className="flex items-center gap-2 text-lg font-bold"
                style={{ color: 'var(--color-accent-text)' }}
              >
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  className={ICON_CLASS}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M4 11V9a4 4 0 0 1 4-4h12M20 13v2a4 4 0 0 1-4 4H4M17 2l3 3-3 3M7 22l-3-3 3-3" />
                </svg>
                Wie oft
              </dt>
              <dd
                className="mt-2 pl-7 text-lg"
                style={{ color: 'var(--color-text)' }}
              >
                {kleinMontmartreFacts.frequency}
              </dd>
            </div>

            <div>
              <dt
                className="flex items-center gap-2 text-lg font-bold"
                style={{ color: 'var(--color-accent-text)' }}
              >
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  className={ICON_CLASS}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 21s-7-6.2-7-11.5a7 7 0 0 1 14 0C19 14.8 12 21 12 21z" />
                  <circle cx="12" cy="9.5" r="2.5" />
                </svg>
                Ort
              </dt>
              <dd
                className="mt-2 pl-7 text-lg"
                style={{ color: 'var(--color-text)' }}
              >
                {kleinMontmartreFacts.location}
              </dd>
            </div>

            {kleinMontmartreFacts.time && (
              <div>
                <dt
                  className="flex items-center gap-2 text-lg font-bold"
                  style={{ color: 'var(--color-accent-text)' }}
                >
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    className={ICON_CLASS}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  >
                    <circle cx="12" cy="12" r="9" />
                    <path d="M12 7v5l3 2" />
                  </svg>
                  Uhrzeit
                </dt>
                <dd
                  className="mt-2 pl-7 text-lg"
                  style={{ color: 'var(--color-text)' }}
                >
                  {kleinMontmartreFacts.time}
                </dd>
              </div>
            )}

            {kleinMontmartreFacts.admission && (
              <div>
                <dt
                  className="flex items-center gap-2 text-lg font-bold"
                  style={{ color: 'var(--color-accent-text)' }}
                >
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    className={ICON_CLASS}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  >
                    <path d="M4 7h16v10H4zM9 7v10" />
                  </svg>
                  Eintritt
                </dt>
                <dd
                  className="mt-2 pl-7 text-lg"
                  style={{ color: 'var(--color-text)' }}
                >
                  {kleinMontmartreFacts.admission}
                </dd>
              </div>
            )}
          </dl>
          <div className="h-64 overflow-hidden rounded-lg">
            <MapConsent
              embedSrc={kleinMontmartreFacts.mapEmbedSrc}
              openHref={kleinMontmartreFacts.mapOpenHref}
              title="Karte: Leonhard-Frank-Promenade, Würzburg"
            />
          </div>
        </div>
      </div>
    </>
  );
}
