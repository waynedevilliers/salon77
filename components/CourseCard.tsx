import Link from 'next/link';

interface CourseCardProps {
  title: string;
  description: string;
}

export default function CourseCard({ title, description }: CourseCardProps) {
  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-lg transition-shadow p-6 flex flex-col h-full">
      <h3 className="text-lg sm:text-xl font-bold mb-3 transition-colors" style={{ color: '#C9A961' }}>
        {title}
      </h3>
      <p className="text-sm sm:text-base mb-6 flex-grow" style={{ color: '#666666' }}>
        {description}
      </p>
      <Link
        href="/kontakt"
        className="inline-block px-6 py-2 rounded-md font-semibold transition-all text-white"
        style={{ backgroundColor: '#B9BCB5' }}
        onMouseEnter={(e) => e.currentTarget.style.opacity = '0.85'}
        onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
      >
        Kontakt aufnehmen
      </Link>
    </div>
  );
}
