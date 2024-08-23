import React from "react";
import Navigation from "@/components/Nav";
import Footer from "@/components/Footer";
import ContactUs from "@/components/Contactus";

const ContactUsPage: React.FC = () => {
    return (
        <div className="flex flex-col min-h-screen text-white">
            <Navigation />
            <ContactUs />
            <Footer />
        </div>
    );
};

export default ContactUsPage;
