export const QUERY_KEYS = {
  CATEGORIES: ['categories'],
  PRODUCTS: ['products'],
  PRODUCT_BY_SLUG: (categorySlug: string, productSlug: string) => [
    'product',
    categorySlug,
    productSlug,
  ],
  PRODUCTS_BY_CATEGORY: (categorySlug: string) => ['products', 'category', categorySlug],
} as const;
