"use client";
import { motion } from "framer-motion";
import { TypewriterEffectSmooth } from "../ui/typewriter-effect";

export default function Overview() {
  const words = [
    { text: "Company", className: "text-white" },
    { text: "Overview", className: "text-bprimary" },
  ];
  return (
    <section className="relative w-full sm:mt-10 md:mt-5 py-2 md:py-16 lg:py-24  rounded-2xl px-2 md:px-4 bg-white overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-96 h-96 bg-bprimary/5 md:rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto">
        <div className="relative bg-zinc-900 rounded-lg lg:rounded-[2.5rem] overflow-hidden shadow-2xl border border-white/5">
          <div className="flex flex-col lg:flex-row">
            {/* --- IMAGE SECTION --- */}
            <div className="w-full lg:w-1/2 relative min-h-62.5 md:min-h-87.5 lg:min-h-162.5">
              <img
                src="/extra/ph3.jpg"
                alt="Shakti Polymers Manufacturing"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-r from-zinc-900/40 via-transparent to-transparent lg:hidden" />
              <div className="absolute inset-0 bg-linear-to-b from-transparent via-transparent to-zinc-900/90" />

              {/* Floating Leadership Badge */}
              {/* <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="absolute bottom-8 left-8 right-8 md:right-auto bg-white/10 backdrop-blur-xl border border-white/20 p-6 rounded-2xl"
              >
                <p className="text-white/60 text-xs uppercase tracking-widest font-bold mb-1">Visionary Leadership</p>
                <h4 className="text-white text-xl font-bold">Mr. Kashmiri Lal Jindal</h4>
                <div className="flex items-center gap-2 mt-2 text-bprimary">
                  <TrendingUp className="w-4 h-4" />
                  <span className="text-sm font-medium">Founder & Director</span>
                </div>
              </motion.div> */}
            </div>

            {/* --- CONTENT SECTION --- */}
            <div className="w-full lg:w-1/2 px-2 py-8 md:px-8 md:py-10 lg:p-16 flex flex-col justify-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="space-y-4 md:space-y-8"
              >
                <div>
                  <div className="flex justify-center">
                    <TypewriterEffectSmooth words={words} />
                  </div>
                </div>

                <div className="space-y-4 text-center p-1 md:space-y-6 text-zinc-300 text-md md:text-base lg:text-lg leading-relaxed">
                  <p>
                    Shakti Polymers, established in{" "}
                    <span className="text-white font-bold tracking-tight">
                      1988
                    </span>
                    , is a trusted manufacturer, trader, and supplier of plastic
                    granules under the guidance of{" "}
                    <span className="text-white font-semibold">
                      Mr. Kashmiri Lal Jindal
                    </span>
                    . We specialize in BOPP Natural Gole Dana, Fresh PP, and
                    Recycled PP Granules, known for consistent quality and
                    performance.
                  </p>

                  <p>
                    With four production units, a monthly capacity of 1,200
                    tons, original equipment manufacturer and warehousing
                    facilities, and in-house polymer testing machines, we ensure
                    strict quality control at every stage.
                    <br />
                    Committed to polymer recycling and sustainable
                    manufacturing, we serve clients across India with
                    transparency, timely delivery, and dependable service.
                  </p>
                </div>

              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
