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
for the timetable: Pilates Donnerstag 17:40 - 18:50 Uhr (Hsiu-Yun Lu),
Sevillanas Freitag 18:00 - 19:00 Uhr (Mercedes Sebald Arguisuelas), Ballet
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

## Open questions (for the client)

- Who teaches Pilates on Montag 18:10 - 19:20 Uhr? It is shown without a
  teacher until the client confirms.

- Other teacher data mismatches from the 5.1 report, if any (Andrea
  Kneis is resolved, see 2026-11-11).
- Wochenkurse page vs course times on /unterricht: course cards already
  show times. Decide whether Wochenkurse becomes a weekly timetable
  view of the same data or is dropped.
- Placeholder texts marked TODO in the content files.
