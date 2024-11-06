import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const HeaderComp: React.FC = () => {
    return (
        <header className="flex justify-center items-center p-5 text-white">
            <div className="flex flex-col sm:flex-row-reverse items-center sm:justify-between justify-center gap-5 my-24 px-4 sm:px-40 py-12">
                <Image src={"/toradle_icon.svg"} alt="toradle logo" width={150} height={150} className="sm:w-[400px]" />
                <div className="flex flex-col gap-4 items-center sm:items-start">
                    <div className="text-center sm:text-left text-7xl text-white">
                        Toradle.
                        <br />
                        Investing made simple.
                    </div>
                    <div className="text-center sm:text-left text-white text-xl">
                        Precision-Driven Market Trade Advisory for Stocks and Crypto
                    </div>
                    <Link
                        href="/dashboard"
                    >
                        <Button className="bg-toradleyellow text-black focus:bg-toradleyellow focus:text-black active:scale-105">
                            Use the App
                        </Button>
                    </Link>
                </div>
            </div>
        </header>
    );
};

export default HeaderComp;

