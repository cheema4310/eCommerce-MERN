import React from "react";
import Product from "../homeHitProducts/Product";
import classes from "./ProductsByCollectionCmp.module.css";
import DummyProducts from "../../dummyProducts";

const ProductsByCollectionCmp = ({ name }) => {
  const filterProducts = DummyProducts.filter((p) => p.category === name);
  return (
    <div className={classes.productsByCollectionCmp}>
      <h2>{name}</h2>
      <div className={classes.products}>
        {filterProducts.map((p, i) => (
          <Product key={i} product={p} index={i} />
        ))}
      </div>
    </div>
  );
};

export default ProductsByCollectionCmp;
