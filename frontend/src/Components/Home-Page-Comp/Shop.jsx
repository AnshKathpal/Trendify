import { Box, filter, Grid, Text } from "@chakra-ui/react";
import React from "react";
import Shop1 from "../../images/shop1.jpeg";
import Shop2 from "../../images/shop2.png";
import Shop3 from "../../images/shop3.png";
import {Link} from "react-router-dom"

export const Shop = () => {
  return (
    <>
      <Box
        bgGradient={
          "linear-gradient(to bottom, #d4d5da, #9ea2b7, #6d7195, #3e4373, #080824);"
        }
      >
        <Text fontFamily={"'Passion One', cursive"} fontSize={{base : "40px", lg : "90px"}} p = {{base : "5", lg : "0"}}>
          What are you Shopping For?
        </Text>
        <Grid
          gridTemplateColumns={{base : "repeat(1,1fr)", lg : "repeat(3,1fr)"}}
          gap="10"
          w={{base : "95%", lg : "90%"}}
          m="auto"
          p={{base : "5", lg : "10"}}
        >
          <Box bg="white" h="50vh" pos="relative" _hover={{".textShoes" : {visibility : "visible"} , ".imgShoes" : {transform : "scale(1.1)"}}}>
            <Link to = "/shoes" >
            
            <img
            className = "imgShoes"
              src={Shop1}
              style={{
                objectFit: "cover",
                height: "100%",
                width : "100%",
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
            </Link>
          </Box>
          <Box bg="black" h="50vh" pos="relative" _hover={{".textShoes" : {visibility : "visible"} , ".imgShoes" : {transform : "scale(1.1)"}}}>
            <Link to = "/cloths" >
            
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
            </Link>
          </Box>
          <Box bg="black" h="50vh" pos="relative" _hover={{".textShoes" : {visibility : "visible"} , ".imgShoes" : {transform : "scale(1.1)"}}}>
            <Link to = "/accessories" >
            
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
            </Link>
          </Box>
        </Grid>
      </Box>
    </>
  );
};
