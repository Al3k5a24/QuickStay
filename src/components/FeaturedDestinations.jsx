import React from 'react'
import HotelCard from './HotelCard'
import { roomsDummyData } from '../../assets/assets'
import Title from './Title'

//mountovanje kartice za hotel 
const FeaturedDestinations = () => {
  return (
    <div className='flex flex-col items-center px-6 md:px-16 lg:px-24 bg-slate-50 py-20'>
      <Title title='Featured Destinations' subTitle='
      Discover our handpicked selection of exceptional properties around the world, 
      offering unparalleled luxury and experiences'/>
      <div className='flex flex-wrap items-center justify-between gap-6 mt-20'>
        {roomsDummyData.slice(0,4).map((room,index)=>(
            <HotelCard key={room._id} room={room} index={index}/>
        ))}
      </div>
      <button className='mt-7 px-6 py-2 text-sm font-medium'>
        <a href="/rooms" onClick={()=>scrollTo(0,0)} className='
         my-32 px-4 py-2 text-sm font-medium border border-gray-300
        rounded bg-white hover:bg-gray-50 transition-all cursor-pointer'>
          View all destinations
        </a>
      </button>
    </div>
  )
}

export default FeaturedDestinations
