import type { Metadata } from 'next';
import { site } from '@/content/site';

interface PageMetadataInput {
  title: string;
  description: string;
  /** Path of the page, starting with a slash, e.g. "/kontakt". */
  path: string;
  noIndex?: boolean;
}

const shareImage = {
  url: `${site.url}${site.shareImagePath}`,
  width: 1200,
  height: 630,
  alt: site.legalName,
};

/**
 * Builds the metadata every page needs: canonical URL, Open Graph, Twitter
 * card with a share image, and robots directives.
 */
export function pageMetadata({
  title,
  description,
  path,
  noIndex = false,
}: PageMetadataInput): Metadata {
  const url = `${site.url}${path}`;

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: site.name,
      locale: site.locale,
      type: 'website',
      images: [shareImage],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [shareImage.url],
    },
    robots: noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true },
  };
}
