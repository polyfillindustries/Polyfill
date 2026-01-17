import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import GalleryClient from "./GalleryClient";
import Gallery from "./Gallery";
import type { GalleryImage, ProcessedGalleryImage } from '@/types';

async function getGalleryImages(): Promise<GalleryImage[]> {
  const query = `*[_type == "galleryImage"] | order(date desc) {
    _id,
    title,
    image,
    date
  }`;

  return client.fetch(query);
}

export default async function GalleryPage() {
  const images = await getGalleryImages();

  // Process images on server to generate URLs
  const processedImages: ProcessedImage[] = images
    .filter((item) => item.image?.asset?._ref)
    .map((item) => ({
      _id: item._id,
      title: item.title,
      alt: item.image.alt,
      date: item.date,
      thumbnailUrl: urlFor(item.image).width(1000).quality(95).url(),
      fullUrl: urlFor(item.image).width(1920).quality(95).url(),
    }));

  return (
    <div className="bg-black min-h-screen p-3">
      {/* Option 1 */}
      <div className="md:px-12 py-2 md:pt-10 mb-5">
        <span className="text-blue-500 font-mono font-medium text-[15px] tracking-[0.5em] uppercase block mb-4">
          Material Archives
        </span>
        <h1 className="text-4xl md:text-6xl text-white font-semibold tracking-tighter uppercase">
          Polyfill <span className="text-zinc-400 italic">Gallery</span>
        </h1>
      </div>
      <div>
        <GalleryClient images={processedImages} />
      </div>

      {/* Option 2 */}
      {/* <Gallery images={processedImages}/> */}
    </div>
    // <div className="min-h-screen bg-white">
    //   <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
    //     {/* Header */}
    //     <div className="mb-16 text-center">
    // <h1 className='text-white font-inter md:mt-10 md:ml-20 font-bold md:text-5xl'>GALLERY</h1>
    //       <h1 className="mb-6 text-4xl font-light tracking-tight text-slate-900 sm:text-5xl font-serif">
    //         Captured Moments
    //       </h1>
    //       <p className="mx-auto max-w-2xl text-lg font-light text-slate-500">
    //         A visual journey through our processes and creations.
    //       </p>
    //     </div>

    //     {/* Gallery Grid */}
    //     <GalleryClient images={processedImages} />
    //   </div>
    // </div>
  );
}
