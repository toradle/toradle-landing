import React from "react";
const points = [
  {
    title: "Precision and Accuracy",
    description: "Our algorithm's foundation in precision mathematics ensures highly accurate and reliable trade recommendations."
  },
  {
    title: "Purely Data-Driven",
    description: "Toradle's reliance on quantitative data from open-source and third-party APIs guarantees unbiased and objective insights."
  },
  {
    title: "No User Algorithms Needed",
    description: "Trust in our expertise to provide you with effective trading strategies, without the need for you to develop your own algorithms."
  },
  {
    title: "Unique Tranche Size Feature",
    description: "Benefit from our unique Tranche size analysis to optimize your trade budgets and enhance your trading success."
  }
];

const WhyChooseToradle: React.FC = () => {
  return (
    <section className="py-12 bg-gray-100" id="why-choose-toradle">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Why Choose Toradle?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {points.map((point, index) => (
            <div key={index} className="p-4">
              <div className="text-center bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold mb-4">{point.title}</h3>
                <p>{point.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseToradle;
