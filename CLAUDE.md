@AGENTS.md

# Project notes for Claude (Salon77)

Website of Salon77, the Würzburger Künstlerinitiative e.V.: courses, teachers,
events (Klein-Montmartre) and rooms. German only, "du" form. Visitors are
mostly on a phone.

## Documentation

- Read `docs/DECISIONS.md` before changing design, menu, colours, fonts or
  page structure. Do not undo a recorded decision unless the client asks.
- When the client makes a new design decision, add an entry to
  `docs/DECISIONS.md` in the same commit.
- Read `docs/REMAINING.md` for the next steps, and update it at the end of
  every task.

## Workflow

- Small steps (see DECISIONS, "Workflow and testing"). Before coding a step,
  state in 3 to 5 lines which files will change.
- After each step that changes how a page looks: screenshots at 375x667 and
  1440x900 of every page touched, plus a list of changed files.
- Run every npm command on the Node version in `.nvmrc` (`nvm use`).
- Stop a running server by its pid (`ss -ltnp | grep :3001`) or with
  `npm run dev:stop`. Never `pkill -f`.

## Hard constraints

- Keep the colours, fonts, menu and page structure unless the client changes
  them. Hardcoded values move into tokens with the same value, and each
  replacement is reported.
- Do not change image sizes, crops or aspect ratios unless a step says so.
- Do not change anything not listed in the current step. Note other findings
  and report them at the end of the step.
- Texts and data live in `content/` (see README, "Where content lives").
  Components take props. One source of truth per fact: a date, time, price or
  contact detail is typed once.
- No emojis in the UI.

## Code

- TypeScript strict. No `any` without a comment explaining why.
- Server Components by default. Client Components only for real interactivity.
- Small components with typed props. Reuse existing components, utilities and
  tokens. Do not rewrite working code.
- New code uses the colour tokens in `app/globals.css`, not raw Tailwind
  colours such as `gray-600`.
- ESLint with zero warnings, Prettier (skips Markdown) and knip pass.
- Every new dependency needs a reason and an exact version at least two weeks
  old (`.npmrc` saves exact versions). After `npm install` or `npm uninstall`,
  check the lockfile diff for unexpected removals (npm drops the `libc` lines
  of some optional packages; restore them).

## Validation, security and privacy

- Every form validates on the server with Zod, even when the browser already
  checks. Field errors are shown under their fields.
- Public forms: honeypot and rate limit. HTML emails escape every visitor
  value (`lib/escape-html.ts`).
- The registration form can be switched off in `content/registration.ts`.
  Keep the page, the button and the server action behind that switch.
- Security headers come from `lib/security-headers.ts`. Add a host to the CSP
  only when a feature needs it, and record it in DECISIONS.
- No personal data in logs, URLs or error replies. Failures carry a short
  request code instead.
- No request to another domain without consent. Fonts self-hosted with
  next/font. The Google Maps map loads only after a click.
- Secrets only in `.env*.local` and on the host. Only `.env.example` is
  committed.
- A new service, cookie or form field is not done until the Datenschutz text
  covers it.

## Performance

- Mobile targets: LCP under 2.5 s, CLS under 0.1, TBT under 200 ms
  (`lighthouserc.json`).
- Static or partially prerendered pages unless there is a real reason.
- All images via next/image with `sizes`. Source images under 500 KB.

## Accessibility

- One h1 per page, headings in order, alt texts, visible focus, contrast at
  least 4.5:1, tap targets at least 44px with 8px spacing.
- Motion respects reduced motion: `motion-safe:` in classes, or a
  `prefers-reduced-motion` rule in `app/globals.css`.

## Testing

- Essential functionality only (see DECISIONS). Vitest + React Testing Library
  for components and `lib/`; coverage thresholds for `lib/` and
  `app/actions/` must hold (`npm run test:coverage -- --run`).
- Playwright with axe: Chromium and mobile Chrome on pull requests, every
  browser on `main`.
- New code gets tests. Test what a visitor sees and does (roles, names,
  links), not implementation details. No snapshot tests.
- If a test fails twice for the same reason, stop and report the error and a
  best guess. Never delete or skip a failing test.

## Git

- Feature branches only, never commit to `main`: `feat/`, `fix/`, `chore/`,
  `docs/`, `test/`, `style/`, `refactor/`. Conventional Commits with scopes.
- Pull `main` before creating a branch and before opening a PR. Merge `main`
  into a pushed branch, do not rebase it. Never force-push.
- Check `gh pr list --head <branch>` before creating a PR.
- CI (lint-and-types, test, audit, e2e) must be green before merge. `main` is
  protected by a ruleset: no direct pushes, no force pushes.

## Definition of done

- Lint, type check, format check, knip, tests with coverage, build and e2e
  pass.
- Screenshots for every visual change.
- Colours, fonts and image sizes unchanged unless the client asked.
- `docs/DECISIONS.md` and `docs/REMAINING.md` updated. Client TODOs listed.

## Review

- Before opening a pull request, run the reviewer subagent on the branch
  changes. Fix Critical and Important findings first.
- The reviewer never changes code. The builder never skips the review.

## Agents

All agents are in `.claude/agents/`, read only, and write one report to
`docs/reviews/`.

- reviewer: before every pull request, and for full audits.
- visual-checker: after layout or styling changes.
- mobile-view: after layout, navigation or styling changes.
- performance: after images or anything external change, and before launch.
- datenschutz: before launch, after adding any service, dependency, cookie or
  form field, after changing legal texts, and once a month.
- Command `/client-list`: a German message for the client with every open
  question and TODO(client).
