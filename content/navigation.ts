export interface NavItem {
  label: string;
  href: string;
}

/** Main menu, in order. Four items at most. Verein is in the footer. */
export const mainNavigation: NavItem[] = [
  { label: 'Unterricht', href: '/unterricht' },
  { label: 'Veranstaltungen', href: '/veranstaltungen' },
  { label: 'Räumlichkeiten', href: '/raeumlichkeiten' },
  { label: 'Kontakt', href: '/kontakt' },
];
