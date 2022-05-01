import React, { Component } from 'react';
import { getMovieByKey, MovieType } from 'src/redux/actions/api';

import './MovieDetail.scss';
import LoadingScreen from 'src/components/LoadingScreen';
import { connect } from 'react-redux';
import { AppStateType } from 'src/redux/store';

type TMovieDetailProps = {
  getMovieByKey: (key: string) => Promise<any>;
  isLoading: boolean;
  movie: MovieType;
  error: string;
};

class MovieDetail extends Component<TMovieDetailProps, any> {
  componentDidMount() {
    const id = window.location.hash.split('/')[2];
    if (id) this.props.getMovieByKey(id);
  }

  render() {
    const { isLoading, movie, error } = this.props;

    return (
      <div className="movieDetail__container">
        {isLoading && !error ? (
          <LoadingScreen />
        ) : error ? (
          <div className="errorMessage">{error}</div>
        ) : (
          <div className="movieDetail__main-card">
            <div className="movieDetail__left-col">
              <div className="movieDetail__details">
                <h1>{movie.name}</h1>
                <div className="movieDetail__rating-container">
                  <p className="movieDetail__highlight">
                    ⭐ &nbsp;
                    {movie.rate}
                    /10
                  </p>

                  <p className="movieDetail__length">{movie.length}</p>
                </div>
                <p className="movieDetail__description">{movie.description}</p>

                <div className="movieDetail__genres">
                  {movie?.genres?.map((genre: string) => (
                    <p className="movieDetail__highlight" key={genre}>
                      {genre}
                    </p>
                  ))}
                </div>
              </div>
            </div>
            <div className="movieDetail__right-col">
              <div
                className="movieDetail__img"
                style={{
                  backgroundImage: `url(/assets/images/movie-covers/${movie.img})`,
                }}
              />
              <div className="movieDetail__img-overlay" />
            </div>
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state: AppStateType) => ({
  isLoading: state.apiReducer.isLoading,
  movie: state.apiReducer.movie,
  error: state.apiReducer.error,
});

const mapDispatchToProps = (dispatch: any) => ({
  getMovieByKey: (key: string) => dispatch(getMovieByKey(key)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MovieDetail);
