import React from "react";

import Carousel from "../components/homeCarousel/Carousel";
import FeaturedCategories from "../components/homeCategories/FeaturedCategories";
import SaleSection from "../components/homeSaleSection/SaleSection";
import HitProducts from "../components/homeHitProducts/HitProducts";

const Home = () => {
  return (
    <>
      <Carousel />
      <FeaturedCategories />
      <HitProducts />
      <SaleSection />
    </>
  );
};

export default Home;
