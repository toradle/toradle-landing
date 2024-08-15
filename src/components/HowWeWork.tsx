import React from "react";

const HowWeWork: React.FC = () => {
    return (
        <section className="py-12 bg-black" id="how-we-work">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-8 text-white">How We Work</h2>
                <p className="text-lg text-center mb-6 text-white">
                    At Toradle, we redefine market trade advisory with our cutting-edge machine learning algorithm.
                    Designed to deliver precise and reliable trading recommendations, our proprietary algorithm
                    calculates the statistical probability of price events with unmatched accuracy,
                    ensuring a high likelihood of successful trades.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="p-4">
                        <div className="text-center bg-gray-100 p-6 rounded-lg shadow-lg min-h-[280px]">
                            <h3 className="text-center text-xl font-semibold mb-4">Data Collection and Analysis</h3>
                            <ul className="list-disc list-inside">
                                <li>Toradle utilizes open-source and third-party APIs to gather comprehensive market data, focusing solely on quantitative information.</li>
                                <li>Our algorithm processes this data using advanced mathematical models to identify potential price events, free from the influence of news reports, social media, or speculative rumors.</li>
                            </ul>
                        </div>
                    </div>

                    <div className="p-4">
                        <div className="bg-gray-100 p-6 rounded-lg shadow-lg min-h-[280px]">
                            <h3 className="text-center text-xl font-semibold mb-4">Algorithmic Strategy Development</h3>
                            <ul className="list-disc list-inside">
                                <li>The core of Toradle is its sophisticated machine learning algorithm, which is built on precision mathematics and proprietary logic.</li>
                                <li>Our algorithm calculates the statistical probability of price events, indicating whether there is a high likelihood of a sell or a buy opportunity.</li>
                            </ul>
                        </div>
                    </div>

                    <div className="p-4">
                        <div className="bg-gray-100 p-6 rounded-lg shadow-lg min-h-[280px]">
                            <h3 className="text-center text-xl font-semibold mb-4">Real-Time Market Monitoring</h3>
                            <ul className="list-disc list-inside">
                                <li>Toradle continuously monitors the market in real-time, ensuring that our recommendations are always based on the latest data.</li>
                                <li>The algorithm updates its calculations instantly as new data becomes available, providing you with timely and actionable insights.</li>
                            </ul>
                        </div>
                    </div>

                    <div className="p-4">
                        <div className="bg-gray-100 p-6 rounded-lg shadow-lg min-h-[280px]">
                            <h3 className="text-center text-xl font-semibold mb-4">No Charting or Graphical Analysis</h3>
                            <ul className="list-disc list-inside">
                                <li>Unlike other algorithmic trading platforms, Toradle does not rely on charting or graphical analysis.</li>
                                <li>Our approach is purely mathematical, focusing on data-driven insights and statistical probabilities to guide your trading decisions.</li>
                            </ul>
                        </div>
                    </div>

                    <div className="p-4">
                        <div className="bg-gray-100 p-6 rounded-lg shadow-lg min-h-[280px]">
                            <h3 className="text-center text-xl font-semibold mb-4">Expert-Driven Trade Recommendations</h3>
                            <ul className="list-disc list-inside">
                                <li>Toradle offers expert-driven trade recommendations, eliminating the need for users to create their own trading algorithms.</li>
                                <li>Our platform provides clear, concise advice based on our internal expertise, giving you a high probability of success with each trade.</li>
                            </ul>
                        </div>
                    </div>

                    <div className="p-4">
                        <div className="bg-gray-100 p-6 rounded-lg shadow-lg min-h-[280px]">
                            <h3 className="text-center text-xl font-semibold mb-4">Tranche Size Analysis</h3>
                            <ul className="list-disc list-inside">
                                <li>Unique to Toradle, our platform includes Tranche size analysis, helping you determine the optimal budget for any trade.</li>
                                <li>By using cost averaging techniques, we enable you to make informed and successful trades, minimizing risk and maximizing returns.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HowWeWork;
