import React from 'react'
import { FcGoogle } from "react-icons/fc";

import SignupForm from './SignupForm'
import LoginForm from './LoginForm'

const Template = ({title,desc1,desc2,image,formtype,setIsLoggedIn}) => {
  return (
    <div className='flex justify-between w-[80%]  max-w-[1160px]  mx-auto '> 

      <div className='flex flex-col gap-4'>
<h1 className='text-richblack-5 font-semibold text-[1.875rem] leading-[2.375rem] mt-3 underline decoration-solid capitalize font-serif'  >{title}</h1>

<p >
    <span className='italic'>{desc1}</span>
    <br>
    </br>
    <span className='text-sky-400 italic'>{desc2}</span>
</p>
{formtype === "signup" ?
(<SignupForm setIsLoggedIn={setIsLoggedIn}/>):
(<LoginForm setIsLoggedIn={setIsLoggedIn}/>)
}

<div className='flex w-full items-center my-4 gap-x-2'>
                <div className='w-full h-[1px] bg-white'></div>
                <p className='text-richblack-700 font-medium leading[1.375rem]'>
                    OR
                </p>
                <div className='w-full h-[1px] bg-white'></div>
            </div>

<button className='flex gap-3 justify-center items-center'>
    <p>Sign Up with Google
    </p>
    <FcGoogle />
</button>

      </div>


<div className='relative w-11/12 max-w-[450px] mt-[3rem] ml-[6rem]'>
  

<img src={image} width="4000rem"  loading='lazy'  className='absolute -top-4 right-4 border-8 shadow-2xl shadow-blue-500/50  border-double border-sky-500'/>

</div>

    </div>
  )
}

export default Template