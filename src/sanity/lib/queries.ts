import { client } from "./client"
import type { ExploreProduct, ProductDetail } from "@/types/product"

export async function getProducts(): Promise<ExploreProduct[]> {
  const query = `*[_type == "product"] | order(name asc) {
    _id,
    name,
    alias,
    slug,
    images
  }`

  try {
    const products = await client.fetch(query)
    return products
  } catch (error) {
    console.error('Error fetching products:', error)
    return []
  }
}

export async function getProductBySlug(slug: string): Promise<ProductDetail | null> {
  const query = `*[_type == "product" && slug.current == $slug][0] {
    _id,
    name,
    alias,
    slug,
    images,
    description,
    industryServed,
    endProducts,
    technicalSpecs
  }`

  try {
    const product = await client.fetch(query, { slug })
    return product
  } catch (error) {
    console.error('Error fetching product:', error)
    return null
  }
}

export async function getAllProductSlugs(): Promise<string[]> {
  const query = `*[_type == "product"].slug.current`
  
  try {
    const slugs = await client.fetch(query)
    return slugs
  } catch (error) {
    console.error('Error fetching slugs:', error)
    return []
  }
}