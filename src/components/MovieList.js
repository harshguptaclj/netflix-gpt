import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({title, movies}) => {
  return (
    <div className='px-6' >
        <h1 className='text-xl md:text-3xl py-4 text-white'>{title}</h1>
        <div className='flex overflow-x-scroll' style={{ scrollbarWidth: 'thin', scrollbarColor: 'transparent transparent' }}>
        <div className='flex' style={{ minWidth: `${movies?.length * 200}px` }}>
                {movies?.map(movie=> <MovieCard key={movie.id} posterPath={movie.poster_path}/>)}
            </div>
        </div>
    </div>
  )
}

export default MovieList
