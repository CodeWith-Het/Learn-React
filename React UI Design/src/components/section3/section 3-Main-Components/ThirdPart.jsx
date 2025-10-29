import React from "react";
import { ArrowUpRight } from "lucide-react";

const ThirdPart = () => {
  return (
    <>
    <div className="absolute -mt-[75vh] mr-15 px-3 py-3 left-[75vw] flex flex-col rounded-3xl border-2 border-black ">
      <div className="w-[80%] text-[1.5vw] flex flex-col gap-7">
        <p className="font-medium">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis,
          vero.
        </p>
        <div className="flex justify-between items-center">
        <div className="font-bold ">
        <span >See how</span>
        <span>expert</span>
        </div>
             <ArrowUpRight size={50} className="rounded-full border-2 border-black  p-2.5 mx-2"/>
        </div>
      </div>
    </div>

    <div className="absolute -mt-[37vh] mr-15 px-3 py-3 left-[75vw] flex flex-col rounded-3xl border-2 border-black bg-[#9AE600]">
      <div className="w-[80%] text-[1.5vw] flex flex-col gap-7">
        <p className="font-medium">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis,
          vero.
        </p>
        <div className="flex justify-between items-center">
        <div className="font-bold ">
        <span >Most Our</span>
        <span>expert</span>
        </div>
             <ArrowUpRight size={50} className="rounded-full border-2 border-black bg-black text-white p-2.5 mx-2"/>
        </div>
      </div>
    </div>
    
    </>
  );
};

export default ThirdPart;
