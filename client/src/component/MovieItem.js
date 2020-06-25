import React from 'react';
import { withRouter } from 'react-router-dom';

import PropTypes from 'prop-types';
import TMDB_GENRES_DATA from '../data/TMDB_GENRES_DATA';
const MovieItem = ({
  movieData,
  movieData: { poster_path, id, vote_average, genre_ids, release_date, title },
  history
}) => {
  /// because TMDB gives only array of genrs ids without names this func gonna filter the up coming genre ids from the default geners list
  const getGenre = id => {
    if (genre_ids) {
      const filterdGenre = TMDB_GENRES_DATA.filter(item => item.id === id);
      // filter method return array with single filtred item object
      return filterdGenre[0].name;
    }
  };
  return (
    <div className='movies-item' onClick={() => history.push(`/details/${id}`)}>
      <span className='rating'>{vote_average}</span>
      <img
        alt='poster img'
        src={`https://image.tmdb.org/t/p/w200${poster_path}`}
      />
      <h2 className='title'>
        {title}
        <span> {release_date ? `(${release_date.slice(0, 4)}) ` : null}</span>
      </h2>
      <div className='genre'>
        {genre_ids
          ? genre_ids
              .slice(0, 2)
              .map(genreId => <span key={genreId}> {getGenre(genreId)} </span>)
          : null}
      </div>
    </div>
  );
};

export default withRouter(MovieItem);
MovieItem.propTypes = {
  movieData: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
};
