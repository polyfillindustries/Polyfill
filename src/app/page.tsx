import AnimatedHeading from "@/components/AnimatedHeadings";
import { CompanyBrief } from "@/components/CompanyBrief";
import Counter from "@/components/Counter";
import HeroSlideshow from "@/components/Hero";
import { TimelineDemo } from "@/components/Timeline";
import { Tools } from "@/components/Tools";



export default function Home() {
  return (
   <>
   <HeroSlideshow/>
   <div className="p-8 space-y-15">
    <CompanyBrief/>
     <TimelineDemo/>
     <Counter/>

    <Tools/> 
   </div>
  
   </>
  );
}