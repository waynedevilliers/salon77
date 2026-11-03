import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';
import { indexableRoutes } from '../content/routes';

const allPaths = [
  ...indexableRoutes.map((route) => route.path),
  '/veranstaltungen/klein-montmartre/anmelden',
];

test.describe('Accessibility (WCAG 2.2 AA)', () => {
  // Reduced motion turns off the scroll fade, so axe measures the final colours.
  test.use({ reducedMotion: 'reduce' });

  for (const path of allPaths) {
    test(`${path} has no axe violations`, async ({ page }) => {
      await page.goto(path);

      const results = await new AxeBuilder({ page })
        .withTags(['wcag2a', 'wcag2aa', 'wcag21aa', 'wcag22aa'])
        .analyze();

      const summary = results.violations.map(
        (violation) =>
          `${violation.id}: ${violation.help} (${violation.nodes.length} nodes)`
      );
      expect(summary).toEqual([]);
    });
  }
});
