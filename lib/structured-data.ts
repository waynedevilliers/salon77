import { site } from '@/content/site';
import { indexableRoutes } from '@/content/routes';

const context = 'https://schema.org';

/** Builds a BreadcrumbList from the home page down to the given path. */
export function breadcrumbJsonLd(path: string) {
  const segments = path.split('/').filter(Boolean);
  const paths = segments.map(
    (_, index) => `/${segments.slice(0, index + 1).join('/')}`
  );
  const items = [{ path: '/' }, ...paths.map((p) => ({ path: p }))];

  return {
    '@context': context,
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => {
      const route = indexableRoutes.find((r) => r.path === item.path);
      return {
        '@type': 'ListItem',
        position: index + 1,
        name: route?.label ?? item.path,
        item: `${site.url}${item.path}`,
      };
    }),
  };
}

export function eventJsonLd({
  startDate,
  path,
}: {
  startDate: string;
  path: string;
}) {
  return {
    '@context': context,
    '@type': 'Event',
    name: 'Klein-Montmartre Kunsthandwerkermarkt',
    startDate,
    eventStatus: 'https://schema.org/EventScheduled',
    eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
    location: {
      '@type': 'Place',
      name: 'Leonhard-Frank-Promenade, Würzburg',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Leonhard-Frank-Promenade',
        addressLocality: site.address.city,
        addressCountry: site.address.country,
      },
    },
    organizer: {
      '@type': 'Organization',
      name: site.legalName,
      url: site.url,
    },
    url: `${site.url}${path}`,
  };
}

export function placeJsonLd() {
  return {
    '@context': context,
    '@type': 'Place',
    name: `${site.name} Räumlichkeiten`,
    url: `${site.url}/raeumlichkeiten`,
    address: {
      '@type': 'PostalAddress',
      streetAddress: site.address.street,
      addressLocality: site.address.city,
      postalCode: site.address.postalCode,
      addressCountry: site.address.country,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: site.geo.latitude,
      longitude: site.geo.longitude,
    },
  };
}
