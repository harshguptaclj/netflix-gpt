import React from 'react'
import { IMG_CDN_URL } from '../utils/constants'

const MovieCard = ({posterPath}) => {
  if(!posterPath) return null;
  return (
    <div>
      <img
        className='w-36 md:w-48 pr-4 rounded-md'
        alt="Movie Card"
        src={IMG_CDN_URL+posterPath}
      />
    </div>
  )
}

export default MovieCard
