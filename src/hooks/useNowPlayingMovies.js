import { API_OPTIONS } from '../utils/constants';
import { addNowPlayingMovies } from '../utils/moviesSlice';
import {useDispatch, useSelector} from 'react-redux'
import { useEffect } from 'react';

const useNowPlayingMovies =()=>{
  const dispatch = useDispatch();

  const nowPlayingMovies= useSelector(store => store.movies.nowPlayingMovies);

  const getNowPlayingMovies = async() =>{
    const data = await fetch("https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1&api_key=2e425961fdfa937368c286cc6d285050", API_OPTIONS);

    const json = await data.json();
    dispatch(addNowPlayingMovies(json.results));
  }

  useEffect(()=>{
    !nowPlayingMovies && getNowPlayingMovies();
  },[])

}

export default useNowPlayingMovies;