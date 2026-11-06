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

Decision: Headline plus a supporting line ("Tanz, Musik, Bewegung und
Fotografie für alle Altersstufen") and one main button
"Probestunde bei unseren Dozenten anfragen", which links to the teacher
section on /unterricht#dozenten. Cards are fully clickable and have a one line
description.

Why: The headline says who Salon77 is, the supporting line says what
a visitor gets. A trial lesson is the most valuable action a visitor
can take, so it is the main call to action.

Update: the button used to link to /kontakt. It now links to the teacher
section, because a trial lesson is booked with the teacher. The teacher
section has a short explanation of how to do that.

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

## Open questions (for the client)

- Teacher data mismatches from the 5.1 report (for example Andrea
  Kneis: subject "Gesang", bio about dance).
- Wochenkurse page vs course times on /unterricht: course cards already
  show times. Decide whether Wochenkurse becomes a weekly timetable
  view of the same data or is dropped.
- Placeholder texts marked TODO in the content files.
