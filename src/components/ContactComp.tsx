import React from 'react';
import { CONTACT_EMAIL } from '@/constants';

const ContactComp = ({ title }: any) => {
    return (
        <div>
            <h1 className='text-3xl font-bold mb-4'>Contact Us</h1>
            <div className='flex flex-col gap-1'>
                <p>For any questions or concerns about these {title}, please contact us at:</p>
                <p className='font-bold'>Email: {CONTACT_EMAIL}</p>
                <p>We value your feedback and will get back to you as soon as possible.</p>
                <p className='font-bold'>Trade Oracle Technologies LLP</p>
                <p className='font-bold'>Toradle.com</p>
            </div>
        </div>
    );
};

export default ContactComp;
