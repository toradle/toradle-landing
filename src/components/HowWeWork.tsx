import React from "react";

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

import { HOW_WE_WORK_SECTIONS } from "@/constants";

const TITLE = "How We Work";
const SUB_TITLE = `
    At Toradle, we redefine market trade advisory with our cutting-edge mathematical algorithm.
`;

const DESC = `
    Designed to deliver precise and reliable trading recommendations, our proprietary mathematical algorithm
    calculates the statistical probability of price events with unmatched accuracy,
    ensuring a high likelihood of successful trades.
`;

const HowWeWork: React.FC = () => {
    return (
        <section className="flex flex-col gap-20 my-16 px-8 sm:py-12 sm:px-40 bg-gradient-to-b from-black-1000 to-black" id="how-we-work">
            <div className="text-center sm:text-left">
                <h2 className="text-4xl sm:text-5xl font-extrabold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">{TITLE}</h2>
                <h2 className="text-2xl font-bold mb-8 text-white w-full sm:w-2/3">{SUB_TITLE}</h2>
                <p className="text-lg mb-6 text-gray-300 w-full sm:w-1/2">{DESC}</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {HOW_WE_WORK_SECTIONS.map((section, index) => (
                    <Card key={index} className="bg-gradient-to-b from-gray-800 to-gray-900 border border-yellow-500/30 shadow-2xl hover:shadow-yellow-500/20 transition-all duration-300 hover:scale-105">
                        <CardHeader>
                            <CardTitle className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">{section.title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <ul className="list-disc list-inside space-y-2">
                                {section.points.map((point, idx) => (
                                    <li key={idx} className="text-gray-300">{point}</li>
                                ))}
                            </ul>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </section>
    );
};

export default HowWeWork;