# Salon77 Website

The website of Salon77, the Würzburger Künstlerinitiative e.V. It presents
the courses, teachers, events and rooms, and takes registrations for the
Klein-Montmartre market. It is built with Next.js, React and TypeScript and
is published as a static site, with a few pages rendered per request.

## Requirements and commands

Requirements: Node.js 22 (see `.nvmrc`; run `nvm use`), npm.

```bash
npm install          # install dependencies
cp .env.example .env.local   # fill in the email settings (never commit this)
npm run dev          # development server on http://localhost:3001
npm run build        # production build
npm start            # run the production build
npm run lint         # lint
npm run type-check   # TypeScript
npm run format:check # formatting (Prettier)
npm run knip         # unused files, exports and dependencies
npm test             # unit tests
npm run test:coverage # unit tests with coverage (thresholds as in CI)
npm run e2e          # browser tests (Playwright)
npm run mobile-check -- http://localhost:3001  # phone view numbers and screenshots
npm run privacy-scan -- http://localhost:3300  # cookies, storage and outside requests (production build)
npx playwright install chromium   # once, before e2e and the two scripts above
```

Deployment: any host that runs Next.js. Set the variables from `.env.example`
on the host.

## Folder structure

- `app/`: pages (one folder per route) and global styles in `globals.css`
- `components/`: reusable UI components, with their tests
- `content/`: texts and data: site facts, teachers, courses, events, routes
- `lib/`: helpers (dates, metadata, slugs, structured data), with their tests
- `e2e/`: browser tests
- `scripts/`: dev server helpers and the agents' check scripts
- `public/`: images and files served as they are
- `docs/`: design decisions, remaining work and review reports, see below

## Where content lives

Change texts, dates and images in `content/` rather than in components:

- `content/site.ts`: name, address, phone, email, map link
- `content/instructors.ts`: teachers (name, subject, bio, contact, photo)
- `content/courses.ts`: courses and their times
- `content/events.ts`: event dates and teaser text
- `content/home.ts`: home page text and cards
- `content/routes.ts`: public pages for the sitemap and breadcrumbs
- `content/registration.ts`: Klein-Montmartre registration form: texts, limits,
  and `enabled` to switch the online form off

Photos go in `public/salon77/`. Teacher photos are named after the teacher's
slug, for example `public/salon77/dozenten/michael-roethlein.jpg`.

## Workflow

- Work in small steps. Each change gets its own commit and is pushed after review.
- Commit messages follow Conventional Commits (`feat:`, `fix:`, `style:`, `docs:` ...).
- Never commit directly to `main`. Changes reach `main` through a pull request.

## Agents (Claude Code)

Read only agents in `.claude/agents/`. Each writes one report to
`docs/reviews/`; generated screenshots and scan results there are not
committed.

| Agent | Checks | When |
|---|---|---|
| `reviewer` | security, correctness, data consistency, tests, performance, accessibility, docs, recorded decisions | before every pull request |
| `visual-checker` | screenshots at 375 and 1440 against a fixed list | after layout or styling changes |
| `mobile-view` | `npm run mobile-check`: sideways scroll, first screen, tap targets, text size | after layout or navigation changes |
| `performance` | Lighthouse on the production build, images, JavaScript, fonts | after image or external changes, before launch |
| `datenschutz` | `npm run privacy-scan` vs the Datenschutz text, services, the registration form | before launch, after any new service or form field, monthly |

The command `/client-list` writes a German message for the club with every
open question. Next steps are in [docs/REMAINING.md](docs/REMAINING.md).

## Why things are the way they are

See [docs/DECISIONS.md](docs/DECISIONS.md) for the design decisions and the
reasons for them.
