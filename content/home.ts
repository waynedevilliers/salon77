/** Text for the home page introduction. */
export const homeIntro = {
  supportingLine: 'Tanz, Musik, Bewegung und Fotografie für alle Altersstufen',
  cta: {
    label: 'Probestunde anfragen',
    href: '/kontakt',
  },
};

export interface HomeCard {
  title: string;
  /** One line under the title. Placeholder: the client must confirm the wording. */
  description: string;
  href: string;
  image: { src: string; alt: string };
}

export const homeCards: HomeCard[] = [
  {
    title: 'Unterricht',
    // PLACEHOLDER(client): confirm this description.
    description: 'Tanz, Musik und Bewegung für Kinder und Erwachsene',
    href: '/unterricht',
    image: {
      src: '/salon77/homepage/unterricht_card_1.jpg',
      alt: 'Unterricht - Kurse und Programme bei Salon77',
    },
  },
  {
    title: 'Veranstaltungen',
    // PLACEHOLDER(client): confirm this description.
    description: 'Märkte, Konzerte und Aufführungen im Jahr',
    href: '/veranstaltungen',
    image: {
      src: '/salon77/kleinmomatra/IMG_6127_4.jpeg',
      alt: 'Veranstaltungen - Events bei Salon77',
    },
  },
  {
    title: 'Räumlichkeiten',
    // PLACEHOLDER(client): confirm this description.
    description: 'Helle Säle für Kurse und Proben',
    href: '/raeumlichkeiten',
    image: {
      src: '/salon77/raumligkeiten/Balletsaal.png',
      alt: 'Räumlichkeiten - Unsere Studios und Räume',
    },
  },
];
