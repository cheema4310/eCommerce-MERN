import React from "react";

import classes from "./Contact.module.css";

const Contact = () => {
  return (
    <div className={classes.contact}>
      <h2>Contact Us</h2>

      <div className={classes.content}>
        <p>
          If you have any questions, please take a moment to visit our FAQ page.
          It's possible that you'll find the answers you're looking for there.
        </p>
        <p>
          Feel free to reach out to us with any comments or suggestions that can
          assist us in enhancing our services. We value your feedback!
        </p>
        <p>
          Our team is here and ready to assist you at any time.
          support@cheema.com
        </p>
      </div>
    </div>
  );
};

export default Contact;
