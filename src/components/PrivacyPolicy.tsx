import React from 'react';
import { PRIVACY_POLICY, PRIVACY_INTRO, PRIVACY_TITLE } from '@/constants/privacy';
import { EFFECTIVE_DATE  } from '@/constants';
import ContactComp from './ContactComp';

const PrivacyPolicy = () => {
    return (
        <div className='flex flex-col gap-10 px-6 sm:my-20 sm:py-8 sm:px-40 text-white text-left'>
            <h1 className='text-3xl font-bold'>{PRIVACY_TITLE}</h1>
            <p><strong>Effective Date:</strong>{EFFECTIVE_DATE}</p>
            <p>{PRIVACY_INTRO}</p>

            {PRIVACY_POLICY.map((section, index) => (
                <div key={index}>
                    <h2 className='text-2xl font-bold mb-2'>{section.title}</h2>
                    {section.content && <p>{section.content}</p>}
                    <div className='flex flex-col gap-4'>
                    {section.subsections && section.subsections.map((subsection, subIndex) => (
                        <div key={subIndex} className='ml-4'>
                            <h3 className='text-md font-bold'>{subsection.subtitle}</h3>
                            <div className='ml-4'>
                                <p>{subsection.content}</p>
                                {subsection.list && (
                                    <ul className='flex flex-col gap-1'>
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

            <ContactComp title={PRIVACY_TITLE}/>

        </div>
    );
};

export default PrivacyPolicy;