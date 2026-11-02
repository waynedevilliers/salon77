import JsonLd from '@/components/JsonLd';
import { breadcrumbJsonLd, eventJsonLd } from '@/lib/structured-data';
import { kleinMontmartreDates } from '@/content/events';
import { pageMetadata } from '@/lib/metadata';
import EventCard from '@/components/EventCard';

export const metadata = pageMetadata({
  title: 'Veranstaltungen | Salon77 - Würzburger Künstlerinitiative',
  description: 'Entdecke alle kommenden Veranstaltungen und Events bei Salon77.',
  path: '/veranstaltungen',
});

const EVENTS = [
  {
    title: 'Klein-Montmartre',
    date: 'Samstag, 08.05.2027',
    location: 'Leonhard-Frank-Promenade, Würzburg',
    description:
      'Kunsthandwerkermarkt mit über 30 Jahren Tradition. Viele Aussteller präsentieren ihre handwerkliche Kunstkunst. Eine entspannte Atmosphäre direkt im Grünen am Main mit Platz für interessante Begegnungen. 2x jährlich (Mai & Oktober).',
    image: '/salon77/kleinmomatra/IMG_7469.jpeg',
    buttonText: 'Mehr Infos',
    buttonLink: '/veranstaltungen/klein-montmartre',
  },
  {
    title: 'Flamenco Festival',
    date: 'Placeholder',
    location: 'Würzburg',
    description: 'Würzburg und Deutschlands ältestes Flamenco-Festival mit erstklassigen Künstlern aus Spanien und Europa.',
    image: '/salon77/kleinmomatra/flamenco.webp',
    buttonText: 'Zur Webseite',
    buttonLink: 'https://www.wueflamencofestival.de/',
  },
];

export default function Veranstaltungen() {
  return (
    <div className="flex flex-col">
      <JsonLd data={breadcrumbJsonLd('/veranstaltungen')} />
      <JsonLd data={kleinMontmartreDates.map((startDate) => eventJsonLd({ startDate, path: '/veranstaltungen/klein-montmartre' }))} />
      <main className="flex-1">
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
          <h1
            className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4"
            style={{ color: 'var(--color-text)' }}
          >
            Veranstaltungen
          </h1>
          <p
            className="text-lg sm:text-xl mb-12"
            style={{ color: 'var(--color-text-muted)' }}
          >
            Klein-Montmartre - Kunsthandwerkermarkt
          </p>

          {/* Event Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {EVENTS.map((event) => (
              <EventCard
                key={event.title}
                title={event.title}
                date={event.date}
                location={event.location}
                description={event.description}
                image={event.image}
                buttonText={event.buttonText}
                buttonLink={event.buttonLink}
              />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
