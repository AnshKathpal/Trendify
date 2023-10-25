"use client";

import {
  Box,
  chakra,
  Container,
  Stack,
  Text,
  Image,
  Flex,
  VStack,
  Button,
  Heading,
  SimpleGrid,
  StackDivider,
  useColorModeValue,
  VisuallyHidden,
  List,
  ListItem,
} from "@chakra-ui/react";
import { MdLocalShipping } from "react-icons/md";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getProducts } from "../../redux/Products/action";
import { useEffect, useState } from "react";
import { Footer } from "../Footer";
import ReactWhatsapp from "react-whatsapp";
import ReactImageMagnify from "react-image-magnify";

export default function ProductDescription() {
  const [selectedSize, setSelectedSize] = useState(null);

  const { id, imageURL } = useParams();
  console.log(id);

  const data = useSelector((store) => store.productReducer.products);
  console.log(data);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, [selectedSize]);

  const product = data.find((data) => data.id === parseInt(id));
  console.log(product);

  const handleSelectSize = (e) => {
    setSelectedSize(e.target.value);
    console.log(e.target.value);
  };

  console.log(selectedSize);

  return (
    <Box pos="relative" top="10vh" bgGradient={
      "linear-gradient(to bottom, #080824, #202654, #545984,#9ea2b7, #9ea2b7, #b0b3c3, #c2c4ce, #d4d5da, #d4d5da, #d4d5da, #d4d5da, #d4d5da);"
    }>
      <SimpleGrid
        w="80%"
        m="auto"
        columns={{ base: 1, lg: 2 }}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 18, md: 24 }}
      >
        <Flex direction={"column"} gap="5">
          <Image
            rounded={"md"}
            alt={"product image"}
            src={product.imageURL}
            fit={"cover"}
            align={"center"}
            w={"100%"}
            h={{ base: "100%", sm: "400px", lg: "500px" }}
          />
          <Flex gap="5">
            <Image
              rounded={"md"}
              alt={"product image"}
              src={product.imageURL}
              fit={"cover"}
              align={"center"}
              w={"35%"}
              h={{ base: "100%", sm: "400px", lg: "200px" }}
            />
            <Image
              rounded={"md"}
              alt={"product image"}
              src={product.imageURL}
              fit={"cover"}
              align={"center"}
              w={"35%"}
              h={{ base: "100%", sm: "400px", lg: "200px" }}
            />
            <Image
              rounded={"md"}
              alt={"product image"}
              src={product.imageURL}
              fit={"cover"}
              align={"center"}
              w={"35%"}
              h={{ base: "100%", sm: "400px", lg: "200px" }}
            />
          </Flex>
        </Flex>
        <Stack spacing={{ base: 6, md: 10 }}>
          <Box as={"header"}>
            <Heading
              lineHeight={1.1}
              fontWeight={600}
              fontSize={{ base: "2xl", sm: "4xl", lg: "4xl" }}
              color = "#ECB365"
              fontFamily={"'Lilita One', cursive"}
            >
              {product.name}
            </Heading>
            <Text
              fontWeight={300}
              fontSize={"2xl"}
              color = "#ECB365"
            >
              ₹{product.price}
            </Text>
          </Box>

          <Stack
            spacing={{ base: 4, sm: 6 }}
            direction={"column"}
            divider={
              <StackDivider
                borderColor={useColorModeValue("#080824", "#080824")}
              />
            }
          >
            <VStack spacing={{ base: 4, sm: 6 }}>
              <Text
              color = "white"
                fontSize={"2xl"}
                fontWeight={"300"}
              >
                {product.description1}
              </Text>
              <Text fontSize={"lg"} color = "#080824">
              {product.description2}
              </Text>
            </VStack>
            <Box>
              <Text
                fontSize={{ base: "16px", lg: "18px" }}
                color = "#080824"
                fontWeight={"500"}
                textTransform={"uppercase"}
                mb={"4"}
              >
                Size Available
              </Text>

              <Flex
                justify={"space-between"}
                alignItems="center"
                w="100%"
                h="7vh"
              >
                {product.size.map((item) => (
                  <Button
                    _hover={{ border: "1px solid #080824" }}
                    value={item}
                    onClick={handleSelectSize}
                    borderRadius={"50%"}
                    w="60px"
                    h="60px"
                    bg={selectedSize == item ? "#080824" : "white"}
                    color={selectedSize == item ? "white" : "#080824"}
                  >
                    {item}
                  </Button>
                ))}
              </Flex>
            </Box>
            <Box>
              <Text
                fontSize={{ base: "16px", lg: "18px" }}
                color={useColorModeValue("#080824", "#080824")}
                fontWeight={"500"}
                textTransform={"uppercase"}
                mb={"4"}
              >
                Product Details
              </Text>

              <List spacing={2}>
                <ListItem>
                  <Text as={"span"} fontWeight={"bold"}>
                    Brand:
                  </Text>{" "}
                  {product.brand}
                </ListItem>
                <ListItem>
                  <Text as={"span"} fontWeight={"bold"}>
                    Category:
                  </Text>{" "}
                  {product.category}
                </ListItem>
                <ListItem>
                  <Text as={"span"} fontWeight={"bold"}>
                    Color:
                  </Text>{" "}
                  {product.color}
                </ListItem>
              </List>
            </Box>
          </Stack>

          <ReactWhatsapp
            number="+91 8448837130"
            message={`Hi!, I'm Interested in ${product.name} of size ${selectedSize}`}
          >
            <Button
              rounded={"none"}
              w={"full"}
              // mt={8}
              size={"lg"}
              py={"7"}
              bg={useColorModeValue("#080824", "#080824")}
              color={useColorModeValue("white", "gray.900")}
              textTransform={"uppercase"}
              _hover={{
                transform: "translateY(2px)",
                boxShadow: "lg",
              }}
            >
              Order on Whatsapp
            </Button>
          </ReactWhatsapp>
          <Button
            rounded={"none"}
            w={"full"}
            size={"lg"}
            py={"7"}
            bg={useColorModeValue("#080824", "#080824")}
            color={useColorModeValue("white", "gray.900")}
            textTransform={"uppercase"}
            _hover={{
              transform: "translateY(2px)",
              boxShadow: "lg",
            }}
          >
            Add to cart
          </Button>
          <Stack direction="row" alignItems="center" justifyContent={"center"}>
            <MdLocalShipping />
            <Text>2-3 business days delivery</Text>
          </Stack>
        </Stack>
      </SimpleGrid>
      <Footer />
    </Box>
  );
}
