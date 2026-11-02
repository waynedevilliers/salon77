# Salon77 Website

A modern website for the Salon77 Würzburg artists' association (Würzburger Künstlerinitiative e.V.).

## What is this website?

This is a rebuilt version of the Salon77 website with:

- **Home page** - showing the main sections and overview
- **Courses page** (Unterricht) - display all courses with instructor info
- **Instructors page** (Dozenten) - showcase all instructors with their specialties
- **Weekly Courses** (Wochenkurse) - detailed schedule of weekly classes by day
- **Events page** (Veranstaltungen) - show events and collect exhibitor registrations
- **Facilities page** (Räumlichkeiten) - showcase the studio spaces with photos
- **Association page** (Verein) - information about Salon77
- **Navigation** at the top with logo linking to home page

---

## For Site Managers / Content Editors

### How to Update Course Information

Courses are listed in `/app/unterricht/page.tsx`. To add or edit a course:

1. Find the `COURSES` array in the file
2. Each course has:
   - `title`: Course name
   - `description`: Short description
   - `schedule`: When the course is offered (e.g., "Montags ab 18:00 Uhr")
   - `instructor`: Instructor name

**Example:**

```javascript
{
  title: 'Flamenco',
  description: 'Flamenco as an art form with focus on understanding and flexibility.',
  schedule: 'Dienstags und Freitags ab 18:00 Uhr',
  instructor: 'Mercedes Sebald',
}
```

### How to Update Instructors

Instructors are listed in `/app/dozenten/page.tsx`. To add or edit an instructor:

1. Find the `INSTRUCTORS` array in the file
2. Each instructor has:
   - `name`: Full name
   - `specialty`: Area of expertise
3. Add instructor photos to `/public/salon77/dozenten/` with filename format: `firstname-lastname.jpg`

### How to Update Weekly Course Schedule

Weekly courses are listed in `/app/wochenkurse/page.tsx`. To update the schedule:

1. Find the `WEEKLY_COURSES` object in the file
2. Each day has an array of courses with:
   - `time`: Class time (e.g., "18:00 - 19:00 Uhr")
   - `course`: Course name and details
3. Organize by day: Montags, Dienstags, Mittwochs, Donnerstags, Freitags

### How to Update Events

Events are in `/app/veranstaltungen/page.tsx` and `/app/veranstaltungen/klein-montmartre/page.tsx`.

To edit Klein-Montmartre details:

1. Open `/app/veranstaltungen/klein-montmartre/page.tsx`
2. Update the text sections (paragraphs, dates, contact info)
3. Update next dates in the "Nächste Termine" section

### How to Add Images

1. **Course instructor images**: Place in `/public/salon77/unterricht/`
   - Name should match the file pattern: `instructor-name.jpg` or `.png`
   - Update the mapping in `/components/CourseCard.tsx`

2. **Event images**: Place in `/public/salon77/veranstaltung/` or `/public/salon77/kleinmomatra/`

3. **Facility images**: Place in `/public/salon77/raumligkeiten/`
   - These automatically display in the gallery

### How to Set Up Email Registrations

For the course/event registration forms to send emails:

1. Choose an email provider (Gmail, Outlook, or your web host)
2. Create a `.env.local` file in the project root with:

```
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_SECURE=false
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
EMAIL_FROM=noreply@salon77.de
REGISTRATION_EMAIL=kmm@salon77.de
```

3. **For Gmail**:
   - Enable 2-factor authentication
   - Create an "App Password" (16 characters)
   - Use that App Password in EMAIL_PASS

---

## For Developers / Technical Setup

### Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Copy the environment template and fill in the email settings
cp .env.example .env.local

# 3. Start development server
npm run dev

# 4. Open http://localhost:3001 in browser
```

`.env.local` is ignored by git and must never be committed. The variables are
listed in `.env.example`.

One dev server per project: `npm run dev` stops old dev servers of this project
and starts on port 3001. Set `DEV_PORT` to use another port. `npm run dev:stop`
stops them without starting one.

### Build & Deploy

```bash
# Build for production (all pages are statically generated)
npm run build

