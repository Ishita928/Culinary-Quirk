import React from 'react'
import chef from '../assets/cheff.jpg'
import { useState } from 'react';
import "./About.css";

const About = () => {
 
let name="Step into our elegant dining space and embark on a gastronomic journey that celebrates the finest ingredients.meticulous craftsmanship, and artistic presentation. Our menu is a reflection of our Chef's culinary vision featuring a curated selection of dishes that showcase seasonal ingredients sourced from local farmersand artisans.Our story begins with a commitment to crafting memorable dining experiences.";
let namee="At Culinary Quirk, we are more than just a restaurant – we are a culinary destination where every meal is a celebration of flavors and creativity. From intimate dinners to festive gatherings, we strive to create moments of culinary delight that linger the palates of our guests. It's a tale of sustainability and unwavering dedication to excellence.";

const [readmore,setReadmore]=useState(false);

const [readmoree,setReadmoree]=useState(false);
const desp=readmore? name:`${name.substring(0,300)}...`;
const despp=readmoree? namee:`${namee.substring(0,300)}...`;

function readmoreHandler(){
  setReadmore(!readmore);

}
function readmoreHandlerr(){
  setReadmoree(!readmoree);

}

  return (
    <div>
    <div className='flex  gap-10'>
<div className='text '>
 
{desp}
  <span onClick={readmoreHandler} className='text-sky-700'>
    {readmore?`show less`:`read more`}
  </span>

</div>
<div className='ml-[-4rem]' >
  <img className='chef lg:flex hidden '  src={chef} height='1200rem' width='380rem'/>
</div>
<div className='textt '>
 {despp}
 <span onClick={readmoreHandlerr} className='text-sky-700'>
    {readmoree?`show less`:`read more`}
  </span>
</div>
    </div>
    
    </div>
  )
}

export default About