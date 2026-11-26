# Remaining work

Status as of 2026-11-26 (`main` at PR #45). The site is built and ready for
launch apart from the Datenschutz text; the registration form is secured and
switched off until that text is in. Tooling, tests and agents are in place.

## Start here (next session)

1. `git checkout main && git pull`, then `nvm use` (Node 22).
2. `gh pr list` for open pull requests, including Dependabot.
3. Ask the owner whether the club has answered (list below). Answers first,
   then the code steps in "When we resume".
4. Every step on its own feature branch from a fresh `main`: say which files
   change, screenshots at 375x667 and 1440x900, wait for "ok", reviewer
   agent, then the pull request. The full list is "Definition of done" and
   "Git" in `CLAUDE.md`.

Waiting on the club (send with `/client-list`):

- Datenschutz text (blocks launch and the form).
- Address for registration emails (perhaps `kmm@salon77.de`) and the
  mailbox's SMTP login; see "Owner" below.
- Mercedes Sebald Arguisuelas: Kontakt says "2. Vorsitzende", the Impressum
  says 1. Vorsitzender (Simon Orth 2.). Which is right?
- The other open questions in `docs/DECISIONS.md`.

Last agent reports: `docs/reviews/2026-11-24-*.md` (full run) and
`2026-11-26-review.md` (PR #45). They are local only.

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
  @vitejs/plugin-react), letting CI run after each. None were open on
  2026-11-26; check `gh pr list`.

### 3. When we resume (code, in this order)

1. Datenschutz text, once the club or a lawyer supplies it; then switch the
   form back on (`enabled: true` in `content/registration.ts`) and run the
   datenschutz agent.
2. Hand-typed facts outside `content/`: `info@salon77.de` (Kontakt, Footer,
   teacher profiles), the Instagram URL on Klein-Montmartre, and the
   Klein-Montmartre dates on Klein-Montmartre and /veranstaltungen (they stay
   after 8 May 2027; past dates still get Event JSON-LD).
3. Mercedes' title on Kontakt or in the Impressum, once the club answers.
4. The 📍 emoji before the location on the event cards
   (`components/EventCard.tsx`): replace with an icon such as `MapPinIcon`
   (local in `components/Footer.tsx`; move it out to reuse it).
5. A Lighthouse run at phone speed (no desktop preset), recorded here.
   Switching `lighthouserc.json` itself is its own step (see below).
6. Small items from the PR #45 review:
   - `lib/sitemap.test.ts` repeats the sitemap filter; compare against a
     fixed list.
   - Rename `indexableRoutes` (`content/routes.ts`), as it now also holds
     pages outside the sitemap.
   - e2e check that the registration page is 404 while the form is off.
   - Photo zoom on hover in EventCard (`hover:scale-105`) ignores reduced
     motion; use the `motion-safe:` pattern MenuCard already has.
   - Delete the stray `public/dozenten_images/assami krisan.jpeg`.

## Blocking launch

- Datenschutz text does not yet cover the registration form, the email
  provider, hosting or Google Maps, and says cookies are used and nothing is
  passed on. The form is switched off until the text is in.

## Code, not started (no launch blocker)

- Home page LCP at phone speed is still about 3.0 s (budget 2.5 s). The
  first card image is ready early; the browser paints it once React has
  started. No small fix found.

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

- See "Open questions (for the client)" in `docs/DECISIONS.md`.

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
- Cards on the first screen show without the fade; /unterricht LCP at phone
  speed 3.5 s to 2.1 s, home page 3.6 s to 3.0 s (see DECISIONS).
- Review reports in `docs/reviews/` stay local (git-ignored).
- One course card for Hsiu-Yun Lu with ‹ › arrows (PR #44); "Unsere
  Dozenten" ordered by weekly courses, Andrea Kneis last.
- Fixes from the 2026-11-24 agent run: Kontakt phone and map links, the
  form switched off, tap targets of at least 44px and 16px text (footer,
  Kontakt, jump links, breadcrumbs, map), logo size (no layout shift), first
  event image loaded early with `sizes`, one `<main>` per page, headings in
  order, `/dozenten` and `/uebersicht` out of the sitemap (`/uebersicht`
  noindex), README updated.
