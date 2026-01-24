import { client } from "./client"
import type { ExploreProduct, ProductDetail, Category } from "@/types/product"

/**
 * CONFIGURATION CONSTANTS
 * cache: 'force-cache' makes the data persistent on the server
 * tags: Allows us to clear the cache via webhooks when data changes
 */
const CACHE_CONFIG = {
  cache: 'force-cache' as const,
  next: { 
    revalidate: 60 * 60 * 24 * 14, // Revalidate every 2 weeks
    tags: ['products', 'categories', 'gallery'] }
};

// ============ CATEGORY QUERIES ============

export async function getCategories(): Promise<Category[]> {
  // We exclude drafts to ensure the live site only shows published "Families"
  const query = `*[_type == "category" && !(_id in path("drafts.**"))] | order(name asc) {
    _id,
    name,
    "slug": slug.current,
    description,
    "image": image.asset->{
      _id,
      url,
      "lqip": metadata.lqip
    }
  }`

  try {
    return await client.fetch(query, {}, CACHE_CONFIG)
  } catch (error) {
    return []
  }
}

export async function getCategoryBySlug(slug: string): Promise<Category | null> {
  const query = `*[_type == "category" && slug.current == $slug && !(_id in path("drafts.**"))][0] {
    _id,
    name,
    "slug": slug.current,
    description,
    "image": image.asset->{
      _id,
      url,
      "lqip": metadata.lqip
    }
  }`

  try {
    return await client.fetch(query, { slug }, CACHE_CONFIG)
  } catch (error) {
    return null
  }
}

// ============ PRODUCT QUERIES ============

export async function getProducts(): Promise<ExploreProduct[]> {
  const query = `*[_type == "product" && !(_id in path("drafts.**"))] | order(name asc) {
    _id,
    name,
    alias,
    "slug": slug.current,
    // Only fetch the first image for the grid to keep the payload light
    "image": images[0].asset->{
      _id,
      url,
      "lqip": metadata.lqip
    },
    category->{
      name,
      "slug": slug.current
    }
  }`

  try {
    return await client.fetch(query, {}, CACHE_CONFIG)
  } catch (error) {
    return []
  }
}

/**
 * OPTIMIZED: Uses direct ID reference filtering. 
 * First we get the category ID, then fetch products. This is faster for large datasets.
 */
export async function getProductsByCategory(categorySlug: string): Promise<ExploreProduct[]> {
  try {
    // 1. Get the category ID first
    const category = await getCategoryBySlug(categorySlug);
    if (!category) return [];

    // 2. Filter products using the direct reference ID (much faster than string slug joins)
    const query = `*[_type == "product" && category._ref == $categoryId && !(_id in path("drafts.**"))] | order(name asc) {
      _id,
      name,
      alias,
      "slug": slug.current,
      "image": images[0].asset->{
        _id,
        url,
        "lqip": metadata.lqip
      },
      category->{
        _id,
        name,
        "slug": slug.current
      }
    }`

    return await client.fetch(query, { categoryId: category._id }, CACHE_CONFIG)
  } catch (error) {
    return []
  }
}

export async function getProductBySlug(categorySlug: string, productSlug: string): Promise<ProductDetail | null> {
  const query = `*[_type == "product" && slug.current == $productSlug && category->slug.current == $categorySlug && !(_id in path("drafts.**"))][0] {
    _id,
    name,
    alias,
    "slug": slug.current,
    // On the detail page, we fetch the full image array with metadata
    "images": images[].asset->{
      _id,
      url,
      "lqip": metadata.lqip
    },
    description,
    industryServed,
    endProducts,
    technicalSpecs,
    category->{
      name,
      "slug": slug.current
    }
  }`

  try {
    return await client.fetch(query, { categorySlug, productSlug }, CACHE_CONFIG)
  } catch (error) {
    return null
  }
}

// ============ STATIC PARAM GENERATORS (SLUGS) ============

export async function getAllCategorySlugs(): Promise<string[]> {
  const query = `*[_type == "category" && defined(slug.current) && !(_id in path("drafts.**"))].slug.current`
  try {
    return await client.fetch(query, {}, { cache: 'force-cache' })
  } catch (error) {
    return []
  }
}

export async function getAllProductSlugs(): Promise<Array<{ categorySlug: string, productSlug: string }>> {
  const query = `*[_type == "product" && defined(slug.current) && defined(category->slug.current) && !(_id in path("drafts.**"))] {
    "productSlug": slug.current,
    "categorySlug": category->slug.current
  }`
  
  try {
    return await client.fetch(query, {}, { cache: 'force-cache' })
  } catch (error) {
    return []
  }
}

// ============ GALLERY QUERIES ============

export async function getGalleryImages(): Promise<import('@/types/gallery').GalleryImage[]> {
  const query = `*[_type == "galleryImage" && !(_id in path("drafts.**"))] | order(date desc) {
    _id,
    title,
    image,
    date
  }`

  try {
    return await client.fetch(query, {}, CACHE_CONFIG)
  } catch (error) {
    return []
  }
}