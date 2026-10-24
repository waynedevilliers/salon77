'use client';

interface EmailButtonProps {
  email: string;
  text: string;
}

export default function EmailButton({ email, text }: EmailButtonProps) {
  return (
    <a
      href={`mailto:${email}`}
      className="inline-block px-6 py-3 rounded-md font-semibold transition-all text-white"
      style={{ backgroundColor: '#B9BCB5' }}
      onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.85')}
      onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
    >
      {text}
    </a>
  );
}
