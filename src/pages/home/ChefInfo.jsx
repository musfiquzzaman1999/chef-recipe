import React from 'react';
import { Link } from 'react-router-dom';
import { FaHeart } from "react-icons/fa";

const ChefInfo = ({chef}) => {
    const {name,experience,picture,recipes,id,likes} = chef;
    return (
        <div className='md:mt-16 md:px-14 lg:mt-16 lg:px-14 mt-5'>
           
            <div className="card w-96 bg-base-100 shadow-xl ">
  <figure className="px-10 pt-10">
    <img src={picture} alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{name}</h2>
    <p>Experience:{experience} years</p>
    <p>Total Recipes:{recipes} items</p>
    <p className='flex'>Likes:<FaHeart className='text-2xl mr-2 ml-2'></FaHeart> {likes}</p>
    <div className="card-actions">
      <Link to={`/chefs/${chef.id}`}><button className="btn btn-primary">details</button></Link>
    </div>
  </div>
</div>
        </div>
    );
};

export default ChefInfo;