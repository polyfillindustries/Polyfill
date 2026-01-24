'use client';

import { CategoryProductsList } from './CategoryProductsList';
import { useCategoryProductsCache } from '@/lib/react-query/queries';
import type { ExploreProduct } from '@/types/product';

export function CategoryProductsListClient({
  products,
  categoryName,
  categorySlug,
}: {
  products: ExploreProduct[];
  categoryName: string;
  categorySlug: string;
}) {
  const { data } = useCategoryProductsCache(categorySlug, products);
  const cachedProducts = data ?? products;

  return (
    <CategoryProductsList
      products={cachedProducts}
      categoryName={categoryName}
    />
  );
}
