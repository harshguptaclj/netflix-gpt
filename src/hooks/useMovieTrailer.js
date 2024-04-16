import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { API_OPTIONS } from '../utils/constants';
import { addTrailerVideo } from '../utils/moviesSlice';

const useMovieTrailer = (movieId) => {
    const dispatch = useDispatch();

    const trailerVideo= useSelector(store => store.movies.trailerVideo);
  //fetch trailer video && updating the store with trailer video data

  const getMovieVideo = async() =>{
    const data= await fetch('https://api.themoviedb.org/3/movie/'+movieId+'/videos?language=en-US&api_key=2e425961fdfa937368c286cc6d285050', API_OPTIONS);
    const json = await data.json();

    const filterData = json.results.filter((video) => video.type ==="Trailer");
    const trailer = filterData.length?filterData[0]:json.results[0];
    dispatch(addTrailerVideo(trailer));
  };

  useEffect(()=>{
    !trailerVideo && getMovieVideo();
  },[]);
}

export default useMovieTrailer
