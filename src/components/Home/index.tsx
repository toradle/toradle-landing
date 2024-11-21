import * as React from "react";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Navigation from "@/components/Nav";
import WhyChooseToradle from "@/components/WhyChooseToradle";
import ContactUs from "@/components/Contactus";
import { STYLE } from "@/constants";

const HomeComponent: React.FC = () => (
  <div className="flex flex-col justify-center">

      <div className="flex flex-col w-full space-y-0">
        <Navigation />
        <Header />
        <WhyChooseToradle />
        <ContactUs />
      </div>

    <Footer />
  </div>
);

export default HomeComponent;