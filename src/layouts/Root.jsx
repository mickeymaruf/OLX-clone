import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import LoginModal from '../components/Auth/LoginModal';
import Home from '../Pages/Home/Home';
import Footer from '../Pages/Shared/Footer';
import Navbar from '../Pages/Shared/Navbar';

const Root = () => {
    const [loginModal, setLoginModal] = useState(true);
    return (
        <div>
            <Navbar setLoginModal={setLoginModal} />
            <Outlet />
            <Footer />
            {
                loginModal &&
                <LoginModal setLoginModal={setLoginModal} />
            }
        </div>
    );
};

export default Root;