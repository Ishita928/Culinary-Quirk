import React, { useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import StarRating from './StarRating'; // Adjust the path as per your actual file location
import coffee from "../assets/coffee.jpg";
import contact from "../assets/contact.png";
function Phone() {
  const [state, handleSubmit] = useForm("xldrdbgl");
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    phone: '',
    address: '',
    review: ''
  });
  const [rating, setRating] = useState(0); // State for rating

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRatingChange = (newRating) => {
    setRating(newRating);
  };

  const handleResubmit = () => {
    setSubmitted(false);
    setFormData({
      firstname: '',
      lastname: '',
      phone: '',
      address: '',
      review: ''
    });
    setRating(0); // Reset rating field
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      await handleSubmit(e);
      setSubmitted(true);
      // Optionally, clear form fields after successful submission
      setFormData({
        firstname: '',
        lastname: '',
        phone: '',
        address: '',
        review: ''
      });
      setRating(0); // Clear rating field upon submission
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className=" mx-auto p-8 border w-[70%] border-gray-600 shadow-lg rounded-lg mt-[-3rem]">
      {submitted ? (
        <div className="text-center">
          <p className="text-lg font-bold text-yellow-500 mb-4">Thanks for your submission!</p>
          <button onClick={handleResubmit} className=" bg-yellow-600 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded">
            Resubmit Form
          </button>
        </div>
      ) : (
        <form onSubmit={handleFormSubmit} className="space-y-4 flex gap-[6rem]">
        <div className='mt-[-0.5rem]'>
          <div className="flex flex-wrap -mx-2">
            <div className="w-full md:w-1/2 px-2 mb-4">
              <label htmlFor="firstname" className="block text-yellow-200">First Name:</label>
              <input
                id="firstname"
                type="text"
                name="firstname"
                value={formData.firstname}
                onChange={handleChange}
                placeholder="Enter your first name"
                className="mt-1 block p-1 w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
              <ValidationError 
                prefix="First name" 
                field="firstname"
                errors={state.errors}
                className="text-red-500 text-sm"
              />
            </div>
            <div className="w-full md:w-1/2 px-2 mb-4">
              <label htmlFor="lastname" className="block text-yellow-200">Last Name:</label>
              <input
                id="lastname"
                type="text"
                name="lastname"
                value={formData.lastname}
                onChange={handleChange}
                placeholder="Enter your last name"
                className="mt-1 block p-1 w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
              <ValidationError 
                prefix="Last name" 
                field="lastname"
                errors={state.errors}
                className="text-red-500 text-sm"
              />
            </div>
          </div>

          <div className="mb-4">
            <label htmlFor="phone" className="block text-yellow-200">Phone Number:</label>
            <input
              id="phone"
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Enter your phone number"
              className="mt-1 block w-full p-1 border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
            <ValidationError 
              prefix="Phone" 
              field="phone"
              errors={state.errors}
              className="text-red-500 text-sm"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="address" className="block text-yellow-200">Address:</label>
            <textarea
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              placeholder="Enter your address"
              className="mt-1 block w-full p-1 border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              rows="3"
            />
            <ValidationError 
              prefix="Address" 
              field="address"
              errors={state.errors}
              className="text-red-500 text-sm"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="review" className="block text-yellow-200">Review:</label>
            <textarea
              id="review"
              name="review"
              value={formData.review}
              onChange={handleChange}
              placeholder="Enter your review"
              className="mt-1 block w-full p-1 border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              rows="3"
            />
            <ValidationError 
              prefix="Review" 
              field="review"
              errors={state.errors}
              className="text-red-500 text-sm"
            />
          </div>

          <div className='mt-0 flex '>
            <label htmlFor="rating" className="block text-yellow-200">Rating:</label>
            <StarRating rating={rating} onRatingChange={handleRatingChange} className='mt-[-2rem]' />
          </div>

          <button type="submit" disabled={state.submitting} className=" bg-yellow-600 hover:bg-yellow-700 mt-4 text-white font-bold py-2 px-4 rounded">
            Submit
          </button>
</div>
          <div >
            <img src={contact} width="150rem" className='mt-[-1rem]' />
            <img src={coffee} width="300rem" className='rounded-full lg:flex hidden mt-[-2rem]' />
          </div>
          

        </form>

       
      )}
    </div>
  );
}

export default Phone;
