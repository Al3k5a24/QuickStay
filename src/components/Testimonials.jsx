import React from 'react'
import Title from './Title'
import { testimonials } from '../../assets/assets'
import Ratings from './Ratings'

const Testimonials = () => {
  return (
    <div className='flex flex-col items-center px-6 md:px-16 lg:px-24
    bg-slate-50 pt-20 pb-30'>
      <Title title='What Our Guests say'
      subTitle='Discover why discerning travelers consistently choose QuickStay for 
      their exclusive and luxurious accommodations around the world.'/>
    
    {/* prebuiltui.com */}
      <div className="mt-5 flex flex-wrap justify-center gap-6"> 
        {testimonials.map((testimonials)=>(
            <div key={testimonials.id} className="text-sm w-80 border border-gray-500/30 pb-6 rounded-lg bg-white shadow-[0px_4px_15px_0px] shadow-black/5 overflow-hidden">
                <div className="flex items-center gap-4 px-5 py-4 bg-blue-500/20">
                    <img className="h-12 w-12 rounded-full" src={testimonials.image} alt="" />
                    <div>
                        <h1 className="text-lg font-medium text-gray-800">{testimonials.name}</h1>
                        <p className="text-gray-800/80">{testimonials.address}</p>
                    </div>
                </div>
                <div className="p-5 pb-7">
                    <Ratings/>
                    <div className='mt-1 flex items-center gap-2'>
                        <p className="text-gray-500 mt-5 mb-0">{testimonials.review}</p>
                    </div>
                </div>
            </div>))}
        </div>
    </div>
  )
}

export default Testimonials
