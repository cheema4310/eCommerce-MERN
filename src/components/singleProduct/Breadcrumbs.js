import React from "react";
import { Link } from "react-router-dom";

import classes from "./Breadcrumbs.module.css";

const Breadcrumbs = ({ routes, title }) => {
  return (
    <div className={classes.breadcrumbs}>
      <ul>
        {routes.map((route, index) => (
          <li key={index} className={classes.breadcrumbsItem}>
            <Link to={route.path}>{route.name}</Link>
            <span></span>
          </li>
        ))}
        <li className={classes.currentLocation}>{title}</li>
      </ul>
    </div>
  );
};

export default Breadcrumbs;
