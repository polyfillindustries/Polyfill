'use client';

import React, { useEffect, useRef, useState } from 'react';
import { useInView, motion, useMotionValue, animate, useMotionValueEvent } from 'framer-motion';
import { StatItem } from '@/types/statitem';


const stats: StatItem[] = [
  { label: 'LEGACY', value: '35', suffix: '+', subLabel: 'Years of Excellence' },
  { label: 'FACILITIES', value: '4', subLabel: 'Manufacturing Units' },
  { label: 'REACH ACROSS', value: '27', suffix: '+', subLabel: 'States' },
  { label: 'CAPACITY', value: '1200', subLabel: 'Metric Tonnes / Month' },
];

function Counter({ value, suffix }: { value: string; suffix?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "0px" });
  
  const numericValue = parseFloat(value.replace(/,/g, '').replace(/[^\d.-]/g, ''));
  const countRef = useRef(useMotionValue(0));
  const [displayValue, setDisplayValue] = useState('0');
  
  useMotionValueEvent(countRef.current, "change", (latest) => {
    setDisplayValue(Math.round(latest).toLocaleString());
  });

  useEffect(() => {
    if (isInView) {
      const controls = animate(countRef.current, numericValue, { duration: 2.5, ease: "circOut" });
      return () => controls.stop();
    }
  }, [isInView, numericValue]);

  return (
    <span ref={ref} className="tabular-nums">
      <span>{displayValue}</span>
      <span>{suffix}</span>
    </span>
  );
}

export default function StatsBanner() {
  return (
    <section className="relative w-full py-20 lg:py-32 bg-linear-to-br from-white to-blue-50  overflow-hidden">
      {/* Subtle Engineering Grid Background */}
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: `radial-gradient(#000 1px, transparent 1px)`, backgroundSize: '40px 40px' }} />

      <div className="relative z-10 mx-auto max-w-7xl px-2">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div className="max-w-2xl">
            <h2 className="text-bprimary font-bold tracking-[0.2em] uppercase text-sm mb-4">
              Performance Metrics
            </h2>
            <h3 className="text-4xl md:text-5xl font-bold text-zinc-900 tracking-tighter">
              Scale.  Capacity. <span className="text-zinc-500"> Reliability.</span>
            </h3>
          </div>
          <div className="hidden md:block h-px flex-1 bg-zinc-100 mx-10 mb-4" />
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-4 gap-2">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 0 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative p-10 bg-white border border-zinc-100 transition-all duration-500 hover:z-20 hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)] hover:-translate-y-1"
            >
              {/* Corner Accent */}
              <div className="absolute top-0 right-0 w-0 h-0 border-t-40 border-t-zinc-50 border-l-40 border-l-transparent group-hover:border-t-bprimary/10 transition-colors" />

              <div className="relative space-y-4">
                {/* Label with Animated Line */}
                <div className="flex items-center gap-3">
                  <div className="h-px w-6 bg-bprimary  group-hover:w-12 transition-all duration-500" />
                  <span className="text-sm font-bold  text-bsecondary  tracking-widest uppercase">
                    {stat.label}
                  </span>
                </div>

                {/* Big Number */}
                <div className="text-5xl md:text-6xl font-black text-zinc-900 tracking-tighter group-hover:text-bprimary transition-colors duration-300">
                  <Counter value={stat.value} suffix={stat.suffix} />
                </div>

                {/* Description */}
                <p className="text-zinc-500 font-medium leading-tight">
                  {stat.subLabel}
                </p>
              </div>

              {/* Bottom Decorative Bar */}
              <motion.div 
                className="absolute bottom-0 left-0 h-1 rounded-2xl bg-bprimary"
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                transition={{ duration: 1, delay: 0.5 }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}