import React from "react";
import { Route, Routes } from "react-router-dom";
import { PostShoes } from "../Components/Admin/PostShoes";
import ProductDescription from "../Components/ProductPage-Components/ProductDescription";
import { AboutUs } from "../Pages/AboutUs";
import { Contact } from "../Pages/Contact";
import { HomePage } from "../Pages/HomePage";
import { Products } from "../Pages/Products";

export const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/shoes" element={<Products />} />
      <Route path="/about" element={<AboutUs />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/product-description/:id" element={<ProductDescription />} />
      <Route path = "/postshoes" element = {<PostShoes/>} />
      <Route path="*" element={<h1 >404 Error, No Page Found</h1>} />


      {/* Admin Routes */}

    </Routes>
  );
};
