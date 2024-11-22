import React from "react";
import { WHY_TORADLE_POINTS } from "@/constants";

const WhyChooseToradle: React.FC = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-grey-900 to-black" id="why-choose-toradle">
      <div className="max-w-7xl w-full mx-auto">
        {/* Section Title */}
        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-yellow-600">
          Why Choose Toradle?
        </h2>

        {/* Cards Container */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {WHY_TORADLE_POINTS.map((point, index) => (
            <div
              key={index}
              className="h-full flex flex-col justify-between p-8 text-white border border-yellow-500/30 rounded-2xl shadow-2xl bg-gradient-to-b from-gray-800 to-gray-900 transition-all duration-300 hover:scale-105 hover:border-yellow-400 hover:shadow-yellow-500/20 group"
            >
              {/* Card Title */}
              <h3 className="text-2xl font-bold mb-4 text-center bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent group-hover:from-yellow-300 group-hover:to-yellow-500 transition-colors duration-300">
                {point.title}
              </h3>

              {/* Card Description */}
              <p className="text-lg leading-relaxed text-center text-gray-300 group-hover:text-white transition-colors duration-300">
                {point.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseToradle;
