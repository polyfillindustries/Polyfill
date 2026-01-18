'use client'

import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import type { Hero2Props } from '@/types'

export const Hero2 = ({ 
  video, 
  overlayOpacity = 0.5, 
  className = '',
  children 
}: Hero2Props) => {
  const mobileVideo = typeof video === 'string' ? video : video.mobile;
  const desktopVideo = typeof video === 'string' ? video : video.desktop;
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const videoY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const videoScale = useTransform(scrollYProgress, [0, 1], [1.2, 1]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "-10%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <div 
      ref={containerRef}
      className={`relative w-full h-[88vh] overflow-hidden ${className}`}
    >
      <motion.div 
        style={{ y: videoY, scale: videoScale }}
        className="absolute top-0 left-0 w-full h-full"
      >
        
        <video
          autoPlay
          loop
          muted
          playsInline
          poster="/hero-poster.png"
          className="w-full h-full object-cover md:hidden"
        >
          <source src={mobileVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        
        <video
          autoPlay
          loop
          muted
          playsInline
          poster="/hero-poster.png"
          className="hidden md:block w-full h-full object-cover"
        >
          <source src={desktopVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </motion.div>
      
      <div 
        className="absolute top-0 left-0 w-full h-full bg-black z-[1]"
        style={{ opacity: overlayOpacity }}
      />

      <motion.div
        initial={{ opacity: 0.5 }}
        animate={{ opacity: 0 }}
        transition={{ 
          duration: 1.8, 
          ease: [0.43, 0.13, 0.23, 0.96],
          delay: 0.5 
        }}
        className="absolute inset-0 bg-black z-[2] pointer-events-none"
      />
      
      <motion.div 
        style={{ y: contentY, opacity: contentOpacity }}
        className="relative z-10 h-full"
      >
        {children}
      </motion.div>
    </div>
  )
}