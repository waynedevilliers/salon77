'use client';

import { useState } from 'react';
import Image from 'next/image';
import { instructorSlug } from '@/lib/instructors';

interface InstructorPhotoProps {
  name: string;
  /** Size classes for the round frame, for example "w-40 h-40". */
  className?: string;
}

/**
 * Round instructor photo. Shows "Bild folgt" when the file cannot be loaded.
 */
export default function InstructorPhoto({
  name,
  className = 'w-40 h-40',
}: InstructorPhotoProps) {
  const [hasError, setHasError] = useState(false);

  return (
    <div
      className={`instructor-photo relative ${className} flex items-center justify-center overflow-hidden rounded-full bg-gray-200 shadow-lg`}
    >
      {hasError ? (
        <span className="text-sm text-gray-500">Bild folgt</span>
      ) : (
        <Image
          src={`/salon77/dozenten/${instructorSlug(name)}.jpg`}
          alt={name}
          width={320}
          height={320}
          sizes="(min-width: 640px) 160px, 40vw"
          className="w-full h-full object-cover"
          onError={() => setHasError(true)}
        />
      )}
    </div>
  );
}
