import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

// export const getTrending = createAsyncThunk

export const moviesSlice = createSlice({
    name: 'movies',
    initialState: {
        movies: [],
    },
    reducers: {},
});

export default moviesSlice.reducer;