/// <reference types="vitest" />
import { act, render, screen } from '@testing-library/react';
import Reveal from './Reveal';

// jsdom has no layout or IntersectionObserver: place the element by hand and
// trigger the observer from the test.
let observerCallback: IntersectionObserverCallback | undefined;
const disconnect = vi.fn();

beforeEach(() => {
  observerCallback = undefined;
  disconnect.mockClear();
  vi.stubGlobal(
    'IntersectionObserver',
    class {
      constructor(callback: IntersectionObserverCallback) {
        observerCallback = callback;
      }
      observe() {}
      disconnect = disconnect;
    }
  );
  vi.stubGlobal('innerHeight', 667);
});

afterEach(() => {
  vi.unstubAllGlobals();
  vi.restoreAllMocks();
});

function placeAt(top: number) {
  vi.spyOn(HTMLElement.prototype, 'getBoundingClientRect').mockReturnValue({
    top,
  } as DOMRect);
}

function wrapper() {
  return screen.getByText('Karte').parentElement as HTMLElement;
}

describe('Reveal', () => {
  it('shows content on the first screen straight away, without the fade', () => {
    placeAt(400);
    render(
      <Reveal className="h-full">
        <span>Karte</span>
      </Reveal>
    );
    expect(wrapper()).not.toHaveClass('reveal');
    expect(wrapper()).toHaveClass('h-full');
    expect(observerCallback).toBeUndefined();
  });

  it('hides content below the first screen until it scrolls into view', () => {
    placeAt(900);
    render(
      <Reveal>
        <span>Karte</span>
      </Reveal>
    );
    expect(wrapper()).toHaveClass('reveal');
    expect(wrapper()).not.toHaveClass('reveal-visible');
    // Hidden without a fade-out; the fade-in later uses the CSS transition.
    expect(wrapper()).toHaveStyle({ transition: 'none' });

    act(() => {
      observerCallback?.(
        [{ isIntersecting: true } as IntersectionObserverEntry],
        {} as IntersectionObserver
      );
    });
    expect(wrapper()).toHaveClass('reveal', 'reveal-visible');
    expect(disconnect).toHaveBeenCalled();
  });

  it('keeps waiting while the content is still out of view', () => {
    placeAt(900);
    render(
      <Reveal>
        <span>Karte</span>
      </Reveal>
    );
    act(() => {
      observerCallback?.(
        [{ isIntersecting: false } as IntersectionObserverEntry],
        {} as IntersectionObserver
      );
    });
    expect(wrapper()).not.toHaveClass('reveal-visible');
  });
});
