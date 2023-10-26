import { Box, Button, Flex } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import React from "react";

export const SidebarAdmin = () => {
  return (
    <Flex
      w="20%"
      flexDirection={"column"}
      justifyContent="flex-start"
      pt="30px"
      gap="20px"
      alignItems={"center"}
      marginTop="96px"
      bgGradient={
        "linear-gradient(to bottom, #080824, #090e2f, #07133a, #071646, #071952);"
      }
      border = "1px solid white"
    >

<Button w = "250px" >Dashboard</Button>
<Link to = "/allproducts" >
<Button w = "250px" >All Products</Button>
</Link>

      <Link to="/postShoes">
        <Button w = "250px" >Add New Shoes</Button>
      </Link>
      <Link to="/postCloths">
        <Button w = "250px" >Add New Cloths</Button>
      </Link>

        <Button w = "250px" >Add New Accessories</Button>

    </Flex>
  );
};
