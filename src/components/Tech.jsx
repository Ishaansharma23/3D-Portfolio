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
      className="w-full px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 mt-20"
    >
      {/* Header */}
      <div className="text-center mb-12">
        <span className="text-indigo-400 font-semibold tracking-wider text-xs sm:text-sm uppercase bg-indigo-500/10 px-4 py-1.5 rounded-full border border-indigo-500/20">
          TECHNICAL SKILLS
        </span>
        <h2 className="text-white text-3xl sm:text-5xl font-extrabold tracking-tight mt-4">
          Tech Stack & Tools
        </h2>
        <p className="mt-3 text-gray-400 text-sm sm:text-base max-w-2xl mx-auto">
          Categorized technologies and frameworks I leverage to engineer high-performance frontend applications, microservices, AI integrations, and DevOps pipelines.
        </p>
      </div>

      {/* Category Filter Pills */}
      <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-12">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-300 ${
              activeCategory === cat
                ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-[0_0_20px_rgba(99,102,241,0.4)] scale-105"
                : "bg-white/5 text-gray-400 hover:text-white hover:bg-white/10 border border-white/5"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Categorized Grid */}
      <div className="space-y-10">
        {displayedCategories.map((catGroup) => (
          <div
            key={catGroup.category}
            className="bg-[#151030]/80 backdrop-blur-xl border border-white/10 rounded-2xl p-6 md:p-8 hover:border-indigo-500/30 transition-all duration-300 shadow-xl"
          >
            {/* Category Title */}
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/10">
              <div className="flex items-center gap-3">
                <span className="text-2xl">{catGroup.icon}</span>
                <h3 className="text-white text-xl sm:text-2xl font-bold tracking-wide">
                  {catGroup.category}
                </h3>
              </div>
              <span className="text-xs sm:text-sm font-medium text-indigo-400 bg-indigo-500/10 px-3 py-1 rounded-full border border-indigo-500/20">
                {catGroup.technologies.length} Skills
              </span>
            </div>

            {/* Skills Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6">
              {catGroup.technologies.map((tech) => (
                <div
                  key={tech.name}
                  className="group flex flex-col items-center justify-center p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-indigo-500/50 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_25px_rgba(99,102,241,0.25)] cursor-pointer"
                >
                  <div className="relative w-12 h-12 sm:w-14 sm:h-14 mb-3 flex items-center justify-center">
                    <img
                      src={tech.icon}
                      alt={tech.name}
                      className={`w-10 h-10 sm:w-12 sm:h-12 object-contain transition-transform duration-300 group-hover:scale-110 ${
                        tech.invert ? "invert brightness-0" : ""
                      }`}
                    />
                    <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 bg-indigo-500/20 blur-xl transition-all duration-300" />
                  </div>
                  <span className="text-xs sm:text-sm text-gray-300 font-semibold group-hover:text-white text-center tracking-wide">
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
