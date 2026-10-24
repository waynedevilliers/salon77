# Salon77 Website

A Next.js rebuild of the Salon77 website for the Würzburg artists' association (Würzburger Künstlerinitiative e.V.).

## Features

- **Home Page**: 3 main service cards (Unterricht, Veranstaltungen, Räumlichkeiten)
- **Unterricht**: Course/lesson cards with instructor details and images
  - 10 courses: Kindertanz & -Ballett, Ballett für Erwachsene, Flamenco, Gitarre, Bass, Akkordeon, DJing & Musikproduktion, Fotografie, Zeitgenössischer Tanz, Taiji
  - Instructor images displayed in circular containers
  - Schedule and contact button for each course
- **Veranstaltungen**: Events page with Klein-Montmartre and Flamenco Festival
  - Klein-Montmartre exhibitor registration with email form submission
  - Registration form with 7 fields (name, surname, address, email, phone, square meters, description)
  - Flamenco Festival link to external website
- **Räumlichkeiten**: Facilities page with image gallery and lightbox
  - Interactive lightbox gallery with left/right navigation
  - Room descriptions and images
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Image Gallery**: yet-another-react-lightbox for interactive image viewing

## Tech Stack

- **Framework**: Next.js 16 (App Router) with React 19
- **Language**: TypeScript (strict mode)
- **Styling**: Tailwind CSS 4 with custom @theme tokens
- **Email**: Nodemailer for form submissions
- **Image Gallery**: yet-another-react-lightbox
- **Testing**: 
  - Unit/Component tests: Vitest + React Testing Library
  - E2E tests: Playwright
  - Accessibility: @axe-core/playwright
- **Code Quality**: ESLint, Prettier
- **CI/CD**: GitHub Actions

## Setup

```bash
# Install dependencies
npm install

# Development server (http://localhost:3000)
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## Environment Variables

For email registration form to work, add to `.env.local`:

```
EMAIL_HOST=your-smtp-server.com
EMAIL_PORT=587
EMAIL_SECURE=false
EMAIL_USER=your-email@example.com
EMAIL_PASS=your-password
EMAIL_FROM=noreply@salon77.de
REGISTRATION_EMAIL=kmm@salon77.de
```

Popular SMTP servers:
- **Gmail**: smtp.gmail.com (port 587)
- **Outlook**: smtp-mail.outlook.com (port 587)
- **Custom**: Your web host's SMTP server

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint issues
- `npm run type-check` - Run TypeScript type checking
- `npm test` - Run unit/component tests (watch mode)
- `npm run test:ui` - Run tests with UI
- `npm run test:coverage` - Generate coverage report
- `npm run e2e` - Run end-to-end tests
- `npm run e2e:ui` - Run e2e tests with UI
- `npm run e2e:debug` - Debug e2e tests

## Project Structure

```
.
├── app/
│   ├── layout.tsx                 # Root layout (Navbar, Footer)
│   ├── page.tsx                   # Home page with 3 service cards
│   ├── unterricht/                # Courses page with course cards
│   ├── veranstaltungen/           # Events page
│   │   ├── page.tsx               # Events listing
│   │   └── klein-montmartre/      # Klein-Montmartre detail page
│   │       └── anmelden/          # Registration form page
│   ├── raeumlichkeiten/           # Facilities page with gallery
│   ├── globals.css                # Global styles & design tokens
│   └── actions/
│       └── registration.ts        # Server action for form submission
├── components/
│   ├── Navbar.tsx                 # Navigation with logo
│   ├── Footer.tsx                 # Footer
│   ├── MenuCard.tsx               # Home page service cards
│   ├── CourseCard.tsx             # Course/lesson cards
│   ├── EventCard.tsx              # Event cards
│   ├── ImageGallery.tsx           # Interactive image gallery
│   ├── RegistrationForm.tsx       # Registration form component
│   ├── EmailButton.tsx            # Email link button
│   └── ...
├── public/salon77/
│   ├── unterricht/                # Course instructor images
│   ├── veranstaltung/             # Event images
│   ├── kleinmomatra/              # Klein-Montmartre images
│   └── raumligkeiten/             # Facilities images
├── e2e/                           # Playwright e2e tests
├── postcss.config.mjs             # PostCSS configuration
├── next.config.ts                 # Next.js configuration
└── tsconfig.json                  # TypeScript configuration
```

## Design System

- **Primary Color**: #B9BCB5 (taupe accent)
- **Text Colors**: 
  - Headings: #2c2c2c (dark)
  - Body: #666666 (gray)
  - Golden accents: #C9A961
- **Fonts**: 
  - Display: Playfair Display (serif)
  - Body: Lato (sans-serif)
- **Responsive Breakpoints**: 
  - Mobile: < 480px
  - Tablet: 480px - 768px
  - Desktop: > 768px

All colors and fonts defined in `app/globals.css` using Tailwind CSS @theme block.

## Form Submission

Registration form automatically emails submission data to configured email address via Nodemailer. Data includes:
- Name, Surname, Address
- Email, Phone number
- Space needed (square meters)
- Product/service description

## Git Workflow

1. Create a feature branch: `git checkout -b feature/your-feature`
2. Commit with conventional commits: `feat:`, `fix:`, `test:`, `chore:`, `docs:`
3. Push to remote and create a pull request
4. Ensure all CI checks pass before merging

## Testing

Tests are co-located with components and pages. Run tests locally before committing:

```bash
npm test              # Unit/component tests
npm run e2e           # End-to-end tests
```

All tests must pass in CI before merging to main.

## Deployment

- `main` branch → Production (automatic deploy on commit)
- Feature branches → Preview URLs (automatic)

## License

MIT
