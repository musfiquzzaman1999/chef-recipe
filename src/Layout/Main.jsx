import React from 'react';
import Navbar from '../pages/home/Navbar';

import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div >
            <Navbar></Navbar>
            <div><Outlet></Outlet></div>
        </div>
    );
};

export default Main;