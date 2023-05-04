import React from 'react';
import bgv from '../../assets/pexels-cottonbro-studio-3296054-1366x720-50fps.mp4'

const Header = () => {
    return (
        <div>
            {/* using background video */}
           <video src={bgv} autoPlay loop muted className=' md:h-full lg:h-full sm:h-96 w-full'></video> 
           <div className='absolute md:top-32 lg:top-32 -top-44 left-0 text-white text-center flex flex-col justify-center items-center h-full w-full'>
            <h1 className='md:text-5xl lg:text-5xl text-2xl sm:mb-10'>Cooking never got any</h1>
            <h1 className='md:text-5xl lg:text-5xl text-2xl text-green-600'>Easier</h1>
            <p className='md:mt-5 lg:mt-5 md:text-lg lg:text-lg sm:text-sm'>We believe that everyone should be able to enjoy delicious, homemade meals without spending hours in the kitchen or breaking the bank. <br /> That's why we offer easy-to-follow recipes and cooking tips that anyone can master.</p>
           </div>
        </div>
    );
};

export default Header;