import { Metadata } from "next";
import { ExploreCards } from '@/components/products/ExploreCards';
import {getProducts} from '@/sanity/lib/queries';

export const metadata: Metadata = {
  title: "Our Products - Explore Our Products  | Polyfill Industries",
};

export default async function ProductsPage() {

  const products = await getProducts()



  return (
    <div className="min-h-screen">
      <div className="flex justify-center mt-5 p-8">
       <h1 className='md:text-5xl text-2xl font-bold font-inter'>
        Our <span className="text-bprimary">Products</span>
       </h1>
      </div>
      <ExploreCards products={products} />
    </div>
  )
}
