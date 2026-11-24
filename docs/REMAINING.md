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

1. Performance: measure a baseline with the performance agent, then
   check whether the image lightbox is in the first load, the size of
   `public/kontakt_images/kontakt.png` (about 1 MB) and the fade-in on cards above the fold.
   No visual changes.
2. Datenschutz text, once the club or a lawyer supplies it; then run the
   datenschutz agent.

## Blocking launch

- Datenschutz text does not yet cover the registration form, the email
  provider, hosting or Google Maps. Until it does, switch the form off
  (`enabled: false` in `content/registration.ts`).

## Code, not started (no launch blocker)

- `lighthouserc.json` uses the desktop preset (desktop speed on a phone-sized
  screen), so the "mobile" budgets are measured at desktop speed. Switch to
  mobile throttling as its own step: CI's Lighthouse results will change.
- The active menu item has no `aria-current` (`components/NavLink.tsx`).

- Some older components use raw Tailwind greys (for example
  `components/MapConsent.tsx`) instead of colour tokens. Change only with
  the same values, and only when that component is touched.

## Open decisions

- See "Open questions (for the client)" in `docs/DECISIONS.md`.
- Whether review reports in `docs/reviews/` are committed. Generated
  screenshots and scan results there are not.

## Done since the last version of this list

- Registration form: server checks, escaping, honeypot, rate limit, off
  switch (PR #30).
- Coverage thresholds and missing tests (PR #36).
- Node 22, stricter CI, exact versions, Dependabot cooldown (PR #37).
- Agents, `/client-list`, this file (this PR).
