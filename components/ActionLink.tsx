import Link from 'next/link';

interface ActionLinkProps {
  href: string;
  children: React.ReactNode;
  /** Padding and width classes. The default matches the standard button. */
  className?: string;
}

const baseClassName =
  'inline-block rounded-md font-semibold text-white transition-opacity hover:opacity-[0.85]';

/**
 * Pill-style button used for calls to action. Internal paths use the Next.js
 * Link; external URLs and mailto: links use a plain anchor.
 */
export default function ActionLink({
  href,
  children,
  className = 'px-6 py-2',
}: ActionLinkProps) {
  const classes = `${baseClassName} ${className}`;
  const style = { backgroundColor: '#B9BCB5' };

  if (href.startsWith('/')) {
    return (
      <Link href={href} className={classes} style={style}>
        {children}
      </Link>
    );
  }

  const isExternal = href.startsWith('http');

  return (
    <a
      href={href}
      className={classes}
      style={style}
      target={isExternal ? '_blank' : undefined}
      rel={isExternal ? 'noopener noreferrer' : undefined}
    >
      {children}
    </a>
  );
}
