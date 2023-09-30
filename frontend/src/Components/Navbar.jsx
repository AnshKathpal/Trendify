import { Flex, Text, Box, Button } from "@chakra-ui/react";
import React from "react";
import { Link, NavLink } from "react-router-dom";
import Trendify from "../images/trendifyLogoNew.png"

export const Navbar = () => {
  return (
    <div style={{ position: "relative" }}>
      <Flex
        justify={"space-between"}
        color="white"
        width={"100%"}
        bg="#080824"
        h="10vh"
        align="center"
        pos={"fixed"}
        zIndex="100"
        display={{ base: "none", lg: "flex" }}
      >
        <Box h = "95%" pos={"relative"} left = "5%" top = "2%" >
          <img src={Trendify} alt="" style={{height : "100%"}} />
        </Box>
        <Flex w="50%" justify={"space-evenly"} align="center">
          <Link to="/">
            <Text
              border={"1px solid white"}
              w="120px"
              p="2"
              borderRadius="20px 20px 20px 20px"
            >
              Home
            </Text>
          </Link>
          <Link to="/products">
            <Text
              border={"1px solid white"}
              w="120px"
              p="2"
              borderRadius="20px 20px 20px 20px"
            >
              Products
            </Text>
          </Link>
          <Link>
            <Text
              border={"1px solid white"}
              w="120px"
              p="2"
              borderRadius="20px 20px 20px 20px"
            >
              About Us
            </Text>
          </Link>
          <Link>
            <Text
              border={"1px solid white"}
              w="120px"
              p="2"
              borderRadius="20px 20px 20px 20px"
            >
              Contact
            </Text>
          </Link>
          <Button
            border={"1px solid white"}
            w="120px"
            p="2"
            borderRadius="20px 20px 20px 20px"
          >
            Login
          </Button>
        </Flex>
      </Flex>
    </div>
  );
};
