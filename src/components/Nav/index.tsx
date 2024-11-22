"use client"
import Link from "next/link";
import * as React from "react";
import { Button } from "@/components/ui/button";
import { usePathname } from 'next/navigation';
import Image from "next/image";

import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
} from "@/components/ui/navigation-menu";

import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";
import { LinkItem } from "@/types/header";
import { APP_NAME, NAV_LINKS } from "@/constants";
import { Menu } from "lucide-react";

const NavLinks = () => {
    const currentRoute = usePathname();

    return (
        <>
            <div className="block sm:hidden">
                <Popover>
                    <PopoverTrigger asChild className="p-2 !bg-transparent hover:bg-transparent">
                        <Button variant="ghost" className="p-2 focus:bg-transparent">
                            <Menu className="bg-transparent text-toradleyellow" />
                        </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-50 p-2 mx-6 bg-black border-none">
                        <NavigationMenu className="">
                            <NavigationMenuList className="flex flex-col gap-4">
                                {NAV_LINKS.map((item: LinkItem) => {
                                    const isActive = currentRoute === item.link;
                                    return (
                                        <NavigationMenuItem key={item.id}>
                                            <Link href={item.link} legacyBehavior passHref>
                                                <NavigationMenuLink className={`text-white font-bold transition duration-300 ease-in-out transform hover:bg-yellow-500 hover:text-black px-3 py-2 rounded ${isActive ? 'scale-105' : 'hover:scale-105'}`}>
                                                    {item.title}
                                                </NavigationMenuLink>
                                            </Link>
                                        </NavigationMenuItem>
                                    );
                                })}
                            </NavigationMenuList>
                        </NavigationMenu>
                    </PopoverContent>
                </Popover>
            </div>
            <NavigationMenu className="hidden sm:block">
                <NavigationMenuList className="flex flex-row gap-10">
                    {NAV_LINKS.map((item: LinkItem) => {
                        const isActive = currentRoute === item.link;
                        return (
                            <NavigationMenuItem key={item.id}>
                                <Link href={item.link} legacyBehavior passHref>
                                    <NavigationMenuLink className={`text-white bg-transparent transition duration-300 ease-in-out transform hover:bg-yellow-500 hover:text-black px-3 py-2 rounded ${isActive ? 'scale-105' : 'hover:scale-105'}`}>
                                        {item.title}
                                    </NavigationMenuLink>
                                </Link>
                            </NavigationMenuItem>
                        );
                    })}
                </NavigationMenuList>
            </NavigationMenu>
        </>
    );
};

const NavigationComp = () => {
    const currentRoute = usePathname();
    return (
        <header className="flex flex-col grow p-6 sm:px-40 w-full bg-black bg-opacity-40 backdrop-blur-lg border-b border-gray-700">

            <div className="flex flex-row gap-8 justify-between items-center text-base font-bold text-center">
                {/* Logo */}
                <div className="flex flex-row items-center gap-2">

                    {currentRoute !== "/" && (
                        <Image src="/toradle_icon.svg" alt="toradle logo" width={50} height={50} />
                    )}
                    <Link
                        href="/"
                        className="uppercase text-toradleyellow font-inter text-4xl"
                    >
                        {APP_NAME}
                    </Link>
                </div>

                {/* Navigation Links */}
                {NavLinks()}
            </div>
        </header>
    );
};

export default NavigationComp;
