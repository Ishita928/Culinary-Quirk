import React, { useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import table from "../assets/table.jpg";
import "./BookTable.css";

const BookTable = () => {
  const [formState, handleSubmit] = useForm("mkgwgrap");
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    FullName: "", email: "", Street: "", date: "", guest: "",
    Offers: false, time: "", number: ""
  });

  const changeHandler = (event) => {
    const { name, value, checked, type } = event.target;
    setFormData(prevForm => ({
      ...prevForm,
      [name]: type === "checkbox" ? checked : value
    }));
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      await handleSubmit(event);
      setSubmitted(true);
      setFormData({
        FullName: "", email: "", Street: "", date: "", guest: "",
        Offers: false, time: "", number: ""
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="w-[70%] mx-auto my-[-2.5rem] p-8 border border-gray-600 shadow-lg rounded-lg">
      <div className="flex flex-col lg:flex-row">
        <div className="w-full lg:w-1/2 p-4">
          <img src={table} className="w-full h-auto rounded-lg" alt="Table" />
        </div>
        <div className="w-full lg:w-1/2 p-4">
          {submitted ? (
            <div className="text-center">
              <p className="text-lg font-bold text-yellow-500 mb-4">Thanks for your submission!</p>
              <button onClick={() => setSubmitted(false)} className="bg-yellow-600 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded">
                Resubmit Form
              </button>
            </div>
          ) : (
            <form onSubmit={handleFormSubmit} className="space-y-4 mt-[-1.5rem]">
              <div className="mb-4">
                <label htmlFor="FullName" className="block text-yellow-200">Full Name:</label>
                <input
                  id="FullName"
                  type="text"
                  name="FullName"
                  value={formData.FullName}
                  onChange={changeHandler}
                  placeholder="Enter your full name"
                  className="mt-1 block w-full p-1 border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
                <ValidationError 
                  prefix="FullName" 
                  field="FullName"
                  errors={formState.errors}
                  className="text-red-500 text-sm"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-yellow-200">Email Address:</label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={changeHandler}
                  placeholder="Enter your email"
                  className="mt-1 block w-full p-1 border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
                <ValidationError 
                  prefix="Email" 
                  field="email"
                  errors={formState.errors}
                  className="text-red-500 text-sm"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="number" className="block text-yellow-200">Phone Number:</label>
                <input
                  id="number"
                  type="tel"
                  name="number"
                  value={formData.number}
                  onChange={changeHandler}
                  placeholder="Enter your phone number"
                  className="mt-1 block w-full p-1 border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
                <ValidationError 
                  prefix="Phone" 
                  field="number"
                  errors={formState.errors}
                  className="text-red-500 text-sm"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="date" className="block text-yellow-200">Date:</label>
                <input
                  id="date"
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={changeHandler}
                  className="mt-1 block w-full p-1 border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
                <ValidationError 
                  prefix="Date" 
                  field="date"
                  errors={formState.errors}
                  className="text-red-500 text-sm"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="time" className="block text-yellow-200">Time:</label>
                <input
                  id="time"
                  type="time"
                  name="time"
                  value={formData.time}
                  onChange={changeHandler}
                  className="mt-1 block w-full  border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
                <ValidationError 
                  prefix="Time" 
                  field="time"
                  errors={formState.errors}
                  className="text-red-500 text-sm"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="guest" className="block text-yellow-200">No. of Guests:</label>
                <select
                  id="guest"
                  name="guest"
                  value={formData.guest}
                  onChange={changeHandler}
                  
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                >
                  <option  value=""></option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="More than 6">More than 6</option>
                </select>
                <ValidationError 
                  prefix="Guest" 
                  field="guest"
                  errors={formState.errors}
                  className="text-red-500 text-sm"
                />
              </div>
              
              <button type="submit" disabled={formState.submitting} className="bg-yellow-600 hover:bg-yellow-700 text-white mb-1 font-bold py-2 px-4 rounded">
              Reserve a Table
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

export default BookTable;
