/// <reference types="vitest" />
import { render, screen } from '@testing-library/react';
import NextEvent from './NextEvent';

const props = {
  title: 'Klein-Montmartre',
  description: 'Erster Absatz.\n\nZweiter Absatz.',
  href: '/veranstaltungen/klein-montmartre',
  image: { src: '/images/markt.jpg', alt: 'Kunstmarkt im Hof' },
  dates: ['2027-10-02', '2027-05-08'],
};

describe('NextEvent', () => {
  it('shows the next date that is today or later', () => {
    render(<NextEvent {...props} todayIso="2027-05-09" />);
    const time = screen.getByText('02.10.2027');
    expect(time.tagName).toBe('TIME');
    expect(time).toHaveAttribute('dateTime', '2027-10-02');
  });

  it('still shows an event on its own day', () => {
    render(<NextEvent {...props} todayIso="2027-05-08" />);
    expect(screen.getByText('08.05.2027')).toBeInTheDocument();
  });

  it('renders nothing once every date has passed', () => {
    const { container } = render(
      <NextEvent {...props} todayIso="2027-10-03" />
    );
    expect(container).toBeEmptyDOMElement();
  });

  it('shows the title, each paragraph, the photo and the link', () => {
    render(<NextEvent {...props} todayIso="2027-01-01" />);
    expect(
      screen.getByRole('region', { name: 'Klein-Montmartre' })
    ).toBeInTheDocument();
    expect(screen.getByText('Erster Absatz.')).toBeInTheDocument();
    expect(screen.getByText('Zweiter Absatz.')).toBeInTheDocument();
    expect(
      screen.getByRole('img', { name: 'Kunstmarkt im Hof' })
    ).toBeInTheDocument();
    expect(
      screen.getByRole('link', { name: 'Mehr zu Klein-Montmartre' })
    ).toHaveAttribute('href', '/veranstaltungen/klein-montmartre');
  });
});
