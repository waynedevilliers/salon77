/// <reference types="vitest" />
import { render, screen } from '@testing-library/react';
import MenuCard from './MenuCard';

describe('MenuCard', () => {
  const mockCard = {
    title: 'Test Card',
    href: '/test',
    image: {
      src: 'https://example.com/test.jpg',
      alt: 'Test image',
    },
  };

  it('renders the title', () => {
    render(<MenuCard {...mockCard} />);
    expect(screen.getByText('Test Card')).toBeInTheDocument();
  });

  it('renders the image with correct alt text', () => {
    render(<MenuCard {...mockCard} />);
    expect(screen.getByAltText('Test image')).toBeInTheDocument();
  });

  it('links to the correct href', () => {
    render(<MenuCard {...mockCard} />);
    const link = screen.getByRole('link');
    expect(link).toHaveAttribute('href', '/test');
  });

  it('renders with proper image alt text', () => {
    render(<MenuCard {...mockCard} />);
    const image = screen.getByAltText('Test image') as HTMLImageElement;
    expect(image).toBeInTheDocument();
    expect(image.src).toContain('test.jpg');
  });
});
