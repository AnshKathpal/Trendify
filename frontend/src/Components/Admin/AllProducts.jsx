import React, { useEffect, useState } from "react";
import { SidebarAdmin } from "./SidebarAdmin";
import { Flex, Box, Button, Text, Grid } from "@chakra-ui/react";
import { useSelector, useDispatch } from "react-redux";
import { getProducts } from "../../redux/Products/action";

export const AllProducts = () => {
  const [displayShoes, setDisplayShoes] = useState("flex");
  const [displayCloths, setDisplayCloths] = useState("none");

  const shoesProducts = useSelector((store) => store.productReducer.products);
  console.log(shoesProducts);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  const handleShoes = () => {
    setDisplayShoes("flex");
    setDisplayCloths("none");
  };

  const handleCloths = () => {
    setDisplayCloths("flex");
    setDisplayShoes("none");
  };

  const handleAccessories = () => {};

  return (
    <Flex height="100dvh" w="100%">
      <SidebarAdmin />
      <Box
        marginTop="96px"
        w="80%"
        bgGradient="linear-gradient(to bottom, #080824, #090e2f, #07133a, #071646, #071952)"
        overflowY={"scroll"}
        boxShadow = "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px"
        pb = "10px"
 
      >
        <Flex
          w="90%"
          h="100px"
          m="auto"
          justifyContent={"space-around"}
          alignItems="center"
        >
          <Button onClick={handleShoes}>All Shoes</Button>
          <Button onClick={handleCloths}>All Cloths</Button>
          <Button onClick={handleAccessories}>All Accessories</Button>
        </Flex>

        {shoesProducts &&
          shoesProducts.map((product) => {
            return (
              <Flex
                p="10px"
                w="90%"
                bg="white"
                h="150px"
                margin={"auto"}
                mt="10"
                display={displayShoes}
                borderRadius={"10px"}
              >
                <Box w="15%" h="100%" >
                  <img
                    style={{
                      height: "100%",
                      width: "100%",
                      objectFit: "cover",
                      borderRadius : "10px"
                    }}
                    src={product.imageURL}
                    alt=""
                  />
                </Box>
                <Grid gridTemplateColumns={"repeat(3,1fr)"} h = "100%" w = "75%" >
                  <Flex justifyContent={"center"} alignItems = "center" >
                    Product Name : {product.name}
                  </Flex>
                  <Flex  justifyContent={"center"} alignItems = "center" >
                    Brand : {product.brand}
                  </Flex>
                  <Flex  justifyContent={"center"} alignItems = "center" >
                    Color : {product.color}
                  </Flex>
                  <Flex  justifyContent={"center"} alignItems = "center" >
                    Category : {product.category}
                  </Flex>
                  <Flex  justifyContent={"center"} alignItems = "center" >
                    Price : {product.price}
                  </Flex>
                  <Flex  justifyContent={"center"} alignItems = "center" >
                    Rating : {product.rating}
                  </Flex>
                </Grid>
                <Flex flexDirection={"column"} justifyContent = "space-around" h = "100%" w = "10%">
                  <Button>Edit</Button>
                  <Button>Delete</Button>
                </Flex>
              </Flex>
            );
          })}

        {shoesProducts &&
          shoesProducts.map((product) => {
            return (
              <Flex
                p="10px"
                w="90%"
                bg="white"
                h="150px"
                margin={"auto"}
                mt="10"
                display={displayCloths}
                borderRadius={"10px"}
              >
                <Box w="15%" h="100%" >
                  <img
                    style={{
                      height: "100%",
                      width: "100%",
                      objectFit: "cover",
                      borderRadius : "10px"
                    }}
                    src={product.imageURL}
                    alt=""
                  />
                </Box>
                <Grid gridTemplateColumns={"repeat(3,1fr)"} h = "100%" w = "75%" >
                  <Flex justifyContent={"center"} alignItems = "center" >
                    Product Name : {product.name}
                  </Flex>
                  <Flex  justifyContent={"center"} alignItems = "center" >
                    Brand : {product.brand}
                  </Flex>
                  <Flex  justifyContent={"center"} alignItems = "center" >
                    Color : {product.color}
                  </Flex>
                  <Flex  justifyContent={"center"} alignItems = "center" >
                    Category : {product.category}
                  </Flex>
                  <Flex  justifyContent={"center"} alignItems = "center" >
                    Price : {product.price}
                  </Flex>
                  <Flex  justifyContent={"center"} alignItems = "center" >
                    Rating : {product.rating}
                  </Flex>
                </Grid>
                <Flex flexDirection={"column"} justifyContent = "space-around" h = "100%" w = "10%">
                  <Button>Edit</Button>
                  <Button>Delete</Button>
                </Flex>
              </Flex>
            );
          })}
      </Box>
    </Flex>
  );
};
