import React from "react";

import classes from "./Faqs.module.css";

const Faqs = () => {
  return (
    <div className={classes.faqs}>
      <h2>FAQS</h2>
      <div className={classes.content}>
        <h4>How to track my order status?</h4>
        <p>
          After your order has been dispatched, an email notification will be
          sent to you containing important shipping details. Within this email,
          you'll find a direct link that will enable you to monitor the progress
          of your order during its journey.
        </p>
        <h4>
          Is it possible to modify my order after confirming the checkout?
        </h4>
        <p>
          please get in touch with us right away. If your order hasn't been
          dispatched, we can try to update those changes. We understand the
          significance of your order and strive to process it promptly.
          Regrettably, once an order is confirmed and sent, we are unable to
          make any changes. Please ensure that all details are accurate before
          finalizing your checkout.
        </p>
        <h4>
          What should I do if the product I desire is currently out of stock?
        </h4>
        <p>
          We regularly restock items from our latest collection in a few weeks.
          To stay informed and not miss out, just sign up with your email, and
          we'll notify you when they're available again.
        </p>
        <h4>
          What's the procedure if I receive an incorrect or defective item?
        </h4>
        <p>
          We apologize for the inconvenience caused by receiving an incorrect or
          defective item. To assist you, kindly email us within 30 days of
          receiving your order. Please include your order number, the product
          name or code, a photo of the item you received, and provide us with
          more information about the issue.
        </p>
      </div>
    </div>
  );
};

export default Faqs;
