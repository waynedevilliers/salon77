# Design decisions

Each entry: what we decided, why, and what we considered instead.
Newest entries at the bottom. Each entry has a status line. Update this file in the same commit as
any change that follows from a decision. Record only decisions someone might later question.

## 2026-11-03: Rebuild instead of patching the old site

Status: done

Decision: Rebuild in Next.js, React and TypeScript.

Why: The old site was a Canvas/Bootstrap/jQuery template that was never
finished: placeholder page titles and meta descriptions, empty sections
("Demnächst", Veranstaltungen), wrong links in the course timetable,
favicon broken on subpages, thousands of unused icons loaded.

Alternative: Fix the old template. Rejected, the problems were
structural.

## 2026-11-03: One accent color (peach from the logo)

Status: done

Decision: --color-accent #E59D6C for backgrounds, borders and
buttons. --color-accent-text #A65A2E for any accent colored text.
Gold removed completely.

Why: Gold on white has a contrast of about 2.5:1 and fails
accessibility (WCAG needs 4.5:1 for text). Gold also does not match
the logo, which is peach and grey. Compared side by side (home page in
peach vs Veranstaltungen in gold): peach titles were clearly more
readable and the page looked more cohesive.

Alternative: Darker gold. Rejected, still off brand.

## 2026-11-03: Fonts

Status: partly. Allura is removed and all titles use Lato bold, but Playfair is no longer used for headings. This entry needs a client decision.

Decision: Lato for all text, Playfair Display for the main headline,
Allura only decorative and never for readable text. All self hosted
via next/font.

Why: The old site used the Allura script font for headings, which was
hard to read. Self hosting avoids requests to Google servers (DSGVO).

## 2026-11-03: Home page

Status: done

