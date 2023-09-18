import React, { useState, useEffect } from "react";

import classes from "./Showcase.module.css";
import DropdownMenu from "./DropdownMenu";
import Product from "../homeHitProducts/Product";
import Dummy_Products from "../../dummyProducts";
import CategoryFilter from "./CategoryFilter";
import PriceFilter from "./PriceFilter";
import SizeFilter from "./SizeFilter";
import Pagination from "./Pagination";

const Showcase = () => {
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [priceRange, setPriceRange] = useState(99);
  const [selectedSizes, setSelectedSizes] = useState([]);
  const [sortedBy, setSortedby] = useState("relevance");
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    // Scroll to top of the page when navigating to next page
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentPage]);

  const filteredProducts = Dummy_Products.filter((product) => {
    return (
      (!selectedCategories.length ||
        selectedCategories.includes(product.category)) &&
      (!priceRange || product.price <= priceRange) &&
      (!selectedSizes.length ||
        selectedSizes.some((selectedSize) =>
          product.size.includes(selectedSize)
        ))
    );
  });

  const sortedProducts = filteredProducts.sort((a, b) => {
    if (sortedBy === "lowToHigh") {
      return a.price - b.price;
    } else if (sortedBy === "highToLow") {
      return b.price - a.price;
    } else if (sortedBy === "bestSeller") {
      return b.rating - a.rating;
    }
    return 0;
  });

  const productsPerPage = 16;
  const totalPages = Math.ceil(sortedProducts.length / productsPerPage);
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;

  const displayProducts = sortedProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const pageNumber = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumber.push(
      <li
        key={i}
        className={i === currentPage ? classes.active : ""}
        onClick={() => setCurrentPage(i)}
      >
        {i}
      </li>
    );
  }

  const handleCategoryChange = (e) => {
    const { value, checked } = e.target;

    if (checked) {
      // Add the category if it is not already selected
      if (!selectedCategories.includes(value)) {
        setSelectedCategories([...selectedCategories, value]);
      }
    } else {
      // Remove the category if it is selected
      setSelectedCategories(
        selectedCategories.filter((category) => category !== value)
      );
    }
  };
  const handlePriceChange = (e) => {
    const value = parseFloat(e.target.value);
    setPriceRange(value);
  };

  const handleSizeChange = (e) => {
    const { value, checked } = e.target;

    if (checked) {
      if (!selectedSizes.includes(value)) {
        setSelectedSizes([...selectedSizes, value]);
      }
    } else {
      setSelectedSizes(selectedSizes.filter((size) => size !== value));
    }
  };

  const sortedByHandler = (data) => {
    setSortedby(data);
    // after Sorting, navigating to First page
    setCurrentPage(1);
  };

  const prevPageHandler = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };
  const nextPageHandler = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div className={classes.showcase}>
      <h2>Explore Our Unique Products</h2>

      <div className={classes.wrapper}>
        <div className={classes.top}>
          <div className={classes.sortAndFilter}>
            <div className={classes.filters}>
              <CategoryFilter
                selectedCategories={selectedCategories}
                categoryChange={handleCategoryChange}
              />
              <PriceFilter
                priceRange={priceRange}
                priceChange={handlePriceChange}
              />

              <SizeFilter
                selectedSizes={selectedSizes}
                sizeChange={handleSizeChange}
              />
            </div>

            <div className={classes.sorting}>
              <DropdownMenu sortedByData={sortedByHandler} />
            </div>
          </div>
        </div>

        <div className={classes.bottom}>
          <div className={classes.products}>
            {displayProducts.map((product, index) => (
              <Product key={index} product={product} index={index} />
            ))}
          </div>
          <Pagination
            prevHandler={prevPageHandler}
            nextHandler={nextPageHandler}
            pageNumber={pageNumber}
          />
        </div>
      </div>
    </div>
  );
};

export default Showcase;
