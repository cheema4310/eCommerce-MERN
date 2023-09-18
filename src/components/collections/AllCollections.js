import React from "react";

import DummyProducts from "../../dummyProducts";
import classes from "./AllCollections.module.css";
import SingleCategory from "./SingleCategory";

const AllCollections = () => {
  const getUniqueCategories = () => {
    const categories = [];

    for (const product of DummyProducts) {
      if (!categories.includes(product.category)) {
        categories.push(product.category);
      }
    }
    return categories;
  };
  const uniqueCategories = getUniqueCategories();

  return (
    <div className={classes.allCollections}>
      <h2>Browse Categories</h2>

      <ul className={classes.collections}>
        {uniqueCategories.map((cat, index) => (
          <SingleCategory key={index} name={cat} />
        ))}
      </ul>
    </div>
  );
};

export default AllCollections;
