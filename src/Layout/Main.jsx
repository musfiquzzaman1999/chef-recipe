import React from 'react';
import Navbar from '../pages/home/Navbar';

import { Outlet } from 'react-router-dom';
import Footer from '../footer/footer';

const Main = () => {
    return (
        <div >
            <Navbar></Navbar>
            <div className='md:min-h-[calc(100vh-300px)]'>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Main;