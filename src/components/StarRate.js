import React from "react";
import '../css/StarRate.css';


const Star = ({ starId, rating }) => {
  let styleClass = "star-rating-blank";
  if (rating && rating >= starId) {
    styleClass = "star-rating-filled";
  }

  return (
    <div
      className="star"
    
    >
      <svg
        height="20px"
        width="30px"
        className={styleClass}
        viewBox="0 0 25 23"
        data-rating="1"
      >
        <polygon
          
          points="9.9, 1.1, 3.3, 21.78, 19.8, 8.58, 0, 8.58, 16.5, 21.78"
        />
      </svg>
    </div>
  );
};

function StarRate(props) {
  
  
  const stars = [1, 2, 3, 4, 5];

  return (
    <div className="StarRate">
      <div className="flex-container">
        {stars.map((star, i) => (
          <Star
            key={i}
            starId={i+1}
            rating={props.levelOfService}
           
          />
        ))}
      </div>
    </div>
  );
}

export default StarRate;