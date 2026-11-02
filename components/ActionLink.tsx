import Link from 'next/link';

interface ActionLinkProps {
  href: string;
  children: React.ReactNode;
  /** Padding and width classes. The default matches the standard button. */
  className?: string;
  style?: React.CSSProperties;
}

const baseClassName =
  'inline-flex items-center justify-center rounded-md font-bold text-[length:var(--size-body)] transition-opacity hover:opacity-[0.85] min-h-[var(--button-min-height)]';

/**
 * Pill-style button used for calls to action. Internal paths use the Next.js
 * Link; external URLs and mailto: links use a plain anchor.
 */
export default function ActionLink({
  href,
  children,
  className = 'px-[var(--button-padding-x)] py-2',
  style,
}: ActionLinkProps) {
  const classes = `${baseClassName} ${className}`;
  const buttonStyle = {
    backgroundColor: 'var(--color-button)',
    color: 'var(--color-button-text)',
    ...style,
  };

  if (href.startsWith('/')) {
    return (
      <Link href={href} className={classes} style={buttonStyle}>
        {children}
      </Link>
    );
  }

  const isExternal = href.startsWith('http');

  return (
    <a
      href={href}
      className={classes}
      style={buttonStyle}
      target={isExternal ? '_blank' : undefined}
      rel={isExternal ? 'noopener noreferrer' : undefined}
    >
      {children}
    </a>
  );
}
