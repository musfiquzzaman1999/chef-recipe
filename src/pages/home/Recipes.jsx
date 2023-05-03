import React from 'react';
import { useLoaderData } from 'react-router-dom';
import RecipesCart from './RecipesCart';

const Recipes = () => {
    const recipes = useLoaderData()
    console.log(recipes)
    
    return (
        <div >
            <h1 className='text-5xl font-bold text-center mt-8 mb-24'>Introduce our new recipes</h1>
         <div className='grid grid-cols-3 gap-2'>
         {
            recipes.map(recipe=><RecipesCart key={recipe.id} recipe={recipe}></RecipesCart>)
          }  
         </div>
        </div>
    );
};

export default Recipes;