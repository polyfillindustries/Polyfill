// Product image type
export interface ProductImage {
  asset: {
    _ref: string
    _type: string
  }
  alt: string
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
}

// Type alias for backward compatibility - use ProductDetail instead
export type Product = ProductDetail
