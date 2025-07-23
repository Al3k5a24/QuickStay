import React, { use } from 'react'
import Footer from '../components/Footer'
import { assets, roomsDummyData } from '../../assets/assets'
import { Navigate, useNavigate } from 'react-router-dom'
import Ratings from '../components/Ratings'

const Rooms = () => {
const navigate=useNavigate();
  return (

    <div className='flex flex-col-reverse lg:flex-row
    items-start justify-between pt-28 md:pt-35 px-4 md:px-16
    lg:px-24 xl:px-32'>
      <div>
        <div className='flex flex-col items-start text-left'>
            <h1 className='font-playfair text-4x1 md:text-[40px]'>Hotel Rooms</h1>
            <p className='text-sm md:text-base text-gray-500/90 mt-2 max-w-174'>Take advantage of our limited-time offers and special packages 
                to enhance your stay and create unforgettable memories.
            </p>
        </div>

        {roomsDummyData.map((room)=>(
            <div>
                <img onClick={()=>{navigate(`/rooms/${room._id}`); scrollTo(0,0); console.log('Navigating to room details')}}
                src={room.images[0]} alt="hotel-img"
                 title='View room details' className='max-h-65 md:w-1/2
                 rounded-x1 shadow-lg object-cover cursor-pointer'/>
                 <div className='md:w-1/2 flex flex-col gap-2'>
                    <p className='text-gray-800 text-3x1 font-playfair cursor-pointer'>{room.hotel.city}</p>
                    <p onClick={()=>{navigate(`/rooms/${room._id}`); 
                    scrollTo(0,0)}} className='flex items-center'>{room.hotel.name}</p>
                    <div className='flex items-center'>
                        <Ratings/>
                        <p className='ml-2'>200+ reviews</p>
                    </div>
                    <div className='flex items-center gap-1 text-gray-500 mt-2 text-sm'>
                        <img src={assets.locationIcon} alt="location-icon" />
                        <span>{room.hotel.address}</span>
                    </div>
                 </div>
            </div>
        ))}

      </div>

      {/* Filters */}
      <div>

      </div>
    </div>
  )
}

export default Rooms
