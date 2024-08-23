import React from "react";
import Image from "next/image";
import { WHY_TORADLE_POINTS } from "@/constants";

const WhyChooseToradle: React.FC = () => {
  return (
    <section className="flex flex-col gap-10 sm:my-96 p-10 sm:p-40" id="why-choose-toradle">
        <h2 className="text-3xl font-bold text-center mt-40 text-white">Why Choose Toradle?</h2>
        <div className="flex flex-col sm:flex-row justify-evenly gap-10 sm:gap-4">
          {WHY_TORADLE_POINTS.map((point, index) => (
            <div key={index} className="h-full text-left p-5 sm:min-h-60 text-white border rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">{point.title}</h3>
              <p>{point.description}</p>
            </div>
          ))}
        </div>
    </section>
  );
};

export default WhyChooseToradle;
