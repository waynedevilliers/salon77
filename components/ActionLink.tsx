import Link from 'next/link';

interface ActionLinkProps {
  href: string;
  children: React.ReactNode;
  /** Padding and width classes. The default matches the standard button. */
  className?: string;
  style?: React.CSSProperties;
  /** Primary is the peach call to action. Secondary is white with a border. */
  variant?: 'primary' | 'secondary';
}

const baseClassName =
  'inline-flex items-center justify-center rounded-md font-bold text-[length:var(--size-body)] transition-colors duration-200 motion-safe:hover:-translate-y-0.5 min-h-[var(--button-min-height)]';

const variantClassName = {
  primary: 'bg-[var(--color-button)] hover:bg-[var(--color-button-hover)]',
  secondary:
    'border border-[var(--color-border)] bg-[var(--color-surface)] hover:bg-[var(--color-surface-alt)]',
};

/**
 * Pill-style button used for calls to action. Internal paths use the Next.js
 * Link; external URLs and mailto: links use a plain anchor.
 */
export default function ActionLink({
  href,
  children,
  className = 'px-[var(--button-padding-x)] py-2',
  style,
  variant = 'primary',
}: ActionLinkProps) {
  const classes = `${baseClassName} ${variantClassName[variant]} ${className}`;
  const buttonStyle = {
    color:
      variant === 'secondary'
        ? 'var(--color-text)'
        : 'var(--color-button-text)',
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
