import { notFound } from 'next/navigation'
import { getCategoryBySlug, getProductsByCategory, getAllCategorySlugs } from '@/sanity/lib/queries'
import { CategoryProductsListClient } from '@/components/products/CategoryProductsListClient'
import type { CategoryPageProps } from '@/types'

export async function generateStaticParams() {
  const slugs = await getAllCategorySlugs()
  return slugs.map((slug) => ({
    categorySlug: slug,
  }))
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { categorySlug } = await params
  
  const [category, products] = await Promise.all([
    getCategoryBySlug(categorySlug),
    getProductsByCategory(categorySlug)
  ])

  if (!category) {
    notFound()
  }

  return (
    <div className="min-h-screen">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        {/* Back Button */}
        <a 
          href="/products"
          className="inline-flex items-center text-gray-600 hover:text-bprimary mb-4 transition-colors"
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Products
        </a>
        
        <div className="flex justify-center p-8">
          <div className="text-center">
            <h1 className='md:text-5xl text-2xl font-bold font-inter'>
              {category.name}
            </h1>
          </div>
        </div>
      </div>
      
      <CategoryProductsListClient
        products={products}
        categoryName={category.name}
        categorySlug={categorySlug}
      />
    </div>
  )
}
