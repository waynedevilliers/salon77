import { test, expect } from '@playwright/test';

test.describe('Home Page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('loads and displays navbar with 3 menu links', async ({ page }) => {
    // Check navbar exists
    const navbar = page.locator('header');
    await expect(navbar).toBeVisible();

    // Check logo
    const logo = page.getByRole('link', { name: /Salon77/ });
    await expect(logo).toBeVisible();

    // Check menu links
    const uebersichtLink = page.getByRole('link', { name: 'Übersicht' });
    const veranstaltungenLink = page.getByRole('link', {
      name: 'Veranstaltungen',
    });
    const raeumlichkeitenLink = page.getByRole('link', {
      name: 'Räumlichkeiten',
    });

    await expect(uebersichtLink).toBeVisible();
    await expect(veranstaltungenLink).toBeVisible();
    await expect(raeumlichkeitenLink).toBeVisible();
  });

  test('displays 3 menu cards', async ({ page }) => {
    const cards = page.locator('a[href="/uebersicht"], a[href="/veranstaltungen"], a[href="/raeumlichkeiten"]').filter({
      has: page.locator('img'),
    });
    await expect(cards).toHaveCount(3);
  });

  test('displays footer with Impressum and Datenschutz links', async ({
    page,
  }) => {
    const footer = page.locator('footer');
    await expect(footer).toBeVisible();

    const impressumLink = page.getByTitle('Impressum');
    const datenschutzLink = page.getByTitle('Datenschutz');

    await expect(impressumLink).toBeVisible();
    await expect(datenschutzLink).toBeVisible();
  });

  test('has no console errors', async ({ page }) => {
    const errors: string[] = [];
    page.on('console', (msg) => {
      if (msg.type() === 'error') {
        errors.push(msg.text());
      }
    });

    // Reload to catch any errors
    await page.reload();

    expect(errors).toEqual([]);
  });

  test('is keyboard navigable', async ({ page }) => {
    // Test that we can tab through interactive elements
    await page.keyboard.press('Tab');
    const focusedElement = await page.evaluate(() => document.activeElement?.tagName);
    expect(['BUTTON', 'A']).toContain(focusedElement);
  });

  test('responds to navigation menu clicks', async ({ page }) => {
    const uebersichtLink = page.getByRole('link', { name: 'Übersicht' });
    await uebersichtLink.click();
    await expect(page).toHaveURL('/uebersicht');

    const veranstaltungenLink = page.getByRole('link', {
      name: 'Veranstaltungen',
    });
    await veranstaltungenLink.click();
    await expect(page).toHaveURL('/veranstaltungen');

    const raeumlichkeitenLink = page.getByRole('link', {
      name: 'Räumlichkeiten',
    });
    await raeumlichkeitenLink.click();
    await expect(page).toHaveURL('/raeumlichkeiten');
  });

  test('responds to menu card clicks', async ({ page }) => {
    const uebersichtCard = page.locator('a[href="/uebersicht"]').first();
    await uebersichtCard.click();
    await expect(page).toHaveURL('/uebersicht');
  });
});

test.describe('Responsive Layout', () => {
  test('displays correctly on mobile viewport', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/');

    const navbar = page.locator('header');
    await expect(navbar).toBeVisible();

    const content = page.locator('main');
    await expect(content).toBeVisible();
  });

  test('displays correctly on desktop viewport', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('/');

    const navbar = page.locator('header');
    await expect(navbar).toBeVisible();

    const content = page.locator('main');
    await expect(content).toBeVisible();
  });
});

test.describe('Page Metadata', () => {
  test('has proper title and meta description', async ({ page }) => {
    await page.goto('/');
    await expect(page).toHaveTitle(
      /Startseite.*Salon77.*Künstlerinitiative/
    );
    const description = page.locator('meta[name="description"]');
    await expect(description).toHaveAttribute(
      'content',
      /Salon77.*Künstlerinitiative/
    );
  });
});
