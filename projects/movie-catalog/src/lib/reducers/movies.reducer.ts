import { Movie } from '../models/movie.model';
import * as MovieActions from '../actions/movies.action';
import { createReducer, on, Action, createSelector, createFeatureSelector } from '@ngrx/store';

export interface MovieState {
    movies: Movie[];
}

export const initialState: MovieState = {
    movies : []
};

const reducer = createReducer(
    initialState,
    on(MovieActions.getMoviesSuccess, (state, action) => ({
        ...state, movies: action.payload
    }))
);

/**
 * movie reducer
 * @param state movie state
 * @param action movie actions
 */
export function movieReducer(state: MovieState | undefined, action: Action) {
    return reducer(state, action);
}

export const selectMovieState = createFeatureSelector<MovieState>('movies');
export const getMovies = createSelector(selectMovieState, state => state.movies);
