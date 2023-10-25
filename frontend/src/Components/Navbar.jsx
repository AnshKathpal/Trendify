import { Flex, Text, Box, Button } from "@chakra-ui/react";
import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Trendify from "../images/trendifyLogoNew.png";

export const Navbar = () => {
  const [dropdown, setDropdown] = useState("hidden");

  const handleVisibility = () => {
    if (dropdown == "hidden") {
      setDropdown("visible");
    } else {
      setDropdown("hidden");
    }
  };

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
        <Box h="95%" pos={"relative"} left="5%" top="2%">
          <img src={Trendify} alt="" style={{ height: "100%" }} />
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

          <Box>
            <Text
              border={"1px solid white"}
              position="relative"
              w="120px"
              p="2"
              borderRadius="20px 20px 20px 20px"
              onClick={handleVisibility}
            >
              Products
            </Text>
            <Flex
              borderRadius="20px 20px 20px 20px"
              pos="absolute"
              visibility={dropdown}
              flexDirection="column"
              top="80%"
              bg="white"
              width="15%"
              height={dropdown ? "auto" : "0"}
              opacity={dropdown ? 1 : 0}
              overflow="hidden"
              transition="height 0.3s ease-in-out, opacity 0.3s ease-in-out"
              fontSize={"lg"}
              gap="2"
              p="2"
            >
              <Link to="/shoes">
                <Text
                  _hover={{
                    backgroundColor: "rgb(6,26,80)",
                    color: "white",
                    transition: "ease-in-out",
                  }}

                  borderRadius="20px 20px 20px 20px"
                  color="black"
                  onClick={() => setDropdown("hidden")}
                  textAlign = "left"
                  pl = "3"
                >
                  Trendy Shoes
                </Text>
              </Link>
              <Link to="/cloths">
              <Text
              textAlign = "left"
              pl = "3"
              _hover={{
                backgroundColor: "rgb(6,26,80)",
                color: "white",
                transition: "ease-in-out",
              }}

                borderRadius="20px 20px 20px 20px"
                color="black"
                onClick={() => setDropdown("hidden")}
              >
                Trendy Cloths
              </Text>
              </Link>
              <Link to="/accessories">
              <Text
              textAlign = "left"
              pl = "3"
              _hover={{
                backgroundColor: "rgb(6,26,80)",
                color: "white",
                transition: "ease-in-out",
              }}
              onClick={() => setDropdown("hidden")}

                borderRadius="20px 20px 20px 20px"
                color="black"
              >
                Trendy Accessories
              </Text>
              </Link>
            </Flex>
          </Box>

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
