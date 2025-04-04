"use client"

import * as React from "react";
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { DISCLAIMER, NAV_LINKS } from "@/constants";
import { LinkItem } from "@/types/header";
import Link from "next/link";

type FooterProps = {
  className?: string;
};

const Footer: React.FC<FooterProps> = ({ className }) => {
  const currentRoute = usePathname();

  return (
    <footer className="flex flex-col md:flex-row justify-between items-center p-4 sm:p-16 mt-10 w-full text-base text-zinc-100">
      <div className="flex flex-col my-auto max-md:max-w-full md:w-2/3">
        <nav className="flex gap-5 font-semibold justify-center md:justify-start">
          {NAV_LINKS.map((item: LinkItem) => {
            const isActive = currentRoute === item.link;
            return (
              <Link key={item.id} href={item.link} legacyBehavior passHref>
                <a className="text-toradleyellow font-bold hover:bg-yellow-600 hover:text-black px-3 py-2 rounded-md transition-all duration-300 ease-in-out">{item.title}</a>
              </Link>
            );
          })}
        </nav>
        <p className="my-7 font-light tracking-tight text-center md:text-left">
          {DISCLAIMER}
        </p>
        <nav className="flex flex-row gap-4 text-xs justify-between w-full sm:w-2/5">
          <Link href="/privacy" legacyBehavior passHref>
            <a className="text-toradleyellow font-bold hover:bg-yellow-600 hover:text-black px-2 py-1 rounded-md transition-all duration-300 ease-in-out">Privacy Policy</a>
          </Link>

          <Link href="/tnc" legacyBehavior passHref>
            <a className="text-toradleyellow font-bold hover:bg-yellow-600 hover:text-black px-2 py-1 rounded-md transition-all duration-300 ease-in-out">Terms & Conditions</a>
          </Link>

          <Link href="/user_agreement" legacyBehavior passHref>
            <a className="text-toradleyellow font-bold hover:bg-yellow-600 hover:text-black px-2 py-1 rounded-md transition-all duration-300 ease-in-out">User Agreement</a>
          </Link>
        </nav>
      </div>
      <div className="mt-10 md:mt-0">
        <Image src="/toradle_icon.svg" width={200} height={200} alt="Logo" />
      </div>
    </footer>
  );
};

export default Footer;
