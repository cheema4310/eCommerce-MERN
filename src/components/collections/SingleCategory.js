import React from "react";
import { Link } from "react-router-dom";

import classes from "./SingleCategory.module.css";

const SingleCategory = ({ name }) => {
  return (
    <li className={classes.collectionsList}>
      <Link to={`/collections/${name}`}>
        <div className={classes.singleCategoryImg}>
          <img src={require(`../../assets/testImage/${name}.jpg`)} alt={name} />
        </div>
        <h3>{name}</h3>
      </Link>
    </li>
  );
};

export default SingleCategory;
