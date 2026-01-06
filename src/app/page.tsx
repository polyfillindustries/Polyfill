import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";

export default function Home() {
  return (
   <>
   <Navbar/>
   <div className="p-8 space-y-4">
     <h1 className="text-4xl font-inter font-bold">HOME page</h1>
     <p className=" font-medium font-inter"> this is home page</p>
   </div>
  
   </>
  );
}
