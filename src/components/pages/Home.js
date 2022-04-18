import React from 'react'
import Carousel from '../../Carousel'
import Product from '../../Product'
import Footer from '../layout/Footer'
import Navbar from '../layout/Navbar'

const Home = () => {
  return (
    <>
      <Navbar/>
      <Carousel/>
      <Product/>
      <Footer/>
    </>
  )
}

export default Home
