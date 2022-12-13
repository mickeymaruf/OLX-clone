import React, { useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import loginEntryPointPost from '../../assets/loginEntryPointPost.webp'
import loginEntryPointChat from '../../assets/loginEntryPointChat.webp'
import loginEntryPointFavorite from '../../assets/loginEntryPointFavorite.webp'
import { Navigation, Pagination } from 'swiper';
import { FaGoogle } from 'react-icons/fa';
import { CgSmartphone } from 'react-icons/cg';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import EmailLogin from './EmailLogin';
import { useAuth } from '../../contexts/AuthProvider';
import { toast } from 'react-hot-toast';
import { isUserExist, saveUserToDB } from '../../apis/users';

const LoginModal = ({ setLoginModal }) => {
    const [loginState, setLoginState] = useState(true);
    const { googleLogin, login, createUser } = useAuth();
    const handleGoogleLogin = () => {
        googleLogin()
            .then(result => {
                const user = result.user;
                isUserExist(user?.email)
                    .then(data => {
                        if (!data.isExist) {
                            saveUserToDB({ name: user.displayName, email: user.email })
                                .then(userResult => {
                                    toast.success("Registration successful");
                                })
                                .catch(err => {
                                    toast.error(err.message)
                                    console.log(err);
                                })
                        }
                    })
                setLoginModal(null);
            })
            .catch(err => {
                toast.error(err.message);
                console.log(err);
            })
    }
    return (
        <div>
            <input type="checkbox" id="login-modal" className="modal-toggle" />
            <label htmlFor="login-modal" className="modal bg-black bg-opacity-80 cursor-pointer">
                <label className="modal-box w-[400px] rounded-md relative" htmlFor="">
                    <label htmlFor="login-modal" className="btn bg-transparent border-0 text-black hover:bg-transparent text-3xl btn-sm btn-circle absolute right-2 top-2">✕</label>

                    <button onClick={() => setLoginState(true)}>{loginState ? <AiOutlineArrowLeft className='hidden w-6 h-6' /> : <AiOutlineArrowLeft className='w-6 h-6' />}</button>
                    <button className='absolute bottom-28 left-1/2 -translate-x-1/2 text-sm font-medium text-black border-b border-black pb-[2px]' onClick={() => setLoginState(!loginState)}>{loginState ? 'Login with Email' : ''}</button>
                    {
                        loginState
                            ? <>
                                <Swiper
                                    slidesPerView={1}
                                    navigation={true}
                                    pagination={true}
                                    modules={[Navigation, Pagination]}
                                    loop={true}
                                >
                                    <SwiperSlide className='pb-14'>
                                        <div>
                                            <img className='w-24 mx-auto pb-10' src={loginEntryPointPost} alt="" />
                                            <p className='text-center font-medium'>Help us become one of the safest places <br /> to buy and sell</p>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide className='pb-14'>
                                        <div>
                                            <img className='w-24 mx-auto pb-10' src={loginEntryPointChat} alt="" />
                                            <p className='text-center font-medium'>Close deals from the comfort of your <br /> home.</p>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide className='pb-14'>
                                        <div>
                                            <img className='w-24 mx-auto pb-10' src={loginEntryPointFavorite} alt="" />
                                            <p className='text-center font-medium'>Keep all your favourites in one place.</p>
                                        </div>
                                    </SwiperSlide>
                                </Swiper>
                                <div className='text-center mt-5'>
                                    <div className='border-2 border-black mb-2 rounded-md'>
                                        <button className='w-full bg-white rounded text-black border-[3px] border-transparent hover:border-black font-medium capitalize hover:bg-white flex items-center py-2 pl-3 gap-3'><CgSmartphone className='w-5 h-5' /> Continue with Phone</button>
                                    </div>
                                    <div className='border-2 border-black mb-2 rounded-md'>
                                        <button onClick={handleGoogleLogin} className='w-full bg-white rounded text-black border-[3px] border-transparent hover:border-black font-medium capitalize hover:bg-white flex items-center py-2 pl-3 gap-3'><FaGoogle className='w-5 h-5' /> Continue with Google</button>
                                    </div>
                                    <p className='text-sm font-medium text-black my-5'>OR</p>
                                    <div className='text-xs text-accent absolute bottom-0 left-1/2 w-full mb-5 -translate-x-1/2'>
                                        <p>All your personal details are safe with us. </p><br />
                                        If you continue, you are accepting <p className='text-blue-700'> OLX Terms and Conditions and Privacy Policy</p>
                                    </div>
                                </div>
                            </>
                            : <EmailLogin setLoginModal={setLoginModal} />
                    }
                </label>
            </label>
        </div>
    );
};

export default LoginModal;