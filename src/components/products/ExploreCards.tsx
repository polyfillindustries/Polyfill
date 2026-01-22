'use client';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowUpRight, Box } from 'lucide-react';
import type { ExploreCardsProps } from '@/types/explorecards';
import type { ExploreProduct, Category } from '@/types/product';

function isProduct(item: ExploreProduct | Category): item is ExploreProduct {
  return 'category' in item;
}

export const ExploreCards = ({ products }: ExploreCardsProps) => {
  if (!products || products.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-10 md:py-24 px-4">
        <div className="bg-zinc-50 p-6 rounded-full mb-4">
          <Box className="w-10 h-10 text-zinc-300" />
        </div>
        <h3 className="text-xl font-bold text-zinc-900">No Materials Found</h3>
        <p className="text-zinc-500 mt-2">Check back later for our updated polymer inventory.</p>
      </div>
    );
  }

  return (
    <section className="w-full px-4 md:px-10 lg:px-16 md:py-4">
      {/* Adjusted gap: smaller gap-y for rows, larger gap-x for columns */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-x-4 md:gap-x-8 gap-y-6 md:gap-y-10">
        {products.map((item, index) => {
          const isProd = isProduct(item);
          const linkHref = isProd 
            ? `/products/${item.category.slug}/${item.slug}`
            : `/products/${item.slug}`;
          
          const imageData = isProd 
            ? (item as ExploreProduct).image 
            : (item as Category).image;
          
          const alias = isProd ? (item as ExploreProduct).alias : undefined;

          return (
            <motion.div
              key={item._id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="h-full"
            >
              {/* Changed h-[85%] to h-full to remove artificial spacing */}
              <Link
                href={linkHref}
                className="group relative flex flex-col h-[90%] bg-white rounded-[2rem] border border-zinc-100 shadow-sm hover:shadow-2xl hover:border-bprimary/30 transition-all duration-500 overflow-hidden"
                {...(isProd && { target: '_blank' })}
              >
              <div className="absolute top-4 right-4 z-20 ">
                <div className=" p-3 bg-black/50 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 rounded-xl text-white shadow-xl">
                    <ArrowUpRight className="w-5 h-5 text-baccent " />
                  </div>
              </div>

              <div className="relative aspect-square w-full overflow-hidden bg-zinc-50">
                {imageData?.url ? (
                  <>
                    <Image
                      src={imageData.url}
                      alt={item.name}
                      fill
                      className="object-cover object-bottom transition-transform duration-700 ease-out group-hover:scale-110"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      placeholder={imageData.lqip ? 'blur' : 'empty'}
                      blurDataURL={imageData.lqip}
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-zinc-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </>
                ) : (
                  <div className="flex h-full w-full items-center justify-center bg-zinc-100">
                    <Box className="h-12 w-12 text-zinc-300" />
                  </div>
                )}
              </div>

              <div className="p-6 flex flex-col bg-bgray grow">
                <div className="space-y-2 mb-4">
                  <h3 className="font-bold text-xl text-zinc-200 leading-tight line-clamp-2 group-hover:text-bprimary transition-colors duration-300">
                    {item.name}
                  </h3>
                  {alias && (
                    <div className="inline-block">
                      <p className="text-sm font-medium text-zinc-300 bg-zinc-600 px-2 py-1 rounded-md  tracking-tight">
                        {alias}
                      </p>
                    </div>
                  )}
                  {!isProd && (item as Category).description && (
                    <p className="text-sm text-zinc-400 line-clamp-2 mt-2">
                      {(item as Category).description}
                    </p>
                  )}
                </div>
              </div>
            </Link>
          </motion.div>
          );
        })}
      </div>
    </section>
  );
};