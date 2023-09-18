import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";

import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Product from "./pages/Product";

import Collections from "./pages/Collections";
import PrivacyPolicy from "./pages/privacy/PrivacyPolicy";
import ReturnPolicy from "./pages/return/ReturnPolicy";
import ShippingInfo from "./pages/shipping/ShippingInfo";
import Faqs from "./pages/faqs/Faqs";
import Contact from "./pages/contact/Contact";
import ProductsByCollection from "./pages/ProductsByCollection";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products/:pid" element={<Product />} />
        <Route path="/products" element={<Products />} />
        <Route path="/collections" element={<Collections />} />
        <Route path="/collections/:name" element={<ProductsByCollection />} />

        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/return" element={<ReturnPolicy />} />
        <Route path="/shippingInfo" element={<ShippingInfo />} />
        <Route path="/faqs" element={<Faqs />} />

        <Route path="*" element={<Home />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
