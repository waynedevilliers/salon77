import Image from 'next/image';
import Link from 'next/link';
import ActionLink from '@/components/ActionLink';
import { findInstructorByName, instructorSlug } from '@/lib/instructors';

interface CourseCardProps {
  title: string;
  description: string;
  schedule: string[];
  instructor: string;
}

// Course-only teachers have no profile yet, so their course photo is kept here.
// TODO(client): add profiles for these teachers and move the photos to content/instructors.ts.
const COURSE_ONLY_IMAGES: Record<string, string> = {
  'Sebastian Kandert': '/unterricht_images/sebastien.webp',
  'Fabio Cassarino': '/unterricht_images/djing&produktion.png',
};

function InstructorBlock({ name }: { name: string }) {
  const profile = findInstructorByName(name);
  const image =
    findInstructorByName(name)?.cardImage ??
    COURSE_ONLY_IMAGES[name] ??
    '/site_images/Salon77_logo_small.svg';

  const content = (
    <>
      <div className="mb-2 h-24 w-24 flex-shrink-0 overflow-hidden rounded-full border-2 border-gray-200">
        <Image
          src={image}
          alt={name}
          width={96}
          height={96}
          className="h-full w-full object-cover"
        />
      </div>
      <span
        className="text-center text-base font-semibold underline-offset-4 group-hover:underline"
        style={{ color: 'var(--color-text)' }}
      >
        {name}
      </span>
    </>
  );

  // With a profile, the photo and the name are one link to it.
  if (profile) {
    return (
      <Link
        href={`/dozenten/${instructorSlug(profile.name)}`}
        className="group flex flex-col items-center rounded-lg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-accent-text)]"
      >
        {content}
      </Link>
    );
  }

  return <div className="flex flex-col items-center">{content}</div>;
}

const cardClassName =
  'flex h-full flex-col rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-[transform,box-shadow] duration-300 motion-safe:hover:-translate-y-1 hover:shadow-lg';

const titleClassName = 'mb-2 text-xl font-bold leading-[1.3] sm:text-2xl';

const scheduleClassName =
  'list-disc pl-5 text-base font-semibold leading-[1.6] marker:text-base marker:leading-none marker:text-[var(--color-button)]';

function TitleBar() {
  return (
    <span
      aria-hidden="true"
      className="mb-4 block h-0.5 w-10"
      style={{ backgroundColor: 'var(--color-accent)' }}
    />
  );
}

function CardFooter({ instructor }: { instructor: string }) {
  const instructors = instructor.split(',').map((i) => i.trim());
  return (
    <>
      <div className="mb-6 flex flex-wrap justify-center gap-6">
        {instructors.map((name) => (
          <InstructorBlock key={name} name={name} />
        ))}
      </div>

      <ActionLink
        href="/unterricht#dozenten"
        className="w-full px-6 py-3 text-center"
      >
        Mehr erfahren
      </ActionLink>
    </>
  );
}

/**
 * One card for a teacher with several courses: each course title with its
 * times, then the teacher once. Same style as a single course card.
 */
export function TeacherCoursesCard({
  courses,
}: {
  courses: CourseCardProps[];
}) {
  return (
    <div className={cardClassName} style={{ minHeight: '500px' }}>
      {courses.map((course) => (
        <div key={course.title} className="mb-6">
          <h3
            className={titleClassName}
            style={{ color: 'var(--color-heading)' }}
          >
            {course.title}
          </h3>
          <TitleBar />
          <ul
            className={scheduleClassName}
            style={{ color: 'var(--color-text)' }}
          >
            {course.schedule.map((slot) => (
              <li key={slot}>{slot}</li>
            ))}
          </ul>
        </div>
      ))}

      <div className="mt-auto">
        <CardFooter instructor={courses[0].instructor} />
      </div>
    </div>
  );
}

export default function CourseCard({
  title,
  description,
  schedule,
  instructor,
}: CourseCardProps) {
  return (
    <div className={cardClassName} style={{ minHeight: '500px' }}>
      <h3 className={titleClassName} style={{ color: 'var(--color-heading)' }}>
        {title}
      </h3>
      <TitleBar />
      <p
        className="mb-4 text-base leading-[1.6]"
        style={{ color: 'var(--color-text-muted)' }}
      >
        {description}
      </p>
      <ul
        className={`mb-6 mt-auto h-[5.5rem] ${scheduleClassName}`}
        style={{ color: 'var(--color-text)' }}
      >
        {schedule.map((slot) => (
          <li key={slot}>{slot}</li>
        ))}
      </ul>

      <CardFooter instructor={instructor} />
    </div>
  );
}
