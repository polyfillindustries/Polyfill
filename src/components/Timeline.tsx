import React from "react";
import { Timeline } from "@/components/ui/timeline";
import { Milestone } from "lucide-react";

export function TimelineDemo() {
  const data = [
   {
    title: "1988",
    content: (
      <div className="space-y-4">
        <p className="text-neutral-300 text-sm md:text-lg leading-relaxed">
          Established by <span className="text-white font-semibold">Mr. Kashmiri Lal Jindal</span>, Shakti Polymers began its journey as a specialized trader in plastic granules, setting the stage for decades of industrial leadership.
        </p>
      </div>
    ),
  },
   {
    title: "Growth Phase",
    content: (
      <div className="space-y-4">
        <p className="text-neutral-300 text-sm md:text-lg leading-relaxed">
          Transitioned from trading to manufacturing. We established our first state-of-the-art production unit, introducing <span className="text-white font-semibold">BOPP Natural Gole Dana</span> to our primary product line.
        </p>
      </div>
    ),
  },
    {
    title: "Present Day",
    content: (
      <div className="space-y-4">
        <p className="text-neutral-300 text-sm md:text-lg leading-relaxed">
          Now operating <span className="text-white font-semibold">4 well-equipped units</span> with a 1,200-ton monthly capacity. We are a key OEM partner and a pioneer in sustainable polymer recycling across India.
        </p>
      </div>
    ),
  },
    {
      title: "Changelog",
      content: (
        <div>
          <p className="mb-4 text-xs font-normal text-neutral-200 md:text-lg">
            Deployed 5 new components on Aceternity today
          </p>
          <div className="mb-8">
            <p className="mb-8 text-xs font-normal text-neutral-200 md:text-lg">
            I usually run out of copy, but when I see content this big, I try to
            integrate lorem ipsum.
          </p>
          <p className="mb-8 text-xs font-normal text-neutral-200 md:text-lg">
            Lorem ipsum is for people who are too lazy to write copy. But we are
            not. Here are some more example of beautiful designs I built.
          </p>
          </div>
        </div>
      ),
    },
  ];
  return (
    <div className="relative w-full overflow-clip">
      <Timeline data={data} />
    </div>
  );
}
