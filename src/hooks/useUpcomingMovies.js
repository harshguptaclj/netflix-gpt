import { API_OPTIONS } from '../utils/constants';
import { addUpcomingMovies } from '../utils/moviesSlice';
import {useDispatch, useSelector} from 'react-redux'
import { useEffect } from 'react';

const useUpcomingMovies =()=>{
  const dispatch = useDispatch();
  const UpcomingMovies= useSelector(store => store.movies.UpcomingMovies);

  const getUpcomingMovies = async() =>{
    const data = await fetch("https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1&api_key=2e425961fdfa937368c286cc6d285050", API_OPTIONS);

    const json = await data.json();
    dispatch(addUpcomingMovies(json.results));
  }

  useEffect(()=>{
    !UpcomingMovies && getUpcomingMovies();
  },[])

}

export default useUpcomingMovies;