import React, { useState } from "react";
import classes from "./ItemSize.module.css";

const ItemSize = () => {
  const [size, setSize] = useState("Small");
  // delete this product array later
  const sampleProduct = {
    id: "54",
    title: "AOP Unisex hoodie",
    link: "https://images.unsplash.com/photo-1633948760540-0015ea5415da?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
    hoverLink:
      "https://images.unsplash.com/photo-1633948760885-02e7a17391b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80",
    category: "hoodies",
    size: ["s", "m", "l", "xl"],
    color: ["black", "white", "gray"],
    price: 79.99,
    rating: 4.5,
    reviews: 8,
  };

  const handleSizeChange = (s) => {
    switch (s) {
      case "s":
        setSize("small");
        break;
      case "m":
        setSize("medium");
        break;
      case "l":
        setSize("large");
        break;
      case "xl":
        setSize("extra-large");
        break;
      default:
        console.log("no size selected");
    }
  };
  return (
    <div className={classes.itemSize}>
      <h5>
        Size : <span>{size}</span>
      </h5>
      {sampleProduct.size.map((s, i) => (
        <span key={i} onClick={() => handleSizeChange(s)}>
          {s}
        </span>
      ))}
    </div>
  );
};

export default ItemSize;
