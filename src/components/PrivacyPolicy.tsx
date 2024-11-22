import React from 'react';
import { PRIVACY_POLICY, PRIVACY_INTRO, PRIVACY_TITLE } from '@/constants/privacy';
import { EFFECTIVE_DATE } from '@/constants';
import ContactComp from './ContactComp';

const PrivacyPolicy = () => {
    return (
        <div className="max-w-6xl mx-auto py-16 px-4 sm:px-6 lg:px-8 bg-black">
            <h1 className="text-4xl font-extrabold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">
                {PRIVACY_TITLE}
            </h1>
            <div className="bg-black rounded-lg shadow-xl p-8 mb-10 border border-gray-800">
                <p className="text-yellow-400 font-semibold mb-4">
                    <strong>Effective Date:</strong> {EFFECTIVE_DATE}
                </p>
                <p className="text-gray-300 mb-6">{PRIVACY_INTRO}</p>

                {PRIVACY_POLICY.map((section, index) => (
                    <div key={index} className="mb-10">
                        <h2 className="text-2xl font-bold mb-4 text-yellow-500">{section.title}</h2>
                        {section.content && <p className="text-gray-300 mb-4">{section.content}</p>}
                        <div className="space-y-6">
                            {section.subsections && section.subsections.map((subsection, subIndex) => (
                                <div key={subIndex} className="bg-gray-900 rounded-md p-4">
                                    <h3 className="text-xl font-semibold mb-2 text-yellow-400">{subsection.subtitle}</h3>
                                    <div className="text-gray-300">
                                        <p className="mb-2">{subsection.content}</p>
                                        {subsection.list && (
                                            <ul className="list-disc list-inside space-y-1">
                                                {subsection.list.map((item, itemIndex) => (
                                                    <li key={itemIndex}>{item}</li>
                                                ))}
                                            </ul>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            <ContactComp title={PRIVACY_TITLE} />
        </div>
    );
};

export default PrivacyPolicy;