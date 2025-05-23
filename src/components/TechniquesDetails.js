import React from 'react';
import { useParams } from 'react-router-dom';

import gif from "../assets/Animation - 1719091308256.json"
import Lottie from "lottie-react"
const TechniquesDetails = ({ cookingTechniques }) => {
  const { title } = useParams();
  const technique = cookingTechniques.find(t => t.title === title);

  if (!technique) {
    return <div>Technique not found</div>;
  }

  return (
    <div className="technique-detail relative mb-[-1px]">

      <div className='absolute ml-[38rem] mt-[-5rem] lg:flex hidden' style={{width:"35%"}}>
      <Lottie animationData={gif}/>
      </div>
      <h2>{technique.title}</h2>
      <h3>Prerequisites</h3>
      <ul>
        {technique.prerequisites.map((item, index) => <li key={index}>{item}</li>)}
      </ul>
      <h3>Procedure</h3>
      <ol>
        {technique.procedure.map((step, index) => <li key={index}>{step}</li>)}
      </ol>
      <h3>Precautions</h3>
      <ul>
        {technique.precautions.map((item, index) => <li key={index}>{item}</li>)}
      </ul>
      <h3>Extra Tips</h3>
      <ul>
        {technique.extraTips.map((tip, index) => <li key={index}>{tip}</li>)}
      </ul>
      <h3>Images</h3>
      <div className="images ">
        {technique.images.map((image, index) => (
          <img key={index} src={image}   className='w-[100px] lg:w-[200px]' alt={`${technique.title} step ${index + 1}`} />
        ))}
      </div>
      <h3>Video</h3>
      <div>
      <iframe 
        
        src={technique.video}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
    </div>
  );
};

export default TechniquesDetails;


