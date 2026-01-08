import React from "react";
import { Star } from "lucide-react";

export default function Overview() {
  return (
    <div className="flex items-center justify-center p-4 py-8 md:py-12">
      <div className="w-full max-w-7xl">
        {/* Card Container */}
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
          <div className="flex flex-col md:flex-row">
            {/* Image Section - Left Half */}
            <div className="w-full md:w-1/2 h-64 md:h-80 lg:h-135 relative">
              <img
                src="/ph2.jpg"
                alt="Santorini Villa"
                className="w-full h-full object-cover"
              />
              {/* Optional overlay for better image blend */}
              <div className="absolute inset-0 bg-linear-to-r from-transparent to-black/10" />
            </div>

            {/* Content Section - Right Half with Gradient */}
            <div className="w-full md:w-1/2 bg-bgray p-6 md:p-8 lg:p-10 flex flex-col justify-between">
              {/* Text Content */}
              <div className="space-y-4 md:space-y-5">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">
                  Company Overview
                </h2>

                <p className="text-gray-100 text-base md:text-lg leading-relaxed">
                  Shakti Polymers, established in <b>1988</b>, is a trusted
                  manufacturer, trader, and supplier of plastic granules under
                  the guidance of <b>Mr. Kashmiri Lal Jindal</b>. We specialize in BOPP
                  Natural Gole Dana, Fresh PP, and Recycled PP Granules, known
                  for consistent quality and performance.
                  <br />  <br />
                  With four production units, a monthly capacity of 1,200 tons, original equipment manufacturer and warehousing facilities, and in-house polymer testing machines, we ensure strict quality control at every stage. Committed to polymer recycling and sustainable manufacturing, we serve clients across India with transparency, timely delivery, and dependable service.
                </p>
              </div>

             
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
