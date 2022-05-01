import React from 'react';
import { MovieType } from 'src/redux/actions/api';
import { generatePath, useNavigate } from 'react-router-dom';
import './Thumbnail.scss';

const Thumbnail = ({ movie }: { movie: MovieType }) => {
  const navigate = useNavigate();

  return (
    <div
      className="thumbnail__container mouse-pt"
      key={movie.key}
      style={{
        backgroundImage: `url(./assets/images/movie-covers/${movie.img})`,
      }}
      onClick={() =>
        navigate(generatePath('/movie-detail/:id', { id: movie.key }))}>
      <h2 className="thumbnail__title">{movie.name}</h2>

      <span className="thumbnail__description">{movie.description}</span>

      <div className="thumbnail__imdb-box">
        <span className="thumbnail__imdb">
          &nbsp; IMDb &nbsp;
          {movie.rate}
          &nbsp;
        </span>
      </div>
    </div>
  );
};

export default Thumbnail;
