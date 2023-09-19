import React from 'react'
import { Header } from '../Components/Header'
import { Latest } from '../Components/Home-Page-Comp/Latest'
import { Shop } from '../Components/Home-Page-Comp/Shop'
import { Trending } from '../Components/Home-Page-Comp/Trending'
import {Footer} from "../Components/Footer"
import lv from "../images/lv-shoe.png";

export const HomePage = () => {
  return (
    <>
    <Header src = {lv} text1 = "Style for the" text2 = "Next Step" />
    <Latest/>
    <Trending/>
    <Shop/>
    <Footer/>
    </>
  )
}
