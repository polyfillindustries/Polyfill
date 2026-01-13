
import Counter from "@/components/home/Counter";
import HeroSlideshow from "@/components/home/Hero";
import Overview from "@/components/home/Overview";
import { PolymerCards } from "@/components/home/PolymerCards";
import { TimelineDemo } from "@/components/home/Timeline";
import ToolsAndTech from "@/components/home/Tools";


export default function Home() {
  return (
    < div className="bg-white">
    <div className="">
     <HeroSlideshow />
    </div>
     
      <div className="p-1  space-y-15">
        <Overview/>
        
       
      </div>
     

      <PolymerCards/>
       

      <div className="  space-y-10">
      <TimelineDemo/>
      </div>

      <div className=" space-y-15">
        <Counter />
      </div>

      <div className=" px-2 rounded-2xl space-y-15">
        {/* <Tools /> */}
        <ToolsAndTech/>
      </div>
    </div>
  );
}
