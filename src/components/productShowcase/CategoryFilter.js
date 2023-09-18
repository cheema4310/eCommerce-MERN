import React, { useState } from "react";
import classes from "./CategoryFilter.module.css";

const CategoryFilter = ({ selectedCategories, categoryChange }) => {
  const [showCategories, setShowCategories] = useState(false);

  const handleCategoryChange = (e) => {
    categoryChange(e);
  };

  return (
    <div className={classes.categoryFilter}>
      <h5 onClick={() => setShowCategories(!showCategories)}>
        Categories{" "}
        <span
          className={showCategories ? classes.arrowUp : classes.arrowDown}
        ></span>
      </h5>
      {showCategories && (
        <div className={classes.categoryInputs}>
          <label>
            <span
              className={`${classes.customCheckbox} ${
                selectedCategories.includes("shirts") ? classes.checked : ""
              }`}
            ></span>
            Shirts
            <input
              type="checkbox"
              value="shirts"
              onChange={handleCategoryChange}
            />
          </label>
          <label>
            <span
              className={`${classes.customCheckbox} ${
                selectedCategories.includes("hoodies") ? classes.checked : ""
              }`}
            ></span>
            Hoodies
            <input
              type="checkbox"
              value="hoodies"
              onChange={handleCategoryChange}
            />
          </label>
          <label>
            <span
              className={`${classes.customCheckbox} ${
                selectedCategories.includes("mugs") ? classes.checked : ""
              }`}
            ></span>
            Mugs
            <input
              type="checkbox"
              value="mugs"
              onChange={handleCategoryChange}
            />
          </label>
          <label>
            <span
              className={`${classes.customCheckbox} ${
                selectedCategories.includes("accessories")
                  ? classes.checked
                  : ""
              }`}
            ></span>
            Accessories
            <input
              type="checkbox"
              value="accessories"
              onChange={handleCategoryChange}
            />
          </label>
        </div>
      )}
    </div>
  );
};

export default CategoryFilter;
