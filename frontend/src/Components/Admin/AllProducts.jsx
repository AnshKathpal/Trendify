import React, { useEffect, useState } from "react";
import { SidebarAdmin } from "./SidebarAdmin";
import { Flex, Box, Button, Text } from "@chakra-ui/react";
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
        border="1px solid red"
        w="80%"
        bgGradient="linear-gradient(to bottom, #080824, #090e2f, #07133a, #071646, #071952)"
        overflowY={"scroll"}
      >
        <Flex
          w="90%"
          h="100px"
          border="1px solid red"
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
              >
                <Box border="1px solid red" w="15%" h="100%">
                  <img
                    style={{
                      height: "100%",
                      width: "100%",
                      objectFit: "cover",
                    }}
                    src={product.imageURL}
                    alt=""
                  />
                </Box>
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
              >
                <Box border="1px solid red" w="15%" h="100%">
                  <img
                    style={{
                      height: "100%",
                      width: "100%",
                      objectFit: "cover",
                    }}
                    src={product.imageURL}
                    alt=""
                  />
                </Box>
              </Flex>
            );
          })}
      </Box>
    </Flex>
  );
};
