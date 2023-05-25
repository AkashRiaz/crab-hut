import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "./styles.css";

// import required modules
import { EffectCoverflow, Pagination } from "swiper";

const ProductSlider = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("https://chef-recipe-hunter-server-side-akashriaz.vercel.app/foodReview")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  });
  return (
    <div id="review">
       <div className="text-center mt-28">
        <h2 className="text-5xl font-semibold">Our Customer Review</h2>
        <div className="custom-border mx-auto"></div>
        <p className="text-md mt-3 font-normal text-gray-500">See What Our Customers Are Saying About Us</p>
       </div>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >  
        {reviews.map((r) => (
          <div >
            <SwiperSlide key={r.id} className="relative inline-block">
              <div>
                <div className="review text-white flex flex-col justify-center">
                  <h2 className="text-lg"><span className="text-orange-400">Food: </span>{r.dish_name}</h2>
                  <p><small><span className="text-orange-400">Customer Review: </span>{r.review}</small></p>
                  
                </div>
                <img
                  className="h-96 rounded-xl card-overlay"
                  src={r.image_url}
                  alt=""
                />
                <div className="overlay rounded-xl"></div>
              </div>
            </SwiperSlide>
          </div>
        ))}
      </Swiper>
    </div>
  );
};

export default ProductSlider;
