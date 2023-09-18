import React, { useState } from "react";
import classes from "./DropdownMenu.module.css";

const DropdownMenu = ({ sortedByData }) => {
  const [selectedValue, setSelectedValue] = useState("relevance");
  const [showDropdown, setShowDropdown] = useState(false);

  const heading =
    selectedValue === "relevance"
      ? "Relevance"
      : selectedValue === "bestSeller"
      ? "Best Seller"
      : selectedValue === "highToLow"
      ? "Highest Price First"
      : selectedValue === "lowToHigh"
      ? "Lowest Price First"
      : "";

  const bestSellerHandler = () => {
    setSelectedValue("bestSeller");
    sortedByData("bestSeller");
    setShowDropdown(false);
  };
  const relevanceHandler = () => {
    setSelectedValue("relevance");
    sortedByData("relevance");
    setShowDropdown(false);
  };
  const lowToHighHandler = () => {
    setSelectedValue("lowToHigh");
    sortedByData("lowToHigh");
    setShowDropdown(false);
  };
  const highToLowHandler = () => {
    setSelectedValue("highToLow");
    sortedByData("highToLow");
    setShowDropdown(false);
  };

  return (
    <div className={classes.dropdown}>
      <h5 onClick={() => setShowDropdown(!showDropdown)}>
        {heading}{" "}
        <span
          className={showDropdown ? classes.arrowUp : classes.arrowDown}
        ></span>
      </h5>
      {showDropdown && (
        <div className={classes.dropdownInputs}>
          <ul>
            <li onClick={bestSellerHandler}>Best Seller</li>
            <li onClick={relevanceHandler}>Relevance</li>
            <li onClick={lowToHighHandler}>Lowest Price First</li>
            <li onClick={highToLowHandler}>Highest Price First</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;
