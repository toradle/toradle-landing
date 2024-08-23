import React from 'react';
import Navigation from "@/components/Nav";
import Footer from "@/components/Footer";
import UserAgreement from '@/components/UserAgreement';

const UserAgComp = () => {
    return (
        <div className="flex flex-col min-h-screen text-white">
            <Navigation />
            <UserAgreement />
            <Footer />
        </div>
    );
};

export default UserAgComp;