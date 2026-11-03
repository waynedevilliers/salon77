/// <reference types="vitest" />
import { breadcrumbJsonLd, eventJsonLd, placeJsonLd } from './structured-data';

describe('breadcrumbJsonLd', () => {
  it('lists home and then each parent page with its label', () => {
    const data = breadcrumbJsonLd('/veranstaltungen/klein-montmartre');
    expect(data.itemListElement.map((item) => item.name)).toEqual([
      'Startseite',
      'Veranstaltungen',
      'Klein-Montmartre',
    ]);
    expect(data.itemListElement[2]).toMatchObject({
      position: 3,
      item: 'https://salon77.de/veranstaltungen/klein-montmartre',
    });
  });

  it('places a single subpage directly under home', () => {
    const data = breadcrumbJsonLd('/kontakt');
    expect(data.itemListElement).toHaveLength(2);
    expect(data.itemListElement[1].name).toBe('Kontakt');
  });
});

describe('eventJsonLd', () => {
  it('describes an offline event with a start date and organizer', () => {
    const data = eventJsonLd({
      startDate: '2027-05-08',
      path: '/veranstaltungen/klein-montmartre',
    });
    expect(data).toMatchObject({
      '@type': 'Event',
      startDate: '2027-05-08',
      eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
      organizer: { name: 'Salon77 - Würzburger Künstlerinitiative e.V.' },
    });
  });
});

describe('placeJsonLd', () => {
  it('uses the same address as the organization', () => {
    expect(placeJsonLd().address).toMatchObject({
      streetAddress: 'Richard-Wagner-Straße 60',
      postalCode: '97074',
      addressLocality: 'Würzburg',
    });
  });
});
