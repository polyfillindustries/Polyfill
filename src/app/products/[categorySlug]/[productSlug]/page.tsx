import { notFound } from 'next/navigation'
import Script from 'next/script'
import { getProductBySlug, getAllProductSlugs } from '@/sanity/lib/queries'
import { ProductImageCarousel } from '@/components/products/ProductImageCarousel'
import { ProductsDescription } from '@/components/products/ProductsDescription'
import type { ProductPageProps } from '@/types'

export async function generateStaticParams() {
  const slugs = await getAllProductSlugs()
  return slugs.map(({ categorySlug, productSlug }) => ({
    categorySlug: categorySlug,
    productSlug: productSlug,
  }))
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { categorySlug, productSlug } = await params
  const product = await getProductBySlug(categorySlug, productSlug)

  if (!product) {
    notFound()
  }

  return (
    <>
      {/* Load reCAPTCHA v3 Script */}
      <Script
        src={`https://www.google.com/recaptcha/api.js?render=${process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}`}
        strategy="lazyOnload"
      />
      
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-12">
        {/* Back Button */}
        <a 
          href={`/products/${categorySlug}`}
          className="inline-flex items-center text-gray-600 hover:text-bprimary mb-8 transition-colors"
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to {product.category.name}
        </a>

        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8">
            {/* Left Side - Image Carousel */}
            <div className="space-y-4">
              <ProductImageCarousel images={product.images} productName={product.name} />
            </div>

            {/* Right Side - Product Details */}
            <div className="space-y-6">
              <ProductsDescription product={product}/>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}
