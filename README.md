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

Instructors are listed in `/content/instructors.ts`. To add or edit an instructor:

1. Find the `instructors` list in the file
2. Each instructor has:
   - `name`: Full name
   - `specialty`: Area of expertise
   - `bio` (optional): Biography, paragraphs separated by a blank line
   - `phone`, `email`, `website` (optional): shown under the photo
3. Add the photo to `/public/salon77/dozenten/` named after the slug of the name:
   lowercase, umlauts as ae, oe, ue, ss (for example `michael-roethlein.jpg`)

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

# 3. Start development server (port 3001)
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
├── app/                            # Routes. Each page.tsx is one page.
│   ├── layout.tsx                  # Root layout: fonts, header, breadcrumbs, footer
│   ├── page.tsx                    # Home page
│   ├── globals.css                 # Style schema: colours, sizes, spacing, base styles
│   ├── sitemap.ts, robots.ts       # Generated /sitemap.xml and /robots.txt
│   ├── unterricht/                 # Courses (with Dozenten and Wochenkurse)
│   ├── dozenten/                   # Instructors list and [slug] detail pages
│   ├── wochenkurse/                # Weekly schedule
│   ├── veranstaltungen/            # Events, Klein-Montmartre and its registration form
│   ├── raeumlichkeiten/            # Rooms and gallery
│   ├── verein/, kontakt/           # Association and contact
│   ├── impressum/, datenschutz/    # Legal pages
│   └── actions/registration.ts     # Registration form submission
├── components/                     # Reusable UI. Server Components unless marked below.
│   ├── Navbar.tsx, NavLink.tsx     # Header, desktop menu, hamburger menu (Client)
│   ├── NavDropdown.tsx             # Menu item with sub-items (Client)
│   ├── Breadcrumbs.tsx             # Trail from the home page (Client)
│   ├── Footer.tsx                  # Footer with address, contact and legal links
│   ├── ActionLink.tsx              # Button and link: internal, external, mailto
│   ├── BackButton.tsx, EmailLink.tsx
│   ├── MenuCard.tsx                # Home page card (whole card is one link)
│   ├── CourseCard.tsx              # Course card with instructors (Unterricht)
│   ├── EventCard.tsx               # Event card (Veranstaltungen)
│   ├── NextEvent.tsx               # Next Klein-Montmartre date block
│   ├── InstructorCard.tsx          # Instructor card (links to the detail page)
│   ├── InstructorPhoto.tsx         # Round photo with "Bild folgt" fallback (Client)
│   ├── InstructorPager.tsx         # Previous and next instructor buttons
│   ├── ImageGallery.tsx            # Photos with lightbox (Client)
│   ├── MapConsent.tsx              # Google Maps loads after a click (Client)
│   ├── RegistrationForm.tsx        # Registration form (Client)
│   ├── Reveal.tsx                  # Fades content in on scroll (Client)
│   └── JsonLd.tsx                  # schema.org data, escaped
├── content/                        # Text and data. Change facts here, not in components.
│   ├── site.ts                     # Name, address, phone, email, domain, maps link
│   ├── routes.ts                   # Public pages: sitemap, breadcrumb labels
│   ├── instructors.ts              # Instructors: name, specialty, bio, contact, website
│   ├── events.ts                   # Klein-Montmartre dates and teaser text
│   └── map.ts                      # Map consent text
├── lib/                            # Logic and helpers, with unit tests next to them
│   ├── metadata.ts                 # pageMetadata(): canonical, Open Graph, Twitter, robots
│   ├── structured-data.ts          # Breadcrumb, Event and Place JSON-LD
│   ├── instructors.ts              # Slugs and instructor lookup
│   ├── dates.ts                    # German date format and next-date lookup
│   ├── security-headers.ts         # CSP, HSTS and other headers (next.config.ts)
│   ├── current-year.ts             # Copyright year, cached for a day
│   └── *.test.ts(x)                # Unit tests for the modules above and the pages
├── e2e/                            # Playwright: pages, links, navigation, accessibility
├── scripts/                        # Local dev helpers: npm run dev, npm run dev:stop
├── public/
│   ├── og/salon77.jpg              # 1200x630 share image
│   ├── llms.txt                    # Site summary for AI assistants (maintained by hand)
│   ├── salon77/                    # Site images. Instructor photos: dozenten/<slug>.jpg
│   └── images/, logo/              # Source files, not referenced by the site
├── lighthouserc.json               # Lighthouse CI budgets
├── .github/workflows/ci.yml        # Lint, types, audit, unit, e2e, Lighthouse, build
└── README.md                       # This file
```

### Where to Change Shared Facts

- **Name, address, phone, email, domain, map link**: `content/site.ts`. The footer,
  Kontakt, Impressum, Datenschutz and the structured data all read from here.
- **Instructors**: `content/instructors.ts`. Add the photo as
  `public/salon77/dozenten/<slug>.jpg`, where the slug is the name in lowercase with
  umlauts written as ae, oe, ue and ss (for example `michael-roethlein.jpg`).
- **Pages in the sitemap and breadcrumbs**: `content/routes.ts`. Add a new public
  page here as well as in `app/`.
- **Main menu**: `components/Navbar.tsx` (desktop and hamburger menus).
- **Event dates**: `content/events.ts`. An event without a date shows
  "Termin folgt in Kürze" on its card.
- **Public summary for AI assistants**: `public/llms.txt`. This file is not generated,
  so update it when pages change.
- **Page titles and descriptions**: pass them to `pageMetadata()` in each `page.tsx`.

### Available Commands

```bash
npm run dev           # Dev server on port 3001. Stops older dev servers of this project first
npm run dev:stop      # Stop this project's dev servers
npm run build         # Build for production (all pages are statically generated)
npm start             # Run the production build
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

Use `DEV_PORT=3010 npm run dev` for another port. Browser tests use port 3000 by
default; set `PLAYWRIGHT_PORT=3200 npm run e2e` if another server uses that port.

Lighthouse CI runs in GitHub Actions. To run it locally after `npm run build`:

```bash
npx --yes @lhci/cli@0.15.1 autorun --config=lighthouserc.json
```

### Style Schema and Design System

Every colour, size and spacing value is defined once, in `app/globals.css`, and
used by name. Do not add raw hex values or pixel sizes to components.

- **Colours** (`--color-*`): `text` and `text-muted` for body text, `heading` for
  card titles, `accent` for decorative gold (never for text), `accent-text` for links
  and the active menu item, `button` and `button-text` for buttons, `sage-text` for
  inactive menu items, `border` and `border-light` for dividers. Each text colour
  meets WCAG AA (4.5:1) on its background; the values are noted in `globals.css`.
- **Sizes and spacing** (`--size-*`, `--space-*`, `--line-*`): page title
  (`--size-h1`), section heading (`--size-h2`), card title (`--size-h3`), body
  (`--size-body`, never below 16px), title spacing, section gap, card padding and
  button height.
- **Page titles**: every page title uses the `page-title` class. It is centred, bold,
  and has a gold rule below it.
- **Buttons**: `ActionLink` is the only button style. It uses the button colours and
  darkens on hover.

Colours and sizes are used through these names, so changing a value in `globals.css`
changes it on every page.

### Making Changes

1. **Edit text on a page**: find the `.tsx` file and update the text directly, or
   the shared content in `content/`
2. **Change colours, sizes or spacing**: update the value in `app/globals.css`
3. **Add a new page**: create a folder in `app/` with a `page.tsx`, export
   `pageMetadata()`, add the route to `content/routes.ts`, and use the `page-title`
   class for its heading
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
