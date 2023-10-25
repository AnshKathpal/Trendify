import React from "react";
import { Box, Flex, Text } from "@chakra-ui/react";
import lv from "../images/lv-shoe.png";
import wave from "../images/wave.png";
import { PostShoes } from "./Admin/PostShoes";

export const Header = ({src,text1,text2,boxStyles,imageStyles}) => {
  return (
    <>
      <Flex
        width="100%"
        height={{ base: "70vh", lg: "86vh" }}
        bgGradient={
          "linear-gradient(to bottom, #080824, #090e2f, #07133a, #071646, #071952);"
        }
        overflow="hidden"
        pos="relative"
        justify={"flex-end"}
        top="10vh"
      >
        <Box

        {...boxStyles}

          // pos="absolute"
          // top={{ base: "40%", lg: "16%" }}
          // w={{ base: "90%" }}
          // left={{ base: "8%", lg: "4%" }}
          // zIndex="1"
        >
          <img
            style={{
              // objectFit: "cover",
              // rotate: "15deg",
              // filter: "drop-shadow(5px px 5px white)",
              ...imageStyles
            }}
            src={src}
            alt=""
          />
        </Box>
        <Flex
          justifyContent={{ base: "center", lg: "flex-start" }}
          pt="2%"
          w={{ base: "100%", lg: "50%" }}
          display={{ base: "flex", lg: "flex" }}
        >
          <Text
            align={"left"}
            fontFamily={"'Lilita One', cursive"}
            fontWeight="400"
            fontSize={{ base: "50px", lg: "150px" }}
            color={"white"}
          >
            {text1} <br />
            <span  style={{ color: "#ECB365" }}>{text2}</span>
          </Text>
        </Flex>
        <Flex
          pos="absolute"
          top={{ base: "75%", lg: "83%" }}
          left={{ base: "50%", lg: "40%" }}
          transform={"translate(-50%, -50%)"}
        >
          <Text
            color="#071950"
            fontSize={{ base: "95px", lg: "350px" }}
            fontFamily={"'Passion One', cursive"}
            filter="drop-shadow(1px 1px 1px #646262)"
            display={{ base: "block", lg: "block" }}
          >
            TRENDIFY
          </Text>
        </Flex>
      </Flex>
    </>
  );
};
