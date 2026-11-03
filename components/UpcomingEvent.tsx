import NextEvent from '@/components/NextEvent';
import { getTodayIso } from '@/lib/dates';
import { kleinMontmartreDates, kleinMontmartreTeaser } from '@/content/events';

/**
 * The next Klein-Montmartre date. Reads today's date per request, so it is
 * wrapped in Suspense on the home page and the rest of the page is prerendered.
 */
export default async function UpcomingEvent() {
  const todayIso = await getTodayIso();
  return (
    <NextEvent
      {...kleinMontmartreTeaser}
      dates={kleinMontmartreDates}
      todayIso={todayIso}
    />
  );
}
