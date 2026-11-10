/** Text for the home page introduction. */
export const homeIntro = {
  supportingLine: 'Tanz, Musik, Design und Fotografie',
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
      src: '/homepage_images/unterricht_card_1.jpg',
      alt: 'Unterricht - Kurse und Programme bei Salon77',
    },
  },
  {
    title: 'Veranstaltungen',
    // PLACEHOLDER(client): confirm this description.
    description: 'Märkte, Konzerte und Aufführungen im Jahr',
    href: '/veranstaltungen',
    image: {
      src: '/klein_montmartre_images/IMG_6127_4.jpeg',
      alt: 'Veranstaltungen - Events bei Salon77',
    },
  },
  {
    title: 'Räumlichkeiten',
    // PLACEHOLDER(client): confirm this description.
    description: 'Helle Säle für Kurse und Proben',
    href: '/raeumlichkeiten',
    image: {
      src: '/raeumlichkeiten_images/Balletsaal.png',
      alt: 'Räumlichkeiten - Unsere Studios und Räume',
    },
  },
];
