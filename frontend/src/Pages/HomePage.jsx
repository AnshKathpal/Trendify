import React from 'react'
import { Header } from '../Components/Header'
import { Latest } from '../Components/Home-Page-Comp/Latest'
import { Shop } from '../Components/Home-Page-Comp/Shop'
import { Trending } from '../Components/Home-Page-Comp/Trending'
import {Footer} from "../Components/Footer"

export const HomePage = () => {
  return (
    <>
    <Header/>
    <Latest/>
    <Trending/>
    <Shop/>
    <Footer/>
    </>
  )
}
