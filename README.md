# Salon77 Website

The website of Salon77, the Würzburger Künstlerinitiative e.V. It presents
the courses, teachers, events and rooms, and takes registrations for the
Klein-Montmartre market. It is built with Next.js, React and TypeScript and
is published as a static site, with a few pages rendered per request.

## Requirements and commands

Requirements: Node.js 20 or newer, npm.

```bash
npm install          # install dependencies
cp .env.example .env.local   # fill in the email settings (never commit this)
npm run dev          # development server on http://localhost:3001
npm run build        # production build
npm start            # run the production build
npm run lint         # lint
npm run type-check   # TypeScript
npm test             # unit tests
npm run e2e          # browser tests (Playwright)
```

Deployment: any host that runs Next.js. Set the variables from `.env.example`
on the host.

## Folder structure

- `app/`: pages (one folder per route) and global styles in `globals.css`
- `components/`: reusable UI components, with their tests
- `content/`: texts and data: site facts, teachers, courses, events, routes
- `lib/`: helpers (dates, metadata, slugs, structured data), with their tests
- `e2e/`: browser tests
- `public/`: images and files served as they are
- `docs/`: design decisions, see below

## Where content lives

Change texts, dates and images in `content/` rather than in components:

- `content/site.ts`: name, address, phone, email, map link
- `content/instructors.ts`: teachers (name, subject, bio, contact, photo)
- `content/courses.ts`: courses and their times
- `content/events.ts`: event dates and teaser text
- `content/home.ts`: home page text and cards
- `content/routes.ts`: public pages for the sitemap and breadcrumbs

Photos go in `public/salon77/`. Teacher photos are named after the teacher's
slug, for example `public/salon77/dozenten/michael-roethlein.jpg`.

## Workflow

- Work in small steps. Each change gets its own commit and is pushed after review.
- Commit messages follow Conventional Commits (`feat:`, `fix:`, `style:`, `docs:` ...).
- Never commit directly to `main`. Changes reach `main` through a pull request.

## Why things are the way they are

See [docs/DECISIONS.md](docs/DECISIONS.md) for the design decisions and the
reasons for them.
