import React from 'react';
import heroBg from '../../assets/hero_bg.png'
import Products from '../Products/Products';

const Home = () => {
    return (
        <div>
            <ul className="menu menu-horizontal bg-white w-full">
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
        </div>
    );
};

export default Home;