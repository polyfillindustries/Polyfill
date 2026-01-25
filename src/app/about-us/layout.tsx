import type { Metadata } from 'next';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://shaktipolymersindia.com';

export const metadata: Metadata = {
  title: 'About Us - Leading Polypropylene Manufacturer Since Foundation',
  description: 'Polyfill Industries, a unit of Shakti Polymers, is a leading manufacturer of polypropylene granules, BOPP recycled polymers, and engineering plastics. Monthly capacity: 1,200 tons. Based in Delhi, India.',
  keywords: 'about Polyfill Industries, Shakti Polymers, PP manufacturer company, polymer manufacturing company India, BOPP recycling company, plastic granules manufacturer Delhi, established polymer manufacturer',
  alternates: {
    canonical: `${SITE_URL}/about-us`,
  },
  openGraph: {
    title: 'About Polyfill Industries - Premium Polymer Manufacturer',
    description: 'Leading manufacturer of polypropylene and BOPP granules with 1,200 tons monthly capacity.',
    url: `${SITE_URL}/about-us`,
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Polyfill Industries',
    description: 'Leading manufacturer of polypropylene and BOPP granules.',
    images: ['/og-image.png'],
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}