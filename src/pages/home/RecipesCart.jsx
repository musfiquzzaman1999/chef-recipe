import React from 'react';

const RecipesCart = ({recipe}) => {
    const {name,image,details}=recipe
    return (
        <div>
           <div className="card w-96 bg-base-100 shadow-xl">
  <figure><img src={image} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{name}</h2>
    <p>{details}</p>
   
  </div>
</div>
        </div>
    );
};

export default RecipesCart;