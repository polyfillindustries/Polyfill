import Image from "next/image";
import Link from "next/link";
import React from "react";
import AnimatedHeading from "./AnimatedHeadings";
import { HoverBorderGradient } from "./ui/hover-border-gradient";

const items = [
  { img: "img1.jpg", title: "Light grey PP", href: "/products/" },
  { img: "img2.jpg", title: "Silver Gol", href: "/products/" },
  { img: "img3.jpg", title: "Milky Gol", href: "/products/" },
  { img: "img4.jpg", title: "Natural Gol", href: "/products/" },
];

export const PolymerCards = () => {
  return (
    <section className="w-full   min-h-[85vh] py-12 md:pb-20">
      {/* Grid */}
      <div className="grid h-[75vh] grid-cols-2  md:grid-cols-2 md:grid-rows-2 font-inter">
        {items.map((item, i) => (
          <Link
            key={i}
            href={item.href}
            aria-label={`Open ${item.title}`}
            className="
              group relative block w-full h-full overflow-hidden bg-black
              focus:outline-none focus:ring-2 focus:ring-white/60
            "
          >
            {/* Image */}
            <Image
              src={`/products/${item.img}`}
              alt={item.title}
              fill
              sizes="(max-width: 770px) 100vw, 50vw"
              priority={i < 2}
              className="
                object-cover object-bottom 
                transition-transform duration-700 ease-out
                group-hover:scale-110 bg-black
              "
            />

            {/* Overlay */}
            <div
              className="
                absolute inset-0
                bg-linear-to-t from-black/80 via-black/40 to-transparent
                opacity-70 transition-opacity duration-300
                group-hover:opacity-100
              "
            />

            {/* Title */}
            <div
              className="
                absolute bottom-0 left-0 w-full p-6 text-white
                translate-y-2 opacity-90
                transition-all duration-300
                group-hover:translate-y-0 group-hover:opacity-100
              "
            >
              <h3 className="text-lg font-semibold tracking-wide">
                {item.title}
              </h3>
            </div>
          </Link>
        ))}
      </div>

      {/* Explore More */}
      <div className="bg-bgray md:py-8 py-4 sm:text-md flex items-center justify-center text-baccent text-center">
        <Link href="/products">
        <HoverBorderGradient
        containerClassName="rounded-full"
        as="button"
        className="dark:bg-black  text-white flex items-center space-x-2"
      >
       
       <p>Explore more Polymers &rarr;</p>
      </HoverBorderGradient>
         
        </Link>
      </div>
    </section>
  );
};
