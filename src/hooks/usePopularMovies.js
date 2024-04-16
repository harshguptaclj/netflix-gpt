import { API_OPTIONS } from '../utils/constants';
import { addPopularMovies } from '../utils/moviesSlice';
import {useDispatch, useSelector} from 'react-redux'
import { useEffect } from 'react';

const usePopularMovies =()=>{
  const dispatch = useDispatch();

  const PopularMovies= useSelector(store => store.movies.PopularMovies);

  const getPopularMovies = async() =>{
    const data = await fetch("https://api.themoviedb.org/3/movie/popular?language=en-US&page=1&api_key=2e425961fdfa937368c286cc6d285050", API_OPTIONS);

    const json = await data.json();
    dispatch(addPopularMovies(json.results));
  }

  useEffect(()=>{
    !PopularMovies && getPopularMovies();
  },[])

}

export default usePopularMovies;