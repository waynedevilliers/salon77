// Privacy scan: records what the site stores in the browser and which outside
// servers it contacts.
// Usage (production build running): npm run privacy-scan -- http://localhost:3300
// Writes docs/reviews/privacy/result.json. It only loads pages and clicks the
// "Karte laden" button. It never submits a form and never sends an email.
import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { join } from 'node:path';
import { chromium } from '@playwright/test';

const baseUrl = process.argv[2];
if (!baseUrl) {
  console.error(
    'Give the base URL, for example: npm run privacy-scan -- http://localhost:3300'
  );
  process.exit(1);
}
const origin = new URL(baseUrl).origin;
const outDir = join(process.cwd(), 'docs/reviews/privacy');

// Pages: every route in content/routes.ts, plus the registration page when the
// form is switched on in content/registration.ts.
async function routePaths() {
  const root = process.cwd();
  const routes = await readFile(join(root, 'content/routes.ts'), 'utf8');
  const paths = [...routes.matchAll(/path:\s*'([^']*)'/g)].map((m) => m[1]);
  const registration = await readFile(
    join(root, 'content/registration.ts'),
    'utf8'
  );
  const enabled = /enabled:\s*true/.test(registration);
  const formPath = registration.match(/path:\s*'([^']*)'/)?.[1];
  if (enabled && formPath) paths.push(formPath);
  return [...new Set(paths)];
}

async function storage(page) {
  return page.evaluate(() => ({
    localStorage: Object.keys(window.localStorage),
    sessionStorage: Object.keys(window.sessionStorage),
  }));
}

function cookieList(cookies) {
  return cookies.map((c) => ({
    name: c.name,
    domain: c.domain,
    expires:
      c.expires === -1 ? 'session' : new Date(c.expires * 1000).toISOString(),
  }));
}

// Footer links every page needs, looked up by their link text.
const legalLinks = [
  { id: 'impressum', text: /impressum/i },
  { id: 'datenschutz', text: /datenschutz/i },
];

async function footerCheck(context) {
  const page = await context.newPage();
  await page.goto(origin, { waitUntil: 'load' });
  const footer = page.locator('footer');
  const result = {};
  for (const link of legalLinks) {
    const anchor = footer.getByRole('link', { name: link.text }).first();
    if ((await anchor.count()) === 0) {
      result[link.id] = { present: false, reachable: false };
      continue;
    }
    const href = await anchor.getAttribute('href');
    const response = await page.request.get(new URL(href, origin).toString());
    result[link.id] = {
      present: true,
      href,
      status: response.status(),
      reachable: response.ok(),
    };
  }
  await page.close();
  return result;
}

async function main() {
  try {
    // fetch resolves on 4xx and 5xx too, so an error page must fail here as well.
    const response = await fetch(origin, { signal: AbortSignal.timeout(5000) });
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
  } catch {
    console.error(
      `Not reachable: ${origin}. Build and start the site first (npm run build, npm start -- -p 3300).`
    );
    process.exit(1);
  }
  await mkdir(outDir, { recursive: true });
  const browser = await chromium.launch();
  const pages = [];
  let footer;
  try {
    for (const path of await routePaths()) {
      // A fresh context per page, so each page starts with no cookies or storage.
      const context = await browser.newContext();
      const page = await context.newPage();
      const external = { beforeConsent: [], afterMapClick: [] };
      let phase = 'beforeConsent';
      page.on('request', (request) => {
        const url = new URL(request.url());
        if (url.protocol.startsWith('http') && url.origin !== origin) {
          external[phase].push({
            url: request.url(),
            type: request.resourceType(),
          });
        }
      });
      const url = `${origin}${path}`;
      const response = await page.goto(url, { waitUntil: 'networkidle' });
      // An error page would be recorded as a clean scan, so stop instead.
      if (!response?.ok()) {
        throw new Error(
          `Could not load ${url} (status ${response?.status() ?? 'unknown'})`
        );
      }
      const before = {
        cookies: cookieList(await context.cookies()),
        ...(await storage(page)),
      };

      // The Google Maps map loads only after this click. Record what it loads.
      const mapButton = page.getByRole('button', { name: 'Karte laden' });
      let mapClicked = false;
      if ((await mapButton.count()) > 0) {
        phase = 'afterMapClick';
        await mapButton.first().click();
        // The map may keep loading tiles; record what came in the first 10 seconds.
        await page
          .waitForLoadState('networkidle', { timeout: 10000 })
          .catch(() => {});
        mapClicked = true;
      }
      const after = {
        cookies: cookieList(await context.cookies()),
        ...(await storage(page)),
      };

      pages.push({
        page: url,
        mapClicked,
        before,
        after,
        externalRequests: external,
      });
      await context.close();
    }
    const context = await browser.newContext();
    footer = await footerCheck(context);
    await context.close();
  } finally {
    await browser.close();
  }

  const result = {
    generatedAt: new Date().toISOString(),
    baseUrl: origin,
    pages,
    footerLinks: footer,
  };
  await writeFile(
    join(outDir, 'result.json'),
    JSON.stringify(result, null, 2) + '\n'
  );

  const cookieNames = new Set(
    pages.flatMap((p) =>
      [...p.before.cookies, ...p.after.cookies].map((c) => c.name)
    )
  );
  const storageKeys = new Set(
    pages.flatMap((p) => [
      ...p.before.localStorage,
      ...p.after.localStorage,
      ...p.before.sessionStorage,
      ...p.after.sessionStorage,
    ])
  );
  const count = (key) =>
    pages.reduce((sum, p) => sum + p.externalRequests[key].length, 0);
  console.log(`Wrote docs/reviews/privacy/result.json: ${pages.length} pages.`);
  console.log(
    `Cookies: ${[...cookieNames].join(', ') || 'none'}. ` +
      `Storage keys: ${[...storageKeys].join(', ') || 'none'}. ` +
      `External requests before any click: ${count('beforeConsent')}. ` +
      `After "Karte laden": ${count('afterMapClick')}.`
  );
  console.log(
    'Footer: ' +
      Object.entries(footer)
        .map(
          ([id, r]) =>
            `${id} ${r.present ? (r.reachable ? 'ok' : `status ${r.status}`) : 'missing'}`
        )
        .join(', ')
  );
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
