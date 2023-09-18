import React, { useState } from "react";
import classes from "./ItemColor.module.css";

// delete this later
const sampleProduct = {
  id: "54",
  title: "AOP Unisex hoodie",
  link: "https://images.unsplash.com/photo-1633948760540-0015ea5415da?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
  hoverLink:
    "https://images.unsplash.com/photo-1633948760885-02e7a17391b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80",
  category: "hoodies",
  size: ["s", "m", "l", "xl"],
  color: ["orange", "white", "black"],
  price: 79.99,
  rating: 4.5,
  reviews: 8,
};

const ItemColor = () => {
  const [clr, setClr] = useState(sampleProduct.color[0]);

  return (
    <div className={classes.itemColor}>
      <h5>
        Color: <span>{clr}</span>
      </h5>
      {sampleProduct.color.map((color, index) => (
        <span
          key={index}
          style={{ backgroundColor: color }}
          onClick={() => setClr(color)}
        ></span>
      ))}
    </div>
  );
};

export default ItemColor;
