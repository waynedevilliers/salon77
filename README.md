# Salon77 Website

A Next.js rebuild of the Salon77 website for the Würzburg artists' association (Würzburger Künstlerinitiative e.V.).

## Tech Stack

- **Framework**: Next.js 16 (App Router) with React 19
- **Language**: TypeScript (strict mode)
- **Styling**: Tailwind CSS 4
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
├── app/                    # Next.js app directory (pages & layouts)
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   ├── uebersicht/        # Übersicht page
│   ├── veranstaltungen/   # Veranstaltungen page
│   └── raeumlichkeiten/   # Räumlichkeiten page
├── components/            # Reusable React components
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   ├── MenuCard.tsx
│   └── ...
├── styles/                # Global styles and design tokens
├── public/                # Static assets
├── e2e/                   # Playwright e2e tests
├── vitest.config.ts       # Vitest configuration
├── playwright.config.ts   # Playwright configuration
└── tsconfig.json          # TypeScript configuration
```

## Design System

Design tokens and colors are extracted from the original design. See `styles/tokens.css` for the color palette and typography scales.

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

- `dev` branch → Staging (automatic preview on commit)
- `main` branch → Production (automatic deploy on commit)

## License

MIT
