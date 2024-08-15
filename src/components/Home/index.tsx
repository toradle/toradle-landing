import * as React from "react";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Image from "next/image";
import Link from "next/link";
import AboutUs from "../AboutUs";
import HowWeWork from "../HowWeWork";
import WhyChooseToradle from "../WhyChooseToradle";
import Beta from "../Beta";
import { Button } from "../ui/button";

const HomeComponent: React.FC = () => (
  <div className="flex flex-col justify-center bg-black">
    <div className="flex overflow-hidden relative flex-col pt-11 w-full">
      {/* <Image
        src="/home-bg.png"
        alt=""
        layout="fill"
        objectFit="cover"
        className="absolute inset-0 w-full h-full"
      /> */}

      <div className="flex relative flex-col w-full">

        <Header />

        <div className="flex flex-col sm:flex-row-reverse items-center sm:justify-between justify-center gap-5 mt-24 px-4 sm:px-40 py-12">
          <Image src={"/toradle_icon.svg"} alt="toradle logo" width={150} height={150} className="sm:w-[400px]" />
          <div className="flex flex-col gap-4">
            <div className="text-center sm:text-left text-7xl text-white">
              Toradle.
              <br />
              Investing made simple.
            </div>
            <div className="text-center sm:text-left text-white text-xl">
              Precision-Driven Market Trade Advisory for Stocks and Crypto
            </div>
          </div>
        </div>

        <section className="w-full text-white mb-20">
          <div className="">
            <div className="px-[10%] sm:px-40 flex flex-col justify-start items-center sm:items-start w-full sm:w-3/4">
              <h1 className="lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]">
                Join the Beta
              </h1>
              <p className="text-muted-foreground md:text-xl">
                Be one of the first to experience our groundbreaking new product. Sign up for the beta and help shape
                the future.
              </p>
              <div className="mt-6 space-x-4">
                <Link
                  href="#beta"
                >
                  <Button className="bg-toradleyellow text-black focus:bg-toradleyellow focus:text-black active:scale-105">
                    Sign Up for Beta
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <WhyChooseToradle />

        <HowWeWork />

        <AboutUs />

        <Beta />

      </div>
    </div>

    <Footer />
  </div>
);

export default HomeComponent;