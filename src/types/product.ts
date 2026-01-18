// Legacy product image type (for reference/backward compatibility)
export interface ProductImage {
  asset: {
    _ref: string
    _type: string
  }
  alt: string
}

// Resolved image type from optimized queries
export interface ResolvedImage {
  _id: string
  url: string
  lqip?: string
}

// Category type
export interface Category {
  _id: string
  name: string
  slug: string
  description?: string
  image?: ResolvedImage
}

// Category reference in product
export interface CategoryRef {
  _id: string
  name: string
  slug: string
}

// Lightweight product for listing/cards
export interface ExploreProduct {
  _id: string
  name: string
  alias?: string
  slug: string
  image?: ResolvedImage
  category: CategoryRef
}

// Full product details for individual product pages
export interface ProductDetail {
  _id: string
  name: string
  alias?: string
  slug: string
  images: ResolvedImage[]
  description: string
  industryServed: string[]
  endProducts: string[]
  technicalSpecs?: Array<{
    key: string
    value: string
  }>
  category: CategoryRef
}

// Type alias for backward compatibility - use ProductDetail instead
export type Product = ProductDetail
