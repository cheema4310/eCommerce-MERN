import React from "react";
import classes from "./Header.module.css";
import { Link, NavLink } from "react-router-dom";
import { BiCart } from "react-icons/bi";
import { MdPersonOutline } from "react-icons/md";
import { MdOutlineBookmarkAdded } from "react-icons/md";
import { MdOutlineDiscount } from "react-icons/md";

import logoImg from "../../assets/logo.png";

const Header = () => {
  return (
    <header className={classes.header}>
      <div className={classes.headerWrapper}>
        <div className={classes.navLeft}>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/products">Products</NavLink>
            </li>
            <li>
              <NavLink to="/collections">Collections</NavLink>
            </li>
          </ul>
        </div>
        <div className={classes.navLogo}>
          <Link to="/">
            <img
              src={logoImg}
              alt="ImagineIt Chee"
              className={classes.navLogoImg}
            />
          </Link>
        </div>
        <div className={classes.navRight}>
          <div className={`${classes.navProfile} ${classes.navIcon}`}>
            <MdPersonOutline />
          </div>
          <div className={`${classes.navCart} ${classes.navIcon}`}>
            <BiCart />
          </div>
          <div className={`${classes.navSearch} ${classes.navIcon}`}>
            <MdOutlineBookmarkAdded />
          </div>
          <div className={`${classes.navDiscount} ${classes.navIcon}`}>
            <MdOutlineDiscount />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
