'use client';

import { useLayoutEffect, useRef, useState } from 'react';

interface RevealProps {
  children: React.ReactNode;
  className?: string;
}

type Stage = 'shown' | 'waiting' | 'revealed';

/**
 * Fades and rises its content once, when it first scrolls into view.
 *
 * Content on the first screen is shown straight away, without the fade, so it
 * does not wait for the JavaScript to load (see docs/DECISIONS.md). Content
 * further down is hidden once the page is interactive and fades in when it
 * scrolls into view. Without JavaScript nothing is hidden, because the server
 * HTML has no `reveal` class; with reduced motion the CSS keeps it visible.
 */
export default function Reveal({ children, className = '' }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [stage, setStage] = useState<Stage>('shown');

  // Layout effect: decides before the first paint after hydration, so content
  // below the first screen never flickers.
  useLayoutEffect(() => {
    const element = ref.current;
    if (!element) return;
    if (element.getBoundingClientRect().top < window.innerHeight) return;

    setStage('waiting');
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setStage('revealed');
          observer.disconnect();
        }
      },
      { threshold: 0.12 }
    );
    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  const stageClass = {
    shown: '',
    waiting: 'reveal',
    revealed: 'reveal reveal-visible',
  }[stage];

  return (
    <div
      ref={ref}
      className={`${stageClass} ${className}`.trim()}
      // Hide without the fade-out, so a card cannot dim while the page loads.
      style={stage === 'waiting' ? { transition: 'none' } : undefined}
    >
      {children}
    </div>
  );
}
