import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from "../axios";
import requests from '../Requests';

export const getTrending = createAsyncThunk ("trending/getTrending", async () => {
    const request = await axios.get(requests.fetchTrending);
    return request.data.results
});

export const trendingSlice = createSlice({
    name: 'trending',
    initialState: {
        trending: [],
        status: 'idle',
    },
    reducers: {},
    extraReducers: {
        [getTrending.fulfilled]: (state, action) => {
            state.trending = action.payload;
            state.status = "succedeed";
        },
        [getTrending.pending]: (state, action) => {
            state.status = "pending";
        },
        [getTrending.rejected]: (state, action) => {
            state.status = "failed";
        },
    },
});

export default trendingSlice.reducer;