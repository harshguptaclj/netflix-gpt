import React from 'react'

const VideoTitle = ({title, overview}) => {
  return (
    <div className='w-full aspect-video pt-[20%] px-6 md:px-24 absolute text-white bg-gradient-to-r from-black'>
      <h1 className='text-3xl md:text-6xl font-bold mt-16 md:my-0'>{title}</h1>
      <p className='hidden md:inline-block py-6 text-lg w-1/4 '>{overview}</p>
      <div className=' my-4 md:m-0'>
        <button className='bg-white text-black py-1 md:py-4  px-3 md:px-12 text-2xl rounded-lg hover:bg-opacity-80 '>▷Play</button>
        <button className='hidden md:inline-block mx-2 bg-gray-500 text-white p-4 px-16 text-2xl bg-opacity-50 rounded-lg hover:bg-opacity-80'>🛈More Info</button>
      </div>
    </div>
  )
}

export default VideoTitle
