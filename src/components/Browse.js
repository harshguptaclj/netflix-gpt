import React from 'react'
import Header from './Header'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import GptSearch from './GptSearch';
import { useSelector } from 'react-redux';

const Browse = () => {
  const showGptSearch = useSelector(store => store.gpt.showGptSearch);
  useNowPlayingMovies();
  return (
    <div >
      
      { showGptSearch?<><div className='-my-10'><Header/></div><GptSearch/></>:<><Header/><MainContainer/>
      <SecondaryContainer/></>}
      
    </div>
  )
}

export default Browse
