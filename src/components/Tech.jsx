import React from "react";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {
  return (
    <div className="flex flex-row flex-wrap justify-center gap-8 p-10 w-full ">
      {technologies.map((technology) => (
        <div
          key={technology.name}
          className="w-32 h-32 flex flex-col items-center justify-center 
          p-4 rounded-2xl shadow-lg 
          bg-gray-800 
          hover:bg-gray-700 
          hover:scale-110 transition-all duration-300 ease-in-out
          border border-gray-700 hover:border-indigo-500"
        >
          <img
            src={technology.icon}
            alt={technology.name}
            className="w-14 h-14 object-contain drop-shadow-lg"
          />
          <p className="mt-3 text-sm font-semibold text-white text-center">
            {technology.name}
          </p>
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");
