
import { ExploreCards } from '@/components/products/ExploreCards';
import { getCategories } from '@/sanity/lib/queries';


export default async function ProductsPage() {

  const categories = await getCategories()



  return (
    <div className="min-h-screen">
      <div className="flex justify-center mt-5 p-8">
       <h1 className='md:text-5xl text-2xl font-bold font-inter'>
        Our <span className="text-bprimary">Categories</span>
       </h1>
      </div>
      <ExploreCards products={categories} />
    </div>
  )
}

