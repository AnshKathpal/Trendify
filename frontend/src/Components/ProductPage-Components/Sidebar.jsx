import { Box, Flex } from "@chakra-ui/react";
import React, { useState } from "react";
import ProductCard from "./ProductCard";
import { useSearchParams } from "react-router-dom";
import { useEffect } from "react";

export const Sidebar = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  let initialCategory = searchParams.getAll("category");
  const [category, setCategory] = useState(initialCategory || []);

  useEffect(() => {
    let params = {
      category,
    };

    setSearchParams(params);
  }, [category]);

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

  return (
    <>
      <Flex pos={"relative"} top="10vh">
        <Flex border="1px solid red" w="20%" direction={"column"}>
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
        </Flex>
        <ProductCard />
      </Flex>
    </>
  );
};
