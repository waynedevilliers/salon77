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
      className={`font-medium transition-opacity hover:opacity-75 ${
        isActive ? 'underline' : ''
      } ${className}`}
      style={{ color: isActive ? 'var(--color-accent)' : 'var(--color-text)' }}
    >
      {label}
    </Link>
  );
}
