import React, { useState } from "react";
import { Link } from "react-router-dom";

import { TfiFacebook } from "react-icons/tfi";
import { TfiTwitterAlt } from "react-icons/tfi";
import { RiInstagramFill } from "react-icons/ri";
import { FaTiktok } from "react-icons/fa";

import logoImg from "../../assets/logo.png";
import classes from "./Footer.module.css";

const Footer = () => {
  const [userEmail, setUserEmail] = useState("");
  const getEmailHandler = (e) => {
    e.preventDefault();
    console.log(userEmail);
    setUserEmail("");
  };

  // scrolling to the top of the page when clicked on the link
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className={classes.footer}>
      <div className={classes.footerWrapper}>
        <div className={classes.ourStore}>
          <Link to="/" onClick={scrollToTop}>
            <img
              src={logoImg}
              alt="ImagineIt Chee"
              className={classes.footerLogoImg}
            />
          </Link>

          <div className={classes.ourStoreContent}>
            <h3>Our Store</h3>
            <div className={classes.footerIcons}>
              <TfiFacebook className={classes.icon} />
              <TfiTwitterAlt className={classes.icon} />
              <RiInstagramFill className={classes.icon} />
              <FaTiktok className={classes.icon} />
            </div>
          </div>
        </div>
        <div className={classes.quickLinks}>
          <Link to="#">Account</Link>
          <Link to="#">Cart</Link>
          <Link to="#">Wishlist</Link>
        </div>
        <div className={classes.footerInfo}>
          <Link to="/privacy" onClick={scrollToTop}>
            Privacy Policy
          </Link>
          <Link to="/return" onClick={scrollToTop}>
            Return Policy
          </Link>
          <Link to="/shippingInfo" onClick={scrollToTop}>
            Shipping Information
          </Link>
          <Link to="/faqs" onClick={scrollToTop}>
            FAQS
          </Link>
          <Link to="/contact" onClick={scrollToTop}>
            Contact Us
          </Link>
        </div>
        <div className={classes.getEmail}>
          <h3>Let's get in touch</h3>
          <form onSubmit={getEmailHandler}>
            <label>Get 10% off by subscribing to our newsletter.</label>
            <input
              type="email"
              value={userEmail}
              onChange={(e) => setUserEmail(e.target.value)}
              placeholder="Your Email"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Footer;
