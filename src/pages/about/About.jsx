import React from 'react';
import { Link } from 'react-router-dom';

import aboutImage from '../../assets/top-view-table-full-delicious-food-composition_23-2149141352.avif';

const AboutUsPage = () => {
  return (
    <div className="bg-gray-100 py-12">
      <div className="container mx-auto flex flex-wrap">
        <div className="w-full md:w-1/2 p-6">
          <img src={aboutImage} alt="About Us" className="w-full object-cover object-center rounded-lg shadow-md" />
        </div>
        <div className="w-full md:w-1/2 p-6">
          <div className="rounded-lg shadow-md p-6 bg-white">
            <h1 className="text-3xl font-bold mb-4">About Us</h1>
            <p className="mb-4">
              At Recipe World, we're passionate about sharing delicious and healthy recipes with the world. Our team of chefs and food enthusiasts work tirelessly to create and curate the best recipes from around the globe, so you can enjoy restaurant-quality meals from the comfort of your own home.
            </p>
            <p className="mb-4">
              Whether you're looking for quick and easy weeknight meals, decadent desserts, or exotic dishes to impress your guests, we've got you covered. With thousands of recipes to choose from, you're sure to find something that suits your taste and dietary preferences.
            </p>
            <p className="mb-4">
              We're committed to providing our users with the best possible experience, which is why we've made our website easy to use and navigate. You can browse our recipes by category, cuisine, or dietary restrictions, and save your favorites for later. Plus, our responsive design ensures that you can access our website from any device, anywhere in the world.
            </p>
            <Link to="/contact" className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsPage;