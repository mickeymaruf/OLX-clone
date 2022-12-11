import React from 'react';
import logo from '../../assets/OLX-Logo.png'
import Btn from '../Btn';

const EmailLogin = () => {
    return (
        <div className='text-center'>
            <img className='w-20 mx-auto' src={logo} alt="" />
            <h2 className='text-xl font-bold'>Enter your email to login</h2>
            <input type="email" className='py-3 w-full mt-8 border border-black rounded pl-3 outline-primary' placeholder='Email' />
            <p className='bg-yellow-50 text-sm mt-10 p-3 text-left text-black-50'>If you are a new user please select any other login option from previous page.</p>
            <Btn className="mt-10">Next</Btn>
            <p className='text-xs mx-5 mt-1 text-accent'>Your email is never shared with external parties nor do we use it to spam you in any way.</p>
        </div>
    );
};

export default EmailLogin;