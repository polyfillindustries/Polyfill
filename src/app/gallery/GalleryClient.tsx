'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import {
  X,
  ChevronLeft,
  ChevronRight,
  PanelRightClose,
  PanelRightOpen,
} from 'lucide-react'
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
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

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
    <div className="w-full bg-black min-h-screen">
      {/* TOGGLE BUTTON */}
      <button
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        className="fixed bottom-27 md:bottom-25 right-3.5 md:right-7 z-40 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-xl border border-slate-100 hover:bg-slate-50 transition-all active:scale-95"
      >
        {isSidebarOpen ? (
          <PanelRightClose className="w-5 h-5" />
        ) : (
          <PanelRightOpen className="w-5 h-5" />
        )}
      </button>

      <div className="relative flex px-3 md:px-6 lg:px-8 py-8">
        {/* MAIN COLUMN */}
        <div className="flex-1 flex flex-col items-center gap-16 md:gap-24">
          {images.map((image, index) => (
            <motion.div
              key={image._id}
              id={`main-image-${index}`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="w-full max-w-4xl cursor-pointer"
              onClick={() => setSelectedIndex(index)}
            >
              {/* IMAGE + DESKTOP OVERLAY */}
              <div className="w-full">
                <div className="relative aspect-16/10 w-full overflow-hidden rounded-2xl border border-white/5 bg-white/5 transition-all duration-700 group hover:border-white/20 hover:shadow-[0_0_50px_-12px_rgba(59,130,246,0.3)]">
                  <Image
                    src={image.fullUrl}
                    alt={image.alt || image.title || 'Gallery Image'}
                    fill
                    className="object-cover transition-all duration-1000 scale-[1.05] hover:scale-100 brightness-90 hover:brightness-110"
                    sizes="(max-width: 1400px) 80vw, 1000px"
                    priority={index < 2}
                  />

                  {/* DESKTOP OVERLAY ONLY */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 hidden md:flex hover:opacity-100 transition-opacity duration-500 flex-col justify-end p-8">
                    <motion.div
                      initial={{ y: 20, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      className="backdrop-blur-md bg-white/5 border border-white/10 p-6 rounded-xl w-fit"
                    >
                      {image.title && (
                        <h3 className="font-medium text-2xl text-white">
                          {image.title}
                        </h3>
                      )}
                      {image.date && (
                        <p className="text-xs font-mono text-white/50 mt-2">
                          {new Date(image.date)
                            .toLocaleDateString('en-US', {
                              year: 'numeric',
                              month: 'short',
                              day: '2-digit',
                            })
                            .toUpperCase()}
                        </p>
                      )}
                    </motion.div>
                  </div>

                  {/* CORNERS */}
                  <div className="absolute top-4 right-4 h-8 w-8 border-t border-r border-white/20" />
                  <div className="absolute bottom-4 left-4 h-8 w-8 border-b border-l border-white/20" />
                </div>

                {/* MOBILE TITLE + DATE */}
                <div className="mt-4 px-1 md:hidden">
                  {image.title && (
                    <h3 className="text-white text-lg font-medium tracking-tight">
                      {image.title}
                    </h3>
                  )}
                  {image.date && (
                    <p className="text-xs text-white/60 mt-1">
                      {new Date(image.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'short',
                        day: 'numeric',
                      })}
                    </p>
                  )}
                 
                  {/* <div className='text-white'/> */}
                </div>
                 <hr className='border-zinc-800 md:hidden border-t-2 my-2 mb-3' />
              </div>
            </motion.div>
          ))}
        </div>

        {/* SIDEBAR */}
        <AnimatePresence>
          {isSidebarOpen && (
            <motion.div initial={{ width: 0, opacity: 0, marginLeft: 0 }} animate={{ width: "auto", opacity: 1, marginLeft: 24 }} exit={{ width: 0, opacity: 0, marginLeft: 0 }} transition={{ duration: 0.4, ease: [0.32, 0.72, 0, 1] }} className="sticky top-8 h-[calc(100vh-4rem)] overflow-hidden shrink-0" >
             <div className="w-16 md:w-54 h-full p-1 md:p-5 bg-bgray overflow-y-auto scrollbar-hide flex flex-col gap-4 md:gap-6 pr-2">
                {images.map((image, index) => (
                  <div
                    key={image._id}
                  className={cn( "relative aspect-3/4 rounded-xl md:rounded-2xl overflow-hidden cursor-pointer", "opacity-60 hover:opacity-100 transition-all duration-300 shadow-sm hover:shadow-md shrink-0" )}
                    onClick={() =>
                      document
                        .getElementById(`main-image-${index}`)
                        ?.scrollIntoView({
                          behavior: 'smooth',
                          block: 'center',
                        })
                    }
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

      {/* LIGHTBOX (UNCHANGED) */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95"
            onClick={() => setSelectedIndex(null)}
          >
            <button className="absolute right-10 top-10 p-4 bg-white/5 rounded-full">
              <X className="h-6 w-6 text-white" />
            </button>

            <motion.div
              className="relative h-[70vh] w-[80vw] max-w-6xl"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={images[selectedIndex].fullUrl}
                alt="Detailed View"
                fill
                className="object-contain"
              />
              <div className="absolute -bottom-20 left-0 border-l-2 border-blue-500 pl-6"> 
                <h4 className="text-2xl font-light text-white uppercase tracking-tighter">{images[selectedIndex].title}</h4> 
                <p className="text-blue-400 font-mono text-xs mt-1">{images[selectedIndex].date}</p> </div>
            </motion.div>

            <div className="absolute inset-x-10 top-1/2 -translate-y-1/2 flex justify-between">
              <button
                onClick={handlePrev}
                disabled={selectedIndex === 0}
                className="p-6 bg-white/5 rounded-full disabled:opacity-0"
              >
                <ChevronLeft className="h-8 w-8 text-white" />
              </button>
              <button
                onClick={handleNext}
                disabled={selectedIndex === images.length - 1}
                className="p-6 bg-white/5 rounded-full disabled:opacity-0"
              >
                <ChevronRight className="h-8 w-8 text-white" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
