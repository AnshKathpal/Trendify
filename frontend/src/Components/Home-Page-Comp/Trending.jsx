import { Box, Text, Flex } from "@chakra-ui/react";
import React from "react";
import trending1 from "../../images/trending1-bg.png";
import wavebg from "../../images/wave.png";
import trending2 from "../../images/trending2.png";
import trending3 from "../../images/trending3.png";
import styled from "styled-components";

export const Trending = () => {
  return (
    <>
      <Box w="100%" h="auto">
        <Text
          bg="#D4D5DA"
          fontSize={"200px"}
          // fontFamily={"'Passion One', cursive"}
          fontFamily="'Londrina Outline', cursive;"
          position="relative"
          color="black"
        >
          NOW
          <span
            style={{
              fontSize: "70px",
              position: "absolute",
              transform: "translate(-50%,-50%)",
              top: "50%",
              left: "50%",
              color: "rgb(6,26,80)",
              fontFamily: "'Passion One', cursive",
            }}
          >
            Trending
          </span>
        </Text>
        <Flex
          h={{ base: "60vh", lg: "85vh" }}
          justify={"center"}
          align="center"
          position={"relative"}
          overflow="hidden"
          direction={{ base: "column", lg: "row" }}
          gap={{ base: "10", lg: "0" }}
          // backgroundImage={
          //   "linear-gradient(to left bottom, #ffffff, #ffffff, #ffffff, #ffffff, #ffffff, #eae9ef, #d5d3e0, #c1bed0, #9490ae, #68658d, #3d3d6e, #07194f);"
          // }
          // backgroundColor={"#071951"}
          bg="#D4D5DA"
        >
          <OpacityImg
          // data-aos="fade-right"
            style={{
              rotate: "19deg",
              opacity: "0.5",
            }}
            src={trending1}
            alt=""
          />
          <MainImage
          data-aos="zoom-in"
            style={{
              position: "absolute",
              transform: "scaleX(-1)",
              rotate: "-21deg",

              filter: "drop-shadow(3px 3px 3px purple) ",
            }}
            src={trending1}
            alt=""
          />
          <Text
          data-aos="zoom-in"
            fontSize={{ base: "50px", lg: "100px" }}
            fontFamily={"'Passion One', cursive"}
          >
            Air Flight
          </Text>
        </Flex>

        <Flex
          h={{ base: "60vh", lg: "85vh" }}
          justify={"center"}
          align="center"
          position={"relative"}
          overflow="hidden"
          // backgroundImage={
          //   "linear-gradient(to left bottom, #ffffff, #ffffff, #ffffff, #ffffff, #ffffff, #eae9ef, #d5d3e0, #c1bed0, #9490ae, #68658d, #3d3d6e, #07194f);"
          // }
          // backgroundColor={"#071951"}
          bg="#D4D5DA"
          direction={{ base: "column", lg: "row" }}
        >
          <Text
            display={{ base: "none", lg: "inline" }}
            fontSize={"100px"}
            fontFamily={"'Passion One', cursive"}
            data-aos="zoom-in"
          >
            X <br /> SPEEDPORTAL.3
          </Text>
          <OpacityImg2
            style={{
              rotate: "-19deg",
              opacity: "0.5",
              transform: "scaleX(-1)",
              position: "relative",
            }}
            // data-aos="fade-left"
            src={trending2}
            alt=""
          />
          <MainImage2
           data-aos="zoom-in"
            style={{
              position: "absolute",
              rotate: "21deg",
              filter: "drop-shadow(3px 3px 3px rgb(253,36,123)) ",
            }}
            src={trending2}
            alt=""
          />
          <Text
          data-aos="zoom-in"
            display={{ base: "block", lg: "none" }}
            fontSize={"50px"}
            fontFamily={"'Passion One', cursive"}
          >
            X <br /> SPEEDPORTAL.3
          </Text>
        </Flex>

        <Flex
          h={{ base: "60vh", lg: "85vh" }}
          justify={"center"}
          align="center"
          position={"relative"}
          overflow="hidden"
          // backgroundImage={
          //   "linear-gradient(to left bottom, #ffffff, #ffffff, #ffffff, #ffffff, #ffffff, #eae9ef, #d5d3e0, #c1bed0, #9490ae, #68658d, #3d3d6e, #07194f);"
          // }
          // backgroundColor={"#071951"}
          bg="#D4D5DA"
          direction={{ base: "column", lg: "row" }}
        >
          <OpacityImg3
          // data-aos="fade-right"
            style={{
              rotate: "19deg",
              opacity: "0.5",
            }}
            src={trending3}
            alt=""
          />
          <MainImage3
           data-aos="zoom-in"
            style={{
              position: "absolute",
              transform: "scaleX(-1)",
              rotate: "-21deg",
              filter: "drop-shadow(3px 3px 3px rgb(98,56,25)) ",
            }}
            src={trending3}
            alt=""
          />
          <Text
            fontSize={{ base: "50px", lg: "100px" }}
            fontFamily={"'Passion One', cursive"}
            data-aos="zoom-in"
          >
            Air Jordan 1 <br /> Mid SE
          </Text>
        </Flex>
      </Box>
    </>
  );
};

const OpacityImg = styled.img`
  height: 65%;
  @media screen and (min-width: 320px) and (max-width: 480px) {
    position: relative;
    left: 6%;
    height: 45%;
  }
`;

const MainImage = styled.img`
  height: 45%;
  left: 13%;
  @media screen and (min-width: 320px) and (max-width: 480px) {
    height: 34%;
    top: 22%;
    left: 10%;
  }
`;

const OpacityImg2 = styled.img`
  height: 65%;
  right: 8%;
  @media screen and (min-width: 320px) and (max-width: 480px) {
    position: relative;
    right: 4%;
    height: 45%;
  }
`;

const MainImage2 = styled.img`
  height: 45%;
  right: 12%;
  @media screen and (min-width: 320px) and (max-width: 480px) {
    height: 34%;
    top: 18%;
    right: 3%;
  }
`;

const OpacityImg3 = styled.img`
  height: 65%;
  right: 8%;
  @media screen and (min-width: 320px) and (max-width: 480px) {
    position: relative;
    left: 5%;
    height: 45%;
  }
`;

const MainImage3 = styled.img`
  height: 45%;
  left: 13%;
  @media screen and (min-width: 320px) and (max-width: 480px) {
    height: 34%;
    top: 18%;
  }
`;
