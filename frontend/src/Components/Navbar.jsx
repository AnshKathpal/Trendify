import { Flex, Text, Box } from "@chakra-ui/react";
import React from "react";

export const Navbar = () => {
  return (
    <div>
      <Flex
        justify={"space-between"}
        color="white"
        width={"100%"}
        bg="#080824"
        h="12vh"
        border={"1px solid red"}
        align="center"
      >
        <Box >Trendify</Box>
        <Flex
          border="1px solid red"
          w="50%"
          justify={"space-evenly"}
          align="center"
        >
          <Text>Home</Text>
          <Text>Products</Text>
          <Text>About Us</Text>
          <Text>Contact</Text>
        </Flex>
      </Flex>
    </div>
  );
};
