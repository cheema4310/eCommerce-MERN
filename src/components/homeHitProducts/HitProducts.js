import React from "react";
import classes from "./HitProducts.module.css";
import Product from "./Product";

import Dummy_Products from "../../dummyProducts";

const HitProducts = () => {
  const filterHitProducts = Dummy_Products.filter(
    (product) => product.rating > 4
  );

  const maxProducts = filterHitProducts.slice(0, 8);

  return (
    <div className={classes.hitProducts}>
      <div className={classes.wrapper}>
        <h2>The Hottest Picks of the Season</h2>
        <div className={classes.products}>
          {maxProducts.map((product, index) => (
            <Product key={index} product={product} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HitProducts;
