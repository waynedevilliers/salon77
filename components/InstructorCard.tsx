'use client';

import Image from 'next/image';

interface Instructor {
  name: string;
  specialty: string;
}

export default function InstructorCard({ instructor }: { instructor: Instructor }) {
  return (
    <div className="flex flex-col items-center">
      <div className="relative w-40 h-40 rounded-full overflow-hidden shadow-lg mb-4 bg-gray-200 flex items-center justify-center">
        <Image
          src={`/salon77/dozenten/${instructor.name.toLowerCase().replace(/\s+/g, '-')}.jpg`}
          alt={instructor.name}
          width={160}
          height={160}
          className="w-full h-full object-cover"
          onError={(e) => {
            e.currentTarget.style.display = 'none';
          }}
        />
        <div className="absolute inset-0 bg-gray-300 flex items-center justify-center text-gray-500 text-sm">
          Bild folgt
        </div>
      </div>

      <h3
        className="text-lg sm:text-xl font-bold text-center"
        style={{ color: '#2c2c2c' }}
      >
        {instructor.name}
      </h3>
      <p
        className="text-sm text-center"
        style={{ color: '#B9BCB5' }}
      >
        {instructor.specialty}
      </p>
    </div>
  );
}
