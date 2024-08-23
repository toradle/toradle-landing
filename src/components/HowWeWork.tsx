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
    At Toradle, we redefine market trade advisory with our cutting-edge machine learning algorithm.
`;

const DESC = `
    Designed to deliver precise and reliable trading recommendations, our proprietary algorithm
    calculates the statistical probability of price events with unmatched accuracy,
    ensuring a high likelihood of successful trades.
`;

const HowWeWork: React.FC = () => {
    return (
        <section className="flex flex-col gap-20 my-16 px-8 sm:py-12 sm:px-40" id="how-we-work">
            <div className="text-center sm:text-left">
                <h2 className="text-3xl font-bold mb-8 text-white">{TITLE}</h2>
                <h2 className="text-xl font-bold mb-8 text-white w-full sm:w-1/2">{SUB_TITLE}</h2>
                <p className="text-sm mb-6 text-white w-full sm:w-2/5">{DESC}</p>
            </div>

            <div className="flex flex-col gap-20 text-center sm:text-left">
                {HOW_WE_WORK_SECTIONS.map((section, index) => (
                    <div className="rounded-lg shadow-lg min-h-[280px] border p-5 sm:border-none sm:p-0" key={index}>
                        <h3 className="text-3xl font-semibold mb-4">{section.title}</h3>

                        <div className="flex flex-col gap-6">
                            {section.points.map((point, idx) => (
                                <p className="w-full sm:w-2/5" key={idx}>{point}</p>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

        </section>
    );
};

export default HowWeWork;