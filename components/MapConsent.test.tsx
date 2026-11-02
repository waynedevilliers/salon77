/// <reference types="vitest" />
import { fireEvent, render, screen } from '@testing-library/react';
import MapConsent from './MapConsent';

const embedSrc = 'https://www.google.com/maps/embed?pb=test';
const openHref = 'https://www.google.com/maps/place/Salon+77';

describe('MapConsent', () => {
  it('does not load the map before the visitor consents', () => {
    const { container } = render(
      <MapConsent embedSrc={embedSrc} openHref={openHref} />
    );
    expect(container.querySelector('iframe')).toBeNull();
    expect(
      screen.getByRole('button', { name: 'Karte laden' })
    ).toBeInTheDocument();
  });

  it('loads the map after the visitor clicks the button', () => {
    render(<MapConsent embedSrc={embedSrc} openHref={openHref} />);
    fireEvent.click(screen.getByRole('button', { name: 'Karte laden' }));
    expect(screen.getByTitle('Karte: Salon77 bei Google Maps')).toHaveAttribute(
      'src',
      embedSrc
    );
  });

  it('always offers a plain link to Google Maps', () => {
    render(<MapConsent embedSrc={embedSrc} openHref={openHref} />);
    expect(
      screen.getByRole('link', { name: 'In Google Maps öffnen' })
    ).toHaveAttribute('href', openHref);
  });
});
