'use client';
import { TimelineItem } from '@/types/timeline';
import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import AnimatedHeading from './AnimatedHeadings';


export const timelineData: TimelineItem[] = [
  {
    year: "2010",
    title: "Foundation & Vision",
    description: "Shakti Polymers was established with a vision to revolutionize polymer manufacturing through sustainable practices and innovation.",
    // image: "/images/timeline/2010.jpg" // Optional
  },
  {
    year: "2015",
    title: "Expansion & Growth",
    description: "Expanded our production capacity by 300% and introduced advanced recycling technologies, setting new industry standards.",
    // image: "/images/timeline/2015.jpg"
  },
  {
    year: "2018",
    title: "Innovation Hub",
    description: "Launched our state-of-the-art R&D facility, focusing on eco-friendly polymer solutions and breakthrough material science.",
    // image: "/images/timeline/2018.jpg"
  },
  {
    year: "2021",
    title: "Global Recognition",
    description: "Received international certifications and partnerships with leading automotive and medical device manufacturers.",
    // image: "/images/timeline/2021.jpg"
  },
  {
    year: "2024",
    title: "Sustainable Future",
    description: "Achieved 100% renewable energy operations and launched our circular economy initiative for zero-waste manufacturing.",
    // image: "/images/timeline/2024.jpg"
  }
];




const Timeline = () => {

  const containerRef = useRef<HTMLDivElement>(null);
  // Track scroll progress for the entire timeline section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  // Smooth out the scroll progress for a more fluid animation
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
   <section ref={containerRef} className="w-full bg-black py-16 md:py-24 lg:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-24">
          <AnimatedHeading 
            level={2} 
            variant="gradient-underline"
            className="text-white mb-4"
          >
            Our Journey
          </AnimatedHeading>
          <p className="text-white/70 text-lg md:text-xl max-w-3xl mx-auto">
            Decades of innovation, excellence, and sustainable growth
          </p>
        </div>

        {/* Timeline Items Container */}
        <div className="relative">
          
          {/* --- DESKTOP SCROLL LINE --- */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-white/10" />
          
          {/* Animated Progress Line (Desktop) */}
          <motion.div 
            style={{ scaleY, originY: 0 }}
            className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-linear-to-b from-bdarkblue via-bprimary to-baccent z-0"
          />

          {/* Floating Circle "Head" (Desktop) */}
          {/* <motion.div
             style={{ 
               top: useTransform(scrollYProgress, [0, 1], ["0%", "100%"]),
               x: "-50%" 
             }}
             className="hidden md:block absolute left-1/2 w-4 h-4 rounded-full bg-baccent shadow-[0_0_15px_rgba(var(--color-baccent),0.8)] z-20"
          /> */}

          {/* --- MOBILE SCROLL LINE --- */}
          <div className="md:hidden absolute left-8 top-0 w-1 h-full bg-white/10" />
          
          <motion.div 
            style={{ scaleY, originY: 0 }}
            className="md:hidden absolute left-8 top-0 w-1 h-full bg-linear-to-b from-bdarkblue via-bprimary to-baccent z-0"
          />
          
          {/* Floating Circle "Head" (Mobile) */}
          {/* <motion.div
             style={{ 
               top: useTransform(scrollYProgress, [0, 1], ["0%", "100%"]),
               x: "-50%" 
             }}
             className="md:hidden absolute left-8 w-3 h-3 rounded-full bg-baccent z-20"
          /> */}

          {/* Content Mapping */}
          {timelineData.map((item, index) => (
            <TimelineItemComponent 
              key={index} 
              item={item} 
              index={index} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const TimelineItemComponent = ({ item, index }: { item: TimelineItem; index: number }) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [0.8, 1]);
  const x = useTransform(
    scrollYProgress, 
    [0, 0.5], 
    [index % 2 === 0 ? -50 : 50, 0]
  );

  const isLeft = index % 2 === 0;

  return (
    <motion.div
      ref={ref}
      style={{ opacity, scale }}
      className="relative z-10 mb-16 md:mb-24 last:mb-0"
    >
      {/* Desktop Layout */}
      <div className="hidden md:flex items-center justify-center">
        {isLeft ? (
          <>
            <motion.div style={{ x }} className="w-5/12 pr-12 text-right">
              <TimelineContent item={item} align="right" />
            </motion.div>
            <TimelineDot scrollYProgress={scrollYProgress} />
            <div className="w-5/12" />
          </>
        ) : (
          <>
            <div className="w-5/12" />
            <TimelineDot scrollYProgress={scrollYProgress} />
            <motion.div style={{ x }} className="w-5/12 pl-12 text-left">
              <TimelineContent item={item} align="left" />
            </motion.div>
          </>
        )}
      </div>

      {/* Mobile Layout */}
      <div className="md:hidden flex items-start">
        <div className="flex flex-col items-center mr-6 ml-6 relative z-30">
          <TimelineDot scrollYProgress={scrollYProgress} mobile />
        </div>
        <motion.div 
          style={{ x: useTransform(scrollYProgress, [0, 0.5], [20, 0]) }}
          className="flex-1"
        >
          <TimelineContent item={item} align="left" />
        </motion.div>
      </div>
    </motion.div>
  );
};

const TimelineDot = ({ scrollYProgress, mobile }: { scrollYProgress: any, mobile?: boolean }) => {
  const scale = useTransform(scrollYProgress, [0, 0.5], [0.5, 1.2]);
  const bgColor = useTransform(
    scrollYProgress,
    [0, 0.5],
    ["#333", "#0070f3"] // Colors will transition as dot is "reached"
  );
  
  return (
    <motion.div 
      style={{ scale, backgroundColor: bgColor }}
      className={`relative z-30 shrink-0 rounded-full border-4 border-black ${mobile ? 'w-4 h-4' : 'w-6 h-6'}`}
    >
      <div className="absolute inset-0 rounded-full bg-bprimary animate-ping opacity-20" />
    </motion.div>
  );
};

const TimelineContent = ({ item, align }: { item: TimelineItem; align: 'left' | 'right' }) => {
  return (
    <div className={`group ${align === 'right' ? 'items-end' : 'items-start'}`}>
      {/* Year Badge */}
      <motion.div
        whileHover={{ scale: 1.05 }}
        className="inline-block mb-3 px-4 py-1.5 bg-linear-to-r from-bprimary to-bsecondary/40 rounded-full"
      >
        <span className="text-white font-bold text-sm md:text-base">
          {item.year}
        </span>
      </motion.div>

      {/* Content Card */}
      <motion.div
        whileHover={{ y: -5 }}
        transition={{ duration: 0.3 }}
        className="bg-bdarkblue/20 backdrop-blur-sm border border-bprimary/30 rounded-2xl p-6 md:p-8 hover:border-baccent/50 transition-all duration-300 shadow-xl"
      >
        {/* Image - Optional */}
        {item.image && (
          <div className="mb-4 rounded-xl overflow-hidden">
            <img 
              src={item.image} 
              alt={item.title}
              className="w-full h-48 md:h-56 object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>
        )}

        {/* Title */}
        <h3 className="text-2xl md:text-3xl font-bold text-cloud mb-3 group-hover:text-baccent transition-colors">
          {item.title}
        </h3>

        {/* Description */}
        <p className="text-cloud/80 text-base md:text-lg leading-relaxed">
          {item.description}
        </p>
      </motion.div>
    </div>
  );
};

export default Timeline;