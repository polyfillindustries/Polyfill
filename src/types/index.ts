// Central export for all types - improves import organization

// Product types
export type { ProductImage, ExploreProduct, ProductDetail, Product, Category, CategoryRef } from './product'
export type { ExploreCardsProps } from './explorecards'
export type { ProductsDescriptionProps } from './productdescription'
export type { ProductImageCarouselProps } from './productimage'

// Component types
export type { 
  AnimationState,
  MorphingButtonProps,
  PhoneButtonProps,
  WhatsAppButtonProps,
  TooltipProps,
  TimelineEntry,
  Direction
} from './components'

// Page props types
export type {
  ProductPageProps,
  CategoryPageProps,
  Hero2Props,
  CategoryProductsListProps,
  ProductEnquirySheetProps
} from './pages'

// Form types
export type { ContactFormData, EnquiryFormData } from './forms'

// Gallery types
export type { GalleryImage, ProcessedGalleryImage } from './gallery'

// Other types
export type { StatItem } from './statitem'
