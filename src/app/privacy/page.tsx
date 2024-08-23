import React from 'react';
import Navigation from "@/components/Nav";
import Footer from "@/components/Footer";
import PrivacyPolicy from '@/components/PrivacyPolicy';

const Privacy = () => {
    return (
        <div className="flex flex-col min-h-screen text-white">
            <Navigation />
            <PrivacyPolicy />
            <Footer />
        </div>
    );
};

export default Privacy;