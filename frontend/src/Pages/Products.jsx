import React from "react";
import { Flex } from "@chakra-ui/react";
import lv from "../images/lv-shoe.png";
import { Header } from "../Components/Header";
import { Sidebar } from "../Components/ProductPage-Components/Sidebar";
import ProductAddToCart from "../Components/ProductPage-Components/ProductCard";
import { Footer } from "../Components/Footer";
import Pagination from "../Components/ProductPage-Components/Pagination";
import ProductCard from "../Components/ProductPage-Components/ProductCard";
import { WhatsappFloat } from "../Components/WhatsappFloat";

export const Products = () => {
  const boxStyles = {
    pos: "absolute",
    top: { base: "40%", lg: "16%" },
    w: { base: "90%" },
    left: { base: "8%", lg: "4%" },
    zIndex: 1,
  };

  const imageStyles = {
    objectFit: "cover",
    rotate: "15deg",
    filter: "drop-shadow(5px px 5px white)",
  };

  const categoriesArr = [
    "Boots",
    "Casuals",
    "Formal",
    "Sneakers",
    "Sports",
    "Training",
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
    <WhatsappFloat/>
      <Header
        imageStyles={imageStyles}
        boxStyles={boxStyles}
        src={lv}
        text1="Your Feet,"
        text2="Your Faishon"
      />
      <Sidebar
        categories={categoriesArr}
        brands={brandArr}
        colors={colorsArr}
        initialData={initialData}
        ProductCardComponent={ProductCard}
      />
      <Footer mt="10vh" />
    </>
  );
};
