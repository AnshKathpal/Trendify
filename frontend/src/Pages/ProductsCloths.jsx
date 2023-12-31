import React from "react";
import { Flex } from "@chakra-ui/react";
import lv from "../images/lv-shoe.png";
import sweatshirt from "../images/sweatshirt.png"
import { Header } from "../Components/Header";
import { Sidebar } from "../Components/ProductPage-Components/Sidebar";
import { Footer } from "../Components/Footer";
import ProductCardCloths from "../Components/ProductPage-Components/ProductCardCloths";
import { WhatsappFloat } from "../Components/WhatsappFloat";

export const ProductsCloths = () => {


  const boxStyles = {
    pos : "absolute",
    top: { base: '40%', lg: '2%' },
    w: { base: '35%' },
    left: { base: '8%', lg: '9%' },
    zIndex: 1,
    // border : "1px solid red"
  }

  const imageStyles = {
    objectFit: "cover",
    rotate: "15deg",
    filter: "drop-shadow(5px px 5px white)",
  }




  const categoriesArr = [
    "Jackets",
    "Jeans",
    "Joggers",
    "Shirts",
    "Sweatshirts",
    "T-Shirts",
    "Trousers",
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
      <Header imageStyles={imageStyles} boxStyles={boxStyles} src={sweatshirt} text1="Your Style," text2="Your Choice" />
      <Sidebar
        categories={categoriesArr}
        brands={brandArr}
        colors={colorsArr}
        initialData={initialData}
        ProductCardComponent={ProductCardCloths}
      />
      <Footer mt="10vh" />
    </>
  );
};
