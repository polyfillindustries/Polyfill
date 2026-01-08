"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Slide } from "@/types/slide";

const slides: Slide[] = [
  {
    id: 1,
    image: "/hero/img7.jpg",
    title: "Name 1",
    description: "",
  },
  {
    id: 2,
    image: "/hero/img2.jpg",
    title: "Name 2",
    description: "",
  },
  {
    id: 3,
    image: "/hero/img3.jpg",
    title: "Name 3",
    description: "",
  },
  {
    id: 4,
    image: "/hero/img4.jpg",
    title: "Name 4",
    description: "",
  },
  {
    id: 5,
    image: "/hero/img5.jpg",
    title: "Name 5",
    description: "",
  },
];

export default function HeroSlideshow() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  // Parallax scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const paginate = useCallback(
    (newDirection: number) => {
      if (isTransitioning) return;
      setIsTransitioning(true);
      setCurrentIndex(
        (prevIndex) =>
          (prevIndex + newDirection + slides.length) % slides.length
      );
      setTimeout(() => setIsTransitioning(false), 700);
    },
    [isTransitioning]
  );

  const goToSlide = useCallback(
    (index: number) => {
      if (isTransitioning || index === currentIndex) return;
      setIsTransitioning(true);
      setCurrentIndex(index);
      setTimeout(() => setIsTransitioning(false), 700);
    },
    [isTransitioning, currentIndex]
  );

  useEffect(() => {
    const timer = setInterval(() => {
      paginate(1);
    }, 5000);
    return () => clearInterval(timer);
  }, [paginate]);

  return (
    <div className="relative h-[60vh] sm:h-[70vh] md:h-[85vh] w-full overflow-hidden bg-black">
      {/* Render all slides, only show current one */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${
            index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
          style={{
            transform: `translateY(${scrollY * 0.5}px)`,
          }}
        >
          <Image
            src={slide.image}
            alt={slide.title}
            fill
            priority={index === 0}
            // quality={90}
            className="object-cover"
            sizes="100vw"
          />

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/20 z-10" />

          {/* Content Container */}
          <div className="absolute inset-0 z-20 flex h-full w-full items-end justify-center sm:justify-end p-4 sm:p-6 md:p-15">
            <div
              className={`w-full max-w-xs sm:max-w-sm bg-black/60 p-4 sm:p-6 mb-6 sm:mb-8 text-white backdrop-blur-md md:p-10 transition-all duration-700 ${
                index === currentIndex
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              <h1 className="text-lg sm:text-xl font-bold text-center leading-tight md:text-3xl">
                {slide.title}
              </h1>
              {slide.description && (
                <p className="mt-2 text-xs sm:text-sm text-gray-200 md:text-base">
                  {slide.description}
                </p>
              )}
            </div>
          </div>
        </div>
      ))}

      {/* Nav Arrows */}
      <div className="absolute inset-x-2 sm:inset-x-4 top-1/2 z-30 flex -translate-y-1/2 justify-between">
        <button
          className="group rounded-full bg-black/30 p-2 sm:p-3 text-white backdrop-blur-sm transition-all hover:bg-white hover:text-bprimary disabled:opacity-50"
          onClick={() => paginate(-1)}
          disabled={isTransitioning}
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-5 h-5 sm:w-7 sm:h-7" />
        </button>
        <button
          className="group rounded-full bg-black/30 p-2 sm:p-3 text-white backdrop-blur-sm transition-all hover:bg-white hover:text-bprimary disabled:opacity-50"
          onClick={() => paginate(1)}
          disabled={isTransitioning}
          aria-label="Next slide"
        >
          <ChevronRight className="w-5 h-5 sm:w-7 sm:h-7" />
        </button>
      </div>

      {/* Progress Indicators */}
      <div className="absolute bottom-4 sm:bottom-10 left-1/2 z-30 flex -translate-x-1/2 gap-2 sm:gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            disabled={isTransitioning}
            aria-label={`Go to slide ${index + 1}`}
            className={`h-1 transition-all duration-500 ${
              index === currentIndex ? "w-8 sm:w-12 bg-white" : "w-3 sm:w-4 bg-white/40"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
