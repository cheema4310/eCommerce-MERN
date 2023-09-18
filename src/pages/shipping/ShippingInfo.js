import React from "react";

import classes from "./ShippingInfo.module.css";

const ShippingInfo = () => {
  return (
    <div className={classes.shippingInfo}>
      <h2>Shipping Information</h2>

      <div className={classes.content}>
        <p>
          We are dedicated to providing you with the most reliable and efficient
          shipping options, regardless of your location. Every day, we deliver
          to hundreds of customers across the world. We strive to offer the
          highest levels of responsiveness at all times.
        </p>
        <p>
          This initial stage involves order verification, a comprehensive
          quality check, and careful packaging. We ensure that all orders are
          dispatched from our fulfillment center within 48 hours of order
          placement.
        </p>
        <p>
          The shipping time refers to the duration it takes for items to be
          transported from our fulfillment center to your designated
          destination.
        </p>
        <p>
          Please be aware that due to the impact of the ongoing pandemic and
          varying international policies, we cannot guarantee precise delivery
          times for express shipping. Factors beyond our control, such as local
          regulations and customs clearance, may affect delivery schedules.
        </p>
        <h4>Delivery Timeline</h4>
        <ul>
          <li>
            <span>Processing Time:</span> 1-2 Days
          </li>
          <li>
            <span>Shipping Time:</span> 7-15 Days
          </li>
        </ul>

        <p>
          Please note that all delivery times are estimates and are subject to
          the courier's ability to deliver. Weather conditions and unforeseen
          events may occasionally cause minor delays in delivery times.
        </p>
      </div>
    </div>
  );
};

export default ShippingInfo;
