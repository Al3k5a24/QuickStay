import React from 'react'
import Title from './Title'
import { assets } from '../../assets/assets'

const ExclusiveOffers = () => {
  return (
    <div className='flex flex-col items-start px-6 md:px-16 lg:px-24 bg-gray-185 py-20 '>
      <div className='flex flex-col md:flex-row justify-between w-full'>
        <Title className='' title='Exclusive Offers' 
        subTitle='Take advantage of our limited-time offers and 
        special packaged to enhance your stay and create unforgettable
        memories.' align="left"/>
        <button className='group flex items-center gap-2 
        font-medium cursor-pointer max-md:mt-12'>
            View all Offers
            <img src={assets.arrowIcon} alt="arrow-icon" 
            className='group-hover:translate-x-1 transition-all'/>
        </button>
      </div>

      <div>

      </div>

    </div>
  )
}

export default ExclusiveOffers
