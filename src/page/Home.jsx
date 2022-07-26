import React from 'react'
import Annoucement from '../components/Annoucement'
import Categoreis from '../components/Categoreis'
import Navbar from '../components/Navbar'
import Products from '../components/Products'
import Slider from '../components/Slider'

const Home = () => {
  return (
   <div>
    <Annoucement/>
    <Navbar/>
    <Slider/>
    <Categoreis/>
    <Products/>
   </div>
  )
}

export default Home