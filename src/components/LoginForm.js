import React, { useState } from 'react'
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Link, useNavigate } from 'react-router-dom';
//import { toast } from 'react-hot-toast';

const LoginForm = ({setIsLoggedIn}) => {
const navigate=useNavigate();

const[formData,setFormData]=useState({
    email:"",password:""
});

const[showPassword,setShowPassword]=useState(false);

function changeHandler(event){

setFormData( (prevData)=>(
    {
    ...prevData,
    [event.target.name]:event.target.value
    }
))

}
function submitHandler(event){
event.preventDefault();
setIsLoggedIn(true);
//toast.success("Logged In");
navigate("/shop")
}
  return ( 
    <div>
      <form onSubmit={submitHandler} className="flex flex-col w-full gap-y-4 mt-6"  >
        <label className=''>
            <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem] text-yellow-100'>Email Address <sup className='text-orange-600'>*</sup></p>
            <input 
            required
            type="email"
            value={formData.email}
            onChange={changeHandler}
            name='email'
            placeholder='enter email id' 
            className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px] text-black'
            />
        </label>

        <label className='w-full relative'>
            <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem] text-yellow-100'>Password <sup className='text-orange-600'>*</sup></p>
            <input
            required
            type={showPassword ? ("text"):("password")}
            value={formData.password}
            onChange={changeHandler}
            name='password'
            placeholder='enter Password'
            className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px] text-black'
            />
   <span  className='absolute right-3 top-[38px] cursor-pointer'    onClick={()=>setShowPassword((prev)=> !prev)}>
    {showPassword ? (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF' />):(<AiOutlineEye fontSize={24} fill='#AFB2BF' />)}
   </span>

<Link to="#">
<p className='text-xs mt-1 text-blue-100 max-w-max ml-auto'> Forgot password</p>
</Link>
        </label>

<button className='bg-yellow-50 rounded-[8px] font-medium text-richblack-900 px-[12px] py-[8px] mt-6 text-black'>Sign In</button>

      </form>
    </div>
  )
}

export default LoginForm