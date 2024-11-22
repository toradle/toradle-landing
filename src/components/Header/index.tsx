import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const BETA_LINK = process.env.NEXT_PUBLIC_BETA_LINK || "";

const HeaderComp: React.FC = () => {
    return (
        <header className="flex justify-center items-center min-h-screen text-white">
            <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-7xl px-4">
                <div className="md:hidden w-full flex justify-center mb-8">
                    <Image src={"/toradle_icon.svg"} alt="toradle logo" width={320} height={320} className="w-[280px] sm:w-[320px]" />
                </div>
                <div className="text-center md:text-left space-y-6 flex-1 mb-8 md:mb-0">
                    <h1 className="text-5xl sm:text-6xl md:text-8xl font-extrabold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">
                        Toradle
                    </h1>
                    <p className="text-2xl sm:text-3xl md:text-4xl font-light tracking-wide text-gray-300">
                        Trading made simple.
                    </p>
                    <Link
                        href={BETA_LINK}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block mt-8"
                    >
                        <Button className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-black focus:bg-gradient-to-r focus:from-yellow-400 focus:to-yellow-600 active:scale-105 transform transition-all duration-300 hover:scale-110 hover:shadow-xl rounded-lg px-8 sm:px-14 py-5 sm:py-7 text-lg sm:text-xl font-semibold hover:bg-gradient-to-r hover:from-yellow-500 hover:to-yellow-700 hover:border-2 hover:border-yellow-500 hover:border-opacity-50">
                            Join the Beta Waitlist
                            <ArrowRight className="ml-3 h-5 w-5 sm:h-6 sm:w-6 transition-transform group-hover:translate-x-1" />
                        </Button>
                    </Link>
                </div>
                <div className="hidden md:flex flex-1 justify-end">
                    <Image src={"/toradle_icon.svg"} alt="toradle logo" width={320} height={320} className="w-[420px]" />
                </div>
            </div>
        </header>
    );
};

export default HeaderComp;