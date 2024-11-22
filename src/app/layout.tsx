import type { Metadata } from "next";
import "./globals.css";
import { Inter as FontSans } from "next/font/google";

import { cn } from "@/lib/utils"
import { STYLE } from "@/constants";

import { Toaster } from "@/components/ui/toaster"

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: "Toradle",
  description: "Investing made simple",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
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
