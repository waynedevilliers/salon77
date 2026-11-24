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
 * other course card and shows one course at a time. Equal segments "1. Kurs",
 * "2. Kurs", ... switch the course on the same card; the open one is filled.
 * All courses are laid on top of each other, so the card keeps the height of
 * the longest one.
 */
export default function TeacherCourseCard({ courses }: { courses: Course[] }) {
  const [index, setIndex] = useState(0);
  const [moved, setMoved] = useState(false);
  const container = useRef<HTMLDivElement>(null);

  const [focusKey, setFocusKey] = useState('pill-0');

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

  const show = (target: number) => {
    setMoved(true);
    setFocusKey(`pill-${target}`);
    setIndex(target);
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
                <div
                  className="mb-4 flex justify-center"
                  role="group"
                  aria-label={`Kurse von ${course.instructor}`}
                >
                  <div className="inline-flex overflow-hidden rounded-md border border-[var(--color-border)]">
                    {courses.map((segmentCourse, segmentIndex) => {
                      const open = segmentIndex === courseIndex;
                      return (
                        <button
                          key={segmentCourse.title}
                          type="button"
                          data-course={courseIndex}
                          data-control={`pill-${segmentIndex}`}
                          onClick={() => show(segmentIndex)}
                          aria-pressed={open}
                          aria-label={`${segmentIndex + 1}. Kurs: ${segmentCourse.title}`}
                          className={`h-9 px-3 text-sm font-semibold transition-colors duration-200 ${
                            segmentIndex > 0
                              ? 'border-l border-[var(--color-border)]'
                              : ''
                          } ${
                            open
                              ? 'bg-[var(--color-button)]'
                              : 'bg-[var(--color-surface)] hover:bg-[var(--color-surface-alt)]'
                          }`}
                          style={{
                            color: open
                              ? 'var(--color-button-text)'
                              : 'var(--color-text)',
                          }}
                        >
                          {segmentIndex + 1}. Kurs
                        </button>
                      );
                    })}
                  </div>
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
