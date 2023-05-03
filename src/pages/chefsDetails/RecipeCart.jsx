import React from 'react';
import { FaRegStar, FaStar } from 'react-icons/fa';
import Rating from 'react-rating';

const RecipeCart = ({recipe}) => {
    console.log(recipe);
    const {details,name,elements,image,rating}=recipe;
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
    <div>
      
      <span className=' mr-2'>{rating}</span>
      <Rating
  placeholderRating={rating}
  readonly
  emptySymbol={<FaRegStar></FaRegStar>}
  placeholderSymbol={<FaStar className='text-warning'></FaStar>}
  fullSymbol={<FaStar></FaStar>}
/>
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