import { client } from "./client"
import type { ExploreProduct, ProductDetail, Category } from "@/types/product"

// ============ CATEGORY QUERIES ============

export async function getCategories(): Promise<Category[]> {
  const query = `*[_type == "category"] | order(name asc) {
    _id,
    name,
    slug,
    description,
    image
  }`

  try {
    const categories = await client.fetch(query)
    return categories
  } catch (error) {
    console.error('Error fetching categories:', error)
    return []
  }
}

export async function getCategoryBySlug(slug: string): Promise<Category | null> {
  const query = `*[_type == "category" && slug.current == $slug][0] {
    _id,
    name,
    slug,
    description,
    image
  }`

  try {
    const category = await client.fetch(query, { slug })
    return category
  } catch (error) {
    console.error('Error fetching category:', error)
    return null
  }
}

export async function getAllCategorySlugs(): Promise<string[]> {
  const query = `*[_type == "category"].slug.current`
  
  try {
    const slugs = await client.fetch(query)
    return slugs
  } catch (error) {
    console.error('Error fetching category slugs:', error)
    return []
  }
}

// ============ PRODUCT QUERIES ============

export async function getProducts(): Promise<ExploreProduct[]> {
  const query = `*[_type == "product"] | order(name asc) {
    _id,
    name,
    alias,
    slug,
    images,
    category->{
      _id,
      name,
      slug
    }
  }`

  try {
    const products = await client.fetch(query)
    return products
  } catch (error) {
    console.error('Error fetching products:', error)
    return []
  }
}

export async function getProductsByCategory(categorySlug: string): Promise<ExploreProduct[]> {
  const query = `*[_type == "product" && category->slug.current == $categorySlug] | order(name asc) {
    _id,
    name,
    alias,
    slug,
    images,
    category->{
      _id,
      name,
      slug
    }
  }`

  try {
    const products = await client.fetch(query, { categorySlug })
    return products
  } catch (error) {
    console.error('Error fetching products by category:', error)
    return []
  }
}

export async function getProductBySlug(categorySlug: string, productSlug: string): Promise<ProductDetail | null> {
  const query = `*[_type == "product" && slug.current == $productSlug && category->slug.current == $categorySlug][0] {
    _id,
    name,
    alias,
    slug,
    images,
    description,
    industryServed,
    endProducts,
    technicalSpecs,
    category->{
      _id,
      name,
      slug
    }
  }`

  try {
    const product = await client.fetch(query, { categorySlug, productSlug })
    return product
  } catch (error) {
    console.error('Error fetching product:', error)
    return null
  }
}

export async function getAllProductSlugs(): Promise<Array<{ categorySlug: string, productSlug: string }>> {
  const query = `*[_type == "product" && defined(category) && defined(slug.current) && defined(category->slug.current)] {
    "productSlug": slug.current,
    "categorySlug": category->slug.current
  }`
  
  try {
    const slugs = await client.fetch(query)
    // Filter out any invalid entries
    return slugs.filter((slug: any) => 
      slug.categorySlug && typeof slug.categorySlug === 'string' &&
      slug.productSlug && typeof slug.productSlug === 'string'
    )
  } catch (error) {
    console.error('Error fetching product slugs:', error)
    return []
  }
}