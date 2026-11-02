/// <reference types="vitest" />
import {
  findInstructor,
  getAdjacentInstructors,
  instructorSlug,
} from './instructors';

describe('instructorSlug', () => {
  it('lowercases the name and joins words with hyphens', () => {
    expect(instructorSlug('Hsiu-Yun Lu')).toBe('hsiu-yun-lu');
    expect(instructorSlug('Mercedes Sebald Arguisuelas')).toBe(
      'mercedes-sebald-arguisuelas'
    );
  });

  it('keeps umlauts in composed form', () => {
    expect(instructorSlug('Michael Röthlein')).toBe('michael-röthlein');
    expect(instructorSlug('Michael Röthlein').normalize('NFC')).toBe(
      'michael-röthlein'
    );
  });
});

describe('findInstructor', () => {
  it('finds an instructor by slug', () => {
    expect(findInstructor('andrea-kneis')?.name).toBe('Andrea Kneis');
  });

  it('returns undefined for an unknown slug', () => {
    expect(findInstructor('niemand')).toBeUndefined();
  });
});

describe('getAdjacentInstructors', () => {
  it('returns the neighbours in list order', () => {
    const adjacent = getAdjacentInstructors('hsiu-yun-lu');
    expect(adjacent?.previous.name).toBe('Asami Krisan');
    expect(adjacent?.next.name).toBe('Mercedes Sebald Arguisuelas');
  });

  it('wraps around at the start and the end of the list', () => {
    expect(getAdjacentInstructors('andrea-kneis')?.previous.name).toBe(
      'Stefanie Koch'
    );
    expect(getAdjacentInstructors('stefanie-koch')?.next.name).toBe(
      'Andrea Kneis'
    );
  });

  it('returns null for an unknown slug', () => {
    expect(getAdjacentInstructors('niemand')).toBeNull();
  });
});
