"use client";
import React from "react";
import { motion } from "framer-motion";
import AnimatedHeading from "./AnimatedHeadings";

export const CompanyBrief = () => {
  return (
    <section className="w-full py-16 md:py-20 lg:py-24 px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="mx-auto max-w-6xl"
      >
        {/* Card with gradient border */}
        <div className="relative rounded-3xl p-0.5 bg-linear-to-br from-bprimary via-baccent to-bsecondary shadow-2xl">
          <div className="bg-white rounded-[calc(1.5rem-2px)] p-8 md:p-12 lg:p-16 space-y-10">
            
            {/* Heading */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="flex justify-center items-center"
            >
              <AnimatedHeading
                level={2}
                variant="gradient-underline"
                className="font-inter text-bgray font-extrabold text-center"
              >
                Company Overview
              </AnimatedHeading>
            </motion.div>

            {/* Content */}
            <div className="space-y-6 text-center max-w-4xl mx-auto">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="text-lg md:text-xl text-gray-700 leading-relaxed"
              >
                Polyfill Industries/Shakti Polymers, established in{" "}
                <span className="font-semibold text-bprimary">1988</span>, is a
                trusted manufacturer, trader, and supplier of plastic granules under
                the guidance of{" "}
                <span className="font-semibold text-bprimary">
                  Mr. Kashmiri Lal Jindal
                </span>
                . We specialize in BOPP Natural Gole Dana, Fresh PP, and Recycled PP
                Granules, known for consistent quality and performance.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="text-lg md:text-xl text-gray-700 leading-relaxed"
              >
                With{" "}
                <span className="font-semibold text-bsecondary">
                  four production units
                </span>
                , a monthly capacity of{" "}
                <span className="font-semibold text-bsecondary">
                  1,200 tons
                </span>
                , original equipment manufacturer and warehousing facilities, and
                in-house polymer testing machines, we ensure strict quality control
                at every stage.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                className="text-lg md:text-xl text-gray-700 leading-relaxed"
              >
                Committed to polymer recycling and sustainable manufacturing, we
                serve clients across India with{" "}
                <span className="font-semibold text-baccent">transparency</span>,{" "}
                <span className="font-semibold text-baccent">timely delivery</span>
                , and{" "}
                <span className="font-semibold text-baccent">
                  dependable service
                </span>
                .
              </motion.p>
            </div>

          
            

            {/* Decorative elements */}
            <div className="absolute top-0 left-0 w-20 h-20 bg-gradient-to-br from-bprimary/10 to-transparent rounded-tl-3xl" />
            <div className="absolute bottom-0 right-0 w-20 h-20 bg-gradient-to-tl from-baccent/10 to-transparent rounded-br-3xl" />
          </div>
        </div>
      </motion.div>
    </section>
  );
};