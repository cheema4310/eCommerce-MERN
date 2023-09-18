import React from "react";

import classes from "./FeaturedCategories.module.css";
import { Link } from "react-router-dom";

const FeaturedCategories = () => {
  const DUMMY_CAT = [
    { title: "shirts", desc: "Trendy and comfortable t-shirts" },
    { title: "hoodies", desc: "Stay cozy and fashionable" },
    { title: "mugs", desc: "Sip your favorite beverages in style" },
    {
      title: "accessories",
      desc: "Elevate your style with our curated collection",
    },
  ];
  return (
    <div className={classes.categories}>
      <div className={classes.wrapper}>
        {DUMMY_CAT.map((category, index) => (
          <div
            className={`${classes.category} ${classes[category.title]}`}
            key={index}
          >
            <div className={classes.content}>
              <h3>{category.title}</h3>
              <p>{category.desc}</p>
              <div className={classes.explore}>
                <Link to={`/shop/${category.title}`}>Explore</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedCategories;
