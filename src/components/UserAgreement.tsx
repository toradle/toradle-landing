import React from 'react';
import { USER_AGREEMENT, USER_INTRO, USER_TITLE } from '@/constants/user_agreement';
import { CONTACT_EMAIL } from '@/constants';
import ContactComp from './ContactComp';

const UserAgreement = () => {
    return (
        <section className="flex flex-col gap-10 px-6 sm:my-20 sm:py-12 sm:px-40 text-white text-left" id="aboutus">
            <h1 className='text-3xl font-bold'>{USER_TITLE}</h1>
            <p>{USER_INTRO}</p>

            {USER_AGREEMENT.map((section, index) => (
                <div key={index}>
                    <h2 className='text-2xl font-bold'>{section.title}</h2>
                    {section.content && <p dangerouslySetInnerHTML={{ __html: section.content }}></p>}
                    {section.list && (
                        <ul className='ml-4'>
                            {section.list.map((item, itemIndex) => (
                                <li key={itemIndex} dangerouslySetInnerHTML={{ __html: item }}></li>
                            ))}
                        </ul>
                    )}
                </div>
            ))}

            <ContactComp title={USER_TITLE}/>
        </section>
    );
};

export default UserAgreement;