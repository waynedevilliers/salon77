/// <reference types="vitest" />
import { render, screen } from '@testing-library/react';
import MenuCard from './MenuCard';

const card = {
  title: 'Unterricht',
  description: 'Tanz, Musik und Bewegung für Kinder und Erwachsene',
  href: '/unterricht',
  image: {
    src: '/homepage_images/unterricht_card_1.jpg',
    alt: 'Unterricht bei Salon77',
  },
};

describe('MenuCard', () => {
  it('is one link to the card page, named by the title', () => {
    render(<MenuCard {...card} />);
    const links = screen.getAllByRole('link');
    expect(links).toHaveLength(1);
    expect(links[0]).toHaveAttribute('href', '/unterricht');
    expect(
      screen.getByRole('link', { name: /Unterricht/ })
    ).toBeInTheDocument();
  });

  it('shows the description and "Mehr erfahren"', () => {
    render(<MenuCard {...card} />);
    expect(screen.getByText(card.description)).toBeInTheDocument();
    expect(screen.getByText('Mehr erfahren')).toBeInTheDocument();
  });
});
