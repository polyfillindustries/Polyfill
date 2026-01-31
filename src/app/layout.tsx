import type { Metadata } from "next";
import { Inter, Geist, Geist_Mono, Playfair_Display, DM_Serif_Text } from "next/font/google";
import "./globals.css";
import { ClientProviders } from "@/components/ClientProviders";
import SiteChrome from "@/components/SiteChrome";
import { baseMetadata } from "@/lib/metadata";
import { organizationSchema, websiteSchema, localBusinessSchema } from "@/lib/structuredData";

// Primary font
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

// Heading font
const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

// Serif text font
const dmSerif = DM_Serif_Text({
  variable: "--font-dm-serif",
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

// Fallback fonts
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = baseMetadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://shaktipolymersindia.com';
  
  return (
    <html lang="en" className="h-full">
      <head>
        {/* Canonical URL - Prevents duplicate content from shaktipolymersdelhi.com */}
        <link rel="canonical" href={siteUrl} />
        
        {/* Additional domain signals */}
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta property="og:url" content={siteUrl} />
        
        {/* Structured Data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              organizationSchema,
              websiteSchema,
              localBusinessSchema,
            ]),
          }}
        />
      </head>
      <body
        className={`${inter.variable} ${playfair.variable} ${dmSerif.variable} ${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen`}
      >
        <ClientProviders>
          <SiteChrome>{children}</SiteChrome>
        </ClientProviders>
      </body>
    </html>
  );
}
