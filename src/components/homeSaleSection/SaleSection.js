import React from "react";
import classes from "./SaleSection.module.css";
import { Link } from "react-router-dom";

const SaleSection = () => {
  return (
    <div className={classes.saleSection}>
      <div className={classes.content}>
        <h2>Our Seasonal Sale</h2>
        <h5>Limited-time offers on trendy seasonal favorites</h5>
        <Link to="/shop/sale" className={classes.saleLink}>
          Shop the Sale
        </Link>
      </div>
    </div>
  );
};

export default SaleSection;
