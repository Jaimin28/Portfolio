import React from 'react'

function Client() {
  return (
    <div className='w-full h-[200px] flex flex-col  justify-center items-center text-white'>
        <h2 className='mb-2 fonnt-bold text-lg '>OurClients</h2>
        <p className='mb-5 text-sm text-[#868686]' >More than 30 Clients who have worked with me</p>
       
        <div className='w-full bg-black py-4 '>
    <div className='slider-container overflow-hidden'>
        <div className='slider-content flex justify-evenly'>
            <div className='slider-item font-bold text-white px-4 uppercase'>Velocity</div>
            <div className='slider-item font-bold  text-white px-4 uppercase   '>Muzica</div>
            <div className='slider-item font-bold text-white px-4 uppercase    '>FOXHUB</div>
            <div className='slider-item font-bold text-white px-4 uppercase    '>ztos</div>
            <div className='slider-item font-bold text-white px-4 uppercase    '>liva</div>
        </div>
    </div>
</div>
    </div>
  )
}

export default Client