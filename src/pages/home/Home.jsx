import React, { useContext } from 'react';
import Header from './Header';
import ChefInfo from './ChefInfo';
import { AuthContex } from '../../provider/AuthProvider';

const Home = () => {
    const {chefs}=useContext(AuthContex);
   
    return (
        <div>
            <Header />
            <h1 className='text-center text-5xl mt-16'>Meet our chefs</h1>
           <div className='grid md:grid-cols-3 lg:grid-cols-3 grid-cols-1'>
           {chefs?.map(chef => (
                <ChefInfo key={chef.id} chef={chef}>
                    
                </ChefInfo>
            ))}
           </div>
        </div>
    );
};

export default Home;
