import React from 'react';
import { NavLink } from 'react-router-dom';
import { IoFastFoodOutline } from "react-icons/io5";
import Lottie from "lottie-react";
import gif from "../assets/Animation - 1719339403954.json";
import "./Home.css";

const Home = () => {
  return (
    <div className='flex flex-col lg:flex-row gap-10'>
      <div className='leftpage lg:w-1/2 p-4'>
        <div className='text-zinc-50 title'>
          <p className='mt-[-6rem]'>Welcome to</p>
          <div className='mt-0'>
            <span className="letter">C</span>
            <span className="letter">u</span>
            <span className="letter">l</span>
            <span className="letter">i</span>
            <span className="letter">n</span>
            <span className="letter">a</span>
            <span className="letter">r</span>
            <span className="letter">y</span>
            <span className="letter">Q</span>
            <span className="letter">u</span>
            <span className="letter">i</span>
            <span className="letter">r</span>
            <span className="letter">k</span>
            <span className="letter">!!</span>
          </div>
        </div>

        <p className='text-zinc-400 summary'>
          where we invite you to embark on a gastronomic journey unlike any other. Nestled in the heart of India, our restaurant celebrates the art of culinary innovation and unconventional flavors.
        </p>
        <p className='text-zinc-400 summary'>
          Nestled in the heart of India our restaurant celebrates the art of culinary innovation and unconventional flavors.
          Our talented chefs blend traditional techniques with a creative twist, crafting dishes that surprise and delight the senses. Step inside our vibrant space and experience a dining atmosphere that is as unique as our menu. 
        </p>

        <div className='button-container flex  gap-4 mt-4'>
          <NavLink to="/Menu">
            <button className="buttonn text-black flex items-center gap-2" role="button">
              Menu <IoFastFoodOutline />
            </button>
          </NavLink>
          <NavLink to="/book">
            <button className='buttonn'>Book a Table</button>
          </NavLink>
        </div>
      </div>

      <div className='lg:mt-[-20rem] lg:flex hidden ' style={{width:"40%"}}>
        <Lottie animationData={gif} />
      </div>
    </div>
  );
}

export default Home;
