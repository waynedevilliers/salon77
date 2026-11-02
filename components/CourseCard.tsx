import Image from 'next/image';
import Link from 'next/link';
import ActionLink from '@/components/ActionLink';
import { findInstructorByName, instructorSlug } from '@/lib/instructors';

interface CourseCardProps {
  title: string;
  description: string;
  schedule: string;
  instructor: string;
}

const INSTRUCTOR_IMAGES: Record<string, string> = {
  'Hsiu-Yun Lu': '/salon77/unterricht/kinder_taz.jpg',
  'Asami Krisan': '/salon77/dozenten/asami-krisan.jpg',
  'Mercedes Sebald': '/salon77/unterricht/Flamenco.jpg',
  'Robert Collomb': '/salon77/unterricht/rob_collomb.jpg',
  'Simon Ort': '/salon77/unterricht/bass.jpeg',
  'Stefanie Koch': '/salon77/unterricht/akkordeon.png',
  'Sebastian Kandert': '/salon77/unterricht/sebastien.webp',
  'Fabio Cassarino': '/salon77/unterricht/djing&produktion.png',
  'Norbert Schmelz': '/salon77/unterricht/fotografie.jpg',
};

function InstructorBlock({ name }: { name: string }) {
  const profile = findInstructorByName(name);
  const nameClass =
    'text-base font-semibold text-center underline-offset-4 hover:underline';
  const nameStyle = { color: 'var(--color-text)' };

  return (
    <div className="flex flex-col items-center">
      <div className="mb-2 h-24 w-24 flex-shrink-0 overflow-hidden rounded-full border-2 border-gray-200">
        <Image
          src={INSTRUCTOR_IMAGES[name] || '/salon77/Salon77_logo_small.svg'}
          alt={name}
          width={96}
          height={96}
          className="h-full w-full object-cover"
        />
      </div>
      {profile ? (
        <Link
          href={`/dozenten/${instructorSlug(profile.name)}`}
          className={nameClass}
          style={nameStyle}
        >
          {name}
        </Link>
      ) : (
        <p className={nameClass} style={nameStyle}>
          {name}
        </p>
      )}
    </div>
  );
}

export default function CourseCard({
  title,
  description,
  schedule,
  instructor,
}: CourseCardProps) {
  const instructors = instructor.split(',').map((i) => i.trim());

  return (
    <div
      className="flex h-full flex-col rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-[transform,box-shadow] duration-300 motion-safe:hover:-translate-y-1 hover:shadow-lg"
      style={{ minHeight: '500px' }}
    >
      <h3
        className="mb-2 text-xl font-bold leading-[1.3] sm:text-2xl"
        style={{ color: 'var(--color-heading)' }}
      >
        {title}
      </h3>
      <span
        aria-hidden="true"
        className="mb-4 block h-0.5 w-10"
        style={{ backgroundColor: 'var(--color-accent)' }}
      />
      <p
        className="mb-4 text-base leading-[1.6]"
        style={{ color: 'var(--color-text-muted)' }}
      >
        {description}
      </p>
      <ul
        className="mb-6 mt-auto h-[3.2rem] list-disc pl-5 text-base font-semibold leading-[1.6] marker:text-base marker:leading-none marker:text-[var(--color-button)]"
        style={{ color: 'var(--color-text)' }}
      >
        <li>{schedule}</li>
      </ul>

      <div className="mb-6 flex flex-wrap justify-center gap-6">
        {instructors.map((name) => (
          <InstructorBlock key={name} name={name} />
        ))}
      </div>

      <ActionLink href="/kontakt" className="w-full px-6 py-3 text-center">
        Probestunde anfragen
      </ActionLink>
    </div>
  );
}
