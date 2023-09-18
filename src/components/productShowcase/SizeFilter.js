import React, { useState } from "react";
import classes from "./SizeFilter.module.css";

const SizeFilter = ({ selectedSizes, sizeChange }) => {
  const [showSize, setShowSize] = useState(false);

  const handleSizeChange = (e) => {
    sizeChange(e);
  };

  return (
    <div className={classes.sizeFilter}>
      <h5 onClick={() => setShowSize(!showSize)}>
        Sizes{" "}
        <span className={showSize ? classes.arrowUp : classes.arrowDown}></span>
      </h5>
      {showSize && (
        <div className={classes.sizeInputs}>
          <label>
            <span
              className={`${classes.customCheckbox} ${
                selectedSizes.includes("s") ? classes.checked : ""
              }`}
            ></span>
            Small
            <input type="checkbox" value="s" onChange={handleSizeChange} />
          </label>
          <label>
            <span
              className={`${classes.customCheckbox} ${
                selectedSizes.includes("m") ? classes.checked : ""
              }`}
            ></span>
            Medium
            <input type="checkbox" value="m" onChange={handleSizeChange} />
          </label>
          <label>
            <span
              className={`${classes.customCheckbox} ${
                selectedSizes.includes("l") ? classes.checked : ""
              }`}
            ></span>
            Large
            <input type="checkbox" value="l" onChange={handleSizeChange} />
          </label>
          <label>
            <span
              className={`${classes.customCheckbox} ${
                selectedSizes.includes("xl") ? classes.checked : ""
              }`}
            ></span>
            XLarge
            <input type="checkbox" value="xl" onChange={handleSizeChange} />
          </label>
        </div>
      )}
    </div>
  );
};

export default SizeFilter;
