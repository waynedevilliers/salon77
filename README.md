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

# 2. Create .env.local with email settings (see above)

# 3. Start development server
npm run dev

# 4. Open http://localhost:3000 in browser
```

### Build & Deploy

```bash
# Build for production
npm run build

# Test production build locally
npm start

# Deploy to your hosting
# (Push to main branch or use your deploy command)
```

### Technology Stack

- **Next.js 16** - React framework
- **Tailwind CSS 4** - Styling
- **TypeScript** - Type safety
- **Nodemailer** - Email sending
- **yet-another-react-lightbox** - Image gallery

### Project Structure

```
salon77/
├── app/
│   ├── page.tsx                    # Home page
│   ├── unterricht/page.tsx         # Courses page
│   ├── dozenten/page.tsx           # Instructors page
│   ├── wochenkurse/page.tsx        # Weekly courses schedule
│   ├── veranstaltungen/            # Events section
│   ├── raeumlichkeiten/            # Facilities page
│   ├── verein/page.tsx             # Association page
│   ├── kontakt/page.tsx            # Contact page
│   ├── globals.css                 # Design colors & fonts
│   └── actions/registration.ts     # Form submission logic
├── components/                     # Reusable UI components
│   ├── Navbar.tsx                  # Top navigation
│   ├── NavLink.tsx                 # Navigation link component
│   ├── CourseCard.tsx              # Course display card
│   ├── EventCard.tsx               # Event display card
│   ├── InstructorCard.tsx          # Instructor card (Client Component)
│   ├── ImageGallery.tsx            # Photo gallery with lightbox
│   └── RegistrationForm.tsx        # Form component
├── public/salon77/                 # All images and assets
│   ├── unterricht/                 # Instructor photos
│   ├── dozenten/                   # Instructor directory photos
│   ├── veranstaltung/              # Event photos
│   ├── kleinmomatra/               # Klein-Montmartre photos
│   └── raumligkeiten/              # Facility photos
└── README.md                        # This file
```

### Available Commands

```bash
npm run dev           # Start development server (http://localhost:3000)
npm run build         # Build for production
npm start             # Run production build
npm run lint          # Check code quality
npm run type-check    # Check TypeScript types
npm test              # Run tests
npm run e2e           # Run browser tests
```

### Design System

- **Brand Color**: #B9BCB5 (taupe) - used for buttons and accents
- **Gold Accents**: #C9A961 - used for section titles
- **Text Colors**: #2c2c2c (dark) for headings, #666666 (gray) for body text
- **Fonts**: Playfair Display (headings), Lato (body text)

All colors are defined in `/app/globals.css` and can be changed there.

### Making Changes

1. **Edit text on a page**: Find the `.tsx` file and update the text directly
2. **Change colors**: Update `/app/globals.css` @theme section
3. **Change fonts**: Update `/app/globals.css` @theme section
4. **Add new page**: Create new folder in `/app/` with `page.tsx` file
5. **Add images**: Upload to `/public/salon77/[section]/` folder

### Deployment

The site can be deployed to:

- Vercel (easiest - automatic from GitHub)
- Netlify
- Your own web hosting
- AWS, Google Cloud, etc.

For Vercel:

1. Push code to GitHub
2. Connect repository to Vercel
3. Add `.env` variables in Vercel dashboard
4. Automatic deployment on every push to main

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
