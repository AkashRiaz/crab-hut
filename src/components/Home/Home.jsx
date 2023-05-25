import React from 'react';
import Hero from '../Hero/Hero';
import ProductSlider from '../ProductSlider/ProductSlider';
import { useLoaderData } from 'react-router-dom';
import Contact from '../Contact/Contact';
import AllChef from '../AllChef/AllChef';

const Home = () => {
    return (
        <div className='mb-10'>
            <Hero></Hero>
            <AllChef></AllChef>
            <ProductSlider></ProductSlider>
            <Contact></Contact>
        </div>
    );
};

export default Home;