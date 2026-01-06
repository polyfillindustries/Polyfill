import Link from 'next/link'
import { Home, Info, Mail, Image, Package, Shield, FileText } from 'lucide-react'

const sitePages = [
  {
    title: 'Home',
    href: '/',
    description: 'Welcome to our polymer manufacturing company',
    icon: Home,
  },
  {
    title: 'About Us',
    href: '/about-us',
    description: 'Learn about our company and expertise',
    icon: Info,
  },
  {
    title: 'Products',
    href: '/products',
    description: 'Browse our range of polymer products',
    icon: Package,
  },
  {
    title: 'Gallery',
    href: '/gallery',
    description: 'View our factory and product images',
    icon: Image,
  },
  {
    title: 'Contact Us',
    href: '/contact-us',
    description: 'Get in touch with our team',
    icon: Mail,
  },
  {
    title: 'Privacy Policy',
    href: '/privacy-policy',
    description: 'Our privacy and data protection policy',
    icon: Shield,
  },
  {
    title: 'Terms & Conditions',
    href: '/terms-and-conditions',
    description: 'Terms of service and usage',
    icon: FileText,
  },
]

export default function SitemapPage() {
  return (
    <div className="min-h-screen bg-linear-to-br from-cloud via-white to-blue-50">
      <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="mb-4 text-4xl font-bold tracking-tight text-bgray sm:text-5xl">
            Site Navigation
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Explore all pages and sections of our website
          </p>
        </div>

        {/* Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {sitePages.map((page) => {
            const Icon = page.icon
            return (
              <Link
                key={page.href}
                href={page.href}
                className="group relative overflow-hidden rounded-xl border border-border bg-white p-6 shadow-sm transition-all duration-300 hover:scale-105 hover:shadow-lg hover:border-bprimary"
              >
                <div className="flex flex-col items-start gap-4">
                  {/* Icon */}
                  <div className="rounded-lg bg-linear-to-br from-bprimary to-bsecondary p-3 text-white transition-transform duration-300 group-hover:scale-110">
                    <Icon className="h-6 w-6" />
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="mb-2 text-xl font-semibold text-bgray group-hover:text-bprimary transition-colors">
                      {page.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {page.description}
                    </p>
                  </div>

                  {/* Arrow indicator */}
                  <div className="absolute right-4 top-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <svg
                      className="h-5 w-5 text-bprimary"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </div>
              </Link>
            )
          })}
        </div>

        {/* Footer note */}
        <div className="mt-12 text-center">
          <p className="text-sm text-muted-foreground">
            Individual product pages can be accessed through the{' '}
            <Link href="/products" className="font-medium text-bprimary hover:underline">
              Products
            </Link>{' '}
            section
          </p>
        </div>
      </div>
    </div>
  )
}
