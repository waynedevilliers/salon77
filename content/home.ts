export interface HomeCard {
  title: string;
  /** One line under the title. Placeholder: the client must confirm the wording. */
  description: string;
  href: string;
  image: {
    src: string;
    alt: string;
    /** CSS object-position, to keep the important part of the photo in view. */
    objectPosition: string;
    /** Set when the photo must be replaced. Shown only in this file. */
    todo?: string;
  };
}

export const homeContent = {
  headline: 'Die Künstlerinitiative in Würzburg-Frauenland',
  supportingLine: 'Tanz, Musik, Bewegung und Fotografie für alle Altersstufen',
  cta: {
    label: 'Probestunde anfragen',
    href: '/kontakt',
  },
  cards: [
    {
      title: 'Unterricht',
      // TODO(client): confirm this description.
      description: 'Tanz, Musik und Bewegung für Kinder und Erwachsene',
      href: '/unterricht',
      image: {
        src: '/salon77/unterricht/DSC_2790_1_200x0.jpeg',
        alt: 'Unterricht bei Salon77: Kurse und Programme',
        objectPosition: 'center',
        // TODO: Replace with sharp photo of a class. The current photo is low quality.
        todo: 'Replace with sharp photo of a class',
      },
    },
    {
      title: 'Veranstaltungen',
      // TODO(client): confirm this description.
      description: 'Märkte, Konzerte und Aufführungen im Jahr',
      href: '/veranstaltungen',
      image: {
        src: '/salon77/veranstaltung/IMG_7469.jpeg',
        alt: 'Veranstaltungen bei Salon77: Markt mit Ständen',
        objectPosition: 'center 30%',
      },
    },
    {
      title: 'Räumlichkeiten',
      // TODO(client): confirm this description.
      description: 'Helle Säle zum Mieten für Kurse und Proben',
      href: '/raeumlichkeiten',
      image: {
        src: '/salon77/raumligkeiten/Balletsaal.png',
        alt: 'Räumlichkeiten bei Salon77: Ballettsaal',
        objectPosition: 'center',
      },
    },
  ] satisfies HomeCard[],
};
