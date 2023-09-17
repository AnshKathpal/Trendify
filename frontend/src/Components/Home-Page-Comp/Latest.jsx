import { Box, Grid } from "@chakra-ui/react";
import React from "react";
import Latest1 from "../../images/latest1.png";
import Latest2 from "../../images/latest.webp"

export const Latest = () => {
  return (
    <>
      <Box
        // bgGradient={
        //   "linear-gradient(to bottom, #071950, #071950, #071950, #071950, #071950, #23285d, #38396b, #4b4a79, #777399, #a3a0ba, #d0cedc, #ffffff);"
        // }
        bgGradient={"linear-gradient(to bottom, #071951, #31386a, #545984, #787d9d, #9ea2b7, #b0b3c3, #c2c4ce, #d4d5da, #d4d5da, #d4d5da, #d4d5da, #d4d5da);"}
        // backgroundColor={"#071951"}
        w="100%"
      >
        <Grid p="6" gridTemplateColumns={"repeat(2,1fr)"} gap="10">
          <Box bgColor="#F5F5F5" h="600px">
            <img
              style={{
                height: "100%",
                objectFit: "contain",
              }}
              src={Latest1}
              alt=""
            />
          </Box>
          <Box bgColor="white">
          {/* <img
              style={{
                height: "100%",
                objectFit: "contain",
              }}
              src={Latest2}
              alt=""
            /> */}
          </Box>
        </Grid>
      </Box>
    </>
  );
};
