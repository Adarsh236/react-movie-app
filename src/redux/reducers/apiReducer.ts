import {
  GET_API_ERROR,
  GET_API_REQUEST,
  MOVIES_COMMIT,
  MOVIE_COMMIT,
} from '../actions/types';
import { ApiActionTypes, MovieType } from '../actions/api';

export type ApiStateType = {
  isLoading: boolean;
  movies: MovieType[];
  movie: MovieType | {};
  error: string | null;
};

const initialState: ApiStateType = {
  isLoading: false,
  movies: [],
  movie: {},
  error: null,
};

export const apiReducer = (
  state: ApiStateType = initialState,
  action: ApiActionTypes
): any => {
  switch (action.type) {
    case GET_API_REQUEST:
      return { ...state, isLoading: action.isLoading, error: action.error };
    case MOVIES_COMMIT:
      return { ...state, movies: action.movies, isLoading: action.isLoading };
    case MOVIE_COMMIT:
      return { ...state, movie: action.movie, isLoading: action.isLoading };
    case GET_API_ERROR:
      return { ...state, error: action.error, isLoading: action.isLoading };
    default:
      return state;
  }
};
