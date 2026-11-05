'use client';

import { useState } from 'react';
import Image from 'next/image';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';

interface GalleryImage {
  src: string;
  alt: string;
}

interface ImageGalleryProps {
  images: GalleryImage[];
  /** Show only the first images; the rest open in the lightbox. */
  previewCount?: number;
}

export default function ImageGallery({
  images,
  previewCount,
}: ImageGalleryProps) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const visibleImages = previewCount ? images.slice(0, previewCount) : images;
  const hasMore = visibleImages.length < images.length;

  const lightboxSlides = images.map((img) => ({
    src: img.src,
    alt: img.alt,
  }));

  const handleImageClick = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  const renderTile = (image: GalleryImage, index: number) => (
    <div
      key={image.src}
      className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow cursor-pointer"
      onClick={() => handleImageClick(index)}
    >
      <Image
        src={image.src}
        alt={image.alt}
        width={400}
        height={300}
        sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 33vw"
        className="w-full h-64 sm:h-72 object-cover hover:scale-105 transition-transform duration-300"
      />
    </div>
  );

  return (
    <>
      {/* Row 1 - First 3 images */}
      <div className="mb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {visibleImages.slice(0, 3).map(renderTile)}
        </div>
      </div>

      {/* Row 2 - Remaining images */}
      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {visibleImages
            .slice(3)
            .map((image, index) => renderTile(image, index + 3))}
        </div>
      </div>

      {hasMore && (
        <div className="mt-8 flex justify-center">
          <button
            type="button"
            onClick={() => handleImageClick(0)}
            className="inline-flex min-h-[var(--button-min-height)] items-center justify-center rounded-md border border-[var(--color-border)] bg-[var(--color-surface)] px-8 py-3 text-[length:var(--size-body)] font-bold transition-colors duration-200 hover:bg-[var(--color-surface-alt)]"
            style={{ color: 'var(--color-text)' }}
          >
            Alle {images.length} Bilder ansehen
          </button>
        </div>
      )}

      {/* Lightbox Gallery */}
      <Lightbox
        open={lightboxOpen}
        close={() => setLightboxOpen(false)}
        slides={lightboxSlides}
        index={lightboxIndex}
      />
    </>
  );
}
