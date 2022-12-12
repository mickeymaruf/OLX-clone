import React, { useState } from 'react';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import logo from '../../assets/OLX-Logo.png'
import { useAuth } from '../../contexts/AuthProvider';
import Btn from '../Btn';

const EmailLogin = ({ setLoginModal }) => {
    const { login, createUser, updateUser } = useAuth();
    const [registerPage, setRegisterPage] = useState(false);
    const [error, setError] = useState(null);
    const [registrationError, setRegistrationError] = useState(null);
    const navigate = useNavigate();
    const handleLogin = (e) => {
        e.preventDefault();
        setError(null);
        const email = e.target.email.value;
        // check either the user is exist or not in the db
        fetch(`${import.meta.env.VITE_APP_API_URL}/isUserExist?email=${email}`)
            .then(res => res.json())
            .then(data => {
                if (!data.isExist) {
                    setError('userNotFound');
                }
            })
        return
        const password = e.target.password.value;
        login(email, password)
            .then(result => {
                const user = result.user;
                e.target.reset();
            })
            .catch(err => {
                setError(err.message);
                console.log(err);
            })
    }
    const handleRegister = (e) => {
        e.preventDefault();
        setRegistrationError(null);

        const email = e.target.email.value;
        const name = e.target.name.value;
        const password = e.target.password.value;
        const confirmPassword = e.target.confirmPassword.value;
        if (password !== confirmPassword) {
            setRegistrationError("Password didn't match");
            return
        }
        createUser(email, password)
            .then(result => {
                updateUser(name).then(() => {
                    setLoginModal(null);
                    toast.success("Registration successful");
                })
            })
            .catch(err => {
                setRegistrationError(err.message)
                console.log(err);
            })
    }
    return (
        <div className='text-center relative'>
            <img className='w-20 mx-auto' src={logo} alt="" />
            {
                error === 'userNotFound' &&
                <div className={`absolute bottom-[205px] text-sm text-red-500 ${registerPage ? 'hidden' : ''}`}>Email not registered! <button onClick={() => setRegisterPage(true)} className='text-black underline'>Want to Register?</button></div>
            }
            {
                registerPage
                    ? <>
                        <h2 className='text-xl font-bold'>Register your account</h2>
                        <form onSubmit={handleRegister}>
                            <input type="email" name='email' className='py-3 w-full mt-8 border border-black rounded pl-3 outline-primary' placeholder='Email' required />
                            <input type="text" name='name' className='py-3 w-full mt-3 border border-black rounded pl-3 outline-primary' placeholder='Full name' required />
                            <input type="password" name='password' className='py-3 w-full mt-3 border border-black rounded pl-3 outline-primary' placeholder='Password' required />
                            <input type="password" name='confirmPassword' className='py-3 w-full mt-3 border border-black rounded pl-3 outline-primary' placeholder='Confirm password' required />
                            {
                                registrationError &&
                                <div className='text-sm text-red-500 text-left mt-2'>{registrationError}</div>
                            }
                            <p className='bg-yellow-50 text-sm mt-10 p-3 text-left text-black-50'>If you are a new user please select any other login option from previous page.</p>
                            <Btn className="mt-10">Register</Btn>
                        </form>
                        <p className='text-xs mx-5 mt-1 text-accent'>Your email is never shared with external parties nor do we use it to spam you in any way.</p>
                    </>
                    : <>
                        <h2 className='text-xl font-bold'>Enter your email to login</h2>
                        <form onSubmit={handleLogin}>
                            <input type="email" name='email' className='py-3 w-full mt-8 border border-black rounded pl-3 outline-primary' placeholder='Email' required />

                            <p className='bg-yellow-50 text-sm mt-10 p-3 text-left text-black-50'>If you are a new user please select any other login option from previous page.</p>
                            <Btn className="mt-10">Next</Btn>
                        </form>
                        <p className='text-xs mx-5 mt-1 text-accent'>Your email is never shared with external parties nor do we use it to spam you in any way.</p>
                    </>
            }
        </div >
    );
};

export default EmailLogin;