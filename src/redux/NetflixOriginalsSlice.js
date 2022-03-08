import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from "../axios";
import requests from '../Requests';

export const getOriginals = createAsyncThunk("originals/getOriginals", async () => {
     const request = await axios.get(requests.fetchNetflixOriginals);
     return request.data.results[
            Math.floor(Math.random() * request.data.results.length-1)
     ]
});

export const originalsSlice = createSlice({
    name: 'originals',
    initialState: {
        originals: [],
        status: 'idle',
    },
    reducers: {},
    extraReducers: {
        [getOriginals.fulfilled]: (state, action) => {
            state.originals = action.payload;
            state.status = "succedeed";
        },
        [getOriginals.pending]: (state, action) => {
            state.status = "pending";
        },
        [getOriginals.rejected]: (state, action) => {
            state.status = "failed";
        },
    },
});

export default originalsSlice.reducer;
