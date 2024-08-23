import { ABOUT_US } from "@/constants";
import React from "react";

const TITLE = "About Us";
const DESC = `
  Welcome to Toradle, the future of market trade advisory.
  Our mission is to democratize financial success by providing accurate,
  data-driven trading recommendations for both stocks and cryptocurrencies.
`;

const AboutUs: React.FC = () => {
  return (
    <section className="flex flex-col sm:gap-20 px-8 sm:my-20 sm:py-12 sm:px-40 text-white text-center sm:text-left" id="aboutus">
      <div className="my-16">
        <h2 className="text-5xl font-bold mb-8">{TITLE}</h2>
        <p className="text-lg mb-6 w-full md:w-1/2">
          {DESC}
        </p>
      </div>

      <div className="flex flex-col gap-20 text-white">
        {ABOUT_US.map((section, index) => (
          <div key={index} className="text-center sm:text-left w-full border sm:border-none sm:p-0 rounded-xl p-5">
            <div className="rounded-lg shadow-lg">
              <h3 className="text-4xl uppercase font-semibold mb-4">{section.title}</h3>
              <p className="sm:w-1/2">
                {section.content}
              </p>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
};

export default AboutUs;