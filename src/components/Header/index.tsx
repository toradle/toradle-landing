"use client"
import Link from "next/link";
import * as React from "react";
import { Button } from "@/components/ui/button";
import { usePathname } from 'next/navigation';

import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuViewport,
    navigationMenuTriggerStyle
} from "@/components/ui/navigation-menu";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";
import { Input } from "@/components/ui/input";
import { HeaderProps, LinkItem } from "@/types/header";
import { NAV_LINKS } from "@/constants";

const NavLinks = () => {
    const currentRoute = usePathname();

    return (
        <NavigationMenu>
            <NavigationMenuList>
                {NAV_LINKS.map((item: LinkItem) => {
                    const isActive = currentRoute === item.link;
                    return (<NavigationMenuItem key={item.id}>
                        <Link href={item.link} legacyBehavior passHref>
                            <NavigationMenuLink className={`${navigationMenuTriggerStyle()} ${isActive ? 'bg-toradlegolden text-black' : ''}`}>
                                {item.title}
                            </NavigationMenuLink>
                        </Link>
                    </NavigationMenuItem>
                    );
                })}
            </NavigationMenuList>
        </NavigationMenu>
    );
};

const Header: React.FC<HeaderProps> = ({ home }) => {
    const profileName = "TEST ACCOUNT";

    const onLogin = () => {

    };

    const onLogout = () => {

    };

    if (home) {
        return (
            <header className="flex flex-col grow p-5 w-full">
                <div className="flex gap-5 justify-between w-full text-base font-bold text-center text-amber-300">
                    <Link href="/" className="uppercase text-toradleyellow font-inter text-3xl">Toradle</Link>
                    {NavLinks()}
                    <Popover>
                        <PopoverTrigger>
                            <Button className="bg-toradlegolden px-10 hover:bg-toradlegolden hover:scale-110">Login</Button>
                        </PopoverTrigger>
                        <PopoverContent>
                            <div className="flex flex-col gap-4">
                                <p className="font-bold">Login</p>
                                <Input placeholder="Email" />
                                <Input placeholder="password" />
                                <Button className="bg-toradlegolden px-10">Login</Button>
                            </div>
                        </PopoverContent>
                    </Popover>
                </div>
            </header>
        );
    } else {
        return (
            <header className="flex flex-col grow w-full p-5 px-20 bg-black">
                <div className="flex gap-5 justify-between w-full text-base font-bold text-center text-white">
                    <Link href="/" className="uppercase text-white font-inter text-3xl">Toradle</Link>
                    {NavLinks()}
                    <Popover>
                        <PopoverTrigger>
                            <Avatar>
                                <AvatarImage src="https://github.com/shadcn.png" />
                                <AvatarFallback>CN</AvatarFallback>
                            </Avatar>
                        </PopoverTrigger>
                        <PopoverContent>
                            <div className="flex flex-col gap-4">
                                <p className="font-bold">{profileName}</p>
                                <Button onClick={onLogout} className="bg-toradlegolden px-10">Logout</Button>
                            </div>
                        </PopoverContent>
                    </Popover>
                </div>
            </header>
        );
    }
};

export default Header;
