import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const BETA_LINK = process.env.NEXT_PUBLIC_BETA_LINK || "";

const HeaderComp: React.FC = () => {
    return (
        <header className="flex justify-center items-center p-5 text-white">
            <div className="flex flex-col sm:flex-row-reverse items-center sm:justify-between justify-center gap-8 sm:my-32 px-8 sm:px-48 py-14 sm:py-16">
                <Image src={"/toradle_icon.svg"} alt="toradle logo" width={150} height={150} className="sm:w-[400px]" />
                <div className="flex flex-col gap-6 items-center sm:items-start">
                    <div className="flex flex-col gap-2 text-center sm:text-left text-white">
                        <span className="text-7xl">Toradle.</span>
                        <span className="text-5xl">Trading made simple.</span>
                    </div>
                    <div className="text-center sm:text-left text-white text-xl">
                        Precision-driven market trade advisory for crypto
                    </div>
                    <Link
                        href={BETA_LINK}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Button className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-black focus:bg-gradient-to-r focus:from-yellow-400 focus:to-yellow-600 active:scale-105 transform transition-transform duration-300 hover:scale-110 hover:shadow-lg rounded-md px-12 py-6 text-lg font-semibold hover:bg-gradient-to-r hover:from-yellow-500 hover:to-yellow-700 hover:border-2 hover:border-yellow-500 hover:border-opacity-50">
                            Join the Beta Waitlist
                            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                        </Button>
                    </Link>
                </div>
            </div>
        </header>
    );
};

export default HeaderComp;