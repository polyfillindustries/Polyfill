"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Cpu,
  FlaskConical,
  Settings,
  Recycle,
} from "lucide-react";

import { TypewriterEffectSmooth } from "../ui/typewriter-effect";

const ToolsAndTech = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const words = [
    { text: "Tools &", className: " text-bgray font-bold " },
    { text: "Technologies", className: "text-bprimary" },
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="mb-8 sm:mb-10 md:mb-12 text-center md:text-left">
          <div className="flex md:text-4xl justify-center ">
            <TypewriterEffectSmooth words={words} className="text-3xl" />
          </div>
          <p className="text-zinc-700 text-lg sm:text-base md:text-xl px-1">
            At Shakti Polymers, we utilize modern machinery and advanced
            processing techniques to ensure consistent quality, efficiency, and
            reliability.
          </p>
        </div>

        {/* Bento Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-3 sm:gap-4 md:h-150"
        >
          {/* Main Infrastructure Card */}
          <motion.div
            variants={itemVariants}
            className="md:col-span-1 md:row-span-2 relative group overflow-hidden bg-zinc-900 rounded-2xl sm:rounded-[2rem] p-6 sm:p-8 flex flex-col justify-between min-h-85 sm:min-h-95 md:min-h-80"
          >
            <div className="absolute top-6 left-6 sm:top-8 sm:left-8 p-2 sm:p-3 bg-bprimary/20 rounded-xl sm:rounded-2xl border border-bprimary/30 z-20">
              <Settings className="w-6 h-6 sm:w-8 sm:h-8 text-bprimary" />
            </div>
            
            {/* Image between icon and heading - visible only on md+ screens */}
            <div className="hidden md:block relative w-full mt-17 h-35 my-4 rounded-xl overflow-hidden z-10">
              <Image
                src="/extra/img2.jpg"
                alt="Infrastructure"
                fill
                className="object-cover"
              />
            </div>
            
            <div className="mt-auto relative z-10 pt-16 sm:pt-20 md:pt-0">
              <h3 className="md:text-xl text-lg font-bold text-white mb-2 sm:mb-3">
                Modern Infrastructure
              </h3>
              <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
                Our infrastructure includes state-of-the-art polymer processing
                and recycling equipment, supported by in-house polymer testing
                machines for continuous quality monitoring. From raw material
                inspection to final output, every stage is closely supervised to
                maintain uniformity and performance.
              </p>
            </div>
            {/* Subtle Gradient Overlay */}
            <div className="absolute inset-0 bg-linear-to-t from-black via-transparent to-transparent opacity-60" />
          </motion.div>

          {/* Quality Lab Card */}
          <motion.div
            variants={itemVariants}
            className="md:col-span-2 md:row-span-1 bg-zinc-100 rounded-2xl sm:rounded-[2rem] p-6 sm:p-8 flex flex-col md:flex-row items-center gap-4 sm:gap-6 md:gap-8 border border-zinc-200"
          >
            <div className="flex-1">
              <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                <FlaskConical className="w-5 h-5 sm:w-6 sm:h-6 text-bprimary" />
                <h3 className="text-lg sm:text-xl font-bold text-zinc-900">
                  In-House Quality Lab
                </h3>
              </div>
              <p className="text-zinc-600 text-sm sm:text-base leading-relaxed mb-3 sm:mb-4">
                To ensure quality assurance, our in-house testing facilities
                evaluate key parameters such as melt flow index (MFI), density,
                and material strength, enabling us to deliver products that meet
                industry standards.
              </p>
              <div className="flex flex-wrap gap-1.5 sm:gap-2">
                {["MFI Testing", "Density Analysis", "Strength Test"].map(
                  (tag) => (
                    <span
                      key={tag}
                      className="px-2 sm:px-3 py-1 bg-white border border-zinc-300 rounded-full text-[9px] sm:text-[10px] font-bold uppercase tracking-wider text-zinc-500"
                    >
                      {tag}
                    </span>
                  )
                )}
              </div>
            </div>
          </motion.div>

          {/* Automated Systems Card */}
          <motion.div
            variants={itemVariants}
            className="md:col-span-1 md:row-span-2 bg-bsecondary rounded-2xl sm:rounded-[2rem] p-6 sm:p-8 flex flex-col justify-between group min-h-70 sm:min-h-80"
          >
            <Cpu className="w-6 h-6 sm:w-8 sm:h-8 text-white group-hover:scale-110 transition-transform" />
             <div className="hidden md:block relative w-full mt-10 h-45 my-4 rounded-xl overflow-hidden z-10">
              <Image
                src="/extra/img1.jpg"
                alt="Infrastructure"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 sm:mb-3">
                Automation
              </h3>
              <p className="text-white/90 text-sm sm:text-base  leading-relaxed">
                We employ automated granulation systems, precision extrusion
                units, and high-capacity blending and mixing machines to achieve
                optimal material properties. Advanced screening, filtration, and
                cooling systems further enhance product consistency.
              </p>
            </div>
          </motion.div>

          {/* Sustainability Card */}
          <motion.div
            variants={itemVariants}
            className="md:col-span-2 md:row-span- relative overflow-hidden bg-zinc-50 rounded-2xl sm:rounded-[2rem] p-6 sm:p-8 flex flex-col justify-between border border-zinc-200 min-h-60 sm:min-h-70"
          >
            {/* Background Image */}
            <div className="absolute inset-0">
              <Image
                src="/hero/img5.JPG"
                alt="Sustainability background"
                fill
                className="object-cover"
              />
              {/* Dark overlay for text readability */}
              <div className="absolute inset-0 bg-linear-to-br from-black/70 via-black/50 to-black/70" />
            </div>

            <div className="relative z-10 w-9 h-9 sm:w-10 sm:h-10 bg-green-100 rounded-lg sm:rounded-xl flex items-center justify-center">
              <Recycle className="w-5 h-5 sm:w-6 sm:h-6 text-green-600" />
            </div>
            <div className="relative z-10">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 sm:mb-3">
                Sustainable
              </h3>
              <p className="text-zinc-100 text-sm sm:text-base leading-relaxed">
                By integrating efficient technology with skilled expertise,
                Shakti Polymers delivers high-performance plastic granules while
                supporting sustainable and responsible polymer recycling
                practices.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ToolsAndTech;
