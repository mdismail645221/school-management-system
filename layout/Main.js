import React from 'react';
import { Outlet } from 'react-router-dom';
// import Footer from '../pages/Footer/Footer';
// import Header from '../pages/Header/Header';
import Navbar from '../pages/Shared/Navber';

const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            {/* <Footer></Footer> */}
        </div>
    );
};

export default Main;