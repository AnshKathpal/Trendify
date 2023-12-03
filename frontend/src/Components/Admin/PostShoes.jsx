import React from "react";
import { Box, Flex, Button } from "@chakra-ui/react";

import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { postProducts } from "../../redux/Products/action";
import { SidebarAdmin } from "./SidebarAdmin";

export const PostShoes = () => {
  const initialState = {
    image: "",
    name: "",
    price: "",
    rating: "",
    reviews: "",
    category: "",
    brand: "",
    color: "",
    subheading: "",
    description: "",
    size: [String],
  };

  const dispatch = useDispatch();

  const [products, setProducts] = useState(initialState);

  // const handleChange = (e) => {
  //   const { name, value } = e.target;

  //   setProducts((prev) => {
  //     const updatedProducts = { ...prev };
  //     console.log(updatedProducts);

  //     const keysToConvert = ["price", "rating", "reviews"];
  //     for (const key in updatedProducts) {
  //       if (
  //         updatedProducts.hasOwnProperty(key) &&
  //         keysToConvert.includes(key)
  //       ) {
  //         if (typeof updatedProducts[key] == "string") {
  //           updatedProducts[key] = +updatedProducts[key];
  //         }
  //       }
  //     }

  //     if (keysToConvert.includes(name)) {
  //       updatedProducts[name] = value;
  //     }

  //     return updatedProducts;
  //   });
  // };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProducts((prev) => {
      return {
        ...prev,
        [name]:
          name === "price" || name === "rating" || name === "reviews"
            ? parseFloat(value) || ""
            : value,
      };
    });
  };

  const handleSize = (e) => {
    const { name, options } = e.target;
    const selectedSizes = [];
  
    console.log(options);
   
  
    console.log(selectedSizes);
  
   
  };

  console.log(products);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(postProducts(products));
  };

  return (
    <Flex height="100dvh" w="100%">
      <SidebarAdmin />

      <Box
        marginTop="96px"
        w="80%"
        position={"relative"}
        bgGradient="linear-gradient(to bottom, #080824, #090e2f, #07133a, #071646, #071952)"
      >
        <form
          action=""
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2,1fr)",
            placeItems: "center",
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%,-50%)",
            width: "80%",
            height: "80%",
            boxShadow:
              " rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px",
            backgroundColor: "white",
            padding: "10px",
          }}
          onSubmit={handleSubmit}
        >
          <Flex flexDirection={"column"} w="80%" textAlign={"left"} gap="2">
            <label htmlFor="" style={{ fontWeight: "bold" }}>
              Enter Image
            </label>
            <input
              name="image"
              value={products.image}
              type="text"
              // placeholder="Enter Image"
              onChange={(e) => handleChange(e)}
              style={{ border: "1px solid grey" }}
            />
          </Flex>
          <Flex flexDirection={"column"} w="80%" textAlign={"left"} gap="2">
            <label htmlFor="" style={{ fontWeight: "bold" }}>
              Enter Name
            </label>
            <input
              name="name"
              value={products.name}
              type="text"
              // placeholder="Enter Name"
              onChange={(e) => handleChange(e)}
              style={{ border: "1px solid grey" }}
            />
          </Flex>
          <Flex w="80%" textAlign={"left"} gap="2" flexDirection={"column"}>
            <label htmlFor="" style={{ fontWeight: "bold" }}>
              Enter Price
            </label>
            <input
              name="price"
              value={products.price}
              type="text"
              // placeholder="Enter Price"
              onChange={(e) => handleChange(e)}
              style={{ border: "1px solid grey" }}
            />
          </Flex>
          <Flex w="80%" textAlign={"left"} gap="2" flexDirection={"column"}>
            <label htmlFor="" style={{ fontWeight: "bold" }}>
              Enter Rating
            </label>
            <input
              name="rating"
              value={products.rating}
              type="text"
              // placeholder="Enter Rating"
              onChange={(e) => handleChange(e)}
              style={{ border: "1px solid grey" }}
            />
          </Flex>
          <Flex w="80%" textAlign={"left"} gap="2" flexDirection={"column"}>
            <label htmlFor="" style={{ fontWeight: "bold" }}>
              Enter Reviews
            </label>
            <input
              name="reviews"
              value={products.reviews}
              type="text"
              // placeholder="No. of Reviews"
              onChange={(e) => handleChange(e)}
              style={{ border: "1px solid grey" }}
            />
          </Flex>
          <Flex w="80%" textAlign={"left"} gap="2" flexDirection={"column"}>
            <label htmlFor="" style={{ fontWeight: "bold" }}>
              Enter Category
            </label>
            <input
              name="category"
              value={products.category}
              type="text"
              // placeholder="Enter Category"
              onChange={(e) => handleChange(e)}
              style={{ border: "1px solid grey" }}
            />
          </Flex>
          <Flex w="80%" textAlign={"left"} gap="2" flexDirection={"column"}>
            <label htmlFor="" style={{ fontWeight: "bold" }}>
              Enter Brand
            </label>
            <input
              name="brand"
              value={products.brand}
              type="text"
              // placeholder="Enter Brand"
              onChange={(e) => handleChange(e)}
              style={{ border: "1px solid grey" }}
            />
          </Flex>
          <Flex w="80%" textAlign={"left"} gap="2" flexDirection={"column"}>
            <label htmlFor="" style={{ fontWeight: "bold" }}>
              Enter Color
            </label>
            <input
              name="color"
              value={products.color}
              type="text"
              // placeholder="Enter Color"
              onChange={(e) => handleChange(e)}
              style={{ border: "1px solid grey" }}
            />
          </Flex>
          <Flex w="80%" textAlign={"left"} gap="2" flexDirection={"column"}>
            <label htmlFor="" style={{ fontWeight: "bold" }}>
              Enter Subheading
            </label>
            <input
              name="subheading"
              value={products.subheading}
              type="text"
              // placeholder="Shoes Subheading"
              onChange={(e) => handleChange(e)}
              style={{ border: "1px solid grey" }}
            />
          </Flex>
          <Flex w="80%" textAlign={"left"} gap="2" flexDirection={"column"}>
            <label htmlFor="" style={{ fontWeight: "bold" }}>
              Enter Description
            </label>
            <input
              name="description"
              value={products.description}
              type="text"
              // placeholder="Description"
              onChange={(e) => handleChange(e)}
              style={{ border: "1px solid grey" }}
            />
          </Flex>
          <Flex w="80%" textAlign={"left"} gap="2" flexDirection={"column"}>
            <label htmlFor="" style={{ fontWeight: "bold" }}>
              Select Sizes
            </label>
            <select
              name="size"
              value={products.size}
              onChange={(e) => handleSize(e)}
              id=""
              style={{ border: "1px solid grey" }}
            >
              <option value="">Sizes</option>
              <option value="UK4">UK 4</option>
              <option value="UK5">UK 5</option>
              <option value="UK6">UK 6</option>
              <option value="UK7">UK 7</option>
              <option value="UK8">UK 8</option>
              <option value="UK9">UK 9</option>
              <option value="UK10">UK 10</option>
              <option value="UK11">UK 11</option>
            </select>
            {/* <input
              name="description"
              value={products.description}
              type="text"
              // placeholder="Description"
              onChange={(e) => handleChange(e)}
              style={{ border: "1px solid grey" }}
            /> */}
          </Flex>
          <input type="submit" />
        </form>
      </Box>
    </Flex>
  );
};
