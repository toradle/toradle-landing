import * as React from "react";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Image from "next/image";
// import SearchBar from "../../ui-components/elems/Searchbar";

const HomeComponent: React.FC = () => (
  <div className="flex flex-col justify-center bg-black">
    <div className="flex overflow-hidden relative flex-col pt-11 w-full min-h-[2760px] max-md:max-w-full">
      <Image
        src="/home-bg.png"
        alt=""
        layout="fill"
        objectFit="cover"
        className="absolute inset-0 w-full h-full"
      />

      <div className="flex relative flex-col self-center px-20 w-full">
        <Header home={true} />
        <div className="flex gap-5 mt-64 text-7xl text-white leading-[71px] max-md:flex-wrap max-md:mt-10 max-md:text-4xl max-md:leading-10">
          <Image src={"/toradle_icon.svg"} alt="toradle logo" width={150} height={150} />
          <div className="flex-auto max-md:max-w-full max-md:text-4xl max-md:leading-10">
            Toradle.
            <br />
            Investing made simple.
          </div>
        </div>

        <section className="flex gap-5 mt-[45%]">
          {["Step 1", "Step 2", "Step 3"].map((step, index) => (
            <div
              key={index}
              className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full"
            >
              <div className="grow justify-center px-9 py-16 w-full text-2xl font-light tracking-tight leading-9 text-white rounded-3xl border border-white border-solid shadow-md bg-cyan-800 bg-opacity-10 max-md:px-5 max-md:mt-6">
                <span className="font-bold">{step}</span>
                <br />
                <br />
                Lorem Ipsum is simply dummy text of the printing and
                typesetting industry. Lorem Ipsum has been the industry&apos;s
                standard dummy text ever since the 1500s.{" "}
              </div>
            </div>
          ))}
        </section>
        <section className="w-1/2">
          <h2 className="self-start text-7xl text-white leading-[71.28px] mt-[470px] max-md:mt-10 max-md:text-4xl">
            About us
          </h2>
          <p className="self-start mt-14 text-2xl font-light tracking-tight leading-9 text-white max-md:mt-10 max-md:max-w-full">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry&apos;s standard dummy text
            ever since the 1500s.{" "}
          </p>
        </section>
      </div>
    </div>

    <Footer />
  </div>
);

export default HomeComponent;