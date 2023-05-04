import React, { useContext } from 'react';
import Header from './Header';
import ChefInfo from './ChefInfo';
import { AuthContex } from '../../provider/AuthProvider';
import Recipes from './Recipes';
import RecipesCart from './RecipesCart';
import About from '../about/about';
import Extra from './Extra';


const Home = () => {
    const {chefs,loader}=useContext(AuthContex);
    // recive chefs and loader data from authcontex

   
    return (
        <div className='bg-gray-100'>
            <Header />
            <div >
            <h1 className='text-center text-5xl mt-16 font-semibold  '>Meet our chefs</h1>
           <div className='grid md:grid-cols-3 lg:grid-cols-3 grid-cols-1'>
            {/* using map for recive single chef data and give this data in chefinfo */}
           {chefs?.map(chef => (
                <ChefInfo key={chef.id} chef={chef}>
                    
                </ChefInfo>
            ))}
           </div>
            </div>
           <About></About>
           <Extra></Extra>
          
        </div>
    );
};

export default Home;
