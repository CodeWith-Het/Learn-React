import React from "react";
import { ArrowRight } from "lucide-react";

const FirstPart = () => {
  return (
    <div className="relative bottom-[55vh] flex flex-col pl-[10vw] pt-20">
      <span className="text-6xl flex gap-4">
        <h1>Our</h1>
        <h1 className="rounded-3xl bg-[#9AE600] px-4 py-1">Services</h1>
      </span>
      <p className="w-1/3 mt-5 font-medium">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam nesciunt
        sapiente harum amet facilis nostrum.
      </p>
      <div className="mt-10 flex items-center gap-4 border-2 border-black rounded-full px-7 py-3 w-[470px] bg-white shadow-md">
        <div className="font-extrabold text-[#9AE600] text-xl mr-2">
          01
        </div>
        <div className="font-semibold text-xl flex-1">
          UI/UX Design
        </div>
        <ArrowRight size={28} strokeWidth={2} />
      </div>

      <div className="mt-10 flex items-center gap-4 border-2 border-black rounded-full px-7 py-3 w-[470px] bg-white shadow-md">
        <div className="font-extrabold text-[#9AE600] text-xl mr-2">
          02
        </div>
        <div className="font-semibold text-xl flex-1">
          Web Deveiopment
        </div>
        <ArrowRight size={28} strokeWidth={2} />
      </div>

      <div className="mt-10 flex items-center gap-4 border-2 border-black rounded-full px-7 py-3 w-[470px] bg-white shadow-md">
        <div className="font-extrabold text-[#9AE600] text-xl mr-2">
          03
        </div>
        <div className="font-semibold text-xl flex-1">
          3D Design
        </div>
        <ArrowRight size={28} strokeWidth={2} />
      </div>

      <div className="mt-10 flex items-center gap-4 border-2 border-black rounded-full px-7 py-3 w-[470px] bg-white shadow-md">
        <div className="font-extrabold text-[#9AE600] text-xl mr-2">
          04
        </div>
        <div className="font-semibold text-xl flex-1">
          Motion Graphics
        </div>
        <ArrowRight size={28} strokeWidth={2} />
      </div>
    </div>
  );
};

export default FirstPart;
