import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "./MoviesSlice";
import originalsReducer from "./NetflixOriginalsSlice";
import trendingReducer from "./TrendingSlice";

export const store = configureStore({
    reducer: {
        movies: moviesReducer,
        originals: originalsReducer,
        trending: trendingReducer,
    },
});

