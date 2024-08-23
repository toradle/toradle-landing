import React from 'react';
import { T_AND_C, TNC_INTRO, TNC_TITLE } from '@/constants/t_and_c';
import { CONTACT_EMAIL, EFFECTIVE_DATE  } from '@/constants';
import ContactComp from './ContactComp';

const TermsConditions = () => {
    return (
        <section className="flex flex-col gap-10 px-6 sm:my-20 sm:py-12 sm:px-40 text-white text-left" id="aboutus">
            <h1 className='text-3xl font-bold'>{TNC_TITLE}</h1>
            <p>Effective Date:{EFFECTIVE_DATE}</p>
            <p>{TNC_INTRO}</p>

            {T_AND_C.map((section, index) => (
                <div key={index}>
                    <h2 className='text-2xl font-bold'>{section.title}</h2>
                    {section.content && <p>{section.content}</p>}
                    {section.list && section.list.map((item, itemIndex) => (
                        <p key={itemIndex}>{item}</p>
                    ))}
                    {section.subsections && section.subsections.map((subsection, subIndex) => (
                        <div key={subIndex} className='ml-4'>
                            <h3 className='text-md font-bold'>{subsection.subtitle}</h3>
                            <p className='ml-4'>{subsection.content}</p>
                            {subsection.list && (
                                <ul>
                                    {subsection.list.map((item, itemIndex) => (
                                        <li key={itemIndex}>{item}</li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    ))}
                </div>
            ))}

            <ContactComp title={TNC_TITLE}/>

        </section>
    );
};

export default TermsConditions;