'use client'

import React from 'react'
import { motion } from 'framer-motion'

interface Hero2Props {
  video: string;
  overlayOpacity?: number;
  className?: string;
  children?: React.ReactNode;
}

export const Hero2 = ({ 
  video, 
  overlayOpacity = 0.5, 
  className = '',
  children 
}: Hero2Props) => {
  return (
    <div className={`relative w-full h-[88vh] overflow-hidden ${className}`}>
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      
      {/* Base Static Overlay */}
      <div 
        className="absolute top-0 left-0 w-full h-full bg-black z-[1]"
        style={{ opacity: overlayOpacity }}
      />

      {/* Reveal Shadow (Animates away) */}
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        transition={{ 
          duration: 1.8, 
          ease: [0.43, 0.13, 0.23, 0.96],
          delay: 0.5 
        }}
        className="absolute inset-0 bg-black z-[2] pointer-events-none"
      />
      
      {/* Content */}
      <div className="relative z-10 h-full">
        {children}
      </div>
    </div>
  )
}