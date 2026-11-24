/// <reference types="vitest" />
import { fireEvent, render, screen } from '@testing-library/react';
import ImageGallery from './ImageGallery';

// Stands in for the real lightbox, so the test can see when it is loaded and
// what it was asked to show.
vi.mock('./GalleryLightbox', () => ({
  default: ({
    open,
    index,
    slides,
  }: {
    open: boolean;
    index: number;
    slides: unknown[];
  }) => (
    <div data-testid="lightbox">
      {open ? `open at ${index} of ${slides.length}` : 'closed'}
    </div>
  ),
}));

const images = Array.from({ length: 8 }, (_, i) => ({
  src: `/images/raum-${i + 1}.jpg`,
  alt: `Raum ${i + 1}`,
}));

describe('ImageGallery', () => {
  it('shows every image when there is no preview limit', () => {
    render(<ImageGallery images={images} />);
    expect(screen.getAllByRole('img')).toHaveLength(8);
    expect(
      screen.queryByRole('button', { name: /Bilder ansehen/ })
    ).not.toBeInTheDocument();
  });

  it('shows the preview and a button for all images', () => {
    render(<ImageGallery images={images} previewCount={6} />);
    expect(screen.getAllByRole('img')).toHaveLength(6);
    expect(
      screen.getByRole('button', { name: 'Alle 8 Bilder ansehen' })
    ).toBeInTheDocument();
  });

  it('does not load the lightbox until an image is opened', () => {
    render(<ImageGallery images={images} />);
    expect(screen.queryByTestId('lightbox')).not.toBeInTheDocument();
  });

  it('opens the lightbox at the clicked image', async () => {
    render(<ImageGallery images={images} />);
    fireEvent.click(screen.getByRole('img', { name: 'Raum 3' }));
    expect(await screen.findByTestId('lightbox')).toHaveTextContent(
      'open at 2 of 8'
    );
  });

  it('opens the lightbox at the first image from the button', async () => {
    render(<ImageGallery images={images} previewCount={6} />);
    fireEvent.click(
      screen.getByRole('button', { name: 'Alle 8 Bilder ansehen' })
    );
    expect(await screen.findByTestId('lightbox')).toHaveTextContent(
      'open at 0 of 8'
    );
  });
});
