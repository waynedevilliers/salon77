import type { MetadataRoute } from 'next';
import { site } from '@/content/site';
import { indexableRoutes } from '@/content/routes';
import { instructors } from '@/content/instructors';
import { instructorSlug } from '@/lib/instructors';

export default function sitemap(): MetadataRoute.Sitemap {
  const instructorRoutes = instructors.map((instructor) => ({
    path: `/dozenten/${instructorSlug(instructor.name)}`,
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  return [...indexableRoutes, ...instructorRoutes].map((route) => ({
    url: `${site.url}${route.path}`,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
