import Link from 'next/link';

interface NavLinkProps {
  href: string;
  label: string;
  isActive: boolean;
  className?: string;
}

export default function NavLink({
  href,
  label,
  isActive,
  className = '',
}: NavLinkProps) {
  return (
    <Link
      href={href}
      aria-current={isActive ? 'page' : undefined}
      className={`font-normal transition-opacity hover:opacity-75 ${
        isActive ? 'underline underline-offset-4' : ''
      } ${className}`}
      style={{
        color: isActive ? 'var(--color-accent-text)' : 'var(--color-sage-text)',
      }}
    >
      {label}
    </Link>
  );
}
