import React from "react";
import { withRouter } from "react-router-dom";
import Spinner from "./Spinner";

const RandomMovie = ({
  movieData: { id, title, poster_path, vote_average, release_date, genres },
  showSpinner,
  history,
}) => {
  return (
    <div className='random'>
      {!showSpinner ? (
        <div
          className='movies-item'
          onClick={() => history.push(`/details/${id}`)}
        >
          <span className='rating'>{vote_average}</span>
          <img
            alt='poster img'
            src={`https://image.tmdb.org/t/p/w200${poster_path}`}
          />
          <h2 className='title'>
            {title}
            <span>
              {" "}
              {release_date ? `(${release_date.slice(0, 4)}) ` : null}
            </span>
          </h2>
          <div className='genre'>
            {genres
              ? genres
                  .slice(0, 2)
                  .map((genre) => <span key={genre.id}> {genre.name} </span>)
              : null}
          </div>
        </div>
      ) : (
        <Spinner />
      )}
    </div>
  );
};

export default withRouter(RandomMovie);
