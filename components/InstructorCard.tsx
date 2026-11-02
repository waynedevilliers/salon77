'use client';

import { useState } from 'react';
import Image from 'next/image';

interface Instructor {
  name: string;
  specialty: string;
}

export default function InstructorCard({
  instructor,
}: {
  instructor: Instructor;
}) {
  const [hasError, setHasError] = useState(false);

  return (
    <div className="flex flex-col items-center">
      <div className="relative w-40 h-40 rounded-full overflow-hidden shadow-lg mb-4 bg-gray-200 flex items-center justify-center">
        {hasError ? (
          <span className="text-sm text-gray-500">Bild folgt</span>
        ) : (
          <Image
            src={`/salon77/dozenten/${instructor.name.toLowerCase().replace(/\s+/g, '-')}.jpg`}
            alt={instructor.name}
            width={160}
            height={160}
            className="w-full h-full object-cover"
            onError={() => setHasError(true)}
          />
        )}
      </div>

      <h3
        className="text-lg sm:text-xl font-bold text-center"
        style={{ color: 'var(--color-text)' }}
      >
        {instructor.name}
      </h3>
      <p
        className="text-sm text-center"
        style={{ color: 'var(--color-primary)' }}
      >
        {instructor.specialty}
      </p>
    </div>
  );
}
