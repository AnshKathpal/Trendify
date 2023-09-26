import {
  Box,
  Flex,
  Text,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";
import React, { useState } from "react";
import ProductCard from "./ProductCard";
import { useSearchParams } from "react-router-dom";
import { useEffect } from "react";

export const Sidebar = () => {
  const colorsArr = ["Black", "Brown", "Yellow", "Red", "Blue"];
  const categoriesArr = [
    "Casuals",
    "Sneakers",
    "Boots",
    "Sports",
    "Training",
    "Formal",
  ];
  const brandArr = ["Puma", "Nike", "Adidas"];

  const [visiblityCat, setVisiblityCat] = useState(false);
  const [display, setDisplay] = useState(false);
  const [visiblityBrand, setVisiblityBrand] = useState(false);

  const [searchParams, setSearchParams] = useSearchParams();

  let initialCategory = searchParams.getAll("category");
  let initialBrand = searchParams.getAll("brand");
  let initialColor = searchParams.getAll("color");
  const [category, setCategory] = useState(initialCategory || []);
  const [brand, setBrand] = useState(initialBrand || []);
  const [color, setColor] = useState(initialColor || []);

  useEffect(() => {
    let params = {
      category,
      brand,
      color,
    };

    setSearchParams(params);
  }, [category, brand, color]);

  const handleToggleVisibilityCategory = () => {
    setVisiblityCat(!visiblityCat);
    setDisplay(!display);
  };

  const handleToggleVisibilityBrand = () => {
    setVisiblityBrand(!visiblityBrand);
    setDisplay(!display);
  };

  const handleCategory = (e) => {
    const { value } = e.target;
    let newCategory = [...category];
    if (newCategory.includes(value)) {
      newCategory = newCategory.filter((el) => el !== value);
    } else {
      newCategory.push(value);
    }
    setCategory(newCategory);
  };

  const handleBrand = (e) => {
    const { value } = e.target;
    let newBrand = [...brand];
    if (newBrand.includes(value)) {
      newBrand = newBrand.filter((el) => el !== value);
    } else {
      newBrand.push(value);
    }
    setBrand(newBrand);
  };

  const handleColor = (e) => {
    const { value } = e.target;
    let newColor = [...color];
    if (newColor.includes(value)) {
      newColor = newColor.filter((el) => el !== value);
    } else {
      newColor.push(value);
    }
    setColor(newColor);
  };

  return (
    <>
      <Flex pos={"relative"} top="10vh">
        <Flex border="1px solid red" w="20%" gap={"10"} direction={"column"}>
          <Text border="1px solid blue" fontSize={"30px"}>
            Filters
          </Text>

          <Accordion allowMultiple>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box as="span" flex="1" textAlign="center">
                    Categories
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <Flex direction={"column"} gap="2">
                  {categoriesArr.map((el) => (
                    <Flex pl="35%" gap="5" align={"center"}>
                      <input
                        type="checkbox"
                        name=""
                        id=""
                        value={el}
                        onChange={handleCategory}
                        checked={category.includes(el)}
                      />
                      <label>{el}</label>
                    </Flex>
                  ))}
                </Flex>
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box as="span" flex="1" textAlign="left">
                    Section 2 title
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </AccordionPanel>
            </AccordionItem>
          </Accordion>

          <Text
            border={"1px solid red"}
            fontSize={"24px"}
            onClick={() => handleToggleVisibilityCategory()}
          >
            Categories
          </Text>
          <Flex
            display={display ? "flex" : "inline"}
            visibility={visiblityCat ? "visible" : "hidden"}
            border="1px solid blue"
            direction={"column"}
            gap="2"
          >
            {categoriesArr.map((el) => (
              <Box>
                <input
                  type="checkbox"
                  name=""
                  id=""
                  value={el}
                  onChange={handleCategory}
                  checked={category.includes(el)}
                />
                <label>{el}</label>
              </Box>
            ))}
          </Flex>
          <Text
            fontSize={"24px"}
            border="1px solid red"
            onClick={() => handleToggleVisibilityBrand()}
          >
            Brand
          </Text>
          <Flex
            border={"1px solid red"}
            display={display ? "flex" : "inline"}
            visibility={visiblityBrand ? "visible" : "hidden"}
            direction="column"
            gap="2"
          >
            {brandArr.map((el) => (
              <Box>
                <input
                  type="checkbox"
                  name=""
                  id=""
                  value={el}
                  onChange={handleBrand}
                  checked={brand.includes(el)}
                />
                <label>{el}</label>
              </Box>
            ))}
          </Flex>
          <Flex border={"1px solid red"} direction="column" gap="2">
            <Text fontSize={"24px"}>Colors</Text>
            {colorsArr.map((el) => (
              <Box>
                <input
                  type="checkbox"
                  name=""
                  id=""
                  value={el}
                  onChange={handleColor}
                  checked={color.includes(el)}
                />
                <label>{el}</label>
              </Box>
            ))}
          </Flex>
        </Flex>
        <ProductCard />
      </Flex>
    </>
  );
};
