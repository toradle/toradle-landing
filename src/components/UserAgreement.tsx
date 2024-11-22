import React from 'react';
import { USER_AGREEMENT, USER_INTRO, USER_TITLE } from '@/constants/user_agreement';
import ContactComp from './ContactComp';

const UserAgreement = () => {
    return (
        <section className="max-w-6xl mx-auto py-16 px-4 sm:px-6 lg:px-8 bg-black text-white" id="user-agreement">
            <div className="bg-black-900 rounded-lg shadow-xl p-8 mb-10">
                <h1 className="text-4xl font-extrabold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">
                    {USER_TITLE}
                </h1>
                <p className="text-gray-300 mb-8">{USER_INTRO}</p>

                {USER_AGREEMENT.map((section, index) => (
                    <div key={index} className="mb-10">
                        <h2 className="text-2xl font-bold mb-4 text-yellow-500">{section.title}</h2>
                        {section.content && (
                            <p className="text-gray-300 mb-4" dangerouslySetInnerHTML={{ __html: section.content }}></p>
                        )}
                        {section.list && (
                            <ul className="list-disc list-inside text-gray-300 space-y-2">
                                {section.list.map((item, itemIndex) => (
                                    <li key={itemIndex} dangerouslySetInnerHTML={{ __html: item }}></li>
                                ))}
                            </ul>
                        )}
                    </div>
                ))}
            </div>

            <ContactComp title={USER_TITLE} />
        </section>
    );
};

export default UserAgreement;