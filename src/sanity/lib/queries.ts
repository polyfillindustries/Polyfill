// import { client } from "./client"
// import type { ExploreProduct, ProductDetail, Category } from "@/types/product"

// // ============ CATEGORY QUERIES ============

// export async function getCategories(): Promise<Category[]> {
//   const query = `*[_type == "category"] | order(name asc) {
//     _id,
//     name,
//     slug,
//     description,
//     image
//   }`

//   try {
//     const categories = await client.fetch(query)
//     return categories
//   } catch (error) {
//     console.error('Error fetching categories:', error)
//     return []
//   }
// }

// export async function getCategoryBySlug(slug: string): Promise<Category | null> {
//   const query = `*[_type == "category" && slug.current == $slug][0] {
//     _id,
//     name,
//     slug,
//     description,
//     image
//   }`

//   try {
//     const category = await client.fetch(query, { slug })
//     return category
//   } catch (error) {
//     console.error('Error fetching category:', error)
//     return null
//   }
// }

// export async function getAllCategorySlugs(): Promise<string[]> {
//   const query = `*[_type == "category"].slug.current`
  
//   try {
//     const slugs = await client.fetch(query)
//     return slugs
//   } catch (error) {
//     console.error('Error fetching category slugs:', error)
//     return []
//   }
// }

// // ============ PRODUCT QUERIES ============

// export async function getProducts(): Promise<ExploreProduct[]> {
//   const query = `*[_type == "product"] | order(name asc) {
//     _id,
//     name,
//     alias,
//     slug,
//     images,
//     category->{
//       _id,
//       name,
//       slug
//     }
//   }`

//   try {
//     const products = await client.fetch(query)
//     return products
//   } catch (error) {
//     console.error('Error fetching products:', error)
//     return []
//   }
// }

// export async function getProductsByCategory(categorySlug: string): Promise<ExploreProduct[]> {
//   const query = `*[_type == "product" && category->slug.current == $categorySlug] | order(name asc) {
//     _id,
//     name,
//     alias,
//     slug,
//     images,
//     category->{
//       _id,
//       name,
//       slug
//     }
//   }`

//   try {
//     const products = await client.fetch(query, { categorySlug })
//     return products
//   } catch (error) {
//     console.error('Error fetching products by category:', error)
//     return []
//   }
// }

// export async function getProductBySlug(categorySlug: string, productSlug: string): Promise<ProductDetail | null> {
//   const query = `*[_type == "product" && slug.current == $productSlug && category->slug.current == $categorySlug][0] {
//     _id,
//     name,
//     alias,
//     slug,
//     images,
//     description,
//     industryServed,
//     endProducts,
//     technicalSpecs,
//     category->{
//       _id,
//       name,
//       slug
//     }
//   }`

//   try {
//     const product = await client.fetch(query, { categorySlug, productSlug })
//     return product
//   } catch (error) {
//     console.error('Error fetching product:', error)
//     return null
//   }
// }

// export async function getAllProductSlugs(): Promise<Array<{ categorySlug: string, productSlug: string }>> {
//   const query = `*[_type == "product" && defined(category) && defined(slug.current) && defined(category->slug.current)] {
//     "productSlug": slug.current,
//     "categorySlug": category->slug.current
//   }`
  
//   try {
//     const slugs = await client.fetch(query)
//     // Filter out any invalid entries
//     return slugs.filter((slug: any) => 
//       slug.categorySlug && typeof slug.categorySlug === 'string' &&
//       slug.productSlug && typeof slug.productSlug === 'string'
//     )
//   } catch (error) {
//     console.error('Error fetching product slugs:', error)
//     return []
//   }
// }

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
    revalidate: 86400, // Revalidate every day
    tags: ['products', 'categories'] }
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
    console.error('Error fetching categories:', error)
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
    console.error('Error fetching category:', error)
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
    console.error('Error fetching products:', error)
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
    console.error('Error fetching products by category:', error)
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
    console.error('Error fetching product:', error)
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