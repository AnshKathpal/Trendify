import React from 'react'
import {Flex} from "@chakra-ui/react"
import lv from "../images/lv-shoe.png"
import { Header } from '../Components/Header'
import { Sidebar } from '../Components/ProductPage-Components/Sidebar'
import ProductAddToCart from '../Components/ProductPage-Components/ProductCard'
import { Footer } from '../Components/Footer'
import Pagination from '../Components/ProductPage-Components/Pagination'
import ProductCard from "../Components/ProductPage-Components/ProductCard"

export const Products = () => {

  const categoriesArr = ["Casuals", "Sneakers", "Boots", "Sports", "Training", "Formal"];
  const brandArr = ["Puma", "Nike", "Adidas"];
  const colorsArr = ["Black", "Brown", "Yellow", "Red", "Blue"];
  const initialData = {
    category: [],
    brand: [],
    color: [],
  };


  return (
    <>
    <Header src = {lv} text1 = "Your Feet," text2 = "Your Faishon" />
    <Sidebar categories={categoriesArr} brands={brandArr} colors={colorsArr} initialData={initialData} ProductCardComponent = {ProductCard}  />
    <Footer mt = "10vh"/>
    </>
  )
}
