import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name: "gpt",

    initialState: {
        showGptSearch: false,
        movieResults: null,
        movieNames: null,
        isLoading: false,
    },

    reducers: {
        toggleGptSearch: (state) => {
            state.showGptSearch = !state.showGptSearch;
        },

        setGptLoading: (state, action) => {
            state.isLoading = action.payload;
        },

        addGptMovieResults: (state, action) => {
            const { movieNames, movieResults } = action.payload;

            state.movieNames = movieNames;
            state.movieResults = movieResults;
            state.isLoading = false;
        },
    },
});

export const {
    toggleGptSearch,
    setGptLoading,
    addGptMovieResults,
} = gptSlice.actions;

export default gptSlice.reducer;