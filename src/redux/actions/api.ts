import { AnyAction } from 'redux';
import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import {
  GET_API_REQUEST,
  MOVIES_COMMIT,
  GET_API_ERROR,
  MOVIE_COMMIT,
} from './types';
import MovieList from '../../content/movie.mock-data.json';

type TApiRequest = {
  type: typeof GET_API_REQUEST;
  isLoading: boolean;
  error: string | null;
};

type moviesCommitType = {
  type: typeof MOVIES_COMMIT;
  isLoading: boolean;
  movies: MovieType[];
};

type movieCommitType = {
  type: typeof MOVIE_COMMIT;
  isLoading: boolean;
  movie: MovieType;
};

type TApiError = {
  type: typeof GET_API_ERROR;
  isLoading: boolean;
  error: string | null;
};

export type MovieType = {
  id: number;
  key: string;
  name: string;
  description: string;
  genres: string[];
  rate: string;
  length: string;
  img: string;
};

export type ApiActionTypes =
  | TApiRequest
  | moviesCommitType
  | movieCommitType
  | TApiError;

const isApiRequest = (): TApiRequest => ({
  type: GET_API_REQUEST,
  isLoading: true,
  error: null,
});

const moviesCommit = (movies: MovieType[]): ApiActionTypes => ({
  type: MOVIES_COMMIT,
  isLoading: false,
  movies,
});

const movieCommit = (movie: MovieType): ApiActionTypes => ({
  type: MOVIE_COMMIT,
  isLoading: false,
  movie,
});

const apiError = (error: string): ApiActionTypes => ({
  type: GET_API_ERROR,
  isLoading: false,
  error: `🥺 Error: Sorry ${error}!`,
});

export const fetchMovies =
  (): ThunkAction<
    Promise<void>,
    Record<string, unknown>,
    Record<string, unknown>,
    AnyAction
  > =>
  (
    dispatch: ThunkDispatch<
      Record<string, unknown>,
      Record<string, unknown>,
      AnyAction
    >
  ): Promise<void> =>
    new Promise<void>((resolve) => {
      try {
        dispatch(isApiRequest());
        dispatch(moviesCommit(MovieList.data));
        resolve();
      } catch (error: any) {
        dispatch(apiError(error.message));
      }
    });

export const searchMovies =
  (
    name: string
  ): ThunkAction<
    Promise<void>,
    Record<string, unknown>,
    Record<string, unknown>,
    AnyAction
  > =>
  (
    dispatch: ThunkDispatch<
      Record<string, unknown>,
      Record<string, unknown>,
      AnyAction
    >
  ): Promise<void> =>
    new Promise<void>((resolve) => {
      try {
        dispatch(isApiRequest());
        const data = MovieList.data.filter((data: MovieType) =>
          data.name.toLocaleLowerCase().startsWith(name.toLocaleLowerCase())
        );
        dispatch(moviesCommit(data));
        resolve();
      } catch (error: any) {
        dispatch(apiError(error.message));
      }
    });

export const getMovieByKey =
  (
    key: string
  ): ThunkAction<
    Promise<void>,
    Record<string, unknown>,
    Record<string, unknown>,
    AnyAction
  > =>
  (
    dispatch: ThunkDispatch<
      Record<string, unknown>,
      Record<string, unknown>,
      AnyAction
    >
  ): Promise<void> =>
    new Promise<void>((resolve) => {
      try {
        dispatch(isApiRequest());
        const data = MovieList.data.filter(
          (data: MovieType) => data.key === key
        );
        if (data.length > 0) dispatch(movieCommit(data[0]));
        else throw new Error('Movie not found');
        resolve();
      } catch (error: any) {
        dispatch(apiError(error.message));
      }
    });
