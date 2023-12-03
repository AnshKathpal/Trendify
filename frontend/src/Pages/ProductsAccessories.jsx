import React from "react";
import { Flex } from "@chakra-ui/react";
import sunglass from "../images/sunglass.png";
import { Header } from "../Components/Header";
import { Sidebar } from "../Components/ProductPage-Components/Sidebar";
import { Footer } from "../Components/Footer";
import ProductCardAccessories from "../Components/ProductPage-Components/ProductCardAccessories";
import { WhatsappFloat } from "../Components/WhatsappFloat";

export const ProductsAccessories = () => {


  const boxStyles = {
    pos : "absolute",
    top: { base: '40%', lg: '22%' },
    w: { base: '45%' },
    left: { base: '8%', lg: '4%' },
    zIndex: 1,
  }

  const imageStyles = {
    objectFit: "cover",
    filter: "drop-shadow(5px px 5px white)",
  }





  const categoriesArr = [
    "Bags",
    "Belts",
    "Bracelet",
    "Sunglasses",
    "Wallets",
    "Watches",
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
      <Header imageStyles={imageStyles} boxStyles={boxStyles} src={sunglass} text1="Glamour In" text2="Accessories" />
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
