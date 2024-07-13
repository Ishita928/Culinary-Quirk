import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';
import "./StarR.css";
const StarRating = ({ rating, onRatingChange }) => {
  const [hoverRating, setHoverRating] = useState(0);

  const handleRatingChange = (newRating) => {
    onRatingChange(newRating);
  };

  return (
    <div className="star-container">
      {[...Array(5)].map((star, i) => {
        const ratingValue = i + 1;

        return (
          <label key={i} >
            <input 
              type="radio"
              name="rating"
              value={ratingValue}
              onClick={() => handleRatingChange(ratingValue)}
            />
            <FaStar 
              className="star flex "
              color={ratingValue <= (hoverRating || rating) ? "#ffc107" : "#e4e5e9"}
              size={20}
              onMouseEnter={() => setHoverRating(ratingValue)}
              onMouseLeave={() => setHoverRating(0)}
            />
          </label>
        );
      })}
    </div>
  );
};

export default StarRating;