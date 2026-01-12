'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Factory, 
  Settings2, 
  Layers, 
  MessageSquare,
  ArrowRight
} from 'lucide-react';
import { ProductsDescriptionProps } from '@/types/productdescription';


export const ProductsDescription = ({ product }: ProductsDescriptionProps) => {
  const fadeInUp = {
    initial: { opacity: 0, y: 15 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  return (
    <div className="space-y-10 font-inter">
      {/* 1. Header & Identity - MOTION KEPT HERE */}
      <motion.div {...fadeInUp}>
       
        <h1 className="text-3xl md:text-4xl font-black text-zinc-900 tracking-tight leading-tight">
          {product.name}
        </h1>
        {product.alias && (
          <p className="mt-3 text-lg text-zinc-500 font-medium">
            Industry Alias: <span className="text-zinc-800 italic">{product.alias}</span>
          </p>
        )}
      </motion.div>

      {/* 2. Primary Description */}
      <section className="space-y-4">
        <div className="flex items-center gap-3">
          <h2 className="text-md font-bold text-zinc-800 uppercase tracking-widest">Description</h2>
        </div>
        <p className="text-zinc-600 text-md leading-relaxed">
          {product.description}
        </p>
      </section>

      {/* 3. Industries & Applications Grid */}
      <div className="grid md:grid-cols-2 gap-8">
        {/* Industries Served */}
        {product.industryServed?.length > 0 && (
          <div className="p-6 rounded-3xl bg-zinc-50 border border-zinc-100">
            <div className="flex items-center gap-2 mb-4 text-zinc-900">
              <Factory className="w-5 h-5 text-bprimary" />
              <h3 className="font-bold uppercase tracking-tight">Industries Served</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {product.industryServed.map((industry, index) => (
                <span
                  key={index}
                  className="px-4 py-1.5 bg-white border border-zinc-200 text-zinc-700 rounded-full text-xs font-semibold shadow-sm"
                >
                  {industry}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* End Applications */}
        {product.endProducts?.length > 0 && (
          <div className="p-6 rounded-3xl bg-zinc-50 border border-zinc-100">
            <div className="flex items-center gap-2 mb-4 text-zinc-900">
              <Layers className="w-5 h-5 text-bprimary" />
              <h3 className="font-bold uppercase tracking-tight">Key Applications</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {product.endProducts.map((item, index) => (
                <span
                  key={index}
                  className="px-4 py-1.5 bg-zinc-900 text-white rounded-full text-xs font-medium shadow-md"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* 5. Technical Data Sheet (TDS) */}
      {product.technicalSpecs && product.technicalSpecs.length > 0 && (
        <div className="border border-zinc-200 rounded-3xl overflow-hidden">
          <div className="bg-zinc-50 px-6 py-4 border-b border-zinc-200 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Settings2 className="w-5 h-5 text-bprimary" />
              <h3 className="font-bold text-zinc-900">Technical Specifications</h3>
            </div>
          </div>
          <div className="divide-y divide-zinc-100 bg-white">
            {product.technicalSpecs.map((spec, index) => (
              <div key={index} className="grid grid-cols-2 px-6 py-4 hover:bg-zinc-50 transition-colors">
                <dt className="text-sm font-semibold text-zinc-500">{spec.key}</dt>
                <dd className="text-sm font-bold text-zinc-900 text-right">{spec.value}</dd>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 6. High-Conversion CTA */}
      <div className="relative group">
        <div className="absolute -inset-1 bg-linear-to-r from-bprimary to-bsecondary rounded-2xl blur-sm opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200" />
        <a
          href="/contact-us"
          className="relative flex items-center justify-center gap-3 w-full bg-zinc-900 hover:bg-zinc-800 text-white font-bold py-5 px-8 rounded-2xl transition-all shadow-xl active:scale-[0.98]"
        >
          <MessageSquare className="w-5 h-5" />
          <span>Inquire about {product.name}</span>
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </a>
      </div>
    </div>
  );
};