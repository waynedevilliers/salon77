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
 * other course card and shows one course at a time. Round ‹ › arrows around
 * "Kurs 1 von 3" flip the same card to the previous or next course, wrapping
 * around. All courses are laid on top of each other, so the card keeps the
 * height of the longest one.
 */
export default function TeacherCourseCard({ courses }: { courses: Course[] }) {
  const [index, setIndex] = useState(0);
  const [moved, setMoved] = useState(false);
  const container = useRef<HTMLDivElement>(null);

  const [focusKey, setFocusKey] = useState('next');

  // The clicked control is now on a hidden copy of the card, so move focus to
  // the same control on the visible one.
  useEffect(() => {
    if (!moved) return;
    container.current
      ?.querySelector<HTMLButtonElement>(
        `[data-course="${index}"][data-control="${focusKey}"]`
      )
      ?.focus();
  }, [index, moved, focusKey]);

  const show = (target: number, control: 'previous' | 'next') => {
    setMoved(true);
    setFocusKey(control);
    setIndex((target + courses.length) % courses.length);
  };

  const arrowClassName =
    'inline-flex h-9 w-9 items-center justify-center rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] text-xl leading-none transition-colors duration-200 hover:bg-[var(--color-surface-alt)]';

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
                <div className="mb-4 flex items-center justify-center gap-3">
                  <button
                    type="button"
                    data-course={courseIndex}
                    data-control="previous"
                    onClick={() => show(courseIndex - 1, 'previous')}
                    aria-label="Vorheriger Kurs"
                    className={arrowClassName}
                    style={{ color: 'var(--color-text)' }}
                  >
                    ‹
                  </button>
                  <span
                    className="text-sm font-semibold"
                    style={{ color: 'var(--color-text-muted)' }}
                  >
                    Kurs {courseIndex + 1} von {courses.length}
                  </span>
                  <button
                    type="button"
                    data-course={courseIndex}
                    data-control="next"
                    onClick={() => show(courseIndex + 1, 'next')}
                    aria-label="Nächster Kurs"
                    className={arrowClassName}
                    style={{ color: 'var(--color-text)' }}
                  >
                    ›
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
