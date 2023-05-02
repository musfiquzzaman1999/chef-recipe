import React, { useContext } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { AuthContex } from '../../provider/AuthProvider';
import RecipeCart from './RecipeCart';
import { FaHeart } from 'react-icons/fa';

const Chefscart = () => {
    const {chefs}=useContext(AuthContex);
    console.log(chefs)
    if(!chefs){
        return <div>loading....</div>
    }
    else{
        const {id}=useParams();
        console.log(id)
        const chef = chefs?.find(n=>n.id == id)
        console.log(chef)
        
        const recipes = useLoaderData();
        
    
        return (
            <div>
             <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row">
    <img src={chef.picture} className="max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-5xl font-bold"> {chef.name}</h1>
      <p className="py-6">{chef.bio}</p>
      <p className='flex text-center'> Likes:<FaHeart className='text-2xl mr-2 ml-2'></FaHeart> {chef.likes}</p>
      <p>Expreances: {chef.experience} years</p>
      <p>Total Recipes: {chef.recipes}</p>
    </div>
  </div>
</div>
              <div className='mt-16'>
              {
                recipes.map(recipe=><RecipeCart key={recipe.id}recipe={recipe}></RecipeCart>)
               }
              </div>
            </div>
        );
    }

   
};

export default Chefscart;