import React from "react";
import AnimatedHeading from "./AnimatedHeadings";

export const Tools = () => {
  return (
    <section className="w-full flex flex-col items-center justify-center px-4 py-12 md:py-16 lg:py-20 rounded-3xl max-w-6xl mx-auto  space-y-6 mt-10 antialiased">
      <div className="max-w-5xl mx-auto text-center space-y-8">
        {/* Heading */}
        <AnimatedHeading
          level={2}
          variant="shine"
          className="font-inter text-white rounded-2xl p-3 font-extrabold"
        >
          Tools & Technologies
        </AnimatedHeading>

        {/* Description */}
        <div className=" md:space-y-6 text-zinc-200 md:text-center font-inter text-center font-normal md:text-2xl text-sm leading-relaxed  md:max-w-4xl mx-auto space-y-6">
          <p className="text-base md:text-lg text-zinc-200 font-medium leading-relaxed">
            At Shakti Polymers, we utilize modern machinery and advanced
            processing techniques to ensure consistent quality, efficiency, and
            reliability in polymer manufacturing.
          </p>

          <p className="text-base md:text-lg  font-medium leading-relaxed">
            Our infrastructure includes state-of-the-art polymer processing and
            recycling equipment, supported by in-house polymer testing machines
            for continuous quality monitoring. From raw material inspection to
            final output, every stage is closely supervised to maintain
            uniformity and performance.
          </p>

          <p className="text-base md:text-lg  font-medium leading-relaxed">
            We employ automated granulation systems, precision extrusion units,
            and high-capacity blending and mixing machines to achieve optimal
            material properties. Advanced screening, filtration, and cooling
            systems further enhance product consistency.
          </p>

          <p className="text-base md:text-lg  font-medium leading-relaxed">
            To ensure quality assurance, our in-house testing facilities
            evaluate key parameters such as melt flow index (MFI), density, and
            material strength, enabling us to deliver products that meet
            industry standards.
          </p>

          <p className="text-base md:text-lg  font-medium leading-relaxed">
            By integrating efficient technology with skilled expertise, Shakti
            Polymers delivers high-performance plastic granules while supporting
            sustainable and responsible polymer recycling practices.
          </p>
        </div>
      </div>
    </section>
  );
};
