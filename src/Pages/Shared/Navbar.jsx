import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/OLX-Logo.png'
import { GoSearch } from 'react-icons/go'
import { FaPlus } from 'react-icons/fa'
import { HiOutlineLocationMarker } from 'react-icons/hi'
import { BiCurrentLocation } from 'react-icons/bi'
import { MdOutlineExitToApp, MdOutlineLibraryBooks } from 'react-icons/md'
import { useAuth } from '../../contexts/AuthProvider';
import avatar from '../../assets/avatar.png';

const Navbar = ({ setLoginModal }) => {
    const { user, logOut } = useAuth();
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
                                <div className='flex items-center gap-3 text-blue-500 border-b pb-3'>
                                    <BiCurrentLocation className='w-10 h-10' />
                                    <div>
                                        <h3 className="text-base font-bold">Use current location!</h3>
                                        <p>Location blocked.Check browser/phone settings.</p>
                                    </div>
                                </div>
                                <p className='text-xs text-accent mt-2'>POPULAR LOCATIONS</p>
                                <div className='mt-5 grid gap-6'>
                                    <p className='flex items-center gap-3'><HiOutlineLocationMarker className="w-6 h-6 text-accent" /> Kerala</p>
                                    <p className='flex items-center gap-3'><HiOutlineLocationMarker className="w-6 h-6 text-accent" /> Tamil Nadu</p>
                                    <p className='flex items-center gap-3'><HiOutlineLocationMarker className="w-6 h-6 text-accent" /> Punjab</p>
                                    <p className='flex items-center gap-3'><HiOutlineLocationMarker className="w-6 h-6 text-accent" /> Maharashtra</p>
                                </div>
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
                        {
                            user?.email
                                ? <>
                                    <div className="dropdown dropdown-end">
                                        <label tabIndex={0} className="inline-block mt-2">
                                            {
                                                user.photoURL
                                                    ? <img className='w-9 mx-1 rounded-full' src={user.photoURL} alt="" />
                                                    : <img className='w-9 mx-1 rounded-full' src={avatar} alt="" />
                                            }
                                        </label>
                                        <ul tabIndex={0} className="dropdown-content menu shadow bg-base-100 rounded w-72">
                                            <div className='flex items-center gap-3 p-5 pb-8'>
                                                {
                                                    user.photoURL
                                                        ? <img className='w-14 rounded-full' src={user.photoURL} alt="" />
                                                        : <img className='w-14 rounded-full' src={avatar} alt="" />
                                                }
                                                <div>
                                                    <p className='text-sm'>Hello,</p>
                                                    <h3 className='font-bold text-lg'>{user.displayName}</h3>
                                                    <p className='text-sm underline'>View and edit profile</p>
                                                </div>
                                            </div>
                                            <div className='border-t'>
                                                <Link to="/myadds">
                                                    <button className='flex items-center gap-3 w-full p-3 text-lg hover:bg-blue-100'><MdOutlineLibraryBooks className="w-6 h-6" />My ADS</button>
                                                </Link>
                                            </div>
                                            <div className='border-t'>
                                                <button onClick={logOut} className='flex items-center gap-3 w-full p-3 text-lg hover:bg-blue-100'><MdOutlineExitToApp className="w-6 h-6 rotate-180" /> Logout</button>
                                            </div>
                                        </ul>
                                    </div>
                                </>
                                : <li><label htmlFor="login-modal" onMouseOver={() => setLoginModal(true)} className='font-medium underline'>Login</label></li>
                        }
                        <Link to="/add-product"><li><button className='sell-btn bg-white hover:bg-white ml-5 gap-2 font-medium'><FaPlus /> SELL</button></li></Link>
                    </ul>
                </div>
            </nav>
            <div className='h-1 w-full bg-base-100 drop-shadow-sm'></div>
        </header>
    );
};

export default Navbar;