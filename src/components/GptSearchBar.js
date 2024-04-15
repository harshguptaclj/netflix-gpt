import React from 'react'
import lang from '../utils/languageConstants'
import { useSelector } from 'react-redux'

const GptSearchBar = () => {

    const langKey = useSelector((store)=>store.config.lang)
  return (
    <div className='pt-[10%] flex justify-center'>
      <form className='w-1/2  bg-black grid grid-cols-12 bg-opacity-60'>
        <input 
            type='text' 
            className='p-4 m-4 col-span-9 text-lg ' 
            placeholder={lang[langKey].gptSearchPlaceholder}></input>
        <button 
            className='py-2 px-4 bg-red-700 col-span-3 m-4 rounded-lg text-lg font-bold'
        >{lang[langKey].search}</button>
      </form>
    </div>
  )
}

export default GptSearchBar
