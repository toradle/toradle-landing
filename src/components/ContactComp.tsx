import React from 'react';
import { CONTACT_EMAIL } from '@/constants';

const ContactComp = ({ title }: { title: string }) => {
    return (
        <div className="max-w-3xl mx-auto p-8 rounded-2xl bg-gradient-to-b from-gray-800 to-gray-900 border border-yellow-500/30 shadow-2xl">
            <h1 className="text-4xl font-extrabold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">
                Contact Us
            </h1>
            <div className="flex flex-col gap-4 text-gray-300">
                <p className="text-lg">
                    For any questions or concerns about these {title}, please contact us at:
                </p>
                <div className="p-4 bg-gray-800/50 rounded-lg border border-yellow-500/20 hover:border-yellow-400 transition-all duration-300">
                    <p className="text-xl font-semibold text-yellow-500">
                        Email: {CONTACT_EMAIL}
                    </p>
                </div>
                <p className="text-lg italic">
                    We value your feedback and will get back to you as soon as possible.
                </p>
                <div className="mt-4 pt-4 border-t border-yellow-500/20">
                    <p className="text-xl font-bold text-yellow-500">
                        Trade Oracle Technologies LLP
                    </p>
                    <p className="text-lg font-semibold text-yellow-400">
                        Toradle.com
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ContactComp;
