import React from 'react'

const Header = () => {
  return (
    <div className='flex flex-col items-start justify-center
    px-6 md:px-16 lg:px-24 xl:px-32 text-white bg-[url("/assets/heroImage.png")]
    bg-no-repeat bg-cover bg-center h-screen'>

      <p className='bg-[#49B9FF]/50 px-5 rounded-full py-1 mt-20'>The ultimate hotel experience</p>
      <h1 className='font-playfair mt-5 text-[34px] md:text-5xl md:text-[56px] md:leading-[56px] font-bold md:font-extrabold max-w-xl '>Discover Your perfect getaway destinations</h1>
      <p className='mt-3.5 text-sm md:text-base max-w-130'>Unparalleled luxury and comfort await at the world's most exclusive hotels
        and resorts. Explore our curated collection of the finest accommodations,
        where every detail is designed to provide an unforgettable experience.
      </p>
      <form className='bg-white text-gray-500 rounded-lg px-6 py-4 mt-7 flex flex-col md:flex-row max-md:items-start gap-4 max-md:mx-auto'>

            <div>
                <div className='flex items-center gap-2'>
                    <img src="/assets/calenderIcon.svg" alt="" className='h-4'/>
                    <label htmlFor="destinationInput">Destination</label>
                </div>
                <input list='destinations' id="destinationInput" type="text" className=" rounded border border-gray-200 px-3 py-1.5 mt-1.5 text-sm outline-none" placeholder="Type here" required />
            </div>

            <div>
                <div className='flex items-center gap-2'>
                    <img src="/assets/calenderIcon.svg" alt="" className='h-4'/>
                    <label htmlFor="checkIn">Check in</label>
                </div>
                <input id="checkIn" type="date" className=" rounded border border-gray-200 px-3 py-1.5 mt-1.5 text-sm outline-none" />
            </div>

            <div>
                <div className='flex items-center gap-2'>
                    <img src="/assets/calenderIcon.svg" alt="" className='h-4'/>
                    <label htmlFor="checkOut">Check out</label>
                </div>
                <input id="checkOut" type="date" className=" rounded border border-gray-200 px-3 py-1.5 mt-1.5 text-sm outline-none" />
            </div>

            <div className='flex md:flex-col max-md:gap-2 max-md:items-center'>
                <label htmlFor="guests">Guests</label>
                <input min={1} max={4} id="guests" type="number" className=" rounded border border-gray-200 px-3 py-1.5 mt-1.5 text-sm outline-none  max-w-16" placeholder="0" />
            </div>

            <button className='flex items-center justify-center gap-1 rounded-md bg-black py-3 px-4 text-white my-auto cursor-pointer max-md:w-full max-md:py-1' >
                <svg className="w-4 h-4 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" >
                    <path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z" />
                </svg>
                <span>Search</span>
            </button>
        </form>
    </div>
  )
}

export default Header
