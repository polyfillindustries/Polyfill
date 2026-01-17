'use client'

import React, { useState, useRef } from 'react'
import Image from 'next/image'
import { X, ChevronLeft, ChevronRight, PanelBottomClose, PanelBottomOpen, Microscope } from 'lucide-react'
import { motion, AnimatePresence, useScroll, useTransform, useSpring } from 'framer-motion'
import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'
import type { ProcessedGalleryImage } from '@/types'

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export default function Gallery({ images }: { images: ProcessedGalleryImage[] }) {
}

const ParallaxImage = ({ image, index, setSelectedIndex }: { 
  image: GalleryImage, 
  index: number, 
  setSelectedIndex: (i: number) => void 
}) => {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })

  // Smooth parallax movements
  const y = useTransform(scrollYProgress, [0, 1], [-60, 60])
  const textY = useTransform(scrollYProgress, [0, 1], [40, -40])
  const springY = useSpring(y, { stiffness: 100, damping: 30 })
  const springTextY = useSpring(textY, { stiffness: 100, damping: 30 })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="relative group cursor-crosshair w-full max-w-4xl px-4 md:px-0"
      onClick={() => setSelectedIndex(index)}
    >
      <div className="relative aspect-[4/5] md:aspect-[16/10] w-full overflow-hidden rounded-2xl border border-white/5 bg-white/5 transition-all duration-700 group-hover:border-blue-500/30 group-hover:shadow-[0_0_50px_-12px_rgba(59,130,246,0.2)]">
        
        {/* Parallax Image Content */}
        <motion.div style={{ y: springY }} className="absolute -inset-y-32 inset-x-0">
          <Image
            src={image.fullUrl}
            alt={image.alt || image.title || 'Polymer Sample'}
            fill
            className="object-cover scale-[1.15] filter brightness-75 group-hover:brightness-105 transition-all duration-1000"
            sizes="(max-width: 768px) 100vw, (max-width: 1400px) 70vw, 1000px"
            priority={index < 2}
          />
        </motion.div>

        {/* Glassmorphism Overlay with Parallax Text */}
        <div className="absolute inset-0 bg-linear-to-t from-black/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6 md:p-12">
          <motion.div 
            style={{ y: springTextY }}
            className="backdrop-blur-xl bg-white/5 border border-white/10 p-5 md:p-8 rounded-2xl inline-block w-fit"
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="h-px w-6 md:w-12 bg-blue-500" />
            </div>
            {image.title && <h3 className="font-light text-md md:text-3xl tracking-tight text-white uppercase">{image.title}</h3>}
            {image.date && (
              <p className="text-[10px] md:text-xs font-mono text-white/40 mt-3 tracking-widest">
                {new Date(image.date).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: '2-digit' }).toUpperCase()}
              </p>
            )}
          </motion.div>
        </div>

        {/* Technical Corner Accents */}
        <div className="absolute top-6 right-6 h-4 w-4 border-t-2 border-r-2 border-white/10 group-hover:border-blue-500/50 transition-colors" />
        <div className="absolute bottom-6 left-6 h-4 w-4 border-b-2 border-l-2 border-white/10 group-hover:border-blue-500/50 transition-colors" />
      </div>
    </motion.div>
  )
}

