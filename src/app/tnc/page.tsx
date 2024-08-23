import React from 'react';
import Navigation from "@/components/Nav";
import Footer from "@/components/Footer";
import TermsConditions from '@/components/TermsConditions';

const TNC = () => {
    return (
        <div className="flex flex-col min-h-screen text-white">
            <Navigation />
            <TermsConditions />
            <Footer />
        </div>
    );
};

export default TNC;