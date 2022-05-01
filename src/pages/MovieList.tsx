import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import LoadingScreen from 'src/components/LoadingScreen';
import { fetchMovies, MovieType, searchMovies } from 'src/redux/actions/api';
import { AppStateType } from 'src/redux/store';
import Thumbnail from '../components/Thumbnail/Thumbnail';

import './MovieList.scss';
import Search from '../components/Search/SearchBox';

export default function MovieList() {
  const dispatch = useDispatch();
  const isLoading = useSelector(
    (state: AppStateType) => state.apiReducer.isLoading
  );
  const movies = useSelector((state: AppStateType) => state.apiReducer.movies);
  const error = useSelector((state: AppStateType) => state.apiReducer.error);

  useEffect(() => {
    dispatch(fetchMovies());
  }, []);

  const search = (searchValue: any) => {
    dispatch(searchMovies(searchValue));
  };

  return (
    <div>
      <Search search={search} />
      <div className="movieList">
        {isLoading && !error ? (
          <LoadingScreen />
        ) : error ? (
          <div className="errorMessage">{error.message}</div>
        ) : (
          <div className="movieList__container">
            {movies.map((movie: MovieType) => (
              <Thumbnail movie={movie} key={movie.key} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