# Test production build locally
npm start
```

Deploy with any host that runs Next.js. Set the variables from `.env.example`
in the host's settings. Deployment on Vercel: push the branch, connect the
repository, add the environment variables, and deploy.

### Technology Stack

- **Next.js 16** (App Router, static generation, `cacheComponents`)
- **React 19** and **TypeScript** (strict)
- **Tailwind CSS 4** with design tokens in `app/globals.css`
- **next/font** for self-hosted Playfair Display and Lato
- **Nodemailer** for registration emails
- **yet-another-react-lightbox** for the photo gallery
- **Vitest** and **React Testing Library** for unit and component tests
- **Playwright** and **@axe-core/playwright** for end-to-end and accessibility tests

### Project Structure

```
salon77/
├── app/
│   ├── layout.tsx                  # Root layout, fonts, JSON-LD for the association
│   ├── page.tsx                    # Home page
│   ├── sitemap.ts                  # Generates /sitemap.xml
│   ├── robots.ts                   # Generates /robots.txt
│   ├── unterricht/page.tsx         # Courses page
│   ├── dozenten/page.tsx           # Instructors page
│   ├── wochenkurse/page.tsx        # Weekly courses schedule
│   ├── veranstaltungen/            # Events and Klein-Montmartre (incl. registration)
│   ├── raeumlichkeiten/            # Facilities page
│   ├── verein/page.tsx             # Association page
│   ├── kontakt/page.tsx            # Contact page
│   ├── impressum/, datenschutz/    # Legal pages
│   ├── globals.css                 # Design tokens (colors, fonts, radii)
│   └── actions/registration.ts     # Registration form submission
├── components/                     # Reusable UI components
│   ├── ActionLink.tsx              # Pill-style button/link (internal, external, mailto)
│   ├── BackButton.tsx              # "Zurück zur Startseite"
│   ├── CourseCard.tsx, EventCard.tsx, InstructorCard.tsx, MenuCard.tsx
│   ├── EmailLink.tsx               # Address link
│   ├── ImageGallery.tsx            # Photo gallery with lightbox (Client Component)
│   ├── JsonLd.tsx                  # Renders schema.org data, escaped
│   ├── MapConsent.tsx              # Google Maps loads only after a click
│   ├── Navbar.tsx, NavLink.tsx, Footer.tsx
│   └── RegistrationForm.tsx        # Registration form (Client Component)
├── content/                        # Text and data, not hardcoded in components
│   ├── site.ts                     # Name, address, phone, email, domain, share image
│   ├── routes.ts                   # Indexable pages for sitemap and breadcrumbs
│   ├── events.ts                   # Klein-Montmartre dates for structured data
│   └── map.ts                      # Map consent text
├── lib/
│   ├── metadata.ts                 # pageMetadata(): canonical, Open Graph, Twitter, robots
│   ├── structured-data.ts          # Breadcrumb, Event and Place JSON-LD
│   ├── security-headers.ts         # CSP, HSTS and other headers (used by next.config.ts)
│   └── current-year.ts             # Copyright year, cached for a day
├── e2e/                            # Playwright: pages, links, navigation, accessibility
├── public/
│   ├── og/salon77.jpg              # 1200x630 share image
│   ├── llms.txt                    # Site summary for AI assistants (maintained by hand)
│   └── salon77/                    # Images and assets
├── lighthouserc.json               # Lighthouse CI budgets
├── .github/workflows/ci.yml        # Lint, types, audit, unit, e2e, Lighthouse, build
└── README.md                       # This file
```

### Where to Change Shared Facts

- **Name, address, phone, email, domain**: `content/site.ts`. Every page and the
  structured data read from here, so they stay identical.
- **Pages in the sitemap and breadcrumbs**: `content/routes.ts`. Add a new public
  page here as well as in `app/`.
- **Event dates for structured data**: `content/events.ts`.
- **Public summary for AI assistants**: `public/llms.txt`. This file is not generated,
  so update it when pages change.
- **Page titles and descriptions**: pass them to `pageMetadata()` in each `page.tsx`.

### Available Commands

```bash
npm run dev           # Start development server on port 3001 (stops older dev servers first)
npm run dev:stop      # Stop all dev servers of this project
npm run build         # Build for production
npm start             # Run production build
npm run lint          # ESLint
npm run type-check    # TypeScript (strict)
npm run format        # Prettier: write formatting
npm run format:check  # Prettier: check formatting
npm test              # Unit and component tests (Vitest)
npm run test:coverage # Unit tests with coverage
npm run e2e           # Browser tests (Playwright, all projects)
npm run knip          # Find unused files, exports and dependencies
npm run duplication   # Find duplicated code (jscpd)
npm run audit         # npm audit, fails on high or critical findings
```

Browser tests use port 3000 by default. If another server is already on that
port, set another one: `PLAYWRIGHT_PORT=3200 npm run e2e`.

Lighthouse CI runs in GitHub Actions. To run it locally after `npm run build`:

```bash
npx --yes @lhci/cli@0.15.1 autorun --config=lighthouserc.json
```

### Design System

- **Brand color**: `--color-primary` (#B9BCB5, taupe), used for buttons and footer
- **Accent**: `--color-accent` (#C9A961, gold), used for section titles and active links
- **Text**: `--color-text` (#2c2c2c) for headings, `--color-text-muted` (#666666) for body text
- **Fonts**: Playfair Display (headings), Lato (body text)

Colors are defined in `app/globals.css` under `@theme`. Components use them as
`var(--color-…)` in inline styles or `bg-[var(--color-…)]` classes. Do not add
hex values to components.

Note: several design colors do not meet WCAG AA contrast (see the accessibility
report). Changing them requires approval.

### Making Changes

1. **Edit text on a page**: find the `.tsx` file and update the text directly
2. **Change colors**: update the `@theme` section in `app/globals.css`
3. **Add a new page**: create a folder in `app/` with a `page.tsx`, export
   `pageMetadata()`, add the route to `content/routes.ts`, and add a test to `e2e/pages.spec.ts` if needed
4. **Add images**: upload to `public/salon77/[section]/`. Compress first and use
   `next/image`

### Security and Privacy

- Security headers are set for every route in `lib/security-headers.ts`. The
  Content Security Policy allows only same-origin content plus the Google Maps
  frame, which loads after the visitor clicks "Karte laden".
- No third-party request is made without consent. Fonts are self-hosted through `next/font`.
- Secrets belong in `.env.local`. Only `.env.example` is committed.

---

## Support

For questions about:

- **Design/Content**: Contact the project team
- **Technical issues**: Check the code comments or contact a developer
- **Hosting**: Contact your hosting provider

## License

MIT

---

**Last Updated**: October 25, 2026  
**Built with**: Next.js, React, Tailwind CSS, TypeScript
