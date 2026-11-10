/// <reference types="vitest" />
import { render, screen } from '@testing-library/react';
import Wochenkurse from './page';

describe('Wochenkurse page', () => {
  it('links a known teacher to the teacher profile', () => {
    render(<Wochenkurse />);
    expect(
      screen.getAllByRole('link', { name: 'Mercedes Sebald Arguisuelas' })[0]
    ).toHaveAttribute('href', '/dozenten/mercedes-sebald-arguisuelas');
  });

  it('shows a course without a known teacher as plain text', () => {
    render(<Wochenkurse />);
    const pilates = screen.getAllByText('Pilates');
    expect(pilates).toHaveLength(2);
    pilates.forEach((el) => expect(el.closest('a')).toBeNull());
  });
});
