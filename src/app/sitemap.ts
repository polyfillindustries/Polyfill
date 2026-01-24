import type { MetadataRoute } from 'next';
import { getAllCategorySlugs, getAllProductSlugs } from '@/sanity/lib/queries';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL;

  if (!baseUrl) {
    throw new Error('NEXT_PUBLIC_SITE_URL environment variable is required');
  }

  const [categorySlugs, productSlugs] = await Promise.all([
    getAllCategorySlugs(),
    getAllProductSlugs(),
  ]);

  const now = new Date();

  // Static pages with priorities
  const staticEntries: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/products`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/about-us`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/gallery`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/contact-us`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified: now,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${baseUrl}/terms-and-conditions`,
      lastModified: now,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ];

  const categoryEntries: MetadataRoute.Sitemap = categorySlugs.map((categorySlug) => ({
    url: `${baseUrl}/products/${categorySlug}`,
    lastModified: now,
    changeFrequency: 'weekly',
    priority: 0.8,
  }));

  const productEntries: MetadataRoute.Sitemap = productSlugs.map(({ categorySlug, productSlug }) => ({
    url: `${baseUrl}/products/${categorySlug}/${productSlug}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  return [...staticEntries, ...categoryEntries, ...productEntries];
}
