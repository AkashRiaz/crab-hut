import React from "react";

const Hero = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: `url("https://images.pexels.com/photos/1907228/pexels-photo-1907228.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")`,
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-lg">
          <h1 className="mb-5 text-3xl font-bold">
            Experience Authentic Chinese Cuisine at Our Restaurant
          </h1>
          <div className="custom-border mx-auto"></div>
          <p className="mb-5 mt-5">
            Indulge in our expertly crafted dishes made with the freshest
            ingredients and traditional Chinese cooking techniques. From savory
            stir-fries to mouth-watering dumplings, our menu has something for
            everyone. Join us for an unforgettable dining experience that will
            transport your taste buds straight to China.
          </p>
          <button className="custom-primary-btn">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
