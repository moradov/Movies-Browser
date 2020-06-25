import React, { Fragment } from "react";
import PropTypes from "prop-types";

import MovieItem from "./MovieItem";
import Spinner from "./Spinner";
import Pagination from "./Pagination";
import ResultsNotFound from "./ResultsNotFound";

const MoviesList = ({ showSpineer, moviesList, totalPages, pageTitle }) => {
  return (
    <Fragment>
      <h2 className='content-title'>{pageTitle} </h2>
      <div className='content-grid'>
        {!showSpineer
          ? moviesList.map(movie =>
              movie.poster_path ? (
                <MovieItem key={movie.id} movieData={movie} />
              ) : null
            )
          : null}
      </div>
      {showSpineer ? <Spinner /> : null}
      {showSpineer || totalPages <= 1 ? null : (
        <Pagination totalPages={totalPages} />
      )}
      {totalPages === 0 && !showSpineer ? <ResultsNotFound /> : null}
    </Fragment>
  );
};

export default MoviesList;
MoviesList.propTypes = {
  showSpineer: PropTypes.bool.isRequired,
  moviesList: PropTypes.array,
  totalPages: PropTypes.number,
  pageTitle: PropTypes.string.isRequired
};
