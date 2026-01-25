import type { Metadata } from 'next';
import { ExploreCards } from '@/components/products/ExploreCards';
import { getCategories } from '@/sanity/lib/queries';
import { SITE_KEYWORDS } from '@/lib/metadata';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://shaktipolymersindia.com';

export const metadata: Metadata = {
  title: 'Products - Polypropylene, BOPP, PPCP & Engineering Polymers',
  description: 'Browse our comprehensive range of polypropylene granules, BOPP recycled polymers, PP copolymer, high-density polyethylene, and engineering plastics. Premium quality, bulk supply available.',
  keywords: SITE_KEYWORDS.join(', '),
  alternates: {
    canonical: `${SITE_URL}/products`,
  },
  openGraph: {
    title: 'Premium Polymer Products - Polyfill Industries',
    description: 'Comprehensive range of PP, BOPP, PPCP, HDPE granules and engineering polymers for various industrial applications.',
    url: `${SITE_URL}/products`,
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Premium Polymer Products - Polyfill Industries',
    description: 'Comprehensive range of PP, BOPP, PPCP, HDPE granules and engineering polymers.',
    images: ['/og-image.png'],
  },
};


export default async function ProductsPage() {

  const categories = await getCategories()



  return (
    <div className="min-h-screen">
      <div className="flex justify-center mt-5 p-8">
       <h1 className='md:text-5xl text-2xl font-bold font-inter'>
        Polymer <span className="text-bprimary">Families</span>
       </h1>
      </div>
      <ExploreCards products={categories} />
    </div>
  )
}

