import React from 'react'
import {useSelector } from 'react-redux';
import useMovieTrailer from '../hooks/useMovieTrailer';
import usePopularMovies from '../hooks/usePopularMovies';
import useTopRatedMovies from '../hooks/useTopRatedMovies';
import useUpcomingMovies from '../hooks/useUpcomingMovies';


const VideoBackground = ({movieId}) => {
  const trailerVideo = useSelector(store=>store.movies?.trailerVideo)

  useMovieTrailer(movieId);
  usePopularMovies(movieId);
  useTopRatedMovies(movieId);
  useUpcomingMovies(movieId);

  return (
    <div className=''>
      <iframe 
        className='w-full aspect-video ' 
        src={"https://www.youtube.com/embed/"+trailerVideo?.key+"?&autoplay=1&mute=1&rel=0"} 
        title="YouTube video player" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; " 
        >
      </iframe>
    </div>
  )
}

export default VideoBackground
