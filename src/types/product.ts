// Product image type
export interface ProductImage {
  asset: {
    _ref: string
    _type: string
  }
  alt: string
}

// Category type
export interface Category {
  _id: string
  name: string
  slug: {
    current: string
  }
  description?: string
  image?: ProductImage
}

// Category reference in product
export interface CategoryRef {
  _id: string
  name: string
  slug: {
    current: string
  }
}

// Lightweight product for listing/cards
export interface ExploreProduct {
  _id: string
  name: string
  alias?: string
  slug: {
    current: string
  }
  images: ProductImage[]
  category: CategoryRef
}

// Full product details for individual product pages
export interface ProductDetail {
  _id: string
  name: string
  alias?: string
  slug: {
    current: string
  }
  images: ProductImage[]
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
