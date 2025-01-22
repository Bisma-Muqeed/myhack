import { AccordionDemo } from "@/app/components/accordion";
import { CheckboxDemo } from "@/app/components/checkbox";
import { Dressstyle } from "@/app/components/dressstyle";
import CasualShirts from "@/app/components/shirts";
import Size from "@/app/components/size";
import { SliderDemo } from "@/app/components/slider";

export default function Casual(){
    return(
        <main className="flex flex-col sm:flex-row justify-center items-center space-x-6">
            {/* left */}
           <div className="w-full h-full md:w-[295px] md:h-[1200px] border rounded-[16px]">
                <AccordionDemo/>
                <SliderDemo/>
                <CheckboxDemo/>
                <Size/>
                <Dressstyle/>
           </div>
           {/* right */}
           <div className="w-full md:w-[900px] h-full sm:h-[1200px] ">
            <CasualShirts/>
           </div>
        </main>
    )
}