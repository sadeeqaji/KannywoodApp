import { createSelector } from "reselect";


const selectMovie = state => state.Movies;



export const selectAllMovies = createSelector(
    [selectMovie], 
    (movie) => movie.Movies
)