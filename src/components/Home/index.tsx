import * as React from "react";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Image from "next/image";
import Link from "next/link";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
// import SearchBar from "../../ui-components/elems/Searchbar";

const HomeComponent: React.FC = () => (
  <div className="flex flex-col justify-center bg-black">
    <div className="flex overflow-hidden relative flex-col pt-11 w-full min-h-[2760px] max-md:max-w-full">
      {/* <Image
        src="/home-bg.png"
        alt=""
        layout="fill"
        objectFit="cover"
        className="absolute inset-0 w-full h-full"
      /> */}

      <div className="flex relative flex-col self-center px-20 w-full">
        <Header home={true} />
        <div className="flex gap-5 mt-24 text-7xl text-white">
          <Image src={"/toradle_icon.svg"} alt="toradle logo" width={150} height={150} />
          <div className="flex-auto max-md:max-w-full">
            Toradle.
            <br />
            Investing made simple.
          </div>
        </div>

        <section className="w-full pt-12 text-white mb-10">
          <div className="space-y-10 xl:space-y-16">
            <div className="grid max-w-[1300px] mx-auto gap-4 px-4 sm:px-6 md:px-10 md:grid-cols-2 md:gap-16">
              <div>
                <h1 className="lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]">
                  Join the Beta for Our Innovative Product
                </h1>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Be one of the first to experience our groundbreaking new product. Sign up for the beta and help shape
                  the future.
                </p>
                <div className="mt-6 space-x-4">
                  <Link
                    href="#"
                    className="inline-flex h-9 items-center justify-center rounded-md bg-toradleyellow px-4 py-2 text-sm font-medium text-black shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}
                  >
                    Sign Up for Beta
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 text-white">
          <div className="container space-y-12 px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">What's in the Beta?</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  The beta program offers early access to our innovative product, with exclusive features and the
                  opportunity to provide feedback that will shape the final release.
                </p>
              </div>
            </div>
            <div className="mx-auto grid items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3">
              <div className="grid gap-1">
                <h3 className="text-lg font-bold">Early Access</h3>
                <p className="text-sm text-muted-foreground">
                  Be one of the first to experience our groundbreaking new product.
                </p>
              </div>
              <div className="grid gap-1">
                <h3 className="text-lg font-bold">Exclusive Features</h3>
                <p className="text-sm text-muted-foreground">
                  Gain access to beta-only features not available in the public release.
                </p>
              </div>
              <div className="grid gap-1">
                <h3 className="text-lg font-bold">Feedback Influence</h3>
                <p className="text-sm text-muted-foreground">
                  Your feedback will directly shape the development of the final product.
                </p>
              </div>
            </div>
          </div>
        </section>

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



        <section className="w-1/2 mt-[45%]">
          <h2 className="self-start text-7xl text-white leading-[71.28px] mt-[470px] max-md:mt-10 max-md:text-4xl">
            About us
          </h2>
          <p className="self-start mt-14 text-2xl font-light tracking-tight leading-9 text-white max-md:mt-10 max-md:max-w-full">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry&apos;s standard dummy text
            ever since the 1500s.{" "}
          </p>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 text-white" id="signup">
          <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Sign Up for the Beta</h2>
              <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Enter your email below to request access to the beta program. We'll be in touch with more details.
              </p>
            </div>
            <div className="mx-auto w-full max-w-sm space-y-2">
              <form className="flex gap-2">
                <Input type="email" placeholder="Enter your email" className="max-w-lg flex-1" />
                <Button type="submit">Sign Up</Button>
              </form>
            </div>
          </div>
        </section>



      </div>
    </div>

    <Footer />
  </div>
);

export default HomeComponent;