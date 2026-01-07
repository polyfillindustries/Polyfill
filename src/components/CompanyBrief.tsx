"use client";
import React from "react";
import { motion } from "framer-motion";
import AnimatedHeading from "./AnimatedHeadings";

export const CompanyBrief = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="mx-auto p-8 rounded-3xl max-w-6xl bg-white shadow-xl border border-zinc-100 space-y-6 mt-10 antialiased"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        <AnimatedHeading 
          level={2} 
          variant="gradient-underline" 
          className="font-inter text-bgray rounded-2xl p-3 font-extrabold text-center"
        >
          Company Overview
        </AnimatedHeading>
      </motion.div>

      <div className="font-(family-name:--font-dm-serif) text-center font-normal md:text-2xl text-sm leading-relaxed text-zinc-800/90 md:max-w-4xl mx-auto space-y-6">
        <motion.h3
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          Polyfill Industries/Shakti Polymers, established in 1988, is a trusted manufacturer,
          trader, and supplier of plastic granules under the guidance of{" "}
          <span className="font-bold text-bprimary">Mr. Kashmiri Lal Jindal</span>.
          We specialize in BOPP Natural Gole Dana, Fresh PP, and Recycled PP
          Granules, known for consistent quality and performance.
          <br/><br/>
          With four production units, a monthly capacity of 1,200 tons, original equipment manufacturer and warehousing facilities, and in-house polymer testing machines, we ensure strict quality control at every stage. Committed to polymer recycling and sustainable manufacturing, we serve clients across India with transparency, timely delivery, and dependable service.
        </motion.h3>
      </div>
    </motion.div>
  );
};