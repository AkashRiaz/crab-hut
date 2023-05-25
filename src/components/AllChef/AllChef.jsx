import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import LazyLoad from 'react-lazy-load';
import {BiLike} from 'react-icons/bi';
import {BsArrowRightCircleFill} from 'react-icons/bs';


const AllChef = () => {
  const [chefInfo, setChefInfo] = useState([]);
  useEffect(() => {
    fetch("https://chef-recipe-hunter-server-side-akashriaz.vercel.app/chefAllData")
      .then((res) => res.json())
      .then((data) => setChefInfo(data));
  }, []);
  return (
    <div>
        <div id="chef">
        <div className="text-center mt-28">
        <h2 className="text-5xl font-semibold">Our Chef Information</h2>
        <div className="custom-border mx-auto"></div>
        <p className="text-md mt-3 font-normal text-gray-500">See What Our Customers Are Saying About Us</p>
       </div>
        </div>
        <div className="grid md:grid-cols-3 grid-cols-1 md:ml-8 ml-0 gap-5 md:gap-10 my-32">
      {chefInfo.map((singleChef) => (
            <div key={singleChef.id} className="card card-compact max-w-md md:w-96 bg-base-100 shadow-xl">
            <figure>
              <LazyLoad threshold={0.95}>
              <img
                src={singleChef.chef_picture}
              />
              </LazyLoad>
            </figure>
            <div className="card-body">
              <h2 className="card-title">{singleChef.chef_name}</h2>
              <p><small>{singleChef.description}</small></p>
              <div>
                <h4 className="text-sm font-semibold flex items-center "><span className="text-blue-600 "><BiLike className="text-md"></BiLike></span> : <span className="text-orange-500 ml-1"> {singleChef.likes}</span></h4>
                <h4 className="text-sm font-semibold ">Number of Recipes: <span className="text-orange-500">{singleChef.num_recipes}</span></h4>
                <h4 className="text-sm font-semibold">Experience: <span className="text-orange-500">{singleChef.years_experience} year</span></h4>
              </div>
              <div className="card-actions justify-end items-start">
                <Link className="custom-primary-btn" to={`/chefAllData/${singleChef.id}`}><p className="flex items-center">View Recipes <span className="ml-2"><BsArrowRightCircleFill></BsArrowRightCircleFill></span></p></Link>
              </div>
            </div>
        </div>
      ))}
    </div>
    </div>
  );
};

export default AllChef;
