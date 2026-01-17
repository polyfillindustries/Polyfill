// Page props types for Next.js pages
export interface ProductPageProps {
  params: Promise<{
    categorySlug: string;
    productSlug: string;
  }>;
}

export interface CategoryPageProps {
  params: Promise<{
    categorySlug: string;
  }>;
}

export interface Hero2Props {
  video: string | { mobile: string; desktop: string };
  overlayOpacity?: number;
  className?: string;
  children?: React.ReactNode;
}

export interface CategoryProductsListProps {
  products: import('./product').ExploreProduct[];
  categoryName: string;
}

export interface ProductEnquirySheetProps {
  productName: string;
}
