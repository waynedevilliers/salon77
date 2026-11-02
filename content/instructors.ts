export interface Instructor {
  name: string;
  specialty: string;
  /** Biography text. Shown on the detail page when present. */
  bio?: string;
  /** Personal website of the instructor, opened in a new tab. */
  website?: string;
}

export const instructors: Instructor[] = [
  {
    name: 'Andrea Kneis',
    specialty: 'Gesang',
    bio: 'Andrea Kneis unterrichtet Tanz seit 1994 und hat eine sozialpädagogische Ausbildung. Ihr Schwerpunkt liegt in der Tanzimprovisation und in verschiedenen Arten von Körperarbeit, wobei auch die zeitgenössische Tanztechnik eine wichtige Grundlage bildet. Seit der Ausbildung bei der amerikanischen Tänzerin Keriac bildet sie sich ständig bei international renommierten Lehrern weiter.',
    website: 'http://andreakneis.de/',
  },
  { name: 'Asami Krisan', specialty: 'Ballett' },
  {
    name: 'Hsiu-Yun Lu',
    specialty: 'Zeitgenössischer Tanz, Taiji, Kindertanz',
  },
  { name: 'Mercedes Sebald Arguisuelas', specialty: 'Flamenco' },
  { name: 'Michael Röthlein', specialty: 'Taiko' },
  { name: 'Norbert Schmelz', specialty: 'Fotografie' },
  { name: 'Robert Collomb', specialty: 'Gitarrenunterricht' },
  { name: 'Simon Ort', specialty: 'Bass' },
  { name: 'Stefanie Koch', specialty: 'Akkordeon' },
];
