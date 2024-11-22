"use client"

import type { Metadata } from "next";
import "./globals.css";
import { Inter as FontSans } from "next/font/google";

import { cn } from "@/lib/utils"
import { STYLE } from "@/constants";

import { Toaster } from "@/components/ui/toaster"

import { usePathRoute } from '../hooks/usePathRoute';


const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  usePathRoute();

  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Toradle</title>
        <meta name="description" content="Trading made simple" />
        <link rel="icon" href="/toradle_icon.svg" />
      </head>
      <body
        className={cn(
          "min-h-screen bg-background  font-sans antialiased",
          fontSans.variable
        )}
      >
        <main className="bg-black" style={STYLE}>
          {children}
        </main>
        <Toaster />
      </body>
    </html>
  );
}
