import React from 'react';
import heroBg from '../../assets/hero_bg.png'
import phoneImg from '../../assets/phone-app.webp'
import playstore from '../../assets/playstore_2x.webp'
import appstore from '../../assets/appstore_2x.webp'
import Products from '../Products/Products';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <ul className="flex flex-wrap gap-5 py-3 mx-8 bg-base-100 w-fit text-sm">
                <li><a className='font-bold uppercase mr-10'>All Categories</a></li>
                <li><Link className='hover:text-primary'>Cars</Link></li>
                <li><Link className='hover:text-primary'>Motorcycles</Link></li>
                <li><Link className='hover:text-primary'>Mobile Phones</Link></li>
                <li><Link className='hover:text-primary'>For Sale: Houses & Apartments</Link></li>
                <li><Link className='hover:text-primary'>OLX Renew (Mobile)</Link></li>
                <li><Link className='hover:text-primary'>Scooters</Link></li>
                <li><Link className='hover:text-primary'>Commercial & Other Vehicles</Link></li>
                <li><Link className='hover:text-primary'>For Rent: Houses & Apartments</Link></li>
            </ul>
            <div className='h-[135px] relative'>
                <img className='h-full object-cover' src={heroBg} alt="" />
                <button className='absolute top-1/2 -translate-y-1/2 left-1/2 translate-x-1/2 py-1 px-5 rounded-md bg-white border-4 border-white text-black font-bold capitalize hover:bg-primary hover:text-white hover:border-white'>Sell Car</button>
            </div>
            <Products />
            <div className='flex justify-center items-center gap-5 bg-base-200'>
                <img src={phoneImg} alt="" />
                <div className='self-start mt-6'>
                    <h1 className='text-4xl font-medium mb-3'>TRY THE OLX APP</h1>
                    <p className='text-xl'>
                        Buy, sell and find just about anything using <br />
                        the app on your mobile.
                    </p>
                </div>
                <div className="divider lg:divider-horizontal py-8"></div>
                <div>
                    <h5 className='mb-2 font-medium'>GET YOUR APP TODAY</h5>
                    <div className='flex gap-2'>
                        <img className='w-32' src={appstore} alt="" />
                        <img className='w-32' src={playstore} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;