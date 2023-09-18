import React, { useState } from "react";
import classes from "./PriceFilter.module.css";

const PriceFilter = ({ priceRange, priceChange }) => {
  const [showPrice, setShowPrice] = useState(false);

  const handlePriceChange = (e) => {
    priceChange(e);
  };
  return (
    <div className={classes.priceFilter}>
      <h5 onClick={() => setShowPrice(!showPrice)}>
        Price{" "}
        <span
          className={showPrice ? classes.arrowUp : classes.arrowDown}
        ></span>
      </h5>
      {showPrice && (
        <div className={classes.priceInput}>
          <input
            type="range"
            min="1"
            max="99"
            value={priceRange}
            id="price-range"
            onChange={handlePriceChange}
          />
          <div className={classes.sliderValue}>
            <span>$1</span>
            <span style={{ color: "#112d4e", fontWeight: "700" }}>
              ${priceRange}
            </span>
            <span>$99</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default PriceFilter;
