import React, { useState } from "react";

import ProductRating from "./ProductRating";
import classes from "./Product.module.css";
import ProductActions from "./ProductActions";
import { Link } from "react-router-dom";

const Product = ({ product, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const mouseEnterHandler = () => {
    setIsHovered(true);
  };
  const mouseLeaveHandler = () => {
    setIsHovered(false);
  };

  const discount = Math.floor(
    ((product.oldPrice - product.price) / product.oldPrice) * 100
  );
  return (
    <div
      onMouseEnter={mouseEnterHandler}
      onMouseLeave={mouseLeaveHandler}
      className={`${classes.product} ${classes[product.category]}`}
    >
      <Link to={`/products/${product.id}`}>
        <div className={classes.productImg}>
          <img
            src={
              isHovered && product.hoverLink ? product.hoverLink : product.link
            }
            alt={`Product ${index}`}
          />

          {product.oldPrice && (
            <div className={classes.discount}>{discount}&#37;</div>
          )}

          <ProductActions isHovered={isHovered} />
        </div>

        <div className={classes.productInfo}>
          <h3>
            {product.title.length > 15
              ? product.title.slice(0, 13) + "..."
              : product.title}
          </h3>
          <p>{product.category}</p>
          <ProductRating rating={product.rating} />
          <h5>
            Price ${product.price}{" "}
            {product.oldPrice && <span>{product.oldPrice}</span>}
          </h5>
        </div>
      </Link>
    </div>
  );
};

export default Product;
