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
    href: '/categories',
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
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16 text-center">
          <h1 className="mb-4 text-4xl md:text-5xl font-bold font-playfair tracking-tight text-bgray sm:text-6xl">
            Site Navigation
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            Explore all pages and sections of our website
          </p>
        </div>

        {/* Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 max-w-7xl mx-auto">
          {sitePages.map((page) => {
            const Icon = page.icon
            return (
              <Link
                key={page.href}
                href={page.href}
                className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:border-bprimary/50"
              >
                <div className="flex flex-col items-start gap-4">
                  {/* Icon with gradient */}
                  <div className="rounded-xl bg-linear-to-br from-bprimary via-bsecondary to-baccent p-4 text-white transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 shadow-lg">
                    <Icon className="h-7 w-7" />
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="mb-3 text-xl font-semibold font-inter text-bgray group-hover:text-bprimary transition-colors">
                      {page.title}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {page.description}
                    </p>
                  </div>

                  {/* Hover gradient overlay */}
                  <div className="absolute inset-0 bg-linear-to-br from-bprimary/5 to-bsecondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />

                  {/* Arrow indicator */}
                  <div className="absolute right-6 top-6 opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-1">
                    <svg
                      className="h-6 w-6 text-bprimary"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2.5}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </div>
              </Link>
            )
          })}
        </div>

        {/* Footer note with styling matching home page */}
        <div className="mt-16 text-center">
          <div className="inline-block px-6 py-3 bg-gradient-to-r from-bprimary/10 to-bsecondary/10 rounded-full">
            <p className="text-sm text-gray-700">
              Individual product pages can be accessed through the{' '}
              <Link href="/categories" className="font-semibold text-bprimary hover:text-bsecondary transition-colors hover:underline">
                Products
              </Link>{' '}
              section
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
