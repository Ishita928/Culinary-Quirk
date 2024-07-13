import React from 'react'
import  { useState } from 'react'
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
//import { toast } from 'react-hot-toast';
import {  useNavigate } from 'react-router-dom';
const SignupForm = ({setIsLoggedIn}) => {
    const navigate=useNavigate();
    const[formData,setFormData]=useState({
        email:"",password:"",firstName:"",lastName:"",confirmPassword:""
    });
    const[showPassword,setShowPassword]=useState(false);
    const [accountType, setAccountType] = useState("student");
    function changeHandler(event){

        setFormData( (prevData)=>(
            {
            ...prevData,
            [event.target.name]:event.target.value
            }
        ))
        
        }
    
        function submitHandler(event) {
            event.preventDefault();
            if(formData.password != formData.confirmPassword) {
             //   toast.error("Passwords do not match");
                return ;
            }
    
            setIsLoggedIn(true);
        //    toast.success("Account Created");
            const accountData = {
                ...formData
            };
    
            const finalData = {
                ...accountData,
                accountType
            }
    
            console.log("printing Final account data ");
            console.log(finalData);
    
            navigate("/shop");
    
        }


  return (
    <div className='' >



<form >

    <div className='flex gap-6 mt-[20px]  '>
    <label  >
<p className='text-[0.875rem] text-lime-100 mb-1 leading-[1.375rem]'>First Name<sup className='text-orange-600'>*</sup></p>
<input
required
type="text"
name="firstName"
onChange={changeHandler}
placeholder='Enter First Name'
value={formData.firstName}
className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[8px] text-black'
/>
</label>

<label>
<p className='text-[0.875rem] text-lime-100 mb-1 leading-[1.375rem]'>last Name<sup className='text-orange-600'>*</sup> </p>
<input
required
type="text"
name="lastName"
onChange={changeHandler}
placeholder="Enter Last Name"
value={formData.lastName}
className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[8px] text-black'
/>


</label>

</div>

<label>
            <p className='text-[0.875rem] text-lime-100 mb-2 leading-[1.375rem]'>Email Address <sup className='text-orange-600'>*</sup></p>
            <input
            required
            type="email"
            value={formData.email}
            onChange={changeHandler}
            name='email'
            placeholder='enter email id'
            className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[8px] text-black'
            />
        </label>

<div className='flex gap-[2rem] '>

 <label className='w-full relative '>
            <p className='text-[0.875rem] text-lime-100 mb-2  leading-[1.375rem]'>Create Password <sup className='text-orange-600'>*</sup></p>
            <input
            required
            type={showPassword ? ("text"):("password")}
            value={formData.password}
            onChange={changeHandler}
            name="password"
            placeholder="Enter Password"
            className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[8px] text-black'
            />
 <span className='absolute right-3 top-[38px] cursor-pointer'  onClick={()=>setShowPassword((prev)=> !prev)}>
    {showPassword ? (<AiOutlineEyeInvisible />):(<AiOutlineEye />)}
   </span>

</label>

 <label className='w-full relative'>
            <p className='text-[0.875rem] text-lime-100 mb-2 leading-[1.375rem]'>Confirm Password <sup className='text-orange-600'>*</sup></p>
            <input
            required
            type={showPassword ? ("text"):("password")}
            value={formData.confirmPassword}
            onChange={changeHandler}
            name="confirmPassword"
            placeholder="Confirm Password"
            className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[8px] text-black'
            />
 <span  className='absolute right-3 top-[38px] cursor-pointer' onClick={()=>setShowPassword((prev)=> !prev)}>
    {showPassword ? (<AiOutlineEyeInvisible />):(<AiOutlineEye />)}
   </span>

</label>


</div>

<button  className=' w-full bg-yellow-50 rounded-[8px] font-medium text-richblack-900 px-[12px] py-[8px] mt-3 text-black' onClick={submitHandler}>Create Account</button>


</form>

</div>
   
  )
}

export default SignupForm
