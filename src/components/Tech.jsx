import React, { useState } from "react";
import { technologyCategories } from "../constants";

const Tech = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", ...technologyCategories.map((c) => c.category)];

  const displayedCategories =
    activeCategory === "All"
      ? technologyCategories
      : technologyCategories.filter((c) => c.category === activeCategory);

  return (
    <section
      id="tech"
      className="w-full px-4 sm:px-8 md:px-16 lg:px-20 mt-16 max-w-7xl mx-auto"
    >
      {/* Header */}
      <div className="text-center mb-8">
        <span className="text-indigo-400 font-semibold tracking-wider text-xs uppercase bg-indigo-500/10 px-3 py-1 rounded-full border border-indigo-500/20">
          TECHNICAL SKILLS
        </span>
        <h2 className="text-white text-3xl sm:text-4xl font-extrabold tracking-tight mt-3">
          Tech Stack & Tools
        </h2>
        <p className="mt-2 text-gray-400 text-xs sm:text-sm max-w-xl mx-auto">
          Technologies and frameworks categorized across domains.
        </p>
      </div>

      {/* Category Filter Pills */}
      <div className="flex flex-wrap justify-center gap-2 mb-8">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-200 ${
              activeCategory === cat
                ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-md shadow-indigo-500/30 scale-105"
                : "bg-white/5 text-gray-400 hover:text-white hover:bg-white/10 border border-white/5"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* 2-Column Side-by-Side Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {displayedCategories.map((catGroup) => (
          <div
            key={catGroup.category}
            className="bg-[#151030]/80 backdrop-blur-md border border-white/10 rounded-xl p-4 sm:p-5 hover:border-indigo-500/30 transition-all duration-300 shadow-lg flex flex-col"
          >
            {/* Category Header (No Emojis) */}
            <div className="flex items-center justify-between mb-4 pb-2.5 border-b border-white/10">
              <h3 className="text-white text-base sm:text-lg font-bold tracking-wide">
                {catGroup.category}
              </h3>
              <span className="text-[11px] font-medium text-indigo-400 bg-indigo-500/10 px-2.5 py-0.5 rounded-full border border-indigo-500/20">
                {catGroup.technologies.length} Skills
              </span>
            </div>

            {/* Compact Skills Grid */}
            <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 gap-2.5 sm:gap-3 flex-1 items-center">
              {catGroup.technologies.map((tech) => (
                <div
                  key={tech.name}
                  className="group flex flex-col items-center justify-center p-2 sm:p-2.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/5 hover:border-indigo-500/40 transition-all duration-200 hover:scale-105 cursor-pointer"
                >
                  <div className="relative w-7 h-7 sm:w-8 sm:h-8 mb-1.5 flex items-center justify-center">
                    <img
                      src={tech.icon}
                      alt={tech.name}
                      className={`w-6 h-6 sm:w-7 sm:h-7 object-contain transition-transform duration-200 group-hover:scale-110 ${
                        tech.invert ? "invert brightness-0" : ""
                      }`}
                    />
                  </div>
                  <span className="text-[10px] sm:text-[11px] text-gray-300 font-medium group-hover:text-white text-center leading-tight tracking-tight">
                    {tech.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Tech;
