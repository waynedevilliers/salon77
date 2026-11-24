import { test, expect, type Page } from '@playwright/test';

// The lightbox loads only when an image is opened, so check it in a real
// browser: it opens at the right image, the arrow keys move, Escape closes.
const lightbox = (page: Page) => page.locator('[aria-modal="true"]');
const currentImage = (page: Page) =>
  page.locator('.yarl__slide_current img').first();

test.describe('Image gallery', () => {
  test('opens the lightbox at the clicked image on Räumlichkeiten', async ({
    page,
  }) => {
    await page.goto('/raeumlichkeiten');
    const tile = page.locator('main img').nth(1);
    const alt = await tile.getAttribute('alt');

    await tile.click();
    await expect(lightbox(page)).toBeVisible();
    await expect(currentImage(page)).toHaveAttribute('alt', alt ?? '');

    await page.keyboard.press('ArrowRight');
    await expect(currentImage(page)).not.toHaveAttribute('alt', alt ?? '');

    await page.keyboard.press('Escape');
    await expect(lightbox(page)).toHaveCount(0);
  });

  test('opens every image from the button on Klein-Montmartre', async ({
    page,
  }) => {
    await page.goto('/veranstaltungen/klein-montmartre');
    await page
      .getByRole('button', { name: /^Alle \d+ Bilder ansehen$/ })
      .click();
    await expect(lightbox(page)).toBeVisible();

    await page.keyboard.press('Escape');
    await expect(lightbox(page)).toHaveCount(0);
  });
});
