import React from "react";
import { Route, Routes } from "react-router-dom";
import { AllProducts } from "../Components/Admin/AllProducts";
import { PostCloths } from "../Components/Admin/PostCloths";
import { PostShoes } from "../Components/Admin/PostShoes";
import ProductDescription from "../Components/ProductPage-Components/ProductDescription";
import { AboutUs } from "../Pages/AboutUs";
import { Contact } from "../Pages/Contact";
import { HomePage } from "../Pages/HomePage";
import { Products } from "../Pages/Products";
import { ProductsAccessories } from "../Pages/ProductsAccessories";
import { ProductsCloths } from "../Pages/ProductsCloths";

export const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/shoes" element={<Products />} />
      <Route path="/cloths" element={<ProductsCloths />} />
      <Route path="/accessories" element={<ProductsAccessories />} />
      <Route path="/about" element={<AboutUs />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/product-description/:id" element={<ProductDescription />} />
      <Route path="*" element={<h1 >404 Error, No Page Found</h1>} />



      {/* Admin Routes */}

      <Route path = "/postShoes" element = {<PostShoes/>} />
      <Route path = "/postCloths" element = {<PostCloths/>} />
      <Route path = "/allproducts" element = {<AllProducts/>} />


    </Routes>
  );
};
