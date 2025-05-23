import React from 'react'
import { useState } from 'react'
import Mealcards from './Mealcards'
import gif from "../assets/Animation - 1719336626187.json"
import Lottie from "lottie-react"
const Recipe = () => {

  const [data,setData]  =useState();
  const [search, setSearch] = useState("");
  const [msg, setMsg] = useState("")

  const handleInput = (event) =>{
      setSearch(event.target.value)
  }
  const myFun = async () =>{
      if(search == ""){
          setMsg("Please Enter Something")
      }else{
          const get = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`);
          const jsonData = await get.json();
      // console.log(jsonData.meals);
      setData(jsonData.meals)
      setMsg("")
      
      }
       
  }
  
  // console.log(data);
return (
  <>
      <h1 className='head font-thin italic '>"Unlock the chef within you – find recipes that inspire and delight" </h1>
      <div className=' absolute ml-[60rem] mt-[-1rem] lg:flex hidden ' style={{width:"10%"}}>
      <Lottie animationData={gif}/>
      </div>
      <div className='container'>
          <div className='searchBar'>
              <input type='text' placeholder='Enter Dish' onChange={handleInput}/>
              <button onClick={myFun}>Search</button>
          </div>
          <h4 className='msg'>{msg}</h4>
          <div className='flex justify-center items-center flex-wrap gap-4 mb-[-1px]'>
          <Mealcards detail={data}/>
          </div>
      </div>
  </>
)
}

export default Recipe
