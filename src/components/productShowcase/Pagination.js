import React from "react";
import classes from "./Pagination.module.css";

const Pagination = ({ prevHandler, nextHandler, pageNumber }) => {
  return (
    <div className={classes.pagination}>
      <ul>
        <li onClick={prevHandler}>
          <span className={classes.prev}></span>
        </li>
        {pageNumber}
        <li onClick={nextHandler}>
          <span className={classes.next}></span>
        </li>
      </ul>
    </div>
  );
};

export default Pagination;
