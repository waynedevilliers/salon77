import { test, expect, type Page } from '@playwright/test';

/** On phones the menu is behind the hamburger button; open it when it is there. */
async function openMenuIfHidden(page: Page) {
  const toggle = page.getByRole('button', { name: 'Menü öffnen' });
  if (await toggle.isVisible()) await toggle.click();
}

test.describe('Home Page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('loads and displays the navbar with the main menu links', async ({
    page,
  }) => {
    const navbar = page.locator('header');
    await expect(navbar).toBeVisible();

    const logo = page.getByRole('link', { name: 'Salon77 - Zur Startseite' });
    await expect(logo).toBeVisible();

    await openMenuIfHidden(page);
    for (const label of ['Unterricht', 'Veranstaltungen', 'Räumlichkeiten']) {
      await expect(
        page.locator('header').getByRole('link', { name: label, exact: true })
      ).toBeVisible();
    }
  });

  test('displays 3 menu cards', async ({ page }) => {
    const cards = page
      .locator(
        'a[href="/unterricht"], a[href="/veranstaltungen"], a[href="/raeumlichkeiten"]'
      )
      .filter({
        has: page.locator('img'),
      });
    await expect(cards).toHaveCount(3);
  });

  test('displays footer with Impressum and Datenschutz links', async ({
    page,
  }) => {
    const footer = page.locator('footer');
    await expect(footer).toBeVisible();

    await expect(footer.getByRole('link', { name: 'Impressum' })).toBeVisible();
    await expect(
      footer.getByRole('link', { name: 'Datenschutz' })
    ).toBeVisible();
  });

  test('is keyboard navigable', async ({ page }) => {
    await page.keyboard.press('Tab');
    const focusedElement = await page.evaluate(
      () => document.activeElement?.tagName
    );
    expect(['BUTTON', 'A']).toContain(focusedElement);
  });

  test('responds to navigation menu clicks', async ({ page }) => {
    const targets = [
      { name: 'Unterricht', url: '/unterricht' },
      { name: 'Veranstaltungen', url: '/veranstaltungen' },
      { name: 'Räumlichkeiten', url: '/raeumlichkeiten' },
    ];
    for (const target of targets) {
      // On phones the menu closes after each link, so open it again.
      await openMenuIfHidden(page);
      await page
        .locator('header')
        .getByRole('link', { name: target.name, exact: true })
        .click();
      await expect(page).toHaveURL(target.url);
      await page.goto('/');
    }
  });

  test('responds to menu card clicks', async ({ page }) => {
    await page.locator('main a[href="/unterricht"]').first().click();
    await expect(page).toHaveURL('/unterricht');
  });
});

test.describe('Responsive Layout', () => {
  test('displays correctly on mobile viewport', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/');

    await expect(page.locator('header')).toBeVisible();
    await expect(page.locator('main')).toBeVisible();
  });

  test('displays correctly on desktop viewport', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('/');

    await expect(page.locator('header')).toBeVisible();
    await expect(page.locator('main')).toBeVisible();
  });
});

test.describe('Page Metadata', () => {
  test('has proper title and meta description', async ({ page }) => {
    await page.goto('/');
    await expect(page).toHaveTitle(/Startseite.*Salon77.*Künstlerinitiative/);
    await expect(page.locator('meta[name="description"]')).toHaveAttribute(
      'content',
      /Salon77.*Künstlerinitiative/
    );
  });
});
