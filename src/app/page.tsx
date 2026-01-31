import Counter from "@/components/home/Counter";
import HeroSlideshow from "@/components/home/Hero";
import Overview from "@/components/home/Overview";
import { PolymerCards } from "@/components/home/PolymerCards";
import { TimelineDemo } from "@/components/home/Timeline";
import ToolsAndTech from "@/components/home/Tools";
import { Hero2 } from "@/components/home/Hero2";

export default function Home() {
  return (
    <div className="bg-white">
      {/* <div className="">
     <HeroSlideshow />
    </div> */}

      <Hero2
        video={{ mobile: "/videos/vid2.mp4", desktop: "/videos/vid2.mp4" }}
        overlayOpacity={0.6}
        className="min-h-[80vh]"
      >
        <div className="flex flex-col font-inter text-white font-medium gap-y-4 items-center justify-center h-full px-4">
          <h2 className="font-semibold text-lg md:text-2xl font-serif tracking-in-expand">
            Engineered
          </h2>
          <h1 className="text-white text-center font-bold text-3xl sm:text-4xl md:text-6xl tracking-tight">
            {/* <span className="text-[rgb(218,3,38)]">POLYPROPYLENE</span> */}
            <span className="text-red-700">POLYPROPYLENE</span>
          </h1>
          <h2 className="text-center text-base md:text-xl font-bold text-gray-100">
             for Everyday Excellence
          </h2>
        </div>
      </Hero2>

      <div className="py-1  space-y-15">
        <Overview />
      </div>

      <PolymerCards />

      {/* <div className="  space-y-10">
        <TimelineDemo />
      </div> */}

      <div className=" space-y-15">
        <Counter />
      </div>

      <div className=" px-2 rounded-2xl space-y-15">
        {/* <Tools /> */}
        <ToolsAndTech />
      </div>
    </div>
  );
}
