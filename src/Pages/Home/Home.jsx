import React from 'react';
import heroBg from '../../assets/hero_bg.png'
import phoneImg from '../../assets/phone-app.webp'
import playstore from '../../assets/playstore_2x.webp'
import appstore from '../../assets/appstore_2x.webp'
import Products from '../Products/Products';

const Home = () => {
    return (
        <div>
            <ul className="menu menu-horizontal bg-base-100 w-full">
                <li><a>Item 1</a></li>
                <li tabIndex={0}>
                    <span>Parent</span>
                    <ul className="bg-base-100">
                        <li><a>Submenu 1</a></li>
                        <li><a>Submenu 2</a></li>
                        <li><a>Submenu 3</a></li>
                    </ul>
                </li>
                <li><a>Item 3</a></li>
            </ul>
            <div className='h-[135px]'>
                <img className='h-full object-cover' src={heroBg} alt="" />
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