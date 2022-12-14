import React, { useState } from 'react';
import heroBg from '../../assets/hero_bg.png'
import phoneImg from '../../assets/phone-app.webp'
import playstore from '../../assets/playstore_2x.webp'
import appstore from '../../assets/appstore_2x.webp'
import Products from '../Products/Products';
import { Link } from 'react-router-dom';
import { IoIosArrowDown } from 'react-icons/io';

const Home = () => {
    const [arrowUp, setArrowUp] = useState(false);
    const categories = <>
        <li><Link className='hover:text-primary'>Cars</Link></li>
        <li><Link className='hover:text-primary'>Motorcycles</Link></li>
        <li><Link className='hover:text-primary'>Mobile Phones</Link></li>
        <li><Link className='hover:text-primary'>For Sale: Houses & Apartments</Link></li>
        <li><Link className='hover:text-primary'>OLX Renew (Mobile)</Link></li>
        <li><Link className='hover:text-primary'>Scooters</Link></li>
        <li><Link className='hover:text-primary'>Commercial & Other Vehicles</Link></li>
        <li><Link className='hover:text-primary'>For Rent: Houses & Apartments</Link></li>
    </>
    return (
        <div>
            <ul className="hidden lg:flex flex-wrap gap-5 py-3 mx-8 bg-base-100 w-fit text-sm">
                <li><a className='font-bold uppercase mr-10'>All Categories</a></li>
                {categories}
            </ul>
            <div className="collapse lg:hidden">
                <input onClick={() => setArrowUp(!arrowUp)} type="checkbox" />
                <div className="collapse-title">
                    <p className='font-bold uppercase text-sm mt-1 flex items-center gap-2'>All Categories <IoIosArrowDown className={`w-8 h-8 text-accent ${arrowUp || 'rotate-180'} duration-300`} /></p>
                </div>
                <ul className="collapse-content flex flex-wrap gap-5 bg-base-100 w-fit text-sm">
                    {categories}
                </ul>
            </div>
            <div className='h-[135px] relative'>
                <img className='h-full object-cover' src={heroBg} alt="" />
                <button className='absolute top-1/2 -translate-y-1/2 left-1/2 translate-x-1/2 py-1 px-5 rounded-md bg-white border-4 border-white text-black font-bold capitalize hover:bg-primary hover:text-white hover:border-white'>Sell Car</button>
            </div>
            <Products />
            <div className='flex flex-wrap justify-center items-center gap-5 bg-base-200'>
                <img src={phoneImg} alt="" />
                <div className='self-start mt-6 pb-10'>
                    <h1 className='text-3xl lg:text-4xl font-medium mb-3'>TRY THE OLX APP</h1>
                    <p className='text-sm lg:text-xl '>
                        Buy, sell and find just about anything using <br />
                        the app on your mobile.
                    </p>
                </div>
                <div className="hidden lg:flex divider lg:divider-horizontal py-8"></div>
                <div className='md:pr-5 pb-10'>
                    <h5 className='mb-2 font-medium'>GET YOUR APP TODAY</h5>
                    <div className='flex flex-wrap gap-2'>
                        <img className='w-32' src={appstore} alt="" />
                        <img className='w-32' src={playstore} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;