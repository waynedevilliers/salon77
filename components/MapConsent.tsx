'use client';

import { useState } from 'react';
import { mapContent } from '@/content/map';

interface MapConsentProps {
  embedSrc: string;
  openHref: string;
  title?: string;
}

export default function MapConsent({
  embedSrc,
  openHref,
  title = mapContent.title,
}: MapConsentProps) {
  const [loaded, setLoaded] = useState(false);

  if (loaded) {
    return (
      <iframe
        src={embedSrc}
        title={title}
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    );
  }

  return (
    <div className="flex h-full flex-col items-center justify-center gap-4 bg-gray-100 p-6 text-center">
      <p className="max-w-md text-sm text-gray-700">{mapContent.notice}</p>
      <button
        type="button"
        onClick={() => setLoaded(true)}
        className="rounded px-5 py-2 font-semibold text-[var(--color-button-text)] transition-opacity hover:opacity-80"
        style={{ backgroundColor: 'var(--color-button)' }}
      >
        {mapContent.loadButton}
      </button>
      <a
        href={openHref}
        target="_blank"
        rel="noopener noreferrer"
        className="text-sm underline hover:opacity-75"
      >
        {mapContent.openLink}
      </a>
    </div>
  );
}
