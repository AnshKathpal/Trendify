import React from "react";
import { Box } from "@chakra-ui/react";

import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { postProducts } from "../../redux/Products/action";

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
  };

  const dispatch = useDispatch();

  const [products, setProducts] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setProducts((prev) => {
      const updatedProducts = { ...prev };

      const keysToConvert = ["price", "rating", "reviews"];
      for (const key in updatedProducts) {
        if (
          updatedProducts.hasOwnProperty(key) &&
          keysToConvert.includes(key)
        ) {
          if (typeof updatedProducts[key] == "string") {
            updatedProducts[key] = +updatedProducts[key];
          }
        }
      }

      if (keysToConvert.includes(name)) {
        updatedProducts[name] = value;
    }

      return updatedProducts;
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(postProducts(products));
  };

  return (
    <Box border="1px solid red" height="90vh" w="100%">
      <form
        action=""
        style={{
          border: "1px solid red",
          display: "flex",
          flexDirection: "column",
          marginTop: "100px",
        }}
        onSubmit={handleSubmit}
      >
        <label htmlFor="">Name</label>
        <input
          name="image"
          value={products.image}
          type="text"
          placeholder="Enter Image"
          onChange={(e) => handleChange(e)}
        />
        <input
          name="name"
          value={products.name}
          type="text"
          placeholder="Enter Name"
          onChange={(e) => handleChange(e)}
        />
        <input
          name="price"
          value={products.price}
          type="text"
          placeholder="Enter Price"
          onChange={(e) => handleChange(e)}
        />
        <input
          name="rating"
          value={products.rating}
          type="text"
          placeholder="Enter Rating"
          onChange={(e) => handleChange(e)}
        />
        <input
          name="reviews"
          value={products.reviews}
          type="text"
          placeholder="No. of Reviews"
          onChange={(e) => handleChange(e)}
        />
        <input
          name="category"
          value={products.category}
          type="text"
          placeholder="Enter Category"
          onChange={(e) => handleChange(e)}
        />
        <input
          name="brand"
          value={products.brand}
          type="text"
          placeholder="Enter Brand"
          onChange={(e) => handleChange(e)}
        />
        <input
          name="color"
          value={products.color}
          type="text"
          placeholder="Enter Color"
          onChange={(e) => handleChange(e)}
        />
        <input
          name="subheading"
          value={products.subheading}
          type="text"
          placeholder="Shoes Subheading"
          onChange={(e) => handleChange(e)}
        />
        <input
          name="description"
          value={products.description}
          type="text"
          placeholder="Description"
          onChange={(e) => handleChange(e)}
        />
        <input type="submit" />
      </form>
    </Box>
  );
};
