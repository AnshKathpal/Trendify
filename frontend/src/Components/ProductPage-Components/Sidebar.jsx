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
import React, { useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import { useSearchParams } from "react-router-dom";

export const Sidebar = ({ categories, brands, colors, initialData, ProductCardComponent }) => {
  const [visiblityCat, setVisiblityCat] = useState(false);
  const [display, setDisplay] = useState(false);
  const [visiblityBrand, setVisiblityBrand] = useState(false);

  const [searchParams, setSearchParams] = useSearchParams();

  const [category, setCategory] = useState(initialData.category || []);
  const [brand, setBrand] = useState(initialData.brand || []);
  const [color, setColor] = useState(initialData.color || []);

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
                  {categories.map((el) => (
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
                  {brands.map((el) => (
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
                  {colors.map((el) => (
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
        <ProductCardComponent width="100%" />
        </Flex>
      </Flex>
    </>
  );
};
