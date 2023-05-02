import React from 'react';
import Navbar from '../pages/home/Navbar';

import { Outlet } from 'react-router-dom';
import Footer from '../footer/footer';

const Main = () => {
    return (
        <div >
            <Navbar></Navbar>
            <div><Outlet></Outlet></div>
            <Footer></Footer>
        </div>
    );
};

export default Main;