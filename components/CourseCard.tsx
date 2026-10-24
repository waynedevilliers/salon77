'use client';

import Link from 'next/link';
import Image from 'next/image';

interface CourseCardProps {
  title: string;
  description: string;
  schedule: string;
  instructor: string;
}

const INSTRUCTOR_IMAGES: Record<string, string> = {
  'Hsiu-Yun Lu': '/salon77/unterricht/kinder_taz.jpg',
  'Asami Krisan': '/salon77/unterricht/ballet.jpg',
  'Mercedes Sebald': '/salon77/unterricht/Flamenco.jpg',
  'Robert Collomb': '/salon77/unterricht/rob_collomb.jpg',
  'Simon Ort': '/salon77/unterricht/bass.jpeg',
  'Stefanie Koch': '/salon77/unterricht/akkordeon.png',
  'Sebastian Kandert': '/salon77/unterricht/sebastien.webp',
  'Fabio Cassarino': '/salon77/unterricht/djing&produktion.png',
  'Norbert Schmelz': '/salon77/unterricht/fotografie.jpg',
};

export default function CourseCard({ title, description, schedule, instructor }: CourseCardProps) {
  const instructors = instructor.split(',').map(i => i.trim());

  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-lg transition-shadow p-6 flex flex-col h-screen-sm" style={{ minHeight: '500px' }}>
      <h3 className="text-lg sm:text-xl font-bold mb-3 transition-colors" style={{ color: '#C9A961' }}>
        {title}
      </h3>
      <p className="text-sm sm:text-base mb-4 flex-grow overflow-hidden" style={{ color: '#666666' }}>
        {description}
      </p>
      <p className="text-xs sm:text-sm mb-2" style={{ color: '#666666' }}>
        {schedule}
      </p>

      {/* Instructor Image(s) and Name(s) */}
      <div className="flex flex-col items-center mb-6 mt-4">
        {instructors.length === 1 ? (
          // Single instructor
          <div className="flex flex-col items-center">
            <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-gray-200 mb-2 flex-shrink-0">
              <Image
                src={INSTRUCTOR_IMAGES[instructors[0]] || '/salon77/Salon77_logo_small.svg'}
                alt={instructors[0]}
                width={80}
                height={80}
                className="w-full h-full object-cover"
              />
            </div>
            <p className="text-xs sm:text-sm font-semibold text-center" style={{ color: '#2c2c2c' }}>
              {instructors[0]}
            </p>
          </div>
        ) : (
          // Multiple instructors
          <div className="flex gap-4 justify-center">
            {instructors.map((inst) => (
              <div key={inst} className="flex flex-col items-center">
                <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-gray-200 mb-2 flex-shrink-0">
                  <Image
                    src={INSTRUCTOR_IMAGES[inst] || '/salon77/Salon77_logo_small.svg'}
                    alt={inst}
                    width={80}
                    height={80}
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-xs sm:text-sm font-semibold text-center" style={{ color: '#2c2c2c' }}>
                  {inst}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>

      <Link
        href="/kontakt"
        className="inline-block px-6 py-2 rounded-md font-semibold transition-all text-white mt-auto w-full text-center"
        style={{ backgroundColor: '#B9BCB5' }}
        onMouseEnter={(e) => e.currentTarget.style.opacity = '0.85'}
        onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
      >
        Kontakt aufnehmen
      </Link>
    </div>
  );
}
