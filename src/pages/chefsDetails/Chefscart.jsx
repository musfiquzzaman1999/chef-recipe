import React, { useContext } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { AuthContex } from '../../provider/AuthProvider';
import RecipeCart from './RecipeCart';

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
               <div className='text-center'>
                <h1 className='font-semibold text-5xl mt-10'>Welecome to my profile</h1>
                <h1 className='font-semibold text-4xl mt-10'>Myself {chef?.name}</h1>
                <div className="avatar">
  <div className="w-52 rounded-full mt-5">
    <img src={chef?.picture} />
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