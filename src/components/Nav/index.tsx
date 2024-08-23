"use client"
import Link from "next/link";
import * as React from "react";
import { Button } from "@/components/ui/button";
import { usePathname } from 'next/navigation';

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
                    <PopoverContent className="w-48 p-2 mx-6 bg-transparent border-none">
                        <NavigationMenu className="">
                            <NavigationMenuList className="flex flex-col gap-4">
                                {NAV_LINKS.map((item: LinkItem) => {
                                    const isActive = currentRoute === item.link;
                                    return (
                                        <NavigationMenuItem key={item.id}>
                                            <Link href={item.link} legacyBehavior passHref>
                                                <NavigationMenuLink className="text-toradleyellow font-bold">
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
                        return (<NavigationMenuItem key={item.id}>
                            <Link href={item.link} legacyBehavior passHref>
                                <NavigationMenuLink className="text-toradleyellow bg-transparent">
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
    return (
        <header className="flex flex-col grow p-5 sm:px-40 w-full">
            <div className="flex flex-row gap-5 justify-between items-center text-base font-bold text-center text-amber-300">
                <Link href="/"
                    className="uppercase text-toradleyellow font-inter text-3xl text-center">
                        {APP_NAME}
                </Link>
                {NavLinks()}
            </div>
        </header>
    );

};

export default NavigationComp;
