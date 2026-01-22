'use client';

import { useQueryClient } from '@tanstack/react-query';
import { QUERY_KEYS } from './QueryKeys';
import { getCategories, getProducts } from '@/sanity/lib/queries';

/**
 * Hook to prefetch categories and first 4 products
 * Call this on navbar hover for instant navigation
 */
export function usePrefetchCategories() {
  const queryClient = useQueryClient();

  const prefetchCategories = async () => {
    // Check if already cached
    const cached = queryClient.getQueryData(QUERY_KEYS.CATEGORIES);
    if (cached) return;

    // Prefetch categories
    await queryClient.prefetchQuery({
      queryKey: QUERY_KEYS.CATEGORIES,
      queryFn: getCategories,
      staleTime: 60 * 60 * 1000, // 1 hour - matches Sanity revalidation
    });

    // Also prefetch first few products for the products grid
    await queryClient.prefetchQuery({
      queryKey: QUERY_KEYS.PRODUCTS,
      queryFn: getProducts,
      staleTime: 60 * 60 * 1000, // 1 hour - catalog data rarely changes
    });
  };

  return { prefetchCategories };
}
