import React from 'react';

const RecipeCart = ({recipe}) => {
    console.log(recipe);
    const {details,name,elements,image}=recipe;
    return (
        <div className='mt-5'>
            <div className="card lg:card-side bg-base-100 shadow-xl w-1/2 mx-auto">
  <figure><img src={image} alt="Album" className='w-full'/></figure>
  <div className="card-body">
    <h2 className="card-title">{name}</h2>
    <p>{details}</p>
    <div>
        {
            elements.map(e=><li>{e}</li>)
        }
    </div>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Listen</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default RecipeCart;