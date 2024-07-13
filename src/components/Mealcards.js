import React from 'react'
import { NavLink } from 'react-router-dom';

const Mealcards = ({detail}) => {
    console.log(detail);
  return (
    <div className='meals text-orange-200'>
        {!detail ? "Search your recipes !" : detail.map((curItem)=>{
            return (
                <div className='mealImg'>
                  <img src={curItem.strMealThumb} />
                  <p>{curItem.strMeal}</p>
                  <NavLink to={`/Recipe/${curItem.idMeal}`}><button>Recipe</button></NavLink>


                   
                </div>
            )
        }) 
         
        }
    </div>
  )
}

export default Mealcards
