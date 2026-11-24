'use client';

import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';

interface GalleryLightboxProps {
  open: boolean;
  close: () => void;
  slides: { src: string; alt: string }[];
  index: number;
}

/**
 * The full-screen image viewer. Kept in its own file so ImageGallery can load
 * it (script and styles) only when a visitor opens an image.
 */
export default function GalleryLightbox({
  open,
  close,
  slides,
  index,
}: GalleryLightboxProps) {
  return <Lightbox open={open} close={close} slides={slides} index={index} />;
}
