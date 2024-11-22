import React from 'react';
import { T_AND_C, TNC_INTRO, TNC_TITLE } from '@/constants/t_and_c';
import { EFFECTIVE_DATE } from '@/constants';
import ContactComp from './ContactComp';

const TermsConditions = () => {
    return (
        <section className="max-w-6xl mx-auto py-16 px-4 sm:px-6 lg:px-8 text-white" id="aboutus">
            <div className="bg-black-800 rounded-lg shadow-xl p-8 mb-10">
                <h1 className="text-4xl font-extrabold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">
                    {TNC_TITLE}
                </h1>
                <p className="text-yellow-400 font-semibold mb-4">
                    <strong>Effective Date:</strong> {EFFECTIVE_DATE}
                </p>
                <p className="text-gray-300 mb-6">{TNC_INTRO}</p>

                {T_AND_C.map((section, index) => (
                    <div key={index} className="mb-10">
                        <h2 className="text-2xl font-bold mb-4 text-yellow-500">{section.title}</h2>
                        {section.content && <p className="text-gray-300 mb-4">{section.content}</p>}
                        {section.list && section.list.map((item, itemIndex) => (
                            <p key={itemIndex} className="text-gray-300 mb-2">{item}</p>
                        ))}
                        {section.subsections && section.subsections.map((subsection, subIndex) => (
                            <div key={subIndex} className="ml-4 mb-4">
                                <h3 className="text-xl font-semibold mb-2 text-yellow-400">{subsection.subtitle}</h3>
                                <p className="text-gray-300 mb-2">{subsection.content}</p>
                                {subsection.list && (
                                    <ul className="list-disc list-inside text-gray-300">
                                        {subsection.list.map((item, itemIndex) => (
                                            <li key={itemIndex} className="mb-1">{item}</li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                        ))}
                    </div>
                ))}
            </div>

            <ContactComp title={TNC_TITLE} />
        </section>
    );
};

export default TermsConditions;