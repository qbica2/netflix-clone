import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from "../axios";
import requests from '../Requests';

export const getTopRatedMovies = createAsyncThunk("movies/topRatedMovies", async () => {
    const request = await axios.get(requests.fetchTopRated);
    return request.data.results
})

export const getActionMovies = createAsyncThunk("movies/actionMovies", async () =>{
    const request = await axios.get(requests.fetchActionMovies);
    return request.data.results
})

export const getComedyMovies = createAsyncThunk("movies/comedy", async () =>{
    const request = await axios.get(requests.fetchComedyMovies);
    return request.data.results
})

export const getHorrorMovies = createAsyncThunk("movies/horror", async () =>{
    const request = await axios.get(requests.fetchHorrorMovies);
    return request.data.results
})

export const getRomanceMovies = createAsyncThunk("movies/romance", async () =>{
    const request = await axios.get(requests.fetchRomanceMovies);
    return request.data.results
})

export const getDocumentaries = createAsyncThunk("movies/documentaries", async () =>{
    const request = await axios.get(requests.fetchDocumentaries);
    return request.data.results
})

export const moviesSlice = createSlice({
    name: 'movies',
    initialState: {
        movies: [],
        topRated: [],
        action: [],
        comedy: [],
        horror: [],
        romance: [],
        documentary: [],
    },
    reducers: {},
    extraReducers: {
        [getTopRatedMovies.fulfilled]: (state, action) => {
            state.topRated = action.payload;
        },
        [getActionMovies.fulfilled]: (state, action) => {
            state.action = action.payload;
        },
        [getComedyMovies.fulfilled]: (state, action) => {
            state.comedy = action.payload;
        },
        [getHorrorMovies.fulfilled]: (state, action) => {
            state.horror = action.payload;
        },
        [getRomanceMovies.fulfilled]: (state, action) => {
            state.romance = action.payload;
        },
        [getDocumentaries.fulfilled]: (state, action) => {
            state.documentary = action.payload;
        },
    },
});

export default moviesSlice.reducer;