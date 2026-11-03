import Image from 'next/image';
import ActionLink from '@/components/ActionLink';
import { formatGermanDate, nextUpcomingDate } from '@/lib/dates';

interface NextEventProps {
  title: string;
  description: string;
  href: string;
  image: { src: string; alt: string };
  dates: string[];
  todayIso: string;
}

/**
 * Next date of an event, with its photo and text. Renders nothing once every
 * date has passed.
 */
export default function NextEvent({
  title,
  description,
  href,
  image,
  dates,
  todayIso,
}: NextEventProps) {
  const next = nextUpcomingDate(dates, todayIso);
  if (!next) return null;

  return (
    <section
      aria-labelledby="next-event-title"
      className="mt-12 grid grid-cols-1 gap-6 overflow-hidden rounded-xl border border-[var(--color-border)] bg-white p-4 md:grid-cols-[2fr_3fr] md:gap-8 md:p-6 lg:mt-16"
    >
      <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg bg-gray-200 md:aspect-auto md:h-full md:min-h-64">
        <Image
          src={image.src}
          alt={image.alt}
          fill
          sizes="(max-width: 767px) 100vw, 40vw"
          className="object-cover"
        />
      </div>

      <div className="flex flex-col gap-4">
        <p className="inline-flex w-fit items-center gap-2 self-start rounded-full px-4 py-1.5 text-base">
          <span
            className="font-semibold uppercase tracking-wide"
            style={{ color: 'var(--color-text)' }}
          >
            Nächster Termin
          </span>
          <time dateTime={next} className="rounded-md px-2 font-bold">
            {formatGermanDate(next)}
          </time>
        </p>
        <h2
          id="next-event-title"
          className="text-2xl font-bold leading-[1.3] lg:text-3xl"
          style={{ color: 'var(--color-accent-text)' }}
        >
          {title}
        </h2>
        {description.split('\n\n').map((paragraph) => (
          <p
            key={paragraph.slice(0, 40)}
            className="text-base leading-[1.6]"
            style={{ color: 'var(--color-text-muted)' }}
          >
            {paragraph}
          </p>
        ))}
        <div className="mt-auto flex justify-center pt-2 md:justify-start">
          <ActionLink
            href={href}
            className="px-6 py-3"
            style={{
              backgroundColor: 'var(--color-accent)',
              color: 'var(--color-button-text)',
            }}
          >
            Mehr zu Klein-Montmartre
          </ActionLink>
        </div>
      </div>
    </section>
  );
}
