import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { changeShowInfo } from '../utils/slice/configSlice'
import { API_OPTIONS, IMG_CDN_URL } from '../utils/constants'
import ShimmerMovieDetails from './ShimmerMovieDetails'
import { setPlay } from '../utils/slice/movieSlice'

const MovieDetails = () => {
    const showInfo = useSelector(store => store.config.showInfo)
    const { movieDetails = {}, movieKeywords = [], movieCredits = [] } = showInfo
    const dispatch = useDispatch()
    useEffect(() => {
        getDetails()
    }, [])
    async function getDetails() {
        if (showInfo.movieId) {
            const movieDetails = await getMovieDetails(showInfo?.movieId)
            dispatch(changeShowInfo({ ...showInfo, movieDetails: movieDetails }))
            const movieKeywords = await getKeywords(showInfo?.movieId)
            dispatch(changeShowInfo({ ...showInfo, movieDetails: movieDetails , movieKeywords: movieKeywords }))
            const movieCredits = await getCredits(showInfo?.movieId)
            dispatch(changeShowInfo({ ...showInfo, movieDetails: movieDetails , movieKeywords: movieKeywords, movieCredits: movieCredits }))
        }
    }
    function onPlay(){
        dispatch(changeShowInfo({ show: false, movieId: null }))
        dispatch(setPlay(showInfo?.movieId))
    }
    async function getMovieDetails(movieId) {
        const response = await fetch(`https://api.themoviedb.org/3/movie/${movieId}?language=en-US`, API_OPTIONS)
        const data = await response.json()
        return data;
    }
    async function getKeywords(movieId) {
        const response = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/keywords`, API_OPTIONS)
        const data = await response.json()
        return data;
    }

    async function getCredits(movieId) {
        const response = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/credits?language=en-US`, API_OPTIONS)
        const data = await response.json()
        return data;
    }
    const close = () => {
        dispatch(changeShowInfo({ show: false, movieId: null }))
    }
    return (showInfo?.show && Object.keys(movieDetails).length > 0) ? (<div className="z-[1001] fixed top-0 left-0 flex pt-[5%] justify-center w-screen h-screen bg-black bg-opacity-90 overflow-hidden">
        <div className="relative w-full pb-4 bg-gray-900 border border-gray-900 shadow-lg md:w-3/5 h-fit border-spacing-10">
            <div onClick={close} className="z-[900] absolute flex items-center justify-center hover:text-white px-2 text-center text-gray-200 bg-black border border-black rounded-full cursor-pointer font-sm hover:opacity-50 right-4 top-4">X</div>
            <div className="w-full min-h-[400px] bg-gray-900 relative">
                <img src={IMG_CDN_URL + movieDetails?.backdrop_path} className="w-full h-full" alt="backdrop" />
                <div className="z-[600] absolute text-white text-3xl font-bold bottom-8 left-8 flex justify-center items-center">{movieDetails?.original_title}  <div onClick={onPlay} className="px-2 ml-4 text-white border border-white rounded-full cursor-pointer hover:opacity-40">▶️</div></div>
            </div>
            <div className="p-4 text-white md:grid md:grid-cols-12">
                <div className="p-4 md:col-span-7">
                    <div className="flex">
                        <div className="pr-4 font-bold text-green-600">98% Match</div>
                        <div>{movieDetails?.release_date?.split("-")[0]}</div>
                    </div>
                    <div>
                        {movieKeywords.length > 0 && movieKeywords?.map(keyword => keyword?.name).join(", ")}
                    </div>
                    <div className="py-2 text-xl font-bold">
                        #1 in TV Shows Today
                    </div>
                    <p className="text-sm">{movieDetails?.overview}</p>
                </div>
                <div className="p-4 text-sm md:col-span-5">
                    <div>
                        <div className="mb-4 md:grid md:grid-cols-12">
                            <div className="text-gray-300 md:col-span-3">Cast:</div>
                            <div className="md:col-span-9">{movieCredits?.cast?.filter((a, i) => i < 4).map(credit => credit.name).join(", ")}</div>
                        </div>
                        <div className="md:grid md:grid-cols-12">
                            <div className="text-gray-300 md:col-span-3">Genres:</div>
                            <div className="md:col-span-9">{movieDetails?.genres?.map(genre => genre?.name).join(", ")}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>) : <ShimmerMovieDetails />
}

export default MovieDetails