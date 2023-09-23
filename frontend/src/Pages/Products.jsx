import React from 'react'
import {Flex} from "@chakra-ui/react"
import lv from "../images/lv-shoe.png"
import { Header } from '../Components/Header'
import { Sidebar } from '../Components/ProductPage-Components/Sidebar'
import ProductAddToCart from '../Components/ProductPage-Components/ProductCard'
import ProductCard from '../Components/ProductPage-Components/ProductCard'
import { Footer } from '../Components/Footer'

export const Products = () => {
  return (
    <>
    <Header src = {lv} text1 = "Your Feet," text2 = "Your Faishon" />
    <Sidebar/>
    {/* <Footer/> */}
    </>
  )
}
