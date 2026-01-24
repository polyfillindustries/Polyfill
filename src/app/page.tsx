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
        <div className="flex flex-col font-inter text-white font-medium gap-y-4 items-center justify-center h-full">
          <h2 className="font-semibold text-sm md:text-lg font-serif ">
            A SHAKTI POLYMERS UNIT
          </h2>
          <h1 className="text-white  text-center font-bold  text-2xl md:text-5xl">
            <span className="text-bprimary">POLYFILL</span>
          </h1>
          <h2 className="text-center md:text-xl text-sm font-bold">
            Engineered <span className="text-bprimary">POLYPROPYLENE</span> for
            Everyday Excellence{" "}
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
