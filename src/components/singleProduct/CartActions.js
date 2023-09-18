import React from "react";
import classes from "./CartActions.module.css";
import ItemCounter from "./ItemCounter";

const CartActions = () => {
  const handleAddToCart = () => {};
  return (
    <div className={classes.cartActions}>
      <ItemCounter />
      <div className={classes.addBtn} onClick={handleAddToCart}>
        Add to Cart
      </div>
    </div>
  );
};
export default CartActions;
