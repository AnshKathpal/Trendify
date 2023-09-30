import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";
import insta from "../images/instagram.png";
import fb from "../images/facebook.png";
import whatsapp from "../images/whatsapp.png";
import styled from "styled-components";
import trendifylogo from "../images/trendifyLogoNew.png"

export const Footer = ({mt}) => {
  return (
    <>
      <Flex
        h={{ base: "auto", lg: "35vh" }}
        bg="#080824"
        justify={"space-around"}
        w="100%"
        direction={{ base: "column", lg: "row" }}
        mt = {mt}
      >
        <Flex
          color="white"
          justify={{ base: "center", lg: "center" }}
          align={{ base: "center", lg: "center" }}
          direction={"column"}
          gap = "5"
        >
          <Box w="70%" >
            <img src={trendifylogo} alt="" />
          </Box>
          <Flex w="100%" justify={"space-evenly"}>
            <Insta src={insta} alt="" />
            <Facebook src={fb} alt="" />
            <Whatsapp src={whatsapp} alt="" />
          </Flex>
        </Flex>
        <Flex
          direction={{ base: "column", lg: "row" }}
          gap={{ base: "20", lg: "60" }}
          align={"flex-start"}
        >
          <Flex direction={"column"}>
            <Text color="white" fontSize={"45px"}>
              Products
            </Text>
            <Text align={"left"} color="white" fontSize={"20px"}>
              Trendy Shoes
            </Text>
            <Text align={"left"} color="white" fontSize={"20px"}>
              Trendy Cloths
            </Text>
            <Text align={"left"} color="white" fontSize={"20px"}>
              Trendy Accessories
            </Text>
          </Flex>
          <Flex direction={"column"}>
            <Text color="white" fontSize={"45px"}>
              Customer Service
            </Text>
            <Text align={"left"} color="white" fontSize={"20px"}>
              Returns & Exchange
            </Text>
            <Text align={"left"} color="white" fontSize={"20px"}>
              Shipping & Delivery
            </Text>
            <Text align={"left"} color="white" fontSize={"20px"}>
              Track Order
            </Text>
            <Text align={"left"} color="white" fontSize={"20px"}>
              Payment Options
            </Text>
            <Text align={"left"} color="white" fontSize={"20px"}>
              Customer Review
            </Text>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};

const Insta = styled.img`
  height: 50%;
  @media screen and (min-width: 320px) and (max-width: 480px) {
    width: 15%;
  }
`;

const Facebook = styled.img`
  height: 50%;
  @media screen and (min-width: 320px) and (max-width: 480px) {
    width: 15%;
  }
`;

const Whatsapp = styled.img`
  height: 46%;
  @media screen and (min-width: 320px) and (max-width: 480px) {
    width: 15%;
  }
`;
