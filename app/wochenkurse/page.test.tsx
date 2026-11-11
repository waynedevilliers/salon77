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

  it('names the teacher on both Pilates classes', () => {
    render(<Wochenkurse />);
    for (const time of ['18:10 - 19:20 Uhr', '17:40 - 18:50 Uhr']) {
      const row = screen.getByText(time).parentElement;
      expect(row?.textContent).toContain('Pilates');
      expect(row?.textContent).toContain('Hsiu-Yun Lu');
    }
  });
});
