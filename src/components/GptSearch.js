import React from 'react'
import GptMovieSuggestions from './GptMovieSuggestions'
import GptSearchBar from './GptSearchBar'
import { BG_URL } from '../utils/constants'
import Recommendation from './Recommendation'

const GptSearch = () => {
  return (
    <>
    <div className="fixed -z-10 ">
        <img 
            className='h-screen md:w-screen md:h-screen'
            src={BG_URL}
            alt="logo"
        />
    </div>
    <div className=''>
      <GptSearchBar/>
      <Recommendation/>
      <GptMovieSuggestions/>
    </div>
    </>
  )
}

export default GptSearch;
