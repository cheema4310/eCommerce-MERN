import React, { useState } from "react";
import { useParams } from "react-router-dom";

import classes from "./SingleProduct.module.css";
// delete images imports later
import imageOne from "../../assets/image1.jpg";
import imageTwo from "../../assets/image2.jpg";
import imageThree from "../../assets/image3.jpg";

import ItemColor from "./ItemColor";
import ItemSize from "./ItemSize";
import CartActions from "./CartActions";
import ProductRating from "../homeHitProducts/ProductRating";
import Dummy_Products from "../../dummyProducts";
import Product from "../homeHitProducts/Product";
import Breadcrumbs from "./Breadcrumbs";

const SingleProduct = () => {
  const { pid } = useParams();

  // const sampleProduc = Dummy_Products.filter((p) => p.id === pid);

  const [mainImage, setMainImage] = useState(1);

  // delete this product array later
  const sampleProduct = {
    id: "54",
    title: "AOP Phone Case",
    link: "https://images.unsplash.com/photo-1633948760540-0015ea5415da?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
    hoverLink:
      "https://images.unsplash.com/photo-1633948760885-02e7a17391b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80",
    category: "accessories",
    size: ["s", "m", "l", "xl"],
    color: ["orange", "gold", "gray"],
    price: 79.99,
    rating: 4.5,
    reviews: 8,
  };

  const filterProducts = Dummy_Products.filter(
    (p) => p.category === sampleProduct.category
  );
  const slicedProducts = filterProducts.slice(1, 5);

  const routes = [
    { path: "/", name: "Home" },
    { path: "/products", name: "Shop" },
  ];

  return (
    <div className={classes.singleProduct}>
      <Breadcrumbs routes={routes} title={sampleProduct.title} />
      <div className={classes.wrapper}>
        <div className={classes.productImg}>
          <div className={classes.mainImg}>
            <img
              src={require(`../../assets/image${mainImage}.jpg`)}
              alt="Main"
            />
          </div>
          <div className={classes.thumbnail}>
            <img
              src={imageOne}
              alt="One"
              onClick={() => setMainImage(1)}
              className={mainImage === 1 ? classes.active : ""}
            />
            <img
              src={imageTwo}
              alt="Two"
              onClick={() => setMainImage(2)}
              className={mainImage === 2 ? classes.active : ""}
            />
            <img
              src={imageThree}
              alt="Three"
              onClick={() => setMainImage(3)}
              className={mainImage === 3 ? classes.active : ""}
            />
          </div>
        </div>
        <div className={classes.productInfo}>
          <div className={classes.impInfo}>
            <h2>{sampleProduct.title}</h2>

            <span className={classes.price}>${sampleProduct.price}</span>
            <ProductRating rating={sampleProduct.rating} />
            <span className={classes.reviews}>
              {sampleProduct.reviews} Reviews
            </span>

            <ItemColor />
            <ItemSize />
            <hr />
            <CartActions />
          </div>
        </div>
      </div>
      <div className={classes.productDetails}>
        <h2>Product Details</h2>
        <p>
          The AOP phone case is a perfect blend of style and protection. With
          its durable construction and precise fit, it ensures optimal
          safeguarding against bumps and scratches. The case showcases trendy
          patterns using advanced printing technology, adding a touch of
          personalization and uniqueness to your phone.
        </p>
        <hr />
        <h2>Related Items</h2>
        <div className={classes.relatedItems}>
          {slicedProducts.map((p, i) => (
            <Product key={i} product={p} index={i} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
