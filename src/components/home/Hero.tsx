"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Award } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { HoverBorderGradient } from "../ui/hover-border-gradient";

const slides = [
  {
    id: 1,
    image: "/hero/img7.JPG",
    title: "Premium BOPP Granules",
    description:
      "Consistent quality for high-performance industrial applications.",
  },
  {
    id: 2,
    image: "/hero/img2.JPG",
    title: "Fresh PP Solutions",
    description: "Superior raw materials for durable plastic manufacturing.",
  },
  {
    id: 3,
    image: "/hero/img3.JPG",
    title: "Sustainable Recycling",
    description: "Converting plastic waste into high-quality recycled polymer.",
  },
  {
    id: 4,
    image: "/hero/img4.JPG",
    title: "Global Supply Chain",
    description:
      "Monthly production capacity of 1,200 tons for bulk requirements.",
  },
  {
    id: 5,
    image: "/hero/img5.JPG",
    title: "Precision Engineering",
    description: "Technical excellence in every granule we produce.",
  },
];

export default function HeroSlideshow() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right

  const paginate = useCallback((newDirection: number) => {
    setDirection(newDirection);
    setCurrentIndex(
      (prev) => (prev + newDirection + slides.length) % slides.length
    );
  }, []);

  useEffect(() => {
    const timer = setInterval(() => paginate(1), 6000);
    return () => clearInterval(timer);
  }, [paginate]);

  return (
    <section className="relative h-[75vh] md:h-[90vh] w-full overflow-hidden bg-zinc-950">
     

      {/* 2. Main Slider */}
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={currentIndex}
          custom={direction}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <Image
            src={slides[currentIndex].image}
            alt={slides[currentIndex].title}
            fill
            priority
            className="object-cover scale-105" // Slight scale to allow for parallax feel
          />

          {/* 3. The "Shadow/Vignette" Effect */}
          {/* Deep shadow from left for text readability and cinematic corners */}
          <div className="absolute inset-0 bg-linear-to-r from-black/80 via-black/20 to-transparent z-10" />
          <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-black/20 z-10" />

          {/* 4. Content Container */}
          <div className="absolute inset-0 z-20 flex items-center px-6 md:px-16 lg:px-24">
            <div className="max-w-2xl">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                <h2 className="text-bprimary font-bold text-sm md:text-base uppercase tracking-[0.3em] mb-4">
                  Polyfill industries
                </h2>
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-6">
                  {slides[currentIndex].title}
                </h1>
                <p className="text-zinc-300 text-lg md:text-xl max-w-lg leading-relaxed mb-8">
                  {slides[currentIndex].description}
                </p>

                <div className="flex gap-4">
                  <Link href="/categories">
                    <HoverBorderGradient
                      containerClassName="rounded-full"
                      as="button"
                      className=" bg-transparent  text-white flex items-center space-x-2"
                    >
                      <p>Explore Categories &rarr;</p>
                    </HoverBorderGradient>
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* 5. Modern Navigation Controls */}
      <div className="absolute bottom-8 right-6 md:right-12 z-40 flex items-center gap-6">
        {/* Slide Counter */}
        {/* <div className="hidden md:block text-white/50 font-mono text-sm">
          <span className="text-white text-lg font-bold">
            0{currentIndex + 1}
          </span>{" "}
          / 0{slides.length}
        </div> */}

        <div className="flex gap-2">
          <button
            onClick={() => paginate(-1)}
            className="p-3 md:p-4 rounded-full border border-white/20 text-white hover:bg-white hover:text-black transition-all backdrop-blur-sm"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={() => paginate(1)}
            className="p-3 md:p-4 rounded-full border border-white/20 text-white hover:bg-white hover:text-black transition-all backdrop-blur-sm"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* 6. Progress Bar (Bottom) */}
      {/* <div className="absolute bottom-0 left-0 w-full h-1 bg-white/10 z-40">
        <motion.div 
          key={currentIndex}
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 6, ease: "linear" }}
          className="h-full bg-bprimary"
        />
      </div> */}
    </section>
  );
}
