import Image from 'next/image';
import ActionLink from '@/components/ActionLink';

interface EventCardProps {
  title: string;
  date: string;
  location: string;
  description: string;
  image: string;
  buttonText?: string;
  buttonLink?: string;
}

export default function EventCard({
  title,
  date,
  location,
  description,
  image,
  buttonText = 'Mehr Infos',
  buttonLink = '/kontakt',
}: EventCardProps) {
  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow-sm transition-[transform,box-shadow] duration-300 motion-safe:hover:-translate-y-1 hover:shadow-lg overflow-hidden flex flex-col h-full">
      {/* Event Image */}
      <div className="relative w-full h-64 sm:h-80 overflow-hidden bg-gray-200">
        <Image
          src={image}
          alt={title}
          fill
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Event Content */}
      <div className="p-6 flex flex-col flex-grow">
        <h3
          className="text-lg sm:text-xl font-bold mb-2 transition-colors"
          style={{ color: 'var(--color-accent)' }}
        >
          {title}
        </h3>

        {date && (
          <p
            className="text-sm sm:text-base mb-3 font-semibold"
            style={{ color: 'var(--color-primary)' }}
          >
            {date}
          </p>
        )}

        <p
          className="text-xs sm:text-sm mb-4"
          style={{ color: 'var(--color-text-muted)' }}
        >
          📍 {location}
        </p>

        <p
          className="text-sm sm:text-base mb-6 flex-grow"
          style={{ color: 'var(--color-text-muted)' }}
        >
          {description}
        </p>

        <ActionLink href={buttonLink} className="w-full px-6 py-2 text-center">
          {buttonText}
        </ActionLink>
      </div>
    </div>
  );
}
