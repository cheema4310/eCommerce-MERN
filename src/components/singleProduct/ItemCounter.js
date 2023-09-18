import React, { useState } from "react";
import classes from "./ItemCounter.module.css";

const ItemCounter = () => {
  const [counter, setCounter] = useState(1);
  const handleIncrement = () => {
    setCounter((prev) => prev + 1);
  };
  const handleDecrement = () => {
    if (counter !== 1) {
      setCounter((prev) => prev - 1);
    }
  };
  return (
    <div className={classes.itemCounter}>
      <span
        onClick={handleDecrement}
        className={`${classes.increment} ${counter === 1 && classes.disable}`}
      >
        -
      </span>
      <span className={classes.number}>{counter}</span>
      <span onClick={handleIncrement} className={classes.increment}>
        +
      </span>
    </div>
  );
};

export default ItemCounter;
