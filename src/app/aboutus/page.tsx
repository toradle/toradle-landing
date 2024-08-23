import React from "react";
import AboutUs from "@/components/AboutUs";
import Navigation from "@/components/Nav";
import Footer from "@/components/Footer";

const AboutUsPage: React.FC = () => {
    return (
        <div className="flex flex-col min-h-screen text-white">
            <Navigation />
            <AboutUs />
            <Footer />
        </div>
    );
};

export default AboutUsPage;
