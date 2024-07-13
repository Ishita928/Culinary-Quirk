import React from 'react'
import cookingTechniques from '../data.js';
import { Link } from 'react-router-dom';
import Lottie from "lottie-react";
import gif from "../assets/Animation - 1719229311315.json"
const Techniques = () => {
  return (
    <div >
      <div className="title-list ">
      <div className='absolute mt-[9rem] ml-[16rem] lg:flex hidden' style={{width:"35%"}}>
      <Lottie animationData={gif}/>
      </div>
    {cookingTechniques.map((technique, index) => (
      <h2 key={index}>
        <Link to={`/technique/${technique.title}`}>{technique.title}</Link>
      </h2>
    ))}
  </div>
    </div>
  )
}

export default Techniques
