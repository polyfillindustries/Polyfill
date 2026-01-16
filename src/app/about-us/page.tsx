"use client";

import React from "react";
import { motion } from "framer-motion";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
import {
  Factory,
  Recycle,
  Users,
  Target,
  Eye,
  CheckCircle2,
  Globe,
  Award,
} from "lucide-react";
import Image from "next/image";

export default function AboutUs() {
  const words = [
    { text: "About" },
    { text: "Polyfill ", className: "text-bprimary" },
  ];

  const products = [
    {
      name: "BOPP Natural Gole Dana",
      image: "/hero/img2.jpg", // Replace with your actual paths
    },
    {
      name: "Fresh PP Granules",
      image: "/hero/img6.jpg",
    },
    {
      name: "Recycled PP Granules",
      image: "/hero/img7.jpg",
    },
  ];

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 },
  };

  return (
    <div className="bg-white font-inter selection:bg-bprimary/10">
      {/* --- HERO SECTION --- */}
      <section className="relative pt-12 pb-8 md:pt-24 md:pb-20 px-4 max-w-7xl mx-auto text-center">
       
        <div className="flex  justify-center">
          <TypewriterEffectSmooth words={words} className="mx-3" />
        </div>
         <motion.div
          {...fadeIn}
          className="inline-flex items-center justify-center gap-2.5 px-4 py-2 bg-zinc-50 border border-bgray rounded-full mx-auto mb-6 shadow-sm whitespace-nowrap"
        >
         

          {/* Logo & Text Wrapper to ensure perfect horizontal alignment */}
          <div className="flex items-center gap-1">
             <span className="text-zinc-800 text-sm font-medium">A Unit of</span>
            <span className="text-red-700 font-bold text-sm md:text-base tracking-tight ">
              Shakti Polymers
            </span>
            {/* Uncomment if using image: 
    <div className="h-4 w-px bg-zinc-300 mx-1" /> 
    <Image src="/sp.png" alt="Logo" width={20} height={20} className="object-contain" /> 
    */}
          </div>

          {/* <span className="text-zinc-800 text-sm font-medium">Unit</span> */}
        </motion.div>

        <motion.p
          {...fadeIn}
          className="mt-4 md:mt-6 text-zinc-600 text-base md:text-lg lg:text-xl max-w-4xl font-medium mx-auto leading-relaxed px-2"
        >
          Established in{" "}
          <span className="text-zinc-900 font-semibold">1988</span>, Polyfill (formerly Shakti Polymers) has grown into a leading name in
          the plastic granules industry under the guidance of{" "}
          <span className="text-zinc-900 font-semibold">
            Mr. Kashmiri Lal Jindal
          </span>
          . Recognised as a trusted and reliable market leader, we operate as
          manufacturers, traders, and suppliers of a wide range of plastic
          granules.
        </motion.p>
      </section>

      {/* --- KEY STATS --- */}
      <section className="bg-bgray shadow-baccent shadow-lg font-inter border-y border-zinc-100 py-8 md:py-12">
        <div className="max-w-7xl mx-auto text-zinc-50 px-4 md:text-xl grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
          <StatItem
            icon={<Award />}
            label="Industry Experience"
            value="35+ Years"
          />
          <StatItem
            icon={<Factory />}
            label="Production Units"
            value="4 Units"
          />
          <StatItem
            icon={<Globe />}
            label="Monthly Capacity"
            value="1,200 Tons"
          />
          <StatItem icon={<Users />} label="Focus" value="OEM Service" />
        </div>
      </section>

      {/* --- PRODUCT PORTFOLIO --- */}
      <section className="py-12 md:py-20 max-w-7xl mx-auto px-4">
        <motion.div {...fadeIn} className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-zinc-900 mb-3 md:mb-4">
            Our Product Portfolio
          </h2>
          <p className="text-sm md:text-xl font-medium text-bgray max-w-2xl mx-auto px-2">
            Known for consistent quality and performance, driving our strong
            reputation and long-standing client relationships.
          </p>
        </motion.div>

        {/* <div className="grid md:grid-cols-3 gap-4 md:gap-6">
          {["BOPP Natural Gole Dana", "Fresh PP Granules", "Recycled PP Granules"].map((product, i) => (
            <div key={i} className="p-6 md:p-8 bg-white border border-zinc-200 rounded-xl md:rounded-2xl hover:shadow-xl transition-all group">
              <div className="h-10 w-10 md:h-12 md:w-12 bg-bprimary/10 text-bprimary rounded-lg md:rounded-xl flex items-center justify-center mb-4 md:mb-6 group-hover:bg-bprimary group-hover:text-white transition-colors">
                <CheckCircle2 className="w-5 h-5 md:w-6 md:h-6" />
              </div>
              <h3 className="text-base md:text-lg lg:text-xl font-bold text-zinc-900">{product}</h3>
            </div>
          ))}
        </div> */}

        <div className="grid md:grid-cols-3 gap-4 md:gap-6">
          {products.map((product, i) => (
            <div
              key={i}
              className="relative h-64 md:h-80 flex flex-col justify-end p-6 md:p-8 rounded-xl md:rounded-2xl overflow-hidden shadow-lg group transition-all duration-500"
            >
              {/* 1. Background Image Layer */}
              <div
                className="absolute inset-0 z-0 transition-transform duration-700 group-hover:scale-110"
                style={{
                  backgroundImage: `url('${product.image}')`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />

              {/* 2. Gradient Overlay (Ensures text readability) */}
              <div className="absolute inset-0 z-10 bg-linear-to-t from-black/80 via-black/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

              {/* 3. Content Layer */}
              <div className="relative z-20">
                <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-white">
                  {product.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- CORE PILLARS --- */}
      <section className="py-12 md:py-20 bg-zinc-900 text-white rounded-2xl md:rounded-[3rem] mx-4 md:mx-10 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid lg:grid-cols-2 gap-8 md:gap-16 items-center">
          <motion.div {...fadeIn} className="space-y-6 md:space-y-8">
            <div className="space-y-3 md:space-y-4">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold">
                Technical Excellence & Sustainability
              </h2>
              <div className="h-1 md:h-1.5 w-16 md:w-20 bg-bprimary rounded-full" />
            </div>

            <div className="space-y-4 md:space-y-6">
              <Pillar
                icon={<Recycle className="text-green-400" />}
                title="Polymer Recycling"
                text="We actively promote polymer recycling by converting plastic waste into high-quality recycled granules, contributing to resource conservation and sustainable manufacturing practices."
              />
              <Pillar
                icon={<Factory className="text-blue-400" />}
                title="Infrastructure & OEM"
                text="With four well-equipped production units and 1,200-ton capacity, we offer robust warehousing and OEM facilities ensuring smooth inventory management and prompt dispatch."
              />
              <Pillar
                icon={<Users className="text-purple-400" />}
                title="Customer Satisfaction"
                text="We emphasize timely delivery, quick response to queries, and dependable after-sales support, making us a preferred choice in the domestic market."
              />
            </div>
          </motion.div>

          <div className="relative aspect-square md:aspect-video lg:aspect-square bg-zinc-800 rounded-2xl md:rounded-3xl overflow-hidden border border-white/10">
            {/* Replace with your factory or product image */}
            <div className="absolute inset-0 bg-linear-to-br from-bprimary/20 to-transparent flex items-center justify-center">
              <p className="text-white/20 font-bold text-3xl md:text-6xl uppercase tracking-tighter">
                Manufacturing
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- MISSION & VISION --- */}
      <section className="py-12 md:py-24 max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-6 md:gap-12">
        <motion.div
          {...fadeIn}
          className="p-6 md:p-10 rounded-2xl md:rounded-[2.5rem] bg-zinc-50 border border-zinc-200 relative overflow-hidden"
        >
          <Target className="text-bprimary/10 absolute -right-4 -top-4 w-20 h-20 md:w-32 md:h-32" />
          <h3 className="text-xl md:text-2xl font-bold flex items-center gap-2 md:gap-3 mb-4 md:mb-6">
            <Target className="text-bprimary w-5 h-5 md:w-6 md:h-6" /> Our
            Mission
          </h3>
          <p className="text-sm md:text-base text-zinc-600 leading-relaxed">
            Our mission at Shakti Polymers is to deliver high-quality plastic
            granules through advanced manufacturing, strict quality control, and
            responsible polymer recycling practices. We are committed to
            sustainability by reducing plastic waste, promoting resource
            efficiency, and supporting environmentally conscious manufacturing.
            Through innovation, transparency, and timely delivery, we aim to
            build long-term value for our clients and the environment.
          </p>
        </motion.div>

        <motion.div
          {...fadeIn}
          className="p-6 md:p-10 rounded-2xl md:rounded-[2.5rem] bg-white border border-zinc-200 shadow-sm relative overflow-hidden"
        >
          <Eye className="text-bsecondary/10 absolute -right-4 -top-4 w-20 h-20 md:w-32 md:h-32" />
          <h3 className="text-xl md:text-2xl font-bold flex items-center gap-2 md:gap-3 mb-4 md:mb-6">
            <Eye className="text-bsecondary w-5 h-5 md:w-6 md:h-6" /> Our Vision
          </h3>
          <p className="text-sm md:text-base text-zinc-600 leading-relaxed">
            Our vision at Shakti Polymers is to emerge as a leading and reliable
            force in the polymer manufacturing and recycling industry, known for
            technical excellence, consistent quality, and ethical operations. We
            aim to set industry benchmarks by continuously upgrading our
            manufacturing capabilities, strengthening in-house testing and
            quality assurance systems, and adopting advanced technologies.
          </p>
        </motion.div>
      </section>

      {/* --- CLOSING --- */}
      <section className="pb-12 md:pb-24 px-4">
        <motion.div
          {...fadeIn}
          className="max-w-4xl mx-auto text-center p-6 md:p-12 bg-bprimary/5 rounded-2xl md:rounded-3xl border border-bprimary/10"
        >
          <p className="text-base md:text-xl lg:text-2xl text-zinc-800 font-medium leading-relaxed italic">
            "We are committed to supporting sustainable industrial growth by
            promoting polymer recycling, reducing environmental impact, and
            contributing to a circular economy."
          </p>
        </motion.div>
      </section>
    </div>
  );
}

function StatItem({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="flex flex-col items-center font-inter  text-center">
      <div className="text-baccent mb-3 md:mb-3 [&>svg]:w-6 [&>svg]:h-6 md:[&>svg]:w-7 md:[&>svg]:h-7">
        {icon}
      </div>
      <div className="text-md md:text-2xl lg:text-3xl font-bold text-zinc-50">
        {value}
      </div>
      <div className="text-xs md:text-sm text-zinc-300 font-medium uppercase tracking-wider">
        {label}
      </div>
    </div>
  );
}

function Pillar({
  icon,
  title,
  text,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
}) {
  return (
    <div className="flex gap-3 md:gap-4">
      <div className="shrink-0 mt-1 [&>svg]:w-5 [&>svg]:h-5 md:[&>svg]:w-6 md:[&>svg]:h-6">
        {icon}
      </div>
      <div>
        <h4 className="text-base md:text-lg font-bold mb-1">{title}</h4>
        <p className="text-zinc-400 text-xs md:text-sm lg:text-base leading-relaxed">
          {text}
        </p>
      </div>
    </div>
  );
}
