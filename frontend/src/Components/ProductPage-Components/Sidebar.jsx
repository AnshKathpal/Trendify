import {
  Box,
  Flex,
  Text,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Select,
  Option,
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
        <Flex w="20%" gap={"10"} direction={"column"}>
          <Text mt="5vh" fontSize={"30px"}>
            Filters
          </Text>
          <Accordion allowMultiple>
            <AccordionItem mb="10">
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

            <AccordionItem mb="10">
              <h2>
                <AccordionButton>
                  <Box as="span" flex="1" textAlign="center">
                    Brand
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <Flex direction="column" gap="2">
                  {brandArr.map((el) => (
                    <Flex pl="35%" gap="5" align={"center"}>
                      <input
                        type="checkbox"
                        name=""
                        id=""
                        value={el}
                        onChange={handleBrand}
                        checked={brand.includes(el)}
                      />
                      <label>{el}</label>
                    </Flex>
                  ))}
                </Flex>
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem mb="10">
              <h2>
                <AccordionButton>
                  <Box as="span" flex="1" textAlign="center">
                    Colors
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <Flex direction="column" gap="2">
                  {colorsArr.map((el) => (
                    <Flex pl="35%" gap="5" align={"center"}>
                      <input
                        type="checkbox"
                        name=""
                        id=""
                        value={el}
                        onChange={handleColor}
                        checked={color.includes(el)}
                      />
                      <label>{el}</label>
                    </Flex>
                  ))}
                </Flex>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>

          <Text mt="5vh" fontSize={"30px"}>
            Sort
          </Text>
        </Flex>
        <Flex flex="3" justifyContent="center">
          <ProductCard width="100%" />
        </Flex>
      </Flex>
    </>
  );
};
