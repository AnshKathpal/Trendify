import { Box, Text, Flex } from "@chakra-ui/react";
import React from "react";
import trending1 from "../../images/trending1-bg.png";
import wavebg from "../../images/wave.png";
import trending2 from "../../images/trending2.png";
import trending3 from "../../images/trending3.png";

export const Trending = () => {
  return (
    <>
      <Box w="100%" h="auto">
        <Text
          bg="#D4D5DA"
          fontSize={"200px"}
          fontFamily={"'Passion One', cursive"}
          position="relative"
          color="black"
        >
          NOW
          <span
            style={{
              fontSize: "90px",
              position: "absolute",
              transform: "translate(-50%,-50%)",
              top: "50%",
              left: "50%",
              color: "#ECB365",
            }}
          >
            Trending
          </span>
        </Text>
        <Flex
          h="85vh"
          justify={"center"}
          align="center"
          position={"relative"}
          overflow="hidden"
          // backgroundImage={
          //   "linear-gradient(to left bottom, #ffffff, #ffffff, #ffffff, #ffffff, #ffffff, #eae9ef, #d5d3e0, #c1bed0, #9490ae, #68658d, #3d3d6e, #07194f);"
          // }
          // backgroundColor={"#071951"}
          bg="#D4D5DA"
        >
          <img
            style={{
              height: "65%",
              rotate: "19deg",
              opacity: "0.5",
            }}
            src={trending1}
            alt=""
          />
          <img
            style={{
              height: "45%",
              position: "absolute",
              transform: "scaleX(-1)",
              rotate: "-21deg",
              left: "13%",
              filter: "drop-shadow(3px 3px 3px purple) ",
            }}
            src={trending1}
            alt=""
          />
          <Text fontSize={"100px"} fontFamily={"'Passion One', cursive"}>
            Air Flight
          </Text>
        </Flex>

        <Flex
          h="85vh"
          justify={"center"}
          align="center"
          position={"relative"}
          overflow="hidden"
          // backgroundImage={
          //   "linear-gradient(to left bottom, #ffffff, #ffffff, #ffffff, #ffffff, #ffffff, #eae9ef, #d5d3e0, #c1bed0, #9490ae, #68658d, #3d3d6e, #07194f);"
          // }
          // backgroundColor={"#071951"}
          bg="#D4D5DA"
          justifyContent={"space-around"}
        >
          <Text fontSize={"100px"} fontFamily={"'Passion One', cursive"}>
            X <br /> SPEEDPORTAL.3
          </Text>
          <img
            style={{
              height: "65%",
              rotate: "-19deg",
              opacity: "0.5",
              transform: "scaleX(-1)",
              position: "relative",
              right: "8%",
            }}
            src={trending2}
            alt=""
          />
          <img
            style={{
              height: "45%",
              position: "absolute",
              rotate: "21deg",
              right: "12%",
              filter: "drop-shadow(3px 3px 3px rgb(253,36,123)) ",
            }}
            src={trending2}
            alt=""
          />
        </Flex>

        <Flex
          h="85vh"
          justify={"center"}
          align="center"
          position={"relative"}
          overflow="hidden"
          // backgroundImage={
          //   "linear-gradient(to left bottom, #ffffff, #ffffff, #ffffff, #ffffff, #ffffff, #eae9ef, #d5d3e0, #c1bed0, #9490ae, #68658d, #3d3d6e, #07194f);"
          // }
          // backgroundColor={"#071951"}
          bg="#D4D5DA"
        >
          <img
            style={{
              height: "65%",
              rotate: "19deg",
              opacity: "0.5",
            }}
            src={trending3}
            alt=""
          />
          <img
            style={{
              height: "45%",
              position: "absolute",
              transform: "scaleX(-1)",
              rotate: "-21deg",
              left: "13%",
              filter: "drop-shadow(3px 3px 3px rgb(98,56,25)) ",
            }}
            src={trending3}
            alt=""
          />
          <Text fontSize={"100px"} fontFamily={"'Passion One', cursive"}>
            Air Jordan 1 <br /> Mid SE
          </Text>
        </Flex>
      </Box>
    </>
  );
};
