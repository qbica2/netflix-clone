import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "./MoviesSlice";
import originalsReducer from "./NetflixOriginalsSlice";

export const store = configureStore({
    reducer: {
        movies: moviesReducer,
        originals: originalsReducer,
    },
});

