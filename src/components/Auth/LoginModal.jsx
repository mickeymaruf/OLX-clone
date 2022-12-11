import React from 'react';
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

const LoginModal = () => {
    
    return (
        <div>
            <input type="checkbox" id="login-modal" className="modal-toggle" />
            <label htmlFor="login-modal" className="modal bg-black bg-opacity-80 cursor-pointer">
                <label className="modal-box w-[400px] rounded-sm relative" htmlFor="">
                    <label htmlFor="login-modal" className="btn bg-transparent border-0 text-black hover:bg-transparent text-3xl btn-sm btn-circle absolute right-2 top-2">✕</label>
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
                        <button className='w-full mb-2 bg-white text-black border-2 border-black rounded-md font-medium capitalize hover:bg-white hover:border-4 flex items-center py-2 pl-3 gap-3'><FaGoogle className='w-5 h-5' /> Continue with Phone</button>
                        <button className='w-full mb-2 bg-white text-black border-2 border-black rounded-md font-medium capitalize hover:bg-white hover:border-4 flex items-center py-2 pl-3 gap-3'><CgSmartphone className='w-5 h-5' /> Continue with Google</button>
                        <p className='text-sm font-medium text-black my-5'>OR</p>
                        <p className='text-sm font-medium text-black border-b border-black pb-[2px] inline-block mx-auto'>Login with Email</p>
                        <p className='text-xs text-accent absolute bottom-0 left-1/2 w-full mb-5 -translate-x-1/2'>
                            <p>All your personal details are safe with us. </p><br />
                            If you continue, you are accepting <p className='text-blue-700'> OLX Terms and Conditions and Privacy Policy</p>
                        </p>
                    </div>
                </label>
            </label>
        </div>
    );
};

export default LoginModal;