import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import classes from "./Carousel.module.css";

import imgOne from "../../assets/carouselPic4.jpg";
import imgtwo from "../../assets/carouselPic5.jpg";
import imgthree from "../../assets/carouselPic6.jpg";

const slides = [
  {
    image: imgOne,
    title: "New Arrival",
    pageLink: "/new-arrival",
    content:
      "Discover our captivating collection, curated with the latest fashion trends in mind.",
  },
  {
    image: imgtwo,
    title: "Hot Trend",
    pageLink: "/hot-trend",
    content:
      "Explore and find must-have items that are currently making waves.",
  },
  {
    image: imgthree,
    title: "Simply Elegant",
    pageLink: "/simply-elegant",
    content:
      "where timeless designs meet exquisite craftsmanship and sophistication.",
  },
];

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const prevSlideHandler = () => {
    setCurrentSlide((prev) => (prev === 2 ? 0 : prev + 1));
  };
  const nextSlideHandler = () => {
    setCurrentSlide((prev) => (prev === 0 ? 2 : prev - 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isHovered) {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
      }
    }, 4000);

    return () => clearInterval(interval);
  }, [isHovered]);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className={classes.carousel}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className={classes.slides}>
        {slides.map((slide, index) => (
          <div
            className={`${classes.slide} ${
              index === currentSlide
                ? classes.active
                : index === currentSlide - 1 ||
                  (index === slides.length - 1 && currentSlide === 0)
                ? classes.previous
                : index === currentSlide + 1 ||
                  (index === 0 && currentSlide === slides.length - 1)
                ? classes.next
                : ""
            }`}
            key={index}
          >
            <img src={slide.image} alt={`Slide ${index}`} />

            <div className={classes.contentBox}>
              <div className={classes.title}>{slide.title}</div>
              <div className={classes.content}>{slide.content}</div>
              <div className={classes.shopNow}>
                <Link to={slide.pageLink}>Shop</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className={classes.controllers}>
        <div className={classes.btnPrev} onClick={prevSlideHandler}>
          &#10094;
        </div>
        <div className={classes.divider}></div>
        <div className={classes.btnNext} onClick={nextSlideHandler}>
          &#10095;
        </div>
      </div>
    </div>
  );
};

export default Carousel;
