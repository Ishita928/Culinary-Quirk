import React, { useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import StarRating from './StarRating';
import "./Contact.css";
import coffee from "../assets/coffee.jpg";
import contact from "../assets/contact.png";

const Contact = () => {
  const [formData, setFormData] = useState({
    FirstName: "", LastName: "", email: "", Street: "", State: "",
    comments: "", Offers: false, Candidates: false, number: ""
  });

  const changeHandler = (event) => {
    const { name, value, checked, type } = event.target;
    setFormData(prevform => ({
      ...prevform,
      [name]: type === "checkbox" ? checked : value
    }));
  };

  const [rating, setRating] = useState(0);

  const handleRatingChange = (newRating) => {
    setRating(newRating);
  };

  const [state, handleSubmit] = useForm("xldrdbgl");

  const submitHandler = async (event) => {
    event.preventDefault();

    const formFields = {
      FirstName: formData.FirstName,
      LastName: formData.LastName,
      email: formData.email,
      Street: formData.Street,
      State: formData.State,
      comments: formData.comments,
      Offers: formData.Offers,
      Candidates: formData.Candidates,
      number: formData.number,
      rating: rating
    };

    const data = new FormData();
    for (const field in formFields) {
      data.append(field, formFields[field]);
    }

    await handleSubmit(data);
  };

  if (state.succeeded) {
    return <p>Thanks for joining!</p>;
  }

  return (
    <div className='b'>
      <form onSubmit={submitHandler}>
        <div className='flex gap-10'>
          <div className='mainn mt-[-1rem]'>
            <h4 className='h4'>FirstName</h4>
            <input className='ip' type='text'
              placeholder=' Ishita'
              onChange={changeHandler}
              name='FirstName'
              value={formData.FirstName}
            />

            <h4 className='h4'>LastName</h4>
            <input className='ip' type='text'
              placeholder=' Malhotra'
              onChange={changeHandler}
              name='LastName'
              value={formData.LastName}
            />

            <h4 className='h4'>Email Address</h4>
            <input className='ip' type='email'
              placeholder=' ishi@mal.com'
              onChange={changeHandler}
              name='email'
              value={formData.email}
            />
            <ValidationError prefix="Email" field="email" errors={state.errors} />

            <h4 className='h4'>Phone Number</h4>
            <input className='ip' type='text'
              placeholder=' 91+'
              onChange={changeHandler}
              name='number'
              value={formData.number}
            />

            <h4 className='h4'>Address</h4>
            <input className='ip' type='text'
              placeholder=' 1234 main.st'
              onChange={changeHandler}
              name='Street'
              value={formData.Street}
            />

            <h4 className='h4'>Feedback</h4>
            <textarea className='ipp'
              placeholder=' enter your feedback'
              onChange={changeHandler}
              name="comments"
              value={formData.comments}
            />
            <ValidationError prefix="Comments" field="comments" errors={state.errors} />

            <div className='mt-6'>
              <label className='h4' htmlFor="rating">Rating:</label>
              <StarRating rating={rating} onRatingChange={handleRatingChange} />
            </div>

            <div className='bot ml-[3rem] mt-8 p-2 mb-3 bg-yellow-600 hover:bg-yellow-700'>
              <button type="submit" disabled={state.submitting}>
                <span>SUBMIT</span>
              </button>
            </div>
          </div>
          <div>
            <img src={contact} width="150rem" className='imm' />
            <img src={coffee} width="300rem" className='im lg:flex hidden' />
          </div>
        </div>
      </form>
    </div>
  );
}

export default Contact;
