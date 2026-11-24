/**
 * Weekly timetable. `teacher` is the name as on the teacher profile; when it
 * has a profile, the name links to it. Omit it when no teacher is known.
 */
export const weeklyCourses: Record<
  string,
  { time: string; course: string; teacher?: string }[]
> = {
  Montags: [
    {
      time: '15:50 - 17:00 Uhr',
      course: 'Kinderballett (ab 8 mit Vorkenntnisse)',
      teacher: 'Hsiu-Yun Lu',
    },
    {
      time: '18:10 - 19:20 Uhr',
      course: 'Pilates',
      teacher: 'Hsiu-Yun Lu',
    },
  ],
  Dienstags: [
    {
      time: '14:45 - 15:45 Uhr',
      course: 'Akkordeon- Crash- Gruppe (leicht Fortgeschrittene)',
      teacher: 'Stefanie Koch',
    },
    {
      time: '17:30 - 18:30 Uhr',
      course: 'Flamenco für Anfänger*innen',
      teacher: 'Mercedes Sebald Arguisuelas',
    },
    {
      time: '17:30 - 18:30 Uhr',
      course: 'Akkordeon-Unterricht für Fortgeschrittene',
      teacher: 'Stefanie Koch',
    },
    {
      time: '18:45 - 19:45 Uhr',
      course: 'Flamenco',
      teacher: 'Mercedes Sebald Arguisuelas',
    },
    {
      time: '19:00 - 21:00 Uhr',
      course: 'Afrikanisches Trommeln',
      teacher: 'André Mabiala',
    },
  ],
  Mittwochs: [
    {
      time: '18:30 - 19:45 Uhr',
      course: 'Ballett für Erwachsene',
      teacher: 'Asami Krisan',
    },
  ],
  Donnerstags: [
    {
      time: '16:30 - 17:20 Uhr',
      course: 'Kreativer Kindertanz (ab 4 Jahre)',
      teacher: 'Hsiu-Yun Lu',
    },
    {
      time: '17:40 - 18:50 Uhr',
      course: 'Pilates',
      teacher: 'Hsiu-Yun Lu',
    },
    {
      time: '18:50 - 19:40 Uhr',
      course: 'Zeitgenössischer Tanz',
      teacher: 'Hsiu-Yun Lu',
    },
  ],
  Freitags: [
    { time: '10:30 - 11:40 Uhr', course: 'Taiji', teacher: 'Hsiu-Yun Lu' },
    {
      time: '15:00 - 16:00 Uhr',
      course: 'Modernes Kinderballett (ab 6)',
      teacher: 'Hsiu-Yun Lu',
    },
    {
      time: '15:30 - 16:20 Uhr',
      course: 'Kindertanz (ab 4)',
      teacher: 'Hsiu-Yun Lu',
    },
    {
      time: '18:00 - 19:00 Uhr',
      course: 'Sevillanas',
      teacher: 'Mercedes Sebald Arguisuelas',
    },
    {
      time: '19:00 - 20:30 Uhr',
      course: 'Ballet',
      teacher: 'Asami Krisan',
    },
  ],
};
