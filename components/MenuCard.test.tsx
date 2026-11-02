/// <reference types="vitest" />
import { render, screen } from '@testing-library/react';
import MenuCard from './MenuCard';

const card = {
  title: 'Unterricht',
  description: 'Tanz, Musik und Bewegung für Kinder und Erwachsene',
  href: '/unterricht',
  image: {
    src: '/salon77/unterricht/DSC_2790_1_200x0.jpeg',
    alt: 'Unterricht bei Salon77',
    objectPosition: 'center',
  },
};

describe('MenuCard', () => {
  it('is a single link to the card page', () => {
    render(<MenuCard {...card} />);
    const links = screen.getAllByRole('link');
    expect(links).toHaveLength(1);
    expect(links[0]).toHaveAttribute('href', '/unterricht');
  });

  it('uses the title as the accessible name', () => {
    render(<MenuCard {...card} />);
    expect(
      screen.getByRole('link', { name: 'Unterricht' })
    ).toBeInTheDocument();
  });

  it('shows the description and the more-information label', () => {
    render(<MenuCard {...card} />);
    expect(screen.getByText(card.description)).toBeInTheDocument();
    expect(screen.getByText('Mehr erfahren')).toBeInTheDocument();
  });
});
