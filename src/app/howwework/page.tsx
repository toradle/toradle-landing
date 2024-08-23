import React from "react";
import Navigation from "@/components/Nav";
import Footer from "@/components/Footer";
import HowWeWork from "@/components/HowWeWork";

const HowWeWorkPage: React.FC = () => {
    return (
        <div className="flex flex-col min-h-screen text-white">
            <Navigation />
            <HowWeWork />
            <Footer />
        </div>
    );
};

export default HowWeWorkPage;
