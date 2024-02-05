'use client'
import React from 'react'
import Hero from '../components/Hero'
import Awards from '../components/Awards'
import Grow from '../components/Grow'
import GridLogo from '../components/GridLogo'
import HorizontalScroll from '../components/HorizontalScroll'


const HomePage = () => {
  return (
    <div>
      <HorizontalScroll/>
      <Hero/>
      <GridLogo/>
      <Grow/>
      <Awards/>
     
    </div>
  )
}

export default HomePage
