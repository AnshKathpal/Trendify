import { Flex, Text, Box, Button } from "@chakra-ui/react";
import React from "react";

export const Navbar = () => {
  return (
    <div style={{position : "relative"}}>
      <Flex
        justify={"space-between"}
        color="white"
        width={"100%"}
        bg="#080824"
        h="10vh"
        align="center"
        pos={"fixed"}
        zIndex = "100"
        display={{base : "none", lg : "flex"}}
      >
        <Box>Trendify</Box>
        <Flex
          w="50%"
          justify={"space-evenly"}
          align="center"
        >
          <Text border={"1px solid white"} w = "15%" p = "2" borderRadius = "20px 20px 20px 20px" >Home</Text>
          <Text border={"1px solid white"} w = "15%" p = "2" borderRadius = "20px 20px 20px 20px">Products</Text>
          <Text border={"1px solid white"} w = "15%" p = "2" borderRadius = "20px 20px 20px 20px">About Us</Text>
          <Text border={"1px solid white"} w = "15%" p = "2" borderRadius = "20px 20px 20px 20px">Contact</Text>
          <Button border={"1px solid white"} w = "15%" p = "2" borderRadius = "20px 20px 20px 20px" >Login</Button>
        </Flex>
      </Flex>
    </div>
  );
};
