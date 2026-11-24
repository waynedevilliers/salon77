# Remaining work

Status as of 2026-11-24. The site is built and ready for launch apart from the
Datenschutz text; the registration form is secured and can be switched off.
Tooling, tests and agents are in place.

## Next steps

### 1. Collect from the client

- The open questions in `docs/DECISIONS.md` ("Open questions (for the
  client)"). Run `/client-list` for a message to send.
- Confirm the three home card descriptions (`PLACEHOLDER(client)` in
  `content/home.ts`).
- Profiles for the teachers without one (`TODO(client)` in
  `components/CourseCard.tsx`).

### 2. Owner

- Email (SMTP) settings for the registration form on the host:
  `EMAIL_HOST`, `EMAIL_FROM`, `REGISTRATION_EMAIL` and, if needed,
  `EMAIL_USER`/`EMAIL_PASS` (see `.env.example`).
- Dependabot: merge the major updates one at a time (jsdom, Vitest,
  @vitejs/plugin-react), letting CI run after each.

### 3. When we resume (code, in this order)

1. Fade-in on the first screen (needs a decision, see "Open decisions").
2. Datenschutz text, once the club or a lawyer supplies it; then run the
   datenschutz agent.

## Blocking launch

- Datenschutz text does not yet cover the registration form, the email
  provider, hosting or Google Maps. Until it does, switch the form off
  (`enabled: false` in `content/registration.ts`).

## Code, not started (no launch blocker)

- Blocking time at phone speed is 250 to 500 ms on every page (budget
  200 ms). Most of it is React and the Next.js runtime, which every page
  loads; no small fix found.
- `public/kontakt_images/kontakt.png` is about 1 MB. Visitors get a 44 KB
  version from next/image, so it only weighs on the repository. Lossless
  compression gets it to 867 KB; going under 500 KB needs a JPEG or WebP
  export, which the owner should approve.
- The gallery tiles on Räumlichkeiten open the lightbox by click only: they
  are `<div onClick>` without keyboard access (`components/ImageGallery.tsx`),
  and that page has no "Alle Bilder ansehen" button. Make each tile a button
  with no visual change.

- `lighthouserc.json` uses the desktop preset (desktop speed on a phone-sized
  screen), so the "mobile" budgets are measured at desktop speed. Switch to
  mobile throttling as its own step: CI's Lighthouse results will change.
- The active menu item has no `aria-current` (`components/NavLink.tsx`).

- Some older components use raw Tailwind greys (for example
  `components/MapConsent.tsx`) instead of colour tokens. Change only with
  the same values, and only when that component is touched.

## Open decisions

- Fade-in on the first screen. Measured at phone speed (Lighthouse mobile
  throttling, 2026-11-24), the home page needs about 3.6 s and /unterricht
  about 3.5 s until the largest element shows (budget 2.5 s). The cause is
  `components/Reveal.tsx`: cards already on the first screen stay invisible
  until the JavaScript has loaded. Fixing it changes how the first screen
  appears, so it needs the owner's choice.

- See "Open questions (for the client)" in `docs/DECISIONS.md`.
- Whether review reports in `docs/reviews/` are committed. Generated
  screenshots and scan results there are not.

## Done since the last version of this list

- Registration form: server checks, escaping, honeypot, rate limit, off
  switch (PR #30).
- Coverage thresholds and missing tests (PR #36).
- Node 22, stricter CI, exact versions, Dependabot cooldown (PR #37).
- Agents, `/client-list`, this file (PR #39).
- Performance: the image lightbox loads only when opened (about 29 KB
  JavaScript and 5 KB CSS uncompressed, 11 KB and 1.4 KB compressed, less on
  Räumlichkeiten and Klein-Montmartre);
  the Kontakt photo is no longer lazy-loaded and has `sizes`; `priority`
  replaced by `preload` (deprecated in Next.js 16).
