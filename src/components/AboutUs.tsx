import React from "react";

const AboutUs: React.FC = () => {
  return (
    <section className="py-12 bg-gray-100" id="aboutus">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">About Us</h2>
        <p className="text-lg text-center mb-6">
          Welcome to Toradle, the future of market trade advisory.
          Our mission is to democratize financial success by providing accurate,
          data-driven trading recommendations for both stocks and cryptocurrencies.
        </p>
        <div className="flex flex-wrap justify-center">
          <div className="w-full md:w-1/3 p-4">
            <div className="text-center bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-center text-xl font-semibold mb-4">Our Unique Approach</h3>
              <p>
                Toradle stands apart from other trading platforms with our proprietary machine learning algorithm.
                Unlike traditional methods that rely on news reports, gossip, or graphical analysis,
                Toradle uses precision mathematics to calculate the statistical probability of price events.
                This ensures a high likelihood of success, focusing purely on quantitative data from open-source and third-party APIs.
              </p>
            </div>
          </div>
          <div className="w-full md:w-1/3 p-4">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-center text-xl font-semibold mb-4">How It Works</h3>
              <p className="text-center">
                Our algorithm continuously processes market data to identify potential buy or sell opportunities in real time.
                By avoiding the biases inherent in graphical and technical analysis, we offer our users a clear advantage.
                We also provide a unique Tranche size analysis, helping you determine the optimal budget for each trade and
                enabling cost averaging for more successful outcomes.
              </p>
            </div>
          </div>
          <div className="w-full md:w-1/3 p-4">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-center text-xl font-semibold mb-4">Our Commitment</h3>
              <p className="text-center">
                At Toradle, we believe in leveraging our expertise so you don't have to worry about creating complex trading algorithms.
                Our goal is to provide you with high-probability trade recommendations, backed by rigorous mathematical analysis and
                a commitment to accuracy. We want to give everyone a high chance of making money from the market. 
                Our mission is to demoratize financial success.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
