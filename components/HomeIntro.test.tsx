/// <reference types="vitest" />
import { render, screen } from '@testing-library/react';
import HomeIntro from './HomeIntro';

describe('HomeIntro', () => {
  it('shows the supporting line', () => {
    render(<HomeIntro />);
    expect(
      screen.getByText(
        'Tanz, Musik, Design und Fotografie'
      )
    ).toBeInTheDocument();
  });

  it('does not show a call to action link', () => {
    render(<HomeIntro />);
    expect(screen.queryByRole('link')).not.toBeInTheDocument();
  });
});
