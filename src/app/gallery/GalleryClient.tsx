'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

interface GalleryImage {
  _id: string
  title?: string
  alt?: string
  date?: string
  thumbnailUrl: string
  fullUrl: string
}

interface GalleryClientProps {
  images: GalleryImage[]
}

// --- Utility for Tailwind classes ---
function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// --- Types ---
interface GalleryImage {
  _id: string
  title?: string
  alt?: string
  date?: string
  thumbnailUrl: string
  fullUrl: string
}

// --- Main Component ---
export default function GalleryClient({ images }: { images: GalleryImage[] }) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)
  const [activeIndex, setActiveIndex] = useState<number>(0)

  // Navigation handlers
  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation()
    if (selectedIndex !== null && selectedIndex < images.length - 1) {
      setSelectedIndex(selectedIndex + 1)
    }
  }

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation()
    if (selectedIndex !== null && selectedIndex > 0) {
      setSelectedIndex(selectedIndex - 1)
    }
  }

  // Track which image is in view
  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.id.split('-')[2])
            setActiveIndex(index)
          }
        })
      },
      { threshold: 0.5, rootMargin: '-20% 0px -20% 0px' }
    )

    images.forEach((_, index) => {
      const element = document.getElementById(`main-image-${index}`)
      if (element) observer.observe(element)
    })

    return () => observer.disconnect()
  }, [images])

  return (
    <div className="w-full bg-white text-slate-900 min-h-screen">
      
      {/* MASTER LAYOUT GRID 
        - Mobile & Desktop: Main images + Sidebar thumbnails
        - Main column scrolls naturally, sidebar is independent
      */}
      <div className="relative flex gap-3 md:gap-6 px-3 md:px-6 lg:px-8 py-8">
        
        {/* MAIN IMAGES COLUMN (Left - Scrollable) */}
        <div className="flex-1 flex flex-col gap-8 md:gap-12">
        
          {images.map((image, index) => (
            <motion.div
              key={image._id}
              id={`main-image-${index}`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="relative group cursor-zoom-in"
              onClick={() => setSelectedIndex(index)}
            >
              {/* The Image Container */}
              <div className="relative aspect-3/4 md:aspect-4/5 lg:aspect-16/10 w-full overflow-hidden rounded-3xl md:rounded-[2.5rem] shadow-lg hover:shadow-2xl transition-all duration-500">
                <Image
                  src={image.fullUrl}
                  alt={image.alt || image.title || 'Gallery image'}
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-[1.02]"
                  sizes="(max-width: 768px) 85vw, (max-width: 1200px) 80vw, 1200px"
                  priority={index < 2}
                />
                
                {/* Hover Overlay with Info */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-500 flex items-end p-6 lg:p-10">
                  <div className="text-white opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                    {image.title && (
                      <p className="font-semibold text-base md:text-lg lg:text-xl tracking-wide uppercase drop-shadow-lg">
                        {image.title}
                      </p>
                    )}
                    {image.date && (
                      <p className="text-xs md:text-sm lg:text-base font-light text-white/90 mt-2">
                        {new Date(image.date).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric'
                        })}
                      </p>
                    )}
                  </div>
                </div>
              </div>

              {/* Mobile: Caption below image */}
              <div className="md:hidden mt-4 px-2">
                {image.title && (
                  <p className="text-sm font-semibold text-gray-900 tracking-wide leading-tight">
                    {image.title}
                  </p>
                )}
                {image.date && (
                  <p className="text-xs text-gray-500 mt-1.5 font-light">
                    {new Date(image.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'short',
                      day: 'numeric'
                    })}
                  </p>
                )}
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* SIDEBAR THUMBNAILS (Right - Fixed/Sticky, Independent Scroll) */}
        <div className="sticky top-8 h-[calc(100vh-4rem)] overflow-y-auto flex flex-col gap-1 w-16 md:w-20 lg:w-24 shrink-0 scrollbar-hide py-2">
          {images.map((image, index) => (
            <div
              key={`thumb-${image._id}`}
              className={cn(
                "relative aspect-3/4 overflow-hidden cursor-pointer transition-all duration-300 border-2",
                activeIndex === index 
                  ? "border-black scale-100 opacity-100 shadow-lg" 
                  : "border-transparent opacity-50 hover:opacity-80 hover:scale-[1.02]"
              )}
              onClick={(e) => {
                e.stopPropagation()
                const mainImage = document.getElementById(`main-image-${index}`)
                mainImage?.scrollIntoView({ behavior: 'smooth', block: 'center' })
              }}
            >
              <Image
                src={image.thumbnailUrl}
                alt={image.alt || "Gallery thumbnail"}
                fill
                className="object-cover"
                sizes="100px"
              />
              {/* Active indicator */}
              {activeIndex === index && (
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-black" />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* --- LIGHTBOX MODAL --- */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-white/95 backdrop-blur-sm"
            onClick={() => setSelectedIndex(null)}
          >
            {/* Close Button */}
            <button 
              onClick={() => setSelectedIndex(null)}
              className="absolute right-6 top-6 z-50 p-2 text-gray-800 transition-colors hover:text-gray-500"
              aria-label="Close gallery"
            >
              <X className="h-8 w-8" />
            </button>

            {selectedIndex > 0 && (
              <button
                onClick={handlePrev}
                className="absolute left-6 top-1/2 z-50 -translate-y-1/2 p-2 md:p-4 text-gray-800 transition-colors hover:text-gray-500"
                aria-label="Previous image"
              >
                <ChevronLeft className="h-10 w-10" />
              </button>
            )}

            {selectedIndex < images.length - 1 && (
              <button
                onClick={handleNext}
                className="absolute right-6 top-1/2 z-50 -translate-y-1/2 p-2 md:p-4 text-gray-800 transition-colors hover:text-gray-500"
                aria-label="Next image"
              >
                <ChevronRight className="h-10 w-10" />
              </button>
            )}

            {/* Main Image */}
            <motion.div
              key={selectedIndex}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="relative h-[90vh] w-[90vw] p-4"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={images[selectedIndex].fullUrl}
                alt={images[selectedIndex].alt || 'Gallery full view'}
                fill
                className="object-contain"
                quality={100}
                priority
                sizes="90vw"
              />
            </motion.div>

            {/* Caption */}
            {(images[selectedIndex].title || images[selectedIndex].date) && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="absolute bottom-6 left-0 right-0 text-center pointer-events-none"
              >
                <div className="inline-block bg-white/80 px-6 py-3 backdrop-blur-md rounded-full shadow-sm">
                  <p className="text-sm font-medium text-gray-900">
                    {images[selectedIndex].title}
                    {images[selectedIndex].title && images[selectedIndex].date && (
                      <span className="mx-3 text-gray-400">•</span>
                    )}
                    {images[selectedIndex].date &&
                      new Date(images[selectedIndex].date).toLocaleDateString()}
                  </p>
                </div>
              </motion.div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
