// JSON-LD Structured Data for SEO

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://shaktipolymersindia.com';

// Organization Schema
export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Polyfill Industries',
  alternateName: 'Shakti Polymers',
  url: SITE_URL,
  logo: `${SITE_URL}/logo.png`,
  image: `${SITE_URL}/og-image.png`,
  description: 'Established in 1988, Shakti Polymers is a trusted manufacturer and supplier of plastic granules including BOPP Natural Gole Dana, Fresh PP, and Recycled PP Granules. With four production units and monthly capacity of 1,200 tons, we ensure consistent quality and sustainable polymer recycling solutions across India.',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'C-57, Sector-4, Dsidc Bawana Ind. Area',
    addressLocality: 'Bawana',
    addressRegion: 'Delhi',
    postalCode: '110039',
    addressCountry: 'IN',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+91-9810355151',
    contactType: 'Sales',
    areaServed: 'IN',
    availableLanguage: ['English', 'Hindi'],
  },
  email: 'shaktipolymer@gmail.com',
  sameAs: [
    // Add your social media profiles here when available
    // 'https://www.facebook.com/polyfillindustries',
    // 'https://twitter.com/polyfillindia',
    // 'https://www.linkedin.com/company/polyfill-industries',
  ],
};

// Manufacturer Schema
export const manufacturerSchema = {
  '@context': 'https://schema.org',
  '@type': 'Manufacturer',
  name: 'Polyfill Industries',
  url: SITE_URL,
  logo: `${SITE_URL}/logo.png`,
  description: 'Manufacturer of BOPP Natural Gole Dana, Fresh PP, and Recycled PP Granules with four production units and monthly capacity of 1,200 tons. Established in 1988, committed to quality and sustainable polymer recycling.',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'C-57, Sector-4, Dsidc Bawana Ind. Area',
    addressLocality: 'Bawana',
    addressRegion: 'Delhi',
    postalCode: '110039',
    addressCountry: 'IN',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: '28.8055',
    longitude: '77.0440',
  },
  areaServed: {
    '@type': 'Country',
    name: 'India',
  },
  brand: {
    '@type': 'Brand',
    name: 'Polyfill',
  },
  parentOrganization: {
    '@type': 'Organization',
    name: 'Shakti Polymers',
  },
};

// Website Schema
export const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Polyfill Industries',
  url: SITE_URL,
  description: 'Premium polypropylene granules and BOPP recycled polymers manufacturer in India',
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: `${SITE_URL}/products?search={search_term_string}`,
    },
    'query-input': 'required name=search_term_string',
  },
};

// Local Business Schema
export const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Polyfill Industries',
  image: `${SITE_URL}/og-image.png`,
  '@id': SITE_URL,
  url: SITE_URL,
  telephone: '+91-9810355151',
  email: 'shaktipolymer@gmail.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'C-57, Sector-4, Dsidc Bawana Ind. Area',
    addressLocality: 'Bawana',
    addressRegion: 'Delhi',
    postalCode: '110039',
    addressCountry: 'IN',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: '28.8055',
    longitude: '77.0440',
  },
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    opens: '09:00',
    closes: '18:00',
  },
  priceRange: '$$',
};

// Product Schema Generator
export function generateProductSchema(product: {
  name: string;
  description: string;
  category: string;
  image?: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    description: product.description,
    image: product.image || `${SITE_URL}/og-image.png`,
    brand: {
      '@type': 'Brand',
      name: 'Polyfill Industries',
    },
    manufacturer: {
      '@type': 'Organization',
      name: 'Polyfill Industries',
      url: SITE_URL,
    },
    category: product.category,
    offers: {
      '@type': 'Offer',
      availability: 'https://schema.org/InStock',
      priceCurrency: 'INR',
      seller: {
        '@type': 'Organization',
        name: 'Polyfill Industries',
      },
    },
  };
}

// Breadcrumb Schema Generator
export function generateBreadcrumbSchema(items: Array<{ name: string; url: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${SITE_URL}${item.url}`,
    })),
  };
}
