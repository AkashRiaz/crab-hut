import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import { Rating } from '@smastrom/react-rating';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { GiRoyalLove } from 'react-icons/gi';
import { BiLike } from 'react-icons/bi';


import '@smastrom/react-rating/style.css'

const ChefDetails = () => {
    const [disabledButtons, setDisabledButtons] = useState([]);

  const handleClick = (index) => {
    setDisabledButtons([...disabledButtons, index]);
    toast("This is my favorite recipe!",
        {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            }
    );
  };

  const isButtonDisabled = (index) => {
    return disabledButtons.includes(index);
  };
  const chefDetails = useLoaderData();
 
  return (
    <div>
        <div className="text-center mt-28">
        <h2 className="text-5xl font-semibold">Chef Details</h2>
        <div className="custom-border mx-auto"></div>
        <p className="text-md mt-3 font-normal text-gray-500">Specialties and Expertise</p>
       </div>
      <div>
        <div className="hero min-h-screen bg-gray-100 mt-24">
          <div className="hero-content flex-col lg:flex-row">
            <img className="md:w-1/2 w-full" src={chefDetails.chef_picture} />
            <div>
              <h1 className="text-5xl font-bold">{chefDetails.chef_name}</h1>
              <p className="py-6">{chefDetails.description}</p>
              <div className="grid md:grid-cols-3 grid-cols-1 mb-6">
                <h4 className="font-bold flex items-center">
                <span className="text-blue-600 "><BiLike className="text-lg"></BiLike></span> :
                  <span className="text-orange-500 ml-1">{chefDetails.likes}</span>
                </h4>
                <h4 className="font-bold">
                  Number of Recipes:{" "}
                  <span className="text-orange-500">
                    {chefDetails.num_recipes}
                  </span>
                </h4>
                <h4 className="font-bold">
                  Experiences:{" "}
                  <span className="text-orange-500">
                    {chefDetails.years_experience} year
                  </span>
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="grid md:grid-cols-3 grid-cols-1 gap-4 md:ml-8 ml-0 my-24">
        {chefDetails.recipes.map((recipe,ind) => (
                  <div key={ind}>
                    <div className="card card-compact h-full max-w-md md:w-96 bg-gray-100 text-black shadow-xl mx-2">
                      <div className="card-body">
                        <h2 className="card-title">{recipe.recipeName}</h2>
                         <div>
                            <p className="font-semibold">Ingredients:</p>
                         <p className="grid grid-cols-2">
                            {recipe.ingredients.map((r,i)=><p className="mr-2" key={i}>{i+1}. {r}</p>)}
                         </p>
                         </div>
                         <div>
                            <p className="font-semibold">Cooking Method:</p>
                            <p>{recipe.cookingMethod}</p>
                         </div>
                         <div className="flex items-center mt-5 flex-1">
                         <Rating style={{ maxWidth: 130 }} value={recipe.rating} readOnly />
                            <span className="text-xl ml-3">{recipe.rating}</span>
                         </div>
                         <div className="card-actions justify-center mt-5">
                          <button className="custom-secondary-btn flex items-center" disabled={isButtonDisabled(ind)}
                      onClick={() => handleClick(ind)}> <span><GiRoyalLove className="text-white mr-2 mt-1"></GiRoyalLove></span><span>Favorite</span> </button>
                          <ToastContainer />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
    </div>
  );
};

export default ChefDetails;
