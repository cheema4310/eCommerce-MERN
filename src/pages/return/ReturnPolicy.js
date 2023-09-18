import React from "react";

import classes from "./ReturnPolicy.module.css";

const ReturnPolicy = () => {
  return (
    <div className={classes.returnPolicy}>
      <h2>Retrun Policy</h2>
      <div className={classes.content}>
        <p>
          To return an item, contact us with your order number and a brief
          description of the issue, along with clear photos if applicable.
        </p>
        <p>Returned items must be in their original, unworn condition.</p>
        <p>
          We take full responsibility for issues such as marks, broken zippers,
          rips, poor quality materials, obvious color differences, or
          significant discrepancies from the product description.
        </p>
        <p>
          If you wish to return an item for reasons such as selecting the wrong
          size or color, or simply not liking the product "provided the item is
          not faulty", please contact us to arrange the return. In such cases,
          you are responsible for covering the shipping charges associated with
          the returned/exchanged merchandise.
        </p>
        <p>
          All returns must be shipped with a tracking or reference number, and
          your order number should be clearly indicated on the outside of the
          parcel. This ensures a smooth and traceable return process.
        </p>
        <p>
          Once we receive the returned items at our international returns
          facility, we will promptly process your exchange or refund. <br /> If
          you have any additional questions not addressed in this policy, please
          feel free to reach out to us. We are committed to assisting you and
          will respond as quickly as possible. <br />
          For return address details, please contact our Customer Service at{" "}
          <span>support@cheema.com</span>
        </p>
        <p>
          We appreciate your trust in us and are dedicated to providing a
          satisfactory resolution to your concerns.
        </p>
      </div>
    </div>
  );
};

export default ReturnPolicy;
