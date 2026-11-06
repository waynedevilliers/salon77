/// <reference types="vitest" />
import { render, screen } from '@testing-library/react';
import HomeIntro from './HomeIntro';

describe('HomeIntro', () => {
  it('shows the supporting line', () => {
    render(<HomeIntro />);
    expect(
      screen.getByText(
        'Tanz, Musik, Bewegung und Fotografie für alle Altersstufen'
      )
    ).toBeInTheDocument();
  });

  it('shows the call to action linking to the teacher section', () => {
    render(<HomeIntro />);
    expect(
      screen.getByRole('link', {
        name: 'Probestunde bei unseren Dozenten anfragen',
      })
    ).toHaveAttribute('href', '/unterricht#dozenten');
  });
});
