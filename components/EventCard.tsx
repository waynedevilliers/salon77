'use client';

import Link from 'next/link';
import Image from 'next/image';

interface EventCardProps {
  title: string;
  date: string;
  location: string;
  description: string;
  image: string;
  buttonText?: string;
  buttonLink?: string;
}

export default function EventCard({ title, date, location, description, image, buttonText = 'Mehr Infos', buttonLink = '/kontakt' }: EventCardProps) {
  const isExternalLink = buttonLink.startsWith('http');
  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-lg transition-shadow overflow-hidden flex flex-col h-full">
      {/* Event Image */}
      <div className="relative h-48 sm:h-56 overflow-hidden bg-gray-200">
        <Image
          src={image}
          alt={title}
          width={400}
          height={300}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Event Content */}
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-lg sm:text-xl font-bold mb-2 transition-colors" style={{ color: '#C9A961' }}>
          {title}
        </h3>

        <p className="text-sm sm:text-base mb-3 font-semibold" style={{ color: '#B9BCB5' }}>
          {date}
        </p>

        <p className="text-xs sm:text-sm mb-4" style={{ color: '#666666' }}>
          📍 {location}
        </p>

        <p className="text-sm sm:text-base mb-6 flex-grow" style={{ color: '#666666' }}>
          {description}
        </p>

        {isExternalLink ? (
          <a
            href={buttonLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-2 rounded-md font-semibold transition-all text-white w-full text-center"
            style={{ backgroundColor: '#B9BCB5' }}
            onMouseEnter={(e) => e.currentTarget.style.opacity = '0.85'}
            onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
          >
            {buttonText}
          </a>
        ) : (
          <Link
            href={buttonLink}
            className="inline-block px-6 py-2 rounded-md font-semibold transition-all text-white w-full text-center"
            style={{ backgroundColor: '#B9BCB5' }}
            onMouseEnter={(e) => e.currentTarget.style.opacity = '0.85'}
            onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
          >
            {buttonText}
          </Link>
        )}
      </div>
    </div>
  );
}
