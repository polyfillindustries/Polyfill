'use client';

import React, { useEffect, useRef } from 'react';
import { useInView, motion, useMotionValue, useTransform, animate } from 'framer-motion';


import { StatItem } from '@/types/statitem';

const stats: StatItem[] = [
  { label: 'LEGACY', value: '3', suffix: '+', subLabel: 'Decades' },
  { label: 'FACILITIES', value: '5', subLabel: 'Manufacturing units across India' },
  { label: 'GLOBAL REACH', value: '27', suffix: '+', subLabel: 'States' },
  { label: 'PRODUCTION CAPACITY', value: '1200', subLabel: 'Metric tonnes/ month' },
];

function Counter({ value, suffix }: { value: string; suffix?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  // Clean string to get numeric value (e.g., "2.5" -> 2.5, "3,000" -> 3000)
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
    <div className="w-full  bg-linear-to-br from-blue-50 to-blue-100 rounded-2xl px-4 py-12">
      <div className="mx-auto max-w-7xl border-t-2 border-bprimary">
        <div className="grid grid-cols-1 divide-y divide-gray-300 sm:grid-cols-2 md:grid-cols-4 md:divide-x md:divide-y-0">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center justify-center py-10 px-6 text-center"
            >
              <h3 className="mb-6 text-xl font-inter font-bold text-bgray">
                {stat.label}
              </h3>
              <div className="mb-4 font-(family-name:--font-dm-serif)  text-5xl font-bold text-bprimary">
                <Counter value={stat.value} suffix={stat.suffix} />
              </div>
              <p className="max-w-xl text-lg font-(family-name:--font-dm-serif) font-medium leading-tight text-gray-600">
                {stat.subLabel}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}