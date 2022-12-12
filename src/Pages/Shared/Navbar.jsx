import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/OLX-Logo.png'
import { GoSearch } from 'react-icons/go'
import { FaPlus } from 'react-icons/fa'

const Navbar = () => {
    return (
        <header className='sticky top-0 z-50'>
            <nav className="navbar bg-base-200 px-8">
                <div className='flex-1 mr-2'>
                    <Link to="/">
                        <img className="w-20" src={logo} alt="" />
                    </Link>
                    <div className="dropdown ml-3 mr-4">
                        <input tabIndex={0} className="input input-bordered w-[270px] border-2 border-black rounded-sm" placeholder='Search city, area or locality' />
                        <div tabIndex={0} className="dropdown-content card card-compact rounded-sm text-base p-2 shadow bg-base-100">
                            <div className="card-body">
                                <h3 className="card-title">Card title!</h3>
                                <p>you can use any element as a dropdown.</p>
                            </div>
                        </div>
                    </div>
                    <div className="w-full flex">
                        <input type="text" placeholder="Find Cars, Mobile Phones and more..." className="input input-bordered w-full border-2 border-black rounded-sm rounded-r-sm" />
                        <button className='btn text-white rounded-l-sm'><GoSearch className="w-6 h-6" /></button>
                    </div>
                </div>
                <div>
                    <ul className="menu menu-horizontal p-0 items-center">
                        <div className="dropdown dropdown-end">
                            <label tabIndex={0} className="m-1 p-3 font-medium">ENGLISH</label>
                            <ul tabIndex={0} className="mt-8 dropdown-content p-2 bg-base-100 rounded-sm w-64 drop-shadow-lg">
                                <li className='p-3 mb-2'>English</li>
                                <li className='p-3'>हिंदी</li>
                            </ul>
                        </div>
                        <li><label htmlFor="login-modal" className='font-medium underline'>Login</label></li>
                        <li><button className='box'><FaPlus /> SELL</button></li>
                    </ul>
                </div>
            </nav>
            <div className='h-1 w-full bg-base-100 drop-shadow-sm'></div>
        </header>
    );
};

export default Navbar;