import React from "react";
import classes from "./ProductRating.module.css";

const ProductRating = ({ rating }) => {
  const stars = [];

  // Fill the stars array based on the rating
  for (let i = 1; i <= 5; i++) {
    stars.push(
      <span key={i} className={i <= rating ? classes.starGold : classes.star}>
        &#9733;
      </span>
    );
  }

  return (
    <div className={classes.rating}>
      {stars}
      <span className={classes.numeric}> ({rating})</span>
    </div>
  );
};

export default ProductRating;
