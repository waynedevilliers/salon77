import { test, expect } from '@playwright/test';
import { indexableRoutes } from '../content/routes';

// Every page on the site, including the registration form that is not in
// the sitemap.
const allPaths = [
  ...indexableRoutes.map((route) => route.path),
  '/veranstaltungen/klein-montmartre/anmelden',
];

test.describe('Every page', () => {
  for (const path of allPaths) {
    test(`${path} loads with one h1 and no console errors`, async ({
      page,
    }) => {
      const errors: string[] = [];
      page.on('console', (message) => {
        if (message.type() === 'error') errors.push(message.text());
      });
      page.on('pageerror', (error) => errors.push(error.message));

      const response = await page.goto(path);

      expect(response?.status()).toBe(200);
      await expect(page.locator('h1')).toHaveCount(1);
      expect(errors).toEqual([]);
    });
  }

  test('every internal link points to a page that exists', async ({
    page,
    request,
  }) => {
    const targets = new Set<string>();
    for (const path of allPaths) {
      await page.goto(path);
      const hrefs = await page
        .locator('a[href^="/"]')
        .evaluateAll((links) =>
          links.map((link) => link.getAttribute('href') ?? '')
        );
      hrefs.forEach((href) => targets.add(href.split('#')[0]));
    }

    const broken: string[] = [];
    for (const target of targets) {
      const response = await request.get(target);
      if (response.status() >= 400)
        broken.push(`${target} (${response.status()})`);
    }
    expect(broken).toEqual([]);
  });
});
