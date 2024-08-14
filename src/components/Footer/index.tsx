import * as React from "react";
import Image from 'next/image';

type FooterProps = {
  className?: string;
};

const Footer: React.FC<FooterProps> = ({ className }) => (
  <footer className="flex relative justify-center items-center p-16 mt-10 w-full text-base bg-black text-zinc-100">
    <div className="flex flex-col my-auto max-md:max-w-full">
      <nav className="flex gap-5 self-start font-semibold">
        <a href="#">About us</a>
        <a className="flex-auto" href="#">
          How Toradle works
        </a>
        <a href="#">Careers </a>
        <a href="#">Contact us</a>
      </nav>
      <p className="mt-7 font-light tracking-tight w-3/4">
        DISCLAIMER : Toradle operates solely as an advisory platform. Our
        offerings are the product of proprietary algorithms and independent
        research, with no affiliations with any particular companies. While
        we strive to provide the most accurate advice possible, please note
        that all investments inherently involve risk. Therefore, Toradle
        cannot be held accountable for any losses incurred following our
        advisories. Users are encouraged to conduct their own due diligence
        before making any investment decisions. Thank you for your
        understanding.
      </p>
    </div>
    <Image src="/toradle_icon.svg" width={200} height={200} alt="Logo" />
  </footer>
);

export default Footer;
