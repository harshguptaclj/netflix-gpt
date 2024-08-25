import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);

  return movies && (
    <div className='bg-black pb-[10%]'>
      <div className='mt-0 md:-mt-60 pl-4 md:pl-12 relative z-20'>
        <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies}/>
        <MovieList title={"Top Rated"} movies={movies.TopRatedMovies}/>
        <MovieList title={"Popular"} movies={movies.PopularMovies}/>
        <MovieList title={"Upcoming Movies"} movies={movies.UpcomingMovies}/>
      </div>
    </div>
  )
}

export default SecondaryContainer
