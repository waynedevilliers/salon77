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
 * other course card and shows one course at a time. A row of pills with the
 * short course names shows which courses the teacher gives; the open one is
 * filled, and a tap shows that course on the same card. All courses are laid
 * on top of each other, so the card keeps the height of the longest one.
 */
/** "Moderner Tanz: Zeitgenössischer Tanz" -> "Moderner Tanz". */
const shortTitle = (title: string) => title.split(':')[0].trim();

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
                  className="mb-4 flex flex-wrap gap-2"
                  role="group"
                  aria-label={`Kurse von ${course.instructor}`}
                >
                  {courses.map((pillCourse, pillIndex) => {
                    const open = pillIndex === courseIndex;
                    return (
                      <button
                        key={pillCourse.title}
                        type="button"
                        data-course={courseIndex}
                        data-control={`pill-${pillIndex}`}
                        onClick={() => show(pillIndex)}
                        aria-pressed={open}
                        className={`inline-flex min-h-11 items-center rounded-full border px-4 text-base font-semibold transition-colors duration-200 ${
                          open
                            ? 'border-[var(--color-button)] bg-[var(--color-button)]'
                            : 'border-[var(--color-border)] bg-[var(--color-surface)] hover:bg-[var(--color-surface-alt)]'
                        }`}
                        style={{
                          color: open
                            ? 'var(--color-button-text)'
                            : 'var(--color-text)',
                        }}
                      >
                        {shortTitle(pillCourse.title)}
                      </button>
                    );
                  })}
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
