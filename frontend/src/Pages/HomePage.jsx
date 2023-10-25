import React from 'react'
import { Header } from '../Components/Header'
import { Latest } from '../Components/Home-Page-Comp/Latest'
import { Shop } from '../Components/Home-Page-Comp/Shop'
import { Trending } from '../Components/Home-Page-Comp/Trending'
import {Footer} from "../Components/Footer"
import lv from "../images/lv-shoe.png";

export const HomePage = () => {

  const boxStyles = {
    pos : "absolute",
    top: { base: '40%', lg: '16%' },
    w: { base: '90%' },
    left: { base: '8%', lg: '4%' },
    zIndex: 1,
  }


  const imageStyles = {
    objectFit: "cover",
    rotate: "15deg",
    filter: "drop-shadow(5px px 5px white)",
  }


  return (
    <>
    <Header src = {lv} boxStyles = {boxStyles} imageStyles = {imageStyles}  text1 = "Style for the" text2 = "Next Step" />
    <Latest/>
    <Trending/>
    <Shop/>
    <Footer/>
    </>
  )
}
