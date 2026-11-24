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

  it('writes umlauts as ae, oe, ue and ss in URLs', () => {
    expect(instructorSlug('Michael Röthlein')).toBe('michael-roethlein');
    expect(instructorSlug('Jörg Müßig')).toBe('joerg-muessig');
  });

  it('gives the same result for decomposed and composed umlauts', () => {
    expect(instructorSlug('Michael Ro\u0308thlein')).toBe('michael-roethlein');
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
  it('returns the neighbours in the teacher order', () => {
    const adjacent = getAdjacentInstructors('stefanie-koch');
    expect(adjacent?.previous.name).toBe('Mercedes Sebald Arguisuelas');
    expect(adjacent?.next.name).toBe('Asami Krisan');
  });

  it('wraps around at the start and the end of the list', () => {
    expect(getAdjacentInstructors('hsiu-yun-lu')?.previous.name).toBe(
      'Andrea Kneis'
    );
    expect(getAdjacentInstructors('andrea-kneis')?.next.name).toBe(
      'Hsiu-Yun Lu'
    );
  });

  it('returns null for an unknown slug', () => {
    expect(getAdjacentInstructors('niemand')).toBeNull();
  });
});
