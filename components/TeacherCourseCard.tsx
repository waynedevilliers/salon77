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
 * One course card for a teacher with several courses. It looks like every
 * other course card and shows one course at a time; "Nächster Kurs" flips the
 * same card to the next course and back to the first. All courses are laid on
 * top of each other, so the card keeps the height of the longest one.
 */
export default function TeacherCourseCard({ courses }: { courses: Course[] }) {
  const [index, setIndex] = useState(0);
  const [moved, setMoved] = useState(false);
  const container = useRef<HTMLDivElement>(null);

  // The clicked button is now hidden, so move focus to the visible one.
  useEffect(() => {
    if (!moved) return;
    container.current
      ?.querySelector<HTMLButtonElement>(`[data-course-button="${index}"]`)
      ?.focus();
  }, [index, moved]);

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
