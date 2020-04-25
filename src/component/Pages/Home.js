import React, { Fragment, useContext, useEffect } from "react";
import globalContext from "../../context/global/globalContext";
import MoviesList from "../MoviesList";
import ErrorHund from "../ErrorHund";

const Home = () => {
  //pull context values
  const {
    getMovies,
    searchKey,
    moviesList,
    loading,
    err,
    currentPage,
    setCurrentPage,
    clearMovies,
    totalPages,
    setCurrentPagePath,
    currentPagePath,
    searchKeyHund,
  } = useContext(globalContext);
  // call getMovies func every time search input change
  useEffect(() => {
    getMovies();
    clearMovies();
    setCurrentPagePath("Home");
  }, [searchKey, currentPage]);

  // useEffect(() => {
  //   setCurrentPage(1);
  // }, [searchKey]);

  // make sure that every time the page load the currentPage set to 1 and clear the search value on state
  useEffect(() => {
    setCurrentPage(1);
    searchKeyHund("");
  }, []);

  return (
    <Fragment>
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
    </Fragment>
  );
};

export default Home;
