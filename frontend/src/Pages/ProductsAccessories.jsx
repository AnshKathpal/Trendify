import React from "react";
import { Flex } from "@chakra-ui/react";
import lv from "../images/lv-shoe.png";
import { Header } from "../Components/Header";
import { Sidebar } from "../Components/ProductPage-Components/Sidebar";
import { Footer } from "../Components/Footer";
import ProductCardAccessories from "../Components/ProductPage-Components/ProductCardAccessories";

export const ProductsAccessories = () => {
  const categoriesArr = [
    "Casuals",
    "Sneakers",
    "Boots",
    "Sports",
    "Training",
    "Formal",
  ];
  const brandArr = ["Puma", "Nike", "Adidas"];
  const colorsArr = ["Black", "Brown", "Yellow", "Red", "Blue"];
  const initialData = {
    category: [],
    brand: [],
    color: [],
  };

  return (
    <>
      <Header src={lv} text1="Your Feet," text2="Your Faishon" />
      <Sidebar
        categories={categoriesArr}
        brands={brandArr}
        colors={colorsArr}
        initialData={initialData}
        ProductCardComponent={ProductCardAccessories}
      />
      <Footer mt="10vh" />
    </>
  );
};
