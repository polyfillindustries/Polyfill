import React from 'react'

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
      
      {/* Black Overlay */}
      <div 
        className="absolute top-0 left-0 w-full h-full bg-black"
        style={{ opacity: overlayOpacity }}
      />
      
      {/* Content */}
      <div className="relative z-10 h-full">
        {children}
      </div>
    </div>
  )
}
