import React from 'react'
import Header from '../components/Header'
import FeaturedDestinations from '../components/FeaturedDestinations'
import ExclusiveOffers from '../components/ExclusiveOffers'
import Testimonials from '../components/Testimonials'
import NewsLetter from '../components/NewsLetter'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <>
      <Header/>
      <FeaturedDestinations/>
      <ExclusiveOffers/>
      <Testimonials/>
      <NewsLetter/>
      <Footer/>
    </>
  )
}

export default Home
