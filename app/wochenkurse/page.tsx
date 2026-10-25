import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Wochenkurse | Salon77 - Würzburger Künstlerinitiative',
  description: 'Wöchentliche Kurse aus allen Kunstbereichen im Salon77',
};

const WEEKLY_COURSES = {
  Montags: [
    { time: '15:50 - 17:00 Uhr', course: 'Kinderballett (ab 8 mit Vorkenntnisse)' },
    { time: '18:10 - 19:20 Uhr', course: 'Pilates' },
  ],
  Dienstags: [
    { time: '14:45 - 15:45 Uhr', course: 'Akkordeon- Crash- Gruppe (leicht Fortgeschrittene)' },
    { time: '17:00 - 18:00 Uhr', course: 'Flamenco für Anfänger*innen' },
    { time: '17:30 - 18:30 Uhr', course: 'Akkordeon-Unterricht für Fortgeschrittene' },
    { time: '18:30 - 19:30 Uhr', course: 'Flamenco' },
    { time: '18:30 - 19:30 Uhr', course: 'Akkordeon-Kurs für Fortgeschrittene' },
    { time: '19:00 - 21:00 Uhr', course: 'Afrikanisches Trommeln' },
  ],
  Mittwochs: [
    { time: '18:30 - 19:45 Uhr', course: 'Ballett für Erwachsene' },
  ],
  Donnerstags: [
    { time: '16:30 - 17:20 Uhr', course: 'Kreativer Kindertanz (ab 4 Jahre)' },
    { time: '17:40 - 18:50 Uhr', course: 'Pilates' },
    { time: '18:50 - 19:40 Uhr', course: 'Zeitgenössischer Tanz' },
  ],
  Freitags: [
    { time: '10:30 - 11:40 Uhr', course: 'Taiji' },
    { time: '15:00 - 16:00 Uhr', course: 'Modernes Kinderballett (ab 6)' },
    { time: '15:30 - 16:20 Uhr', course: 'Kindertanz (ab 4)' },
  ],
};

export default function Wochenkurse() {
  return (
    <div className="flex flex-col">
      <main className="flex-1">
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
          <h1
            className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-center"
            style={{ color: '#2c2c2c' }}
          >
            Wochenkurse
          </h1>
          <p
            className="text-lg text-center mb-12"
            style={{ color: '#666666' }}
          >
            Wöchentliche Kurse aus allen Kunstbereichen im Salon77
          </p>

          {/* Course Schedule */}
          <div className="space-y-12">
            {Object.entries(WEEKLY_COURSES).map(([day, courses], dayIndex) => (
              <div key={dayIndex} className="border-l-4 pl-6" style={{ borderColor: '#ef3d6c' }}>
                <h2
                  className="text-2xl sm:text-3xl font-bold mb-6"
                  style={{ color: '#ef3d6c' }}
                >
                  {day}
                </h2>
                <div className="space-y-4">
                  {courses.map((item, courseIndex) => (
                    <div key={courseIndex} className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                      <div
                        className="font-semibold flex-shrink-0 min-w-[140px]"
                        style={{ color: '#2c2c2c' }}
                      >
                        {item.time}
                      </div>
                      <div style={{ color: '#666666' }}>
                        {item.course}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <p
            className="text-center mt-12 pt-8 border-t-2"
            style={{ color: '#999999', borderColor: '#e0e0e0' }}
          >
            Für weitere Informationen oder spezielle Anfragen kontaktieren Sie uns bitte direkt.
          </p>
        </div>
      </main>
    </div>
  );
}
