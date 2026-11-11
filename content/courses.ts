/** Courses offered at Salon77. Shown on /unterricht and on teacher profiles. */
export interface Course {
  title: string;
  description: string;
  /** One entry per time slot, shown on its own line. */
  schedule: string[];
  /** Teacher name(s), comma separated, as on the teacher profile. */
  instructor: string;
}

export const courses: Course[] = [
  {
    title: 'Kindertanz & -Ballett',
    description:
      'Kreativer Kindertanz (4-5 Jahre) mit Pre-Ballett-Übungen. Modernes Kinderballett (ab 5 Jahre) mit Grundlagen des Balletts. Fördert Koordination, Beweglichkeit, Kreativität und Sozialkompetenz.',
    schedule: [
      'Montags 15:50 - 17:00 Uhr',
      'Donnerstags 16:30 - 17:20 Uhr',
      'Freitags 15:00 - 16:20 Uhr',
    ],
    instructor: 'Hsiu-Yun Lu',
  },
  {
    title: 'Ballett für Erwachsene',
    description:
      'Klassisches Ballett mit strengen Formen der Disziplin und Körperbeherrschung. Verbessert Körperhaltung, Konzentration und Koordination. Fördert Körperbewusstsein, Selbstvertrauen und reduziert Stress.',
    schedule: ['Mittwochs 18:30 - 19:45 Uhr'],
    instructor: 'Asami Krisan',
  },
  {
    title: 'Flamenco',
    description:
      'Flamenco als Kunstform mit Fokus auf Verständnis und Flexibilität. Ausdruck von Emotionen durch Tanz, Gesang und Gitarre.',
    schedule: [
      'Dienstags 17:30 - 18:30 Uhr',
      'Dienstags 18:45 - 19:45 Uhr',
      'Freitags 18:00 - 19:00 Uhr',
    ],
    instructor: 'Mercedes Sebald Arguisuelas',
  },
  {
    title: 'Gitarre',
    description:
      'Gitarrenunterricht für Kinder, Teenager und Erwachsene. Stilrichtungen: Rock, Pop, Liedbegleitung, Klassik und Flamenco. Einzel- und Gruppenunterricht. Kostenlose Probestunde.',
    schedule: ['Nach Vereinbarung'],
    instructor: 'Robert Collomb',
  },
  {
    title: 'Bass',
    description:
      'Bassunterricht für alle Levels. Einzelunterricht mit professioneller Anleitung. Flexibles Lernen an der Bassgitarre.',
    schedule: ['Montags und Freitags ab 14:00 Uhr'],
    instructor: 'Simon Ort',
  },
  {
    title: 'Akkordeon',
    description:
      'Akkordeonunterricht in Kleingruppen. Erlernen Sie die drei Säulen der Musik: Melodie, Harmonie und Rhythmus. Stilrichtungen: Klassik, Pop, Musette, Swing. Fördert Gedächtnis, Konzentration und logisches Denken.',
    schedule: ['Nach Vereinbarung'],
    instructor: 'Stefanie Koch',
  },
  {
    title: 'DJing & Musikproduktion',
    description:
      'Lerne professionelles DJing und Musikproduktion. Von den Basics bis zum Profi Level. Praktische Workshops mit modernen Techniken und Equipment.',
    schedule: ['Nach Vereinbarung'],
    instructor: 'Sebastian Kandert, Fabio Cassarino',
  },
  {
    title: 'Fotografie',
    description:
      'Fotografie und Bildgestaltung. Erlernen Sie die Grundlagen und Techniken der professionellen Fotografie mit praktischen Workshops.',
    schedule: ['Workshops nach Vereinbarung'],
    instructor: 'Norbert Schmelz',
  },
  {
    title: 'Moderner Tanz: Zeitgenössischer Tanz',
    description:
      'Künstlerischer Tanz für Erwachsene. Erkunden Sie Ihr Bewegungspotential durch Atemübungen, Yin-Yang-Prinzipien und Tanzkomposition. Mit Pilates kombiniert. Für alle Altersstufen.',
    schedule: ['Donnerstags 18:50 - 19:40 Uhr'],
    instructor: 'Hsiu-Yun Lu',
  },
  {
    title: 'Taiji',
    description:
      'Meditation in Bewegung. Sanfte, fließende Bewegungen für Körper und Seele. Fokus auf Atmung, Körperenergie und inneres Wohlbefinden. Daoyin-Übungen für erweiterte Körperräume.',
    schedule: ['Freitags 10:30 - 11:40 Uhr'],
    instructor: 'Hsiu-Yun Lu',
  },
];