export default function GalleryClient({ images }: { images: GalleryImage[] }) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation()
    if (selectedIndex !== null && selectedIndex < images.length - 1) setSelectedIndex(selectedIndex + 1)
  }

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation()
    if (selectedIndex !== null && selectedIndex > 0) setSelectedIndex(selectedIndex - 1)
  }

  return (
    <div className="w-full bg-[#030303] text-white min-h-screen selection:bg-blue-500/30 overflow-x-hidden">
      
      {/* FLOATING TOGGLE - Adaptive Icon */}
      <button
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        className="fixed bottom-8 right-8 z-[70] flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-600/10 backdrop-blur-2xl border border-blue-500/20 hover:bg-blue-500/20 transition-all active:scale-90 shadow-[0_0_20px_rgba(37,99,235,0.1)]"
      >
        {isSidebarOpen ? <PanelBottomClose className="w-6 h-6" /> : <PanelBottomOpen className="w-6 h-6" />}
      </button>

      <div className="max-w-[1400px] mx-auto relative flex flex-col items-center px-4 md:px-12 py-20 md:py-32 gap-24">
        
        {/* GALLERY INTRO TEXT - With Parallax Scroll Reveal */}
        <motion.div 
          initial={{ opacity: 0, filter: 'blur(10px)' }}
          whileInView={{ opacity: 1, filter: 'blur(0px)' }}
          className="text-center mb-12"
        >
          <span className="text-blue-500 font-mono text-[10px] tracking-[0.5em] uppercase block mb-4">Material Archives</span>
          <h1 className="text-4xl md:text-6xl font-extralight tracking-tighter uppercase">Polymer <span className="text-white/30 italic">Structures</span></h1>
        </motion.div>

        {/* MAIN FEED */}
        {/* <div className="w-full flex flex-col items-center gap-20 md:gap-48">
          {images.map((image, index) => (
            <ParallaxImage 
              key={image._id} 
              image={image} 
              index={index} 
              setSelectedIndex={setSelectedIndex} 
            />
          ))}
        </div> */}

        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 md:gap-10 px-4 md:px-0">
  {images.map((image, index) => (
    <div key={image._id} id={`main-image-${index}`}>
       <ParallaxImage 
         image={image} 
         index={index} 
         setSelectedIndex={setSelectedIndex} 
       />
    </div>
  ))}
</div>
        
        {/* BOTTOM HORIZONTAL THUMBNAIL BAR (Mobile & Desktop) */}
        <AnimatePresence>
          {isSidebarOpen && (
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 100, opacity: 0 }}
              className="fixed bottom-0 left-0 right-0 h-32 bg-black/80 backdrop-blur-3xl border-t border-white/5 z-[60] flex items-center px-8 overflow-x-auto scrollbar-hide gap-6 shadow-[0_-20px_50px_rgba(0,0,0,0.5)]"
            >
              {images.map((image, index) => (
                <motion.div
                  key={`thumb-${image._id}`}
                  whileHover={{ scale: 1.1, y: -5 }}
                  className="relative aspect-square h-20 rounded-xl overflow-hidden cursor-pointer border-2 border-white/5 hover:border-blue-500 transition-all shrink-0"
                  onClick={() => {
                    document.getElementById(`main-image-${index}`)?.scrollIntoView({ behavior: 'smooth', block: 'center' })
                  }}
                >
                  <Image src={image.thumbnailUrl} alt="Thumb" fill className="object-cover grayscale hover:grayscale-0 transition-all" />
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* LIGHTBOX */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/98 backdrop-blur-3xl"
            onClick={() => setSelectedIndex(null)}
          >
            <button className="absolute right-8 top-8 p-4 bg-white/5 rounded-full hover:bg-white/10 transition-colors">
              <X className="h-6 w-6 text-white" />
            </button>

            {/* Nav Arrows */}
            <div className="absolute inset-x-6 md:inset-x-12 top-1/2 -translate-y-1/2 flex justify-between pointer-events-none">
              <button onClick={handlePrev} className="p-4 md:p-8 bg-white/5 rounded-full hover:bg-blue-500/20 pointer-events-auto transition-all disabled:opacity-10">
                <ChevronLeft className="h-8 w-8 text-white" />
              </button>
              <button onClick={handleNext} className="p-4 md:p-8 bg-white/5 rounded-full hover:bg-blue-500/20 pointer-events-auto transition-all disabled:opacity-10">
                <ChevronRight className="h-8 w-8 text-white" />
              </button>
            </div>

            <motion.div
              key={selectedIndex}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative h-[65vh] md:h-[75vh] w-[90vw] max-w-6xl"
              onClick={(e) => e.stopPropagation()}
            >
              <Image src={images[selectedIndex].fullUrl} alt="Detail" fill className="object-contain" quality={100} />
              
              <div className="absolute -bottom-24 left-0 border-l-4 border-blue-600 pl-8">
                 <h4 className="text-3xl md:text-5xl font-extralight text-white uppercase tracking-tighter">{images[selectedIndex].title}</h4>
                 <div className="flex gap-4 items-center mt-3">
                    {/* <div className="h-1 w-1 rounded-full bg-white/20" /> */}
                    <p className="text-white/40 font-mono text-xs">{images[selectedIndex].date}</p>
                 </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}