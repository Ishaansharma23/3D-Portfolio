import React from "react";
import { technologies } from "../constants";

const Tech = () => {
  return (
    <section
      id="tech"
      className="w-full px-6 sm:px-10 md:px-16 lg:px-24 xl:px-32 mt-20"
    >
      <div className="text-center mb-16">
        <h1 className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight">
          Tech Stack
        </h1>
        <p className="mt-4 text-gray-400 text-sm sm:text-base">
          Tools & technologies I use to build scalable, high-performance products
        </p>
      </div>

      <div className="w-full flex flex-wrap justify-center gap-x-10 gap-y-14">
        {technologies.map((tech) => (
          <div
            key={tech.name}
            className="group flex flex-col items-center w-24 md:w-28"
          >
            <div
              className="relative w-20 h-20 md:w-24 md:h-24
              rounded-full flex items-center justify-center
              bg-gradient-to-br from-white/10 to-white/0
              backdrop-blur-xl
              border border-white/10
              transition-all duration-300 ease-out
              hover:scale-[1.1]
              hover:border-indigo-500/70
              hover:shadow-[0_0_32px_rgba(99,102,241,0.4)]"
            >
              <img
                src={tech.icon}
                alt={tech.name}
                className={`w-8 h-8 md:w-10 md:h-10 object-contain
                transition-transform duration-300 group-hover:scale-110
                ${tech.invert ? "invert brightness-0" : ""}`}
              />
              <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 bg-indigo-500/15 blur-2xl transition" />
            </div>

            <p className="mt-3 text-xs md:text-sm text-gray-300 font-medium tracking-wide text-center">
              {tech.name}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Tech;
