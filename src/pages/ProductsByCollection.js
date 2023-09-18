import React from "react";
import ProductsByCollectionCmp from "../components/collections/ProductsByCollectionCmp";
import { useParams } from "react-router-dom";
import SaleSection from "../components/homeSaleSection/SaleSection";

const ProductsByCollection = () => {
  const { name } = useParams();

  return (
    <>
      <ProductsByCollectionCmp name={name} />
      <SaleSection />
    </>
  );
};

export default ProductsByCollection;
