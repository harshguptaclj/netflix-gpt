import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name: 'gpt',
    initialState : {
        showGptSearch : false,
        movieResults: null,
        movieNames: null,
        loadingBtn: false,
    },
    reducers :{
        toggleGptSearchView : (state) => {
            state.showGptSearch=!state.showGptSearch;
        },
        addGptMovieResult:(state, action) =>{
            const {movieNames, movieResults} = action.payload;
            state.movieNames=movieNames;
            state.movieResults=movieResults;
        },
        deleteGptMovieResult:(state) =>{
            state.showGptSearch=false;
            state.movieNames=null;
            state.movieResults=null;
        },
        setLoadingBtn(state){
            state.loadingBtn= !state.loadingBtn;
        }
    }
})

export const {toggleGptSearchView, addGptMovieResult, deleteGptMovieResult, setLoadingBtn} = gptSlice.actions;
export default gptSlice.reducer;