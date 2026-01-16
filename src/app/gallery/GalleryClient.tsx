'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { X, ChevronLeft, ChevronRight, PanelRightClose, PanelRightOpen } from 'lucide-react'
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

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export default function GalleryClient({ images }: { images: GalleryImage[] }) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)
  const [isSidebarOpen, setIsSidebarOpen] = useState(true)

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

  return (
    <div className="w-full bg-white text-slate-900 min-h-screen">
      
      {/* TOGGLE BUTTON */}
      <button
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        className="fixed bottom-8 right-8 z-40 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-xl border border-slate-100 hover:bg-slate-50 transition-all active:scale-95"
        title={isSidebarOpen ? "Close Sidebar" : "Open Sidebar"}
      >
        {isSidebarOpen ? <PanelRightClose className="w-5 h-5" /> : <PanelRightOpen className="w-5 h-5" />}
      </button>

      <div className="relative flex px-3 md:px-6 lg:px-8 py-8 transition-all duration-500 ease-in-out">
        
        {/* MAIN IMAGES COLUMN */}
        <div className="flex-1 flex flex-col gap-8 md:gap-12">
          {images.map((image, index) => (
            <motion.div
              key={image._id}
              id={`main-image-${index}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              className="relative group cursor-zoom-in"
              onClick={() => setSelectedIndex(index)}
            >
              <div className="relative aspect-3/4 md:aspect-4/5 lg:aspect-16/10 w-full overflow-hidden rounded-3xl md:rounded-[2.5rem] shadow-lg hover:shadow-2xl transition-all duration-500">
                <Image
                  src={image.fullUrl}
                  alt={image.alt || image.title || 'Gallery image'}
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-[1.02]"
                  sizes="(max-width: 768px) 85vw, (max-width: 1200px) 80vw, 1200px"
                  priority={index < 2}
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-500 flex items-end p-6 lg:p-10">
                  <div className="text-white opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                    {image.title && <p className="font-semibold text-base md:text-lg lg:text-xl tracking-wide uppercase">{image.title}</p>}
                    {image.date && (
                      <p className="text-xs md:text-sm lg:text-base font-light text-white/90 mt-2">
                        {new Date(image.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* COLLAPSIBLE SIDEBAR */}
        <AnimatePresence initial={false}>
          {isSidebarOpen && (
            <motion.div
              initial={{ width: 0, opacity: 0, marginLeft: 0 }}
              animate={{ width: "auto", opacity: 1, marginLeft: 24 }}
              exit={{ width: 0, opacity: 0, marginLeft: 0 }}
              transition={{ duration: 0.4, ease: [0.32, 0.72, 0, 1] }}
              className="sticky top-8 h-[calc(100vh-4rem)] overflow-hidden shrink-0"
            >
              <div className="w-16 md:w-24 h-full overflow-y-auto scrollbar-hide flex flex-col gap-4 md:gap-6 pr-2">
                {images.map((image, index) => (
                  <div
                    key={`thumb-${image._id}`}
                    className={cn(
                      "relative aspect-3/4 rounded-xl md:rounded-2xl overflow-hidden cursor-pointer",
                      "opacity-60 hover:opacity-100 transition-all duration-300 shadow-sm hover:shadow-md shrink-0"
                    )}
                    onClick={(e) => {
                      e.stopPropagation()
                      document.getElementById(`main-image-${index}`)?.scrollIntoView({ behavior: 'smooth', block: 'center' })
                    }}
                  >
                    <Image
                      src={image.thumbnailUrl}
                      alt="Thumbnail"
                      fill
                      className="object-cover grayscale hover:grayscale-0 transition-all"
                      sizes="100px"
                    />
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* --- LIGHTBOX MODAL --- */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-white/95 backdrop-blur-md"
            onClick={() => setSelectedIndex(null)}
          >
            <button onClick={() => setSelectedIndex(null)} className="absolute right-6 top-6 z-50 p-2 text-gray-800 hover:text-gray-500">
              <X className="h-8 w-8" />
            </button>

            {selectedIndex > 0 && (
              <button onClick={handlePrev} className="absolute left-6 top-1/2 z-50 -translate-y-1/2 p-4 text-gray-800 hover:text-gray-500">
                <ChevronLeft className="h-10 w-10" />
              </button>
            )}

            {selectedIndex < images.length - 1 && (
              <button onClick={handleNext} className="absolute right-6 top-1/2 z-50 -translate-y-1/2 p-4 text-gray-800 hover:text-gray-500">
                <ChevronRight className="h-10 w-10" />
              </button>
            )}

            <motion.div
              key={selectedIndex}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative h-[85vh] w-[90vw]"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={images[selectedIndex].fullUrl}
                alt="Gallery full view"
                fill
                className="object-contain"
                quality={100}
                priority
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}