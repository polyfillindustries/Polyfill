
import { CompanyBrief } from "@/components/CompanyBrief";
import Counter from "@/components/Counter";
import HeroSlideshow from "@/components/Hero";
import Overview from "@/components/Overview";
import { PolymerCards } from "@/components/PolymerCards";
import Timeline from "@/components/Timeline";
import { Tools } from "@/components/Tools";
import ToolsAndTech from "@/components/tt";

export default function Home() {
  return (
    <>
    <div className="bg-black">
     <HeroSlideshow />
    </div>
     
      <div className="p-8 bg-white space-y-15">
        {/* <CompanyBrief /> */}
        <Overview/>
        
       
      </div>
     
       {/* <DiagonalCard/> */}
      <PolymerCards/>
       

      <div className="p-8 bg-black space-y-10">
        <Timeline />
      </div>

      <div className="py-8  space-y-15">
        <Counter />
      </div>

      <div className="  space-y-15">
        {/* <Tools /> */}
        <ToolsAndTech/>
      </div>
    </>
  );
}
