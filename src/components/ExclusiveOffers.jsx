import React from 'react'
import Title from './Title'
import { assets, exclusiveOffers } from '../../assets/assets'

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

      {/*Kartice za Exclusive Offers*/} 
      <div className='mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full'>
        {exclusiveOffers.map((item) => (
            <div key={item._id} className='rounded-2xl group relative flex flex-col
            items-start justify-between gap-1 pt-12 md:pt-18 px-4
            rounded-x1 text-white bg-no-repeat bg-cover bg-center'
            style={{backgroundImage: `url(${item.image})`}}>
                <p className='px-3 py-1 absolute top-4 left-4
                text-xs bg-white text-gray-800 font-medium rounded-full'>{item.priceOff}% OFF</p>
                <div>
                    <p className='text-2x1
                     font-medium font-playfair'>{item.title}</p>
                    <p>{item.description}</p>
                    <p className='text-xs
                     text-white/70 mt-3'>Expires {item.expiryDate}</p>
                </div>
                <button className='flex items-center gap-2 
        font-medium cursor-pointer mt-4 mb-5'>
            View Offer
            <img src={assets.arrowIcon} alt="arrow-icon" 
            className='invert group-hover:translate-x-1 transition-all'/>
        </button>
            </div>
        ))}
      </div>

    </div>
  )
}

export default ExclusiveOffers
