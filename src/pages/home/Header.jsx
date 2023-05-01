import React from 'react';
import bgv from '../../assets/pexels-cottonbro-studio-3296054-1366x720-50fps.mp4'

const Header = () => {
    return (
        <div>
           <video src={bgv} autoPlay loop muted className=' md:h-full lg:h-full sm:h-96 w-full'></video> 
           <div className='absolute top-32 left-0 text-white text-center flex flex-col justify-center items-center h-full w-full'>
            <h1 className='text-5xl'>Cooking never got any</h1>
            <h1 className='text-5xl text-green-600'>Easier</h1>
            <p className='mt-5 text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat voluptatem eligendi <br /> perferendis provident commodi beatae recusandae modi necessitatibus, at deserunt vel aut perspiciatis molestiae neque ab similique error, nemo sapiente.</p>
           </div>
        </div>
    );
};

export default Header;