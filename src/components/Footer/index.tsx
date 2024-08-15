import * as React from "react";
import Image from 'next/image';

type FooterProps = {
  className?: string;
};

const Footer: React.FC<FooterProps> = ({ className }) => (
  <footer className="flex flex-col md:flex-row justify-between items-center p-16 mt-10 w-full text-base bg-black text-zinc-100">
    <div className="flex flex-col my-auto max-md:max-w-full md:w-2/3">
      <nav className="flex gap-5 font-semibold justify-center md:justify-start">
        <a href="#aboutus">About us</a>
        <a href="#how-we-work">How Toradle works</a>
        <a href="#why-choose-toradle">Why Choose Toradle</a>
        <a href="#beta">Contact us</a>
      </nav>
      <p className="mt-7 font-light tracking-tight text-center md:text-left">
        DISCLAIMER: Toradle operates solely as an advisory platform. Our offerings are the product of proprietary algorithms and independent research, with no affiliations with any particular companies. While we strive to provide the most accurate advice possible, please note that all investments inherently involve risk. Therefore, Toradle cannot be held accountable for any losses incurred following our advisories. Users are encouraged to conduct their own due diligence before making any investment decisions. Thank you for your understanding.
      </p>
    </div>
    <div className="mt-10 md:mt-0">
      <Image src="/toradle_icon.svg" width={200} height={200} alt="Logo" />
    </div>
  </footer>
);

export default Footer;
