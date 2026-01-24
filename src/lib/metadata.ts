import type { Metadata } from 'next';

// Base configuration
const SITE_NAME = 'Polyfill Industries';
const SITE_DESCRIPTION = 'Established in 1988, Polyfill (formerly Shakti Polymers) is a trusted manufacturer and supplier of plastic granules including BOPP Natural Gole Dana, Fresh PP, and Recycled PP Granules. With four production units and monthly capacity of 1,200 tons, we serve clients across India with consistent quality, timely delivery, and sustainable polymer recycling solutions.';
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://shaktipolymersindia.com';

// Comprehensive keyword list - 1-8 words covering all possible search terms
export const SITE_KEYWORDS = [
  // Product names - Primary
  'polypropylene', 'polypropylene granules', 'PP granules', 'PP dana', 'PP gol',
  'BOPP granules', 'BOPP recycled granules', 'BOPP scrap', 'BOPP dana', 'BOPP gol',
  'polypropylene copolymer', 'PPCP granules', 'PP copolymer', 'PP CP dana',
  'high density polyethylene', 'HDPE granules', 'HD granules', 'HDPE dana', 'HD gol',
  'engineering polymers', 'engineering plastics', 'technical polymers',
  
  // Product types - Common terms
  'plastic granules', 'plastic dana', 'plastic gol', 'polymer granules',
  'recycled plastic granules', 'recycled PP', 'recycled BOPP', 'recycled polymers',
  'virgin PP granules', 'virgin polypropylene', 'fresh PP granules',
  'reprocessed PP', 'reprocessed plastic', 'reprocessed granules',
  
  // Industry terms - 1-2 words
  'plastic raw material', 'polymer raw material', 'PP raw material',
  'plastic resin', 'PP resin', 'polypropylene resin',
  'thermoplastic', 'thermoplastic granules', 'thermoplastic polymer',
  
  // Applications - 2-4 words
  'injection molding granules', 'injection molding PP', 'molding grade PP',
  'extrusion grade PP', 'blow molding PP', 'film grade PP',
  'raffia grade PP', 'fiber grade PP', 'pipe grade PP',
  'container grade PP', 'automotive grade PP', 'packaging grade PP',
  
  // Quality indicators - 2-4 words
  'high quality PP', 'premium PP granules', 'consistent quality PP',
  'certified PP granules', 'tested PP material', 'quality assured PP',
  
  // Business terms - 2-5 words
  'PP manufacturer', 'PP supplier', 'PP exporter', 'PP distributor',
  'polypropylene manufacturer', 'polypropylene supplier', 'BOPP manufacturer',
  'plastic granules supplier', 'polymer manufacturer', 'polymer supplier',
  'bulk PP supplier', 'wholesale PP granules', 'industrial PP supplier',
  
  // Location-based - 2-6 words
  'PP manufacturer in India', 'PP supplier in Delhi', 'PP manufacturer Delhi',
  'polypropylene manufacturer India', 'BOPP manufacturer India',
  'plastic granules manufacturer India', 'plastic granules supplier Delhi',
  'polymer manufacturer India', 'polymer supplier Delhi NCR',
  'PP granules manufacturer Bawana', 'plastic manufacturer Bawana Industrial Area',
  
  // Specific products - 3-6 words
  'recycled BOPP film granules', 'BOPP lamination scrap granules',
  'PP injection molding grade', 'PP blow molding grade',
  'PP raffia grade granules', 'PP pipe grade material',
  'high melt flow PP', 'low melt flow PP', 'medium melt flow PP',
  
  // Technical terms - 2-5 words
  'MFI PP granules', 'melt flow index PP', 'high MFI PP',
  'polypropylene homopolymer', 'polypropylene random copolymer',
  'impact copolymer PP', 'block copolymer PP',
  
  // Industry-specific - 2-6 words
  'automotive plastic granules', 'packaging plastic material',
  'textile grade PP', 'construction plastic material',
  'electrical grade PP', 'appliance grade PP',
  'food grade PP granules', 'pharma grade PP',
  
  // Local terms/slang - 1-4 words
  'dana', 'gol', 'PP dana price', 'BOPP dana rate',
  'plastic dana manufacturer', 'plastic gol supplier',
  'recycled dana', 'reprocessed dana', 'fresh dana',
  
  // Competitive terms - 3-6 words
  'best PP manufacturer India', 'top PP supplier Delhi',
  'reliable PP granules supplier', 'trusted polymer manufacturer',
  'leading plastic granules manufacturer', 'premium quality PP supplier',
  
  // Capacity/Scale - 2-6 words
  'bulk PP manufacturer', 'large scale PP supplier',
  'monthly production 1200 tons', 'high volume PP supplier',
  'industrial scale polymer manufacturer',
  
  // Sustainability - 2-5 words
  'sustainable plastic recycling', 'eco friendly PP granules',
  'recycled plastic manufacturer', 'plastic waste recycling',
  'circular economy plastics', 'green polymer solutions',
  
  // Company-related - 2-5 words
  'Polyfill Industries', 'Shakti Polymers unit', 'Shakti Polymers',
  'Polyfill PP manufacturer', 'Polyfill Industries Delhi',
  
  // Combination terms - 4-8 words
  'polypropylene granules manufacturer and supplier in India',
  'recycled BOPP granules manufacturer in Delhi',
  'high quality PP dana supplier in India',
  'premium polypropylene raw material manufacturer',
  'industrial plastic granules bulk supplier Delhi',
  'certified PP granules manufacturer for injection molding',
  'virgin and recycled PP granules supplier',
  'engineering grade polypropylene manufacturer India',
  
  // Purchase intent - 2-5 words
  'buy PP granules', 'buy polypropylene dana', 'purchase BOPP granules',
  'PP granules price', 'PP dana rate', 'BOPP granules cost',
  'wholesale PP granules', 'bulk PP dana', 'industrial PP supplier',
  'PP granules near me', 'PP supplier near Delhi',
  
  // Long-tail - 5-8 words
  'where to buy PP granules in India',
  'best quality polypropylene granules manufacturer in Delhi',
  'recycled BOPP film granules supplier for packaging industry',
  'high melt flow PP granules for injection molding',
  'food grade polypropylene granules manufacturer in India',
  'virgin polypropylene granules for automotive components',
  'reliable PP raw material supplier with monthly capacity',
];