Decision: Headline plus a supporting line ("Tanz, Musik, Design und
Fotografie"). Cards are fully clickable and have a one line
description.

Why: The headline says who Salon77 is, the supporting line says what
a visitor gets. The home page leads straight to the section cards.

Update (2026-11-10): the "Probestunde bei unseren Dozenten anfragen"
button was removed from the home page on request. It was previously the
main call to action, linking to the teacher section on /unterricht#dozenten.
The trial lesson booking is still explained on /unterricht.

## 2026-11-03: Menu

Status: done (step 5.3, committed locally, not yet pushed)

Decision: Home | Unterricht | Wochenkurse | Veranstaltungen |
Räumlichkeiten | Verein | Kontakt. No dropdown. "Home" and the pipe
separators are kept.

Why: The goal is that every important page is visible and one click
away, not that the menu is as short as possible. The schedule
(Wochenkurse) is what most visitors look for, so it must not be hidden
in a dropdown. Dropdowns hide content and are awkward on touch screens.
"Home" stays because it helps users who feel lost get back easily
(client preference). 7 items fit on one line on desktop; on mobile they
are in a menu panel anyway.

Alternatives: Dropdown under Unterricht with Wochenkurse and Dozenten
(rejected: hides the schedule). Menu reduced to 4 items (rejected:
hides important pages).

Update: Verein moved to the footer ("Über den Verein"), because most
visitors come for courses, events and rooms, and fewer menu items fit the
compact sticky header. The menu is now Home | Unterricht | Wochenkurse |
Veranstaltungen | Räumlichkeiten | Kontakt. Verein is not marked active in
the menu, since it is not in the menu.

## 2026-11-03: Dozenten as section 2 of Unterricht

Status: done (step 5.2, committed locally, not yet pushed)

Decision: /unterricht shows the courses first and "Unsere Dozenten"
second. Teacher profile pages stay at /dozenten/<slug>. /dozenten
redirects to /unterricht#dozenten.

Why: Visitors want to know what is offered, when, and who teaches it.
Having courses and teachers on one page answers all three. Teachers
appear next to the courses they teach.

## 2026-11-03: No "Profil ansehen" link in the teacher grid

Status: done

Decision: Photo, name and subject are one link to the profile. No extra
"Profil ansehen" line.

Why: Nine identical links added visual noise after the course grid.
Faces are naturally clickable, and the hover underline and photo zoom
make the link clear on desktop.

## 2026-11-03: One shared teacher data source

Status: done (step 5.1, committed)

Decision: Course cards, the Dozenten section and the profile pages all
read teacher data from one source.

Why: The old pages contradicted each other (teachers without courses,
different name spellings). One source prevents this.

## 2026-11-03: Workflow and testing

Status: done

Decision: Small steps. After each step: review, then commit and push,
or revert. Tests cover essential functionality only (navigation, links,
mobile menu, layout not breaking, accessibility check on key pages).

Why: Small steps make it easy to keep good changes and undo bad ones.
Extensive end to end testing cost too much time and tokens for a site
of this size.

## 2026-11-10: Teacher names on the Wochenkurse timetable

Status: done, teachers for Pilates, Afrikanisches Trommeln, Sevillanas and
Ballet (Freitag) still missing

Decision: Each weekly course shows its teacher ("mit Name") and the name
links to the teacher profile. Courses without a known teacher show no name.

Why: Visitors looking at the timetable want to know who teaches a course
and can open the profile from there.

## 2026-11-11: "Mehr erfahren" on course cards

Status: done

Decision: The button on every course card on /unterricht reads "Mehr erfahren"
(was "Probestunde anfragen"). It still links to the teacher section
/unterricht#dozenten.

Why: The client asked for the more neutral wording. The trial lesson is still
explained on /unterricht and in the teacher section.

Open: the button now leads to the teacher section, not to course details.
Confirm with the client whether it should link somewhere else.

## 2026-11-11: André Mabiala teaches African drumming

Status: done

Decision: André Mabiala is added as a teacher (profile, teacher section and
course card "Afrikanisches Trommeln", Dienstag 19:00 - 21:00 Uhr). The photo
is the one from his Salon77 profile. The client also confirmed these teachers
for the timetable: Pilates Montag 18:10 - 19:20 Uhr and Donnerstag 17:40 -
18:50 Uhr (Hsiu-Yun Lu), Sevillanas Freitag 18:00 - 19:00 Uhr (Mercedes Sebald Arguisuelas), Ballet
Freitag 19:00 - 20:30 Uhr (Asami Krisan).

Why: The client supplied the teacher information. Teachers without an active
course (for example Andrea Kneis) still appear in the teacher section.

## 2026-11-11: Andrea Kneis teaches dance

Status: done

Decision: Andrea Kneis's specialty is "Tanz" (dance), matching her biography.

Why: The client confirmed she teaches dance. The earlier specialty "Gesang"
(singing) was a data error from the 5.1 report.

Considered: Keeping "Gesang" and rewriting the bio. Rejected, the client
confirmed dance.

## 2026-11-11: No "Probestunde" wording on the site

Status: done

Decision: The word "Probestunde" is removed from all pages. The teacher profile
button reads "Kontakt zu {Name}" (mailto subject "Anfrage bei {Name}"). The
teacher section intro asks visitors to contact a teacher directly. The
"Kostenlose Probestunde" line is removed from the Gitarre course description.

Why: The client asked for the wording to be removed everywhere.

Open: the free trial lesson offer for Gitarre is no longer mentioned on the
site. Confirm with the client whether it should be stated another way.

## 2026-11-23: Next.js 16.4.6 (security update)

Status: done

Decision: Next.js and eslint-config-next go from 16.4.3 to 16.4.6.

Why: npm audit lists seven moderate advisories for Next.js 16.0 to 16.4.4,
several in `use cache` and Cache Components, which this site has switched on.
16.4.6 fixes them and was released on 2026-11-09, so it meets the rule of
versions at least two weeks old.

Considered: Waiting for 16.5. Rejected, the fix is a patch release.

## 2026-11-23: Registration form checked on the server, with an on/off switch

Status: done

Decision: The Klein-Montmartre registration is checked again on the server
before any email is sent: every field with Zod (lengths, email, phone, area
1 to 100 m²), a hidden honeypot field, and at most 5 attempts per visitor in 15
minutes. Every value is escaped in the HTML email, and a plain-text version is
sent too. Missing mail settings stop the request. A failed attempt shows a
short code and logs only that code and the error type, never personal data.
Errors are shown under their fields. The form links to the Datenschutz page.
All form text lives in `content/registration.ts`. Setting `enabled: false`
there switches the form off: the registration page returns 404, the "Jetzt
anmelden" button is hidden, and the server refuses submissions. The email link
stays.

On the form only, field borders use `--color-text-muted` (5.7:1 on white) and
the focus ring `--color-accent-text` (5.1:1), so both meet the 3:1 minimum for
controls. After sending, focus moves to the thank-you heading.

Zod (4.6.7, exact) is added as a dependency for the server checks. It was
already installed through ESLint and knip.

The rate limit assumes the site runs on Vercel, which sets the visitor address
in x-forwarded-for. Visitors without a known address share one bucket of 30
attempts. Revisit `lib/client-key.ts` before moving to another host.

Why: The form is the only public input on the site. Before this change,
visitor input went into the email HTML unescaped, there was no server-side
validation, and nothing stopped the form being used to send unlimited email.

Considered: A shared rate-limit store (for example Upstash). Rejected for now:
it adds an outside processor that the Datenschutz text would have to name. The
in-memory limit works per server instance, which is enough for this traffic.
A required consent checkbox: not added, because the data is processed to handle
the registration; the notice with the Datenschutz link informs the visitor.
Confirm with the client or a lawyer (see open questions).

## 2026-11-24: Fade-in only below the first screen

Status: done

Decision: Cards that are on the first screen when a page opens (home page
cards, course cards on /unterricht) show straight away, without the fade.
Cards further down still fade and rise when they scroll into view, as before.
After loading, the pages look exactly as before (screenshots at 375 and 1440
compared pixel by pixel).

Why: The first-screen cards stayed invisible until the JavaScript had loaded.
At phone speed (Lighthouse mobile throttling) the largest element appeared
after about 3.6 s (home page) and 3.5 s (/unterricht); budget 2.5 s. Measured after the change:
/unterricht 2.1 s (score 0.78 to 0.94), home page 3.0 s (0.85 to 0.94). The
rest of the home page delay is React's own start-up time.

Alternatives: Keep the fade everywhere (rejected, slow first screen). A
CSS-only fade (rejected: no fade in Firefox, and the cards would still start
invisible).

## 2026-11-24: No upgrade-insecure-requests in the CSP

Status: done

Decision: The Content-Security-Policy no longer contains
`upgrade-insecure-requests`. HSTS (two years, includeSubDomains) stays.

Why: Safari's engine (WebKit) applies the directive to `http://localhost`
too, so in the browser tests every script and stylesheet failed with a TLS
error. The WebKit and mobile Safari runs on `main` failed since the first CI
run because of it. On the live site the directive adds nothing: HSTS keeps
visitors on https, and every resource is loaded from the site itself with
relative URLs.

Alternative: Keep the directive in production and drop it only for tests.
Rejected: the tests would then not check the headers the site really sends.

## 2026-11-24: One course card per teacher on /unterricht

Status: done

Decision: On /unterricht every teacher has one course card. Hsiu-Yun Lu's
three courses (Kindertanz & -Ballett, Moderner Tanz: Zeitgenössischer Tanz,
Taiji) share one card that looks like every other course card and shows one
course at a time. Under the description, round ‹ › arrows around "Kurs 1 von
3" flip the same card to the previous or next course (wrapping around). The
control is small (36px arrows, 14px text, centered), as the owner asked; that
is below the 44px tap target in CLAUDE.md but above the 24px WCAG minimum. The times, photo and "Mehr erfahren" stay
at the bottom, aligned with the other cards in the row. The card keeps the
height of her longest course, so it does not jump. All other course cards are
unchanged.

Why: She appeared on three cards with the same photo and name.

Alternatives: All three courses listed on one card without descriptions
(tried, rejected by the owner); arrows with dots, pills with the course names
and "1. Kurs / 2. Kurs / 3. Kurs" segments (tried on the preview, not
chosen).
## 2026-11-24: Teacher order by weekly courses

Status: done

Decision: "Unsere Dozenten" lists the teachers with the most weekly lessons
in the Wochenkurse timetable first; the same number by last name. Andrea
Kneis, who has no weekly courses, is always last. The cards are unchanged.
The same order is used for previous/next on the profile pages. The timetable
moved unchanged from the Wochenkurse page to `content/weekly-courses.ts`, so
the order is calculated from it (`lib/teacher-order.ts`).

Why: The busiest teachers appear first, and the order follows the timetable
when it changes.

## 2026-11-24: Registration form off until the Datenschutz text is in

Status: done

Decision: The online registration form is switched off (`enabled: false` in
`content/registration.ts`). The registration page returns 404, the "Jetzt
anmelden" button on Klein-Montmartre is hidden, and the email link stays.

Why: The Datenschutz text does not yet describe the form, the email
provider, hosting or Google Maps (datenschutz check, 2026-11-24). Switch it
back on together with the new text.

## 2026-11-24: Tap targets of at least 44px

Status: done

Decision: Footer links, the Kontakt phone and email links, the jump links on
/unterricht, the breadcrumbs and the map controls are at least 44px tall; the
map notice, the map link and "2. Vorsitzende" use 16px text. Colours, fonts
and text stay the same. The footer rows are a little further apart; the
breadcrumb bar keeps its height. Hsiu-Yun Lu's ‹ › arrows stay at 36px (see
"One course card per teacher").

Why: Most visitors are on a phone (mobile check, 2026-11-24).

## Open questions (for the client)

- Kontakt calls Mercedes Sebald Arguisuelas "2. Vorsitzende"; the Impressum
  lists her as 1. Vorsitzender and Simon Orth as 2. Which is right?

- Other teacher data mismatches from the 5.1 report, if any (Andrea
  Kneis is resolved, see 2026-11-11).
- Wochenkurse page vs course times on /unterricht: course cards already
  show times. Decide whether Wochenkurse becomes a weekly timetable
  view of the same data or is dropped.
- Placeholder texts marked TODO in the content files.
- Datenschutz text: it does not yet describe the Klein-Montmartre
  registration form (fields, purpose, legal basis, how long registrations are
  kept), the email (SMTP) provider, the hosting provider, or the Google Maps
  map loaded after a click. The club or a lawyer needs to supply this text.
- Registration form: is 100 m² the right upper limit for the stand area?
