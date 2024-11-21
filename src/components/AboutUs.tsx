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

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {ABOUT_US.map((section, index) => (
            <div key={index} className="bg-gradient-to-b from-gray-800 to-gray-900 rounded-2xl shadow-2xl p-8 transition-all duration-300 hover:scale-105 hover:shadow-yellow-500/20">
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">
                {section.title}
              </h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                {section.content}
              </p>
            </div>
          ))}
        </div>

    </section>
  );
};

export default AboutUs;

// import { ABOUT_US } from "@/constants";
// import React from "react";

// const TITLE = "About Us";
// const DESC = `
//   Welcome to Toradle, the future of market trade advisory.
//   Our mission is to democratize financial success by providing accurate,
//   data-driven trading recommendations for both stocks and cryptocurrencies.
// `;

// const AboutUs: React.FC = () => {
//   return (
//     <section className="min-h-screen flex flex-col justify-center items-center py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-900 to-black" id="aboutus">
//       <div className="max-w-7xl w-full mx-auto">
//         <div className="text-center mb-16">
//           <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-8 bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-yellow-600">
//             {TITLE}
//           </h2>
//           <p className="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
//             {DESC}
//           </p>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
//           {ABOUT_US.map((section, index) => (
//             <div key={index} className="bg-gradient-to-b from-gray-800 to-gray-900 rounded-2xl shadow-2xl p-8 transition-all duration-300 hover:scale-105 hover:shadow-yellow-500/20">
//               <h3 className="text-2xl md:text-3xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">
//                 {section.title}
//               </h3>
//               <p className="text-gray-300 text-lg leading-relaxed">
//                 {section.content}
//               </p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default AboutUs;