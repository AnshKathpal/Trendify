import React from "react";
import { Box, Flex, Text } from "@chakra-ui/react";
import lv from "../images/lv-shoe.png";
import wave from "../images/wave.png";

export const Header = () => {
  return (
    <>
      <Flex
        width="100%"
        height="86vh"
        bgGradient={
          "linear-gradient(to bottom, #080824, #090e2f, #07133a, #071646, #071952);"
        }
        pos="relative"
        justify={"flex-end"}
      >
        <Box pos="absolute" top="16%" left="4%" zIndex="1">
          <img
            style={{
              // border: "1px solid red",
              objectFit: "cover",
              rotate: "15deg",
              filter: "drop-shadow(5px px 5px white)",
            }}
            src={lv}
            alt=""
          />
        </Box>
        <Flex justifyContent="flex-start" pt="2%" w="50%">
          <Text
            align={"left"}
            fontFamily={"'Lilita One', cursive"}
            fontWeight="400"
            fontSize={"150px"}
            color={"white"}
          >
            Style for the <br />
            <span style={{color : "#ECB365"}}>Next Step</span> 
          </Text>
        </Flex>
        <Flex
          pos="absolute"
          top={"83%"}
          left="40%"
          transform={"translate(-50%, -50%)"}
        >
          <Text
            color="#071950"
            fontSize={"350px"}
            fontFamily={"'Passion One', cursive"}
            filter="drop-shadow(1px 1px 1px #646262)"
          >
            TRENDIFY
          </Text>
        </Flex>
      </Flex>
    </>
  );
};
