import type { MetadataRoute } from 'next';
import { site } from '@/content/site';
import { indexableRoutes } from '@/content/routes';

export default function sitemap(): MetadataRoute.Sitemap {
  return indexableRoutes.map((route) => ({
    url: `${site.url}${route.path}`,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
