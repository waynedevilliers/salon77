'use client';

import { useEffect, useRef, useState } from 'react';
import CourseCard from '@/components/CourseCard';

interface Course {
  title: string;
  description: string;
  schedule: string[];
  instructor: string;
}

/**
 * One course card per teacher. A teacher with several courses gets one card
 * with a "Nächster Kurs" button that shows the next course on the same card.
 * All courses are laid on top of each other, so the card is as tall as the
 * longest one and does not jump when it changes.
 */
export default function TeacherCourseCard({ courses }: { courses: Course[] }) {
  const [index, setIndex] = useState(0);
  const [moved, setMoved] = useState(false);
  const container = useRef<HTMLDivElement>(null);

  // After a click the old button is hidden, so move focus to the new one.
  useEffect(() => {
    if (!moved) return;
    container.current
      ?.querySelector<HTMLButtonElement>(`[data-course-button="${index}"]`)
      ?.focus();
  }, [index, moved]);

  if (courses.length === 1) {
    const [course] = courses;
    return <CourseCard {...course} />;
  }

  const next = () => {
    setMoved(true);
    setIndex((current) => (current + 1) % courses.length);
  };

  return (
    <div ref={container} className="grid h-full">
      {courses.map((course, courseIndex) => {
        const active = courseIndex === index;
        return (
          <div
            key={course.title}
            className={`[grid-area:1/1] ${active ? '' : 'invisible'}`}
            aria-hidden={!active}
            inert={!active}
          >
            <CourseCard
              {...course}
              switcher={
                <div className="mb-6 flex items-center justify-between gap-4">
                  <span
                    className="text-base"
                    style={{ color: 'var(--color-text-muted)' }}
                  >
                    Kurs {courseIndex + 1} von {courses.length}
                  </span>
                  <button
                    type="button"
                    data-course-button={courseIndex}
                    onClick={next}
                    className="inline-flex min-h-[var(--button-min-height)] items-center justify-center rounded-md border border-[var(--color-border)] bg-[var(--color-surface)] px-5 text-[length:var(--size-body)] font-bold transition-colors duration-200 hover:bg-[var(--color-surface-alt)]"
                    style={{ color: 'var(--color-text)' }}
                  >
                    Nächster Kurs ›
                  </button>
                </div>
              }
            />
          </div>
        );
      })}
      <p aria-live="polite" className="sr-only">
        {moved
          ? `Kurs ${index + 1} von ${courses.length}: ${courses[index].title}`
          : ''}
      </p>
    </div>
  );
}
