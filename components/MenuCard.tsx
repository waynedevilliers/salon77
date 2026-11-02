import Link from 'next/link';
import Image from 'next/image';

interface MenuCardProps {
  title: string;
  href: string;
  image: {
    src: string;
    alt: string;
  };
}

export default function MenuCard({ title, href, image }: MenuCardProps) {
  return (
    <Link href={href} className="group">
      <div className="relative overflow-hidden rounded-lg bg-white border border-gray-200 shadow-sm hover:shadow-lg transition-shadow h-full">
        {/* Image */}
        <div className="relative h-64 sm:h-72 overflow-hidden bg-gray-200">
          <Image
            src={image.src}
            alt={image.alt}
            width={400}
            height={300}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* Content */}
        <div className="p-6">
          <h3
            className="text-xl sm:text-2xl font-bold transition-colors"
            style={{ color: 'var(--color-accent)' }}
          >
            {title}
          </h3>
        </div>
      </div>
    </Link>
  );
}
