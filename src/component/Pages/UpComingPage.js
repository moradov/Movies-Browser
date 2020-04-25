import React, { useEffect, useContext } from "react";
import globalContext from "../../context/global/globalContext";
import MoviesList from "../MoviesList";
import ErrorHund from "../ErrorHund";
const TopSeriesPage = () => {
  //pull the the context values
  const {
    currentPage,
    moviesList,
    totalPages,
    loading,
    err,
    getMovies,
    searchKey,
    setCurrentPagePath,
    currentPagePath,
    setCurrentPage,
    searchKeyHund,
  } = useContext(globalContext);
  useEffect(() => {
    setCurrentPage(1);
    searchKeyHund("");
  }, []);
  useEffect(() => {
    setCurrentPagePath("Upcoming");
    getMovies("upcoming");
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

export default TopSeriesPage;
