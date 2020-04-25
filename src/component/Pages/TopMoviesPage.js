import React, { useContext, useEffect } from "react";
import globalContext from "../../context/global/globalContext";
import MoviesList from "../MoviesList";
import ErrorHund from "../ErrorHund";
const TopMoviesPage = () => {
  //pull context values
  const {
    getMovies,
    moviesList,
    loading,
    err,
    currentPage,
    setCurrentPagePath,
    totalPages,
    currentPagePath,
    searchKey,
    setCurrentPage,
    searchKeyHund,
  } = useContext(globalContext);

  useEffect(() => {
    setCurrentPage(1);
    searchKeyHund("");
  }, []);
  // call getMovies func every time search value or currentOage value change
  useEffect(() => {
    getMovies("top_rated");
    setCurrentPagePath("Top Movies");
  }, [currentPage, searchKey]);

  return (
    <div className='content-body'>
      {err ? (
        <ErrorHund />
      ) : (
        <MoviesList
          totalPages={totalPages}
          showSpineer={loading}
          moviesList={moviesList}
          pageTitle={currentPagePath}
        />
      )}
    </div>
  );
};

export default TopMoviesPage;
