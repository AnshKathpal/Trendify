import React from "react";
import {
  Flex,
  Circle,
  Box,
  Image,
  Badge,
  useColorModeValue,
  Icon,
  chakra,
  Tooltip,
  Grid,
} from "@chakra-ui/react";
import { BsStar, BsStarFill, BsStarHalf } from "react-icons/bs";
import { FiShoppingCart } from "react-icons/fi";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getProducts } from "../redux/Products/action";
import { useSearchParams } from "react-router-dom";

function Rating({ rating, numReviews }) {
  return (
    <Box display="flex" alignItems="center">
      {Array(5)
        .fill("")
        .map((_, i) => {
          const roundedRating = Math.round(rating * 2) / 2;
          if (roundedRating - i >= 1) {
            return (
              <BsStarFill
                key={i}
                style={{ marginLeft: "1" }}
                color={i < rating ? "teal.500" : "gray.300"}
              />
            );
          }
          if (roundedRating - i === 0.5) {
            return <BsStarHalf key={i} style={{ marginLeft: "1" }} />;
          }
          return <BsStar key={i} style={{ marginLeft: "1" }} />;
        })}
      <Box as="span" ml="2" color="gray.600" fontSize="sm">
        {numReviews} review{numReviews > 1 && "s"}
      </Box>
    </Box>
  );
}

function ProductCard() {

  const [searchParams] = useSearchParams()

  console.log(searchParams)



  const data = useSelector((store) => store.productReducer.products);
  console.log(data);
  const loading = useSelector((store) => store.productReducer.isLoading);
  console.log(loading);
  const error = useSelector((store) => store.productReducer.isError);
  console.log(error);

  const dispatch = useDispatch();

  let obj = {
    params : {
      category : searchParams.getAll("category")
    }
    
  }

  useEffect(() => {
    dispatch(getProducts(obj));
  }, [searchParams]);

  return (
    <Grid
      gridTemplateColumns={"repeat(3,1fr)"}
      p="10"
      w="80%"
      border="1px solid blue"
      gap="10"
      h="auto"
      placeItems={"flex-start"}
    >
      {data &&
        data.map((el) => (
          <Box
            borderWidth="1px"
            maxh="auto"
            rounded="lg"
            shadow="lg"
            // position="relative"
            // top="10vh"
          >
            {data.isNew && (
              <Circle
                size="10px"
                position="absolute"
                top={2}
                right={2}
                bg="red.200"
              />
            )}

            <Image
              src={el.imageURL}
              alt={`Picture of ${el.name}`}
              roundedTop="lg"
            />

            <Box p="6">
              <Box display="flex" alignItems="baseline">
                {el.isNew && (
                  <Badge
                    rounded="full"
                    px="2"
                    fontSize="0.8em"
                    colorScheme="red"
                  >
                    New
                  </Badge>
                )}
              </Box>
              <Flex mt="1" justifyContent="space-between" alignContent="center">
                <Flex direction={"column"} align="flex-start">
                  <Box
                    fontSize="2xl"
                    fontWeight="semibold"
                    as="h4"
                    lineHeight="tight"
                    isTruncated
                  >
                    {el.name}
                  </Box>
                  <Box
                    fontSize="l"
                    fontWeight="semibold"
                    as="h4"
                    lineHeight="tight"
                    isTruncated
                  >
                    {el.category}
                  </Box>
                </Flex>
                <Tooltip
                  label="Add to cart"
                  bg="white"
                  placement={"top"}
                  color={"gray.800"}
                  fontSize={"1.2em"}
                >
                  <chakra.a href={"#"} display={"flex"}>
                    <Icon
                      as={FiShoppingCart}
                      h={7}
                      w={7}
                      alignSelf={"center"}
                    />
                  </chakra.a>
                </Tooltip>
              </Flex>

              <Flex justifyContent="space-between" alignContent="center">
                <Rating rating={el.rating} numReviews={el.numReviews} />
                <Box fontSize="2xl">
                  <Box as="span" color={"gray.600"} fontSize="lg">
                    £
                  </Box>
                  {el.price.toFixed(2)}
                </Box>
              </Flex>
            </Box>
          </Box>
        ))}
    </Grid>
  );
}

export default ProductCard;
