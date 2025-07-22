import React from 'react'
import Header from '../components/Header'
import FeaturedDestinations from '../components/FeaturedDestinations'
import ExclusiveOffers from '../components/ExclusiveOffers'
import Testimonials from '../components/Testimonials'

const Home = () => {
  return (
    <>
      <Header/>
      <FeaturedDestinations/>
      <ExclusiveOffers/>
      <Testimonials/>
    </>
  )
}

export default Home
