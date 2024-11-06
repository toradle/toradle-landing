import React from "react";
import Navigation from "@/components/Nav";
import Footer from "@/components/Footer";
import ContactUsForm from "./ContactForm";

const ContactUsPage: React.FC = () => {
    return (
        <div className="flex flex-col min-h-screen text-white">
            <Navigation />
            <ContactUsForm />
            <Footer />
        </div>
    );
};

export default ContactUsPage;


