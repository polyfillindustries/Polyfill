'use client';

import React, { useEffect, useRef } from 'react';
import { useInView, motion, useMotionValue, useTransform, animate } from 'framer-motion';

import { StatItem } from '@/types/statitem';

const stats: StatItem[] = [
  { label: 'LEGACY', value: '3', suffix: '+', subLabel: 'Decades' },
  { label: 'FACILITIES', value: '5', subLabel: 'Manufacturing units across India' },
  { label: 'REACH', value: '27', suffix: '+', subLabel: 'States' },
  { label: 'PRODUCTION CAPACITY', value: '1200', subLabel: 'Metric tonnes/ month' },
];

function Counter({ value, suffix }: { value: string; suffix?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  const numericValue = parseFloat(value.replace(/,/g, '').replace(/[^\d.-]/g, ''));
  const hasDecimal = value.includes('.');
  
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => {
    const formatted = hasDecimal 
      ? latest.toFixed(1) 
      : Math.round(latest).toLocaleString();
    return `${formatted}${suffix || ''}`;
  });

  useEffect(() => {
    if (isInView) {
      animate(count, numericValue, { duration: 2, ease: "easeOut" });
    }
  }, [isInView, count, numericValue]);

  return <motion.span ref={ref}>{rounded}</motion.span>;
}

export default function StatsBanner() {
  return (
    <section className="w-full bg-white py-16 md:py-20 lg:py-24 px-4">
      <div className="mx-auto max-w-7xl">
        {/* Optional Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-bgray mb-3">
            Our Impact in Numbers
          </h2>
          {/* <p className="text-gray-600 text-lg">
            Leading the polymer industry with excellence
          </p> */}
        </div>

        {/* Stats Grid with Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{  boxShadow: "0 20px 40px rgba(3, 135, 255, 0.15)" }}
              className="group relative flex flex-col items-center justify-center p-8 rounded-2xl bg-linear-to-br from-white to-blue-50/30 border-2 border-gray-200 hover:border-bprimary transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              {/* Gradient accent line */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-1 bg-linear-to-r from-bprimary via-baccent to-bsecondary rounded-full" />
              
              {/* Label */}
              <h3 className="mb-4 text-sm font-inter text-center font-bold text-gray-500 tracking-wider uppercase">
                {stat.label}
              </h3>
              
              {/* Counter */}
              <div className="mb-3 text-4xl md:text-6xl font-bold bg-linear-to-r from-bprimary to-bsecondary  bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">
                <Counter value={stat.value} suffix={stat.suffix} />
              </div>
              
              {/* Sublabel */}
              <p className="text-center text-base md:text-lg font-medium text-gray-600 leading-snug">
                {stat.subLabel}
              </p>

              {/* Background decoration */}
              <div className="absolute -z-10 inset-0 bg-linear-to-br from-bprimary/5 to-baccent/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}