// Generate keyword string for meta tags
export const KEYWORDS_STRING = SITE_KEYWORDS.join(', ');

// Base metadata shared across pages
export const baseMetadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} - Premium Polypropylene Granules & BOPP Recycled Polymers Manufacturer`,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  keywords: KEYWORDS_STRING,
  authors: [{ name: SITE_NAME }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  
  // Open Graph
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: SITE_URL,
    siteName: SITE_NAME,
    title: `${SITE_NAME} - Premium Polypropylene Granules Manufacturer`,
    description: SITE_DESCRIPTION,
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: `${SITE_NAME} - Polypropylene Manufacturer`,
      },
    ],
  },
  
  // Twitter Card
  twitter: {
    card: 'summary_large_image',
    title: `${SITE_NAME} - Premium Polypropylene Granules Manufacturer`,
    description: SITE_DESCRIPTION,
    images: ['/og-image.png'],
    creator: '@polyfillindia',
    site: '@polyfillindia',
  },
  
  // Additional metadata
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  
  // Verification tags (add your verification codes when available)
  verification: {
    google: '', // Add Google Search Console verification code
    // yandex: '',
    // bing: '',
  },
  
  // Category
  category: 'Manufacturing',
  
  // Other metadata
  alternates: {
    canonical: SITE_URL,
  },
};

// Product page metadata generator
export function generateProductMetadata(
  productName: string,
  categoryName: string,
  description: string,
  slug: string,
): Metadata {
  const title = `${productName} - ${categoryName} | ${SITE_NAME}`;
  const productKeywords = [
    productName,
    `${productName} granules`,
    `${productName} dana`,
    `${productName} supplier`,
    `${productName} manufacturer`,
    `buy ${productName}`,
    `${productName} price`,
    categoryName,
    `${categoryName} supplier India`,
  ];

  return {
    title,
    description: description.substring(0, 160),
    keywords: [...productKeywords, ...SITE_KEYWORDS].join(', '),
    openGraph: {
      title,
      description,
      type: 'website',
      url: `${SITE_URL}/products/${slug}`,
      images: [{ url: '/og-image.png', width: 1200, height: 630 }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: ['/og-image.png'],
    },
    alternates: {
      canonical: `${SITE_URL}/products/${slug}`,
    },
  };
}

// Category page metadata generator
export function generateCategoryMetadata(
  categoryName: string,
  description: string,
  slug: string,
): Metadata {
  const title = `${categoryName} Products - Premium Quality | ${SITE_NAME}`;
  const categoryKeywords = [
    categoryName,
    `${categoryName} granules`,
    `${categoryName} manufacturer`,
    `${categoryName} supplier`,
    `${categoryName} India`,
    `buy ${categoryName}`,
    `${categoryName} price`,
  ];

  return {
    title,
    description: description || `Explore our range of ${categoryName} products. High quality, consistent supply, competitive pricing.`,
    keywords: [...categoryKeywords, ...SITE_KEYWORDS].join(', '),
    openGraph: {
      title,
      description,
      type: 'website',
      url: `${SITE_URL}/products/${slug}`,
      images: [{ url: '/og-image.png', width: 1200, height: 630 }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: ['/og-image.png'],
    },
    alternates: {
      canonical: `${SITE_URL}/products/${slug}`,
    },
  };
}
