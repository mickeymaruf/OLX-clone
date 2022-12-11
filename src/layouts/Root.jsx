import React from 'react';
import LoginModal from '../components/Auth/LoginModal';
import Home from '../Pages/Home/Home';
import Footer from '../Pages/Shared/Footer';
import Navbar from '../Pages/Shared/Navbar';

const Root = () => {
    return (
        <div>
            <Navbar />
            <Home />
            <Footer />
            <LoginModal />
        </div>
    );
};

export default Root;