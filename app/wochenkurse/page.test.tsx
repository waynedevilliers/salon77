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
    // Montag Pilates has no teacher yet; Donnerstag Pilates has one (see below).
    const pilates = screen.getAllByText('Pilates');
    const plain = pilates.filter((el) => !el.closest('a'));
    expect(plain).toHaveLength(1);
  });

  it('links the Donnerstag Pilates teacher', () => {
    render(<Wochenkurse />);
    const row = screen.getByText('17:40 - 18:50 Uhr').parentElement;
    expect(row?.textContent).toContain('Pilates');
    expect(row?.textContent).toContain('Hsiu-Yun Lu');
  });
});
