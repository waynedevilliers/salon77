/// <reference types="vitest" />
import { pageMetadata } from './metadata';

const input = {
  title: 'Kontakt | Salon77',
  description: 'Kontaktinformationen für Salon77 in Würzburg',
  path: '/kontakt',
};

describe('pageMetadata', () => {
  it('sets an absolute canonical URL for the page', () => {
    expect(pageMetadata(input).alternates?.canonical).toBe(
      'https://salon77.de/kontakt'
    );
  });

  it('sets Open Graph data with a share image', () => {
    const { openGraph } = pageMetadata(input);
    expect(openGraph).toMatchObject({
      title: input.title,
      description: input.description,
      url: 'https://salon77.de/kontakt',
      locale: 'de_DE',
    });
    expect(openGraph?.images).toEqual([
      expect.objectContaining({
        url: 'https://salon77.de/site_images/salon77.jpg',
        width: 1200,
        height: 630,
      }),
    ]);
  });

  it('sets a large Twitter card with the same share image', () => {
    expect(pageMetadata(input).twitter).toMatchObject({
      card: 'summary_large_image',
      images: ['https://salon77.de/site_images/salon77.jpg'],
    });
  });

  it('allows indexing by default', () => {
    expect(pageMetadata(input).robots).toEqual({ index: true, follow: true });
  });

  it('can exclude a page from the index', () => {
    expect(pageMetadata({ ...input, noIndex: true }).robots).toEqual({
      index: false,
      follow: false,
    });
  });
});
