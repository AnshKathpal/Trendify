import { Box, filter, Grid, Text } from "@chakra-ui/react";
import React from "react";
import Shop1 from "../../images/shop1.jpeg";
import Shop2 from "../../images/shop2.png";
import Shop3 from "../../images/shop3.png";

export const Shop = () => {
  return (
    <>
      <Box
        bgGradient={
          "linear-gradient(to bottom, #d4d5da, #9ea2b7, #6d7195, #3e4373, #071951);"
        }
      >
        <Text fontFamily={"'Passion One', cursive"} fontSize="90px">
          What are you Shopping For?
        </Text>
        <Grid
          gridTemplateColumns={"repeat(3,1fr)"}
          gap="10"
          w="90%"
          m="auto"
          p="10"
        >
          <Box bg="white" h="50vh" pos="relative" _hover={{".textShoes" : {visibility : "visible"} , ".imgShoes" : {transform : "scale(1.1)"}}}>
            <img
            className = "imgShoes"
              src={Shop1}
              style={{
                objectFit: "cover",
                height: "100%",
                transition: "transform 0.3s ease",
                filter : "brightness(0.4)"
              }}
              alt=""
            />
            <Text
            className="textShoes"
              fontFamily={"'Passion One', cursive"}
              color="white"
              fontSize="50px"
              pos={"absolute"}
              transform="translate(-50%,-50%)"
              top="50%"
              left="50%"
              visibility={"hidden"}
            >
              Trendy Shoes
            </Text>
          </Box>
          <Box bg="black" h="50vh" pos="relative" _hover={{".textShoes" : {visibility : "visible"} , ".imgShoes" : {transform : "scale(1.1)"}}}>
            <img
            className = "imgShoes"
              src={Shop2}
              style={{
                objectFit: "cover",
                height: "100%",
                transition: "transform 0.3s ease",
                filter : "brightness(0.6)"
              }}
              alt=""
            />
            <Text
            className="textShoes"
              fontFamily={"'Passion One', cursive"}
              color="white"
              fontSize="50px"
              pos={"absolute"}
              transform="translate(-50%,-50%)"
              top="50%"
              left="50%"
              visibility={"hidden"}
            >
              Trendy Cloths
            </Text>
          </Box>
          <Box bg="black" h="50vh" pos="relative" _hover={{".textShoes" : {visibility : "visible"} , ".imgShoes" : {transform : "scale(1.1)"}}}>
            <img
            className = "imgShoes"
              src={Shop3}
              style={{
                objectFit: "cover",
                height: "100%",
                transition: "transform 0.3s ease",
                filter : "brightness(0.6)"
              }}
              alt=""
            />
            <Text
            className="textShoes"
              fontFamily={"'Passion One', cursive"}
              color="white"
              fontSize="50px"
              pos={"absolute"}
              transform="translate(-50%,-50%)"
              top="50%"
              left="50%"
              visibility={"hidden"}
            >
              Trendy Accessories
            </Text>
          </Box>
        </Grid>
      </Box>
    </>
  );
};
