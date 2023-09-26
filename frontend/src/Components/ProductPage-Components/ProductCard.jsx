import React, { useState, useEffect } from "react";
import {
  Flex,
  Circle,
  Box,
  Image,
  Badge,
  useColorModeValue,
  Icon,
  chakra,
  Tooltip,
  Grid,
} from "@chakra-ui/react";
import { BsStar, BsStarFill, BsStarHalf } from "react-icons/bs";
import { FiShoppingCart } from "react-icons/fi";
import { useSelector, useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import  Pagination  from "./Pagination";
import { getProducts } from "../../redux/Products/action";

function Rating({ rating, numReviews }) {
  return (
    <Box display="flex" alignItems="center">
      {Array(5)
        .fill("")
        .map((_, i) => {
          const roundedRating = Math.round(rating * 2) / 2;
          if (roundedRating - i >= 1) {
            return (
              <BsStarFill
                key={i}
                style={{ marginLeft: "1" }}
                color={i < rating ? "teal.500" : "gray.300"}
              />
            );
          }
          if (roundedRating - i === 0.5) {
            return <BsStarHalf key={i} style={{ marginLeft: "1" }} />;
          }
          return <BsStar key={i} style={{ marginLeft: "1" }} />;
        })}
      <Box as="span" ml="2" color="gray.600" fontSize="sm">
        {numReviews} review{numReviews > 1 && "s"}
      </Box>
    </Box>
  );
}

function ProductCard() {




  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;

  
  const [searchParams,setSearchParams] = useSearchParams();

  const initPage = searchParams.get("page");


  const data = useSelector((store) => store.productReducer.products);
  const totalProducts = data.length;
  console.log(data)

  const dispatch = useDispatch();

  let obj = {
    params: {
      // _limit: 9,
      page: currentPage,
      category: searchParams.getAll("category"),
      brand: searchParams.getAll("brand"),
      color: searchParams.getAll("color"),
    },
  };

  useEffect(() => {
    const initPage = searchParams.get("page");
    setCurrentPage(initPage ? parseInt(initPage) : 1);
    dispatch(getProducts(obj));
  }, [searchParams, currentPage, dispatch]);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
    setSearchParams({ page: newPage.toString() });
  };

  return (
    <>
    
    <Grid
      gridTemplateColumns={"repeat(3,1fr)"}
      p="10"
      w="80%"
      bgGradient={
        "linear-gradient(to bottom, #071951, #31386a, #545984, #9ea2b7, #9ea2b7, #b0b3c3, #c2c4ce, #d4d5da, #d4d5da, #d4d5da, #d4d5da, #d4d5da);"
      }
      border="1px solid white"
      gap="10"
      h="auto"
      position={"relative"}
    >
      {data &&
        data.map((el, index) => {
          // Calculate the index range for the current page
          const startIndex = (currentPage - 1) * itemsPerPage;
          const endIndex = startIndex + itemsPerPage;

          // Only render items within the current page's range
          if (index >= startIndex && index < endIndex) {
            return (
              <Box
                key={index}
                borderWidth="1px"
                maxh="auto"
                rounded="lg"
                shadow="lg"
                bg="white"
              >
                {el.isNew && (
                  <Circle
                    size="10px"
                    position="absolute"
                    top={2}
                    right={2}
                    bg="red.200"
                  />
                )}

                <Image
                  src={el.imageURL}
                  alt={`Picture of ${el.name}`}
                  roundedTop="lg"
                />

                <Box p="6">
                  <Box display="flex" alignItems="baseline">
                    {el.isNew && (
                      <Badge
                        rounded="full"
                        px="2"
                        fontSize="0.8em"
                        colorScheme="red"
                      >
                        New
                      </Badge>
                    )}
                  </Box>
                  <Flex
                    mt="1"
                    justifyContent="space-between"
                    alignContent="center"
                  >
                    <Flex direction={"column"} align="flex-start">
                      <Box
                        fontSize="2xl"
                        fontWeight="semibold"
                        as="h4"
                        lineHeight="tight"
                        isTruncated
                      >
                        {el.name}
                      </Box>
                      <Box
                        fontSize="l"
                        fontWeight="semibold"
                        as="h4"
                        lineHeight="tight"
                        isTruncated
                      >
                        {el.category}
                      </Box>
                    </Flex>
                    <Tooltip
                      label="Add to cart"
                      bg="white"
                      placement={"top"}
                      color={"gray.800"}
                      fontSize={"1.2em"}
                    >
                      <chakra.a href={"#"} display={"flex"}>
                        <Icon
                          as={FiShoppingCart}
                          h={7}
                          w={7}
                          alignSelf={"center"}
                        />
                      </chakra.a>
                    </Tooltip>
                  </Flex>

                  <Flex justifyContent="space-between" alignContent="center">
                    <Rating rating={el.rating} numReviews={el.numReviews} />
                    <Box fontSize="2xl">
                      <Box as="span" color={"gray.600"} fontSize="lg">
                        £
                      </Box>
                      {el.price.toFixed(2)}
                    </Box>
                  </Flex>
                </Box>
              </Box>
            );
          }
          return null; // Render nothing for items outside the range
        })}
        <Box border = "1px solid red">
     <Pagination
       currentPage={currentPage}
       totalPages={Math.ceil(totalProducts/itemsPerPage)}
       onPageChange={handlePageChange}
     />
       </Box>
    </Grid>
     
       </>
  );
}

export default ProductCard;

