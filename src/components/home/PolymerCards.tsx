"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { HoverBorderGradient } from "../ui/hover-border-gradient";

const items = [
  { 
    img: "img1.jpg", 
    title: "Light Grey PP", 
    href: "/products/light-grey-pp" 
  },
  { 
    img: "img2.jpg", 
    title: "Silver Gol", 
    href: "/products/silver-gol" 
  },
  { 
    img: "img3.jpg", 
    title: "Milky Gol", 
    href: "/products/milky-gol" 
  },
  { 
    img: "img4.jpg", 
    title: "Natural Gol", 
    href: "/products/natural-gol" 
  },
];

export const PolymerCards = () => {
  return (
    <section className="w-full py-12 px-4 md:px-10 bg-white">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
        <div className="space-y-2">
          <h2 className="text-bprimary font-bold tracking-widest uppercase text-sm">
            Featured Materials
          </h2>
          <h3 className="text-3xl md:text-5xl font-bold text-zinc-900 tracking-tighter">
            Our Polymer <span className="text-zinc-400 font-light">Showcase</span>
          </h3>
        </div>
        
        <Link href="/categories" className="hidden md:block">
          <HoverBorderGradient
            containerClassName="rounded-full"
            as="button"
            className="bg-zinc-950 text-white flex hover:text-baccent items-center space-x-2 px-6 py-2"
          >
            <span>View All Categories</span>
            <ArrowUpRight className="w-4 h-4" />
          </HoverBorderGradient>
        </Link>
      </div>

      {/* Grid Container */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-1 h-full">
        {items.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
          >
            <Link
              href={item.href}
              className="group relative block aspect-4/5 md:aspect-3/4 overflow-hidden rounded-xl md:rounded-3xl bg-zinc-100 border border-zinc-200"
            >
              {/* Image with subtle parallax scale */}
              <Image
                src={`/products/${item.img}`}
                alt={item.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                priority={i < 2}
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              />

              {/* Multi-layered Overlays */}
              <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/20 to-transparent opacity-60 transition-opacity duration-500 group-hover:opacity-80" />
              
              {/* Hover Glow Effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(circle_at_center,var(--tw-gradient-from)_0%,transparent_70%)] from-bprimary/10" />

              {/* Content Container */}
              <div className="absolute inset-0 md:p-6 pb-14 p-3 flex flex-col justify-end">
                <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                 
                  <h3 className="text-md md:text-2xl font-bold text-white -mb-5 md:mb-2 leading-tight">
                    {item.title}
                  </h3>
                
                </div>
              </div>

              {/* Corner Icon */}
              <div className="absolute top-4 right-4 p-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white opacity-0 group-hover:opacity-100 transition-all duration-500 -translate-y-2 group-hover:translate-y-0">
                <ArrowUpRight className="w-5 h-5" />
              </div>
            </Link>
          </motion.div>
        ))}
      </div>

      {/* Mobile-only Explore Button */}
      <div className="mt-8 flex justify-center md:hidden">
        <Link href="/categories">
          <HoverBorderGradient
            containerClassName="rounded-full"
            as="button"
            className="bg-zinc-950 text-white flex items-center space-x-2 px-8 py-3"
          >
            <span>Explore all Polymers</span>
          </HoverBorderGradient>
        </Link>
      </div>
    </section>
  );
};