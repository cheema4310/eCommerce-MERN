import React from "react";
import { MdOutlineShoppingCart } from "react-icons/md";
import { MdOutlineBookmarkAdd } from "react-icons/md";
import { MdFullscreen } from "react-icons/md";

import classes from "./ProductActions.module.css";

const ProductActions = ({ isHovered }) => {
  return (
    <div
      className={`${classes.productActions} ${isHovered ? classes.show : ""}`}
    >
      <div className={classes.icon}>
        <MdOutlineShoppingCart className={classes.productCart} />
        <span className={classes.hint}>Add to Cart</span>
      </div>
      <div className={classes.icon}>
        <MdOutlineBookmarkAdd className={classes.productFav} />
        <span className={classes.hint}>Save for Later</span>
      </div>
      <div className={classes.icon}>
        <MdFullscreen className={classes.productView} />
        <span className={classes.hint}>Quick View</span>
      </div>
    </div>
  );
};

export default ProductActions;
