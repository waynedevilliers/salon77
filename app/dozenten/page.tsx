import { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Dozenten | Salon77 - Würzburger Künstlerinitiative',
  description: 'Unsere Dozenten und Künstler bei Salon77',
};

const INSTRUCTORS = [
  { name: 'André Mabiala', specialty: 'Afrikanisches Trommeln' },
  { name: 'Andrea Kneis', specialty: 'Gesang' },
  { name: 'Asami Krisan', specialty: 'Ballett' },
  { name: 'Hsiu-Yun Lu', specialty: 'Zeitgenössischer Tanz, Taiji, Kindertanz' },
  { name: 'Mercedes Sebald Arguisuelas', specialty: 'Flamenco' },
  { name: 'Michael Röthlein', specialty: 'Taiko' },
  { name: 'Norbert Schmelz', specialty: 'Fotografie' },
  { name: 'Robert Collomb', specialty: 'Gitarrenunterricht' },
  { name: 'Simon Ort', specialty: 'Bass' },
  { name: 'Stefanie Koch', specialty: 'Akkordeon' },
];

export default function Dozenten() {
  return (
    <div className="flex flex-col">
      <main className="flex-1">
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
          <h1
            className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-center"
            style={{ color: '#2c2c2c' }}
          >
            Unsere Dozenten
          </h1>
          <p
            className="text-lg text-center mb-12"
            style={{ color: '#666666' }}
          >
            Erfahrene Künstler und Pädagogen, die ihre Leidenschaft weitergeben
          </p>

          {/* Instructors Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {INSTRUCTORS.map((instructor, index) => (
              <div key={index} className="flex flex-col items-center">
                {/* Circular Image Placeholder */}
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

                {/* Instructor Info */}
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
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
