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
      className={`font-medium underline-offset-4 transition-colors hover:underline ${
        isActive ? 'underline' : ''
      } ${className}`}
      style={{
        color: isActive ? 'var(--color-accent-text)' : 'var(--color-text)',
      }}
    >
      {label}
    </Link>
  );
}
