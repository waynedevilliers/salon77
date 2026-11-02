import { Lato, Playfair_Display, Allura } from 'next/font/google';

export const lato = Lato({
  subsets: ['latin'],
  weight: ['300', '400', '700'],
  display: 'swap',
  variable: '--font-lato',
});

export const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['700'],
  display: 'swap',
  variable: '--font-playfair',
});

// Decorative only, never for readable text.
export const allura = Allura({
  subsets: ['latin'],
  weight: '400',
  display: 'swap',
  variable: '--font-allura',
  preload: false,
});
