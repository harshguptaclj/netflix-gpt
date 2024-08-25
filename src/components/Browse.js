import React from 'react'
import Header from './Header'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import GptSearch from './GptSearch';
import { useSelector } from 'react-redux';
import usePopularMovies from '../hooks/usePopularMovies';


const Browse = () => {
  const showGptSearch = useSelector(store => store.gpt.showGptSearch);
  useNowPlayingMovies();
  usePopularMovies();
  
  
  return (
    <div >
      { showGptSearch?<><><Header/></><GptSearch/></>:<div className='h-screen'><Header/><MainContainer/>
      <SecondaryContainer/></div>}
      <div className='relative mt-96'>
      </div>
    </div>
  )
}

export default Browse;
