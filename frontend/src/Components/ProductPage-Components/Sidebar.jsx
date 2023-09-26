import { Box, Flex, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import ProductCard from "./ProductCard";
import { useSearchParams } from "react-router-dom";
import { useEffect } from "react";

export const Sidebar = () => {

  
  const colorsArr = ["Black","Brown","Yellow","Red","Blue"]


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
      color
    };

    setSearchParams(params);
  }, [category, brand,color]);

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
        <Flex border="1px solid red" w="20%" direction={"column"}>
          <Text>Categories</Text>
          <Box>
            <label>Casuals</label>
            <input
              type="checkbox"
              name=""
              id=""
              value={"Casuals"}
              onChange={handleCategory}
              checked={category.includes("Casuals")}
            />
          </Box>
          <Box>
            <label>Sneakers</label>
            <input
              type="checkbox"
              name=""
              id=""
              value={"Sneakers"}
              onChange={handleCategory}
              checked={category.includes("Sneakers")}
            />
          </Box>
          <Box>
            <label>Boots</label>
            <input
              type="checkbox"
              name=""
              id=""
              value={"Boots"}
              onChange={handleCategory}
              checked={category.includes("Boots")}
            />
          </Box>
          <Box>
            <label>Sports</label>
            <input
              type="checkbox"
              name=""
              id=""
              value={"Sports"}
              onChange={handleCategory}
              checked={category.includes("Sports")}
            />
          </Box>
          <Box>
            <label>Training</label>
            <input
              type="checkbox"
              name=""
              id=""
              value={"Training"}
              onChange={handleCategory}
              checked={category.includes("Training")}
            />
          </Box>
          <Box>
            <label>Formals</label>
            <input
              type="checkbox"
              name=""
              id=""
              value={"Formal"}
              onChange={handleCategory}
              checked={category.includes("Formal")}
            />
          </Box>
          <Text>Brand</Text>
          <Box>
            <label>Puma</label>
            <input
              type="checkbox"
              name=""
              id=""
              value={"Puma"}
              onChange={handleBrand}
              checked={brand.includes("Puma")}
            />
          </Box>
          <Box>
            <label>Nike</label>
            <input
              type="checkbox"
              name=""
              id=""
              value={"Nike"}
              onChange={handleBrand}
              checked={brand.includes("Nike")}
            />
          </Box>
          <Box>
            <label>Adidas</label>
            <input
              type="checkbox"
              name=""
              id=""
              value={"Adidas"}
              onChange={handleBrand}
              checked={brand.includes("Adidas")}
            />
          </Box>
          <Text>Colors</Text>
          {colorsArr.map((el)=>(
          <Box>
          <label>{el}</label>
          <input
            type="checkbox"
            name=""
            id=""
            value={el}
            onChange={handleColor}
            checked={color.includes(el)}
          />
        </Box>  
          ))}
          {/* <Box>
            <label>Black</label>
            <input
              type="checkbox"
              name=""
              id=""
              value={"Black"}
              onChange={handleColor}
              checked={color.includes("Black")}
            />
          </Box>
          <Box>
            <label>Brown</label>
            <input
              type="checkbox"
              name=""
              id=""
              value={"Brown"}
              onChange={handleColor}
              checked={color.includes("Brown")}
            />
          </Box>
          <Box>
            <label>Blue</label>
            <input
              type="checkbox"
              name=""
              id=""
              value={"Blue"}
              onChange={handleColor}
              checked={color.includes("Blue")}
            />
          </Box>
          <Box>
            <label>Yellow</label>
            <input
              type="checkbox"
              name=""
              id=""
              value={"Yellow"}
              onChange={handleColor}
              checked={color.includes("Yellow")}
            />
          </Box>
          <Box>
            <label>Red</label>
            <input
              type="checkbox"
              name=""
              id=""
              value={"Red"}
              onChange={handleColor}
              checked={color.includes("Red")}
            />
          </Box> */}
        </Flex>
        <ProductCard />
      </Flex>
    </>
  );
};
