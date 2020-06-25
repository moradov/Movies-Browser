import React, { useReducer } from 'react';
import axios from 'axios';

import GlobalContext from './globalContext';
import globalReducer from './globalReducer';
import {
  SET_LOADING,
  SET_SEARCH_KEY_TO_STATE,
  SET_MOVIES_DATA,
  SET_ERROR,
  SET_MOVIE_DETAILS,
  SET_MOVIE_CAST,
  CLEAR_MOVIES,
  CLEAR_MOVIE_DETAILS,
  SET_TOTAL_PAGES,
  SET_CURRENT_PAGE,
  SET_RANDOM_MOVIE_TO_STATE,
  SET_CURRENT_PAGE_PATH
} from './types';

const GlobalState = props => {
  const initState = {
    currentPagePath: 'Home',
    moviesList: [],
    seriesList: [],
    movieDetails: [],
    movieCast: [],
    randomMovie: [],
    searchKey: '',
    currentPage: 1,
    totalPages: null,
    loading: false,
    err: null
  };
  //init the reducer
  const [state, dispatch] = useReducer(globalReducer, initState);

  const searchKeyHund = keyVal =>
    dispatch({ type: SET_SEARCH_KEY_TO_STATE, payload: keyVal });
  const setLoading = bool => dispatch({ type: SET_LOADING, payload: bool });
  const setError = val => dispatch({ type: SET_ERROR, payload: val });
  const clearMovies = () => dispatch({ type: CLEAR_MOVIES });
  const clearMovieDetails = () => dispatch({ type: CLEAR_MOVIE_DETAILS });
  const setTotalPages = value =>
    dispatch({ type: SET_TOTAL_PAGES, payload: value });
  const setCurrentPage = value =>
    dispatch({ type: SET_CURRENT_PAGE, payload: value });
  const setCurrentPagePath = path =>
    dispatch({ type: SET_CURRENT_PAGE_PATH, payload: path });

  // main func that's get data from the API , searchBy =>
  const getMovies = fetchBy => {
    setLoading(true);
    setError(null);
    if (state.searchKey.length > 0) {
      // get data from the API by search key
      axios
        .get(
          `/api/movies/?key_word=${state.searchKey}&page=${state.currentPage}`
        )
        .then(res => {
          dispatch({ type: SET_MOVIES_DATA, payload: res.data.results });
          setTotalPages(res.data.total_pages);
          setLoading(false);
          setError(null);
        })
        .catch(err => {
          setLoading(false);
          setError(1);
        });
    } else {
      /// fetch by upcoming or top movies or get default
      axios
        .get(
          `api/movies/genres/?serach_by=${fetchBy || ''}&page=${
            state.currentPage
          }`
        )
        .then(res => {
          setLoading(false);
          dispatch({ type: SET_MOVIES_DATA, payload: res.data.results });
          setTotalPages(res.data.total_pages);
        })
        .catch(err => {
          setLoading(false);
          fetchBy ? setError(3) : setError(1);
        });
    }
  };
  const getMovieDetails = id => {
    setLoading(true);
    setError(null);
    clearMovieDetails();
    axios
      .get(`/api/movie/details/${id}`)
      .then(res => {
        dispatch({ type: SET_MOVIE_DETAILS, payload: res.data });

        axios.get(`/api/movie/cast/${id}`).then(res => {
          dispatch({ type: SET_MOVIE_CAST, payload: res.data.cast });
          setError(null);
          setLoading(false);
        });
        setError(null);
      })

      .catch(err => {
        setError(2);
        setLoading(false);
      });
  };
  /// get Random movie item by generete random id
  const getRandomMovie = () => {
    const randomId = Math.floor(Math.random() * 10000);
    setLoading(true);
    setError(null);
    axios
      .get(`/api/movie/details/${randomId}`)
      .then(res => {
        setLoading(false);
        res.data.poster_path
          ? dispatch({
              type: SET_RANDOM_MOVIE_TO_STATE,
              payload: res.data
            })
          : setError(6);
      })
      .catch(err => {
        setLoading(false);
        !err.response ? setError(5) : setError(6);
      });
  };

  return (
    <GlobalContext.Provider
      value={{
        moviesList: state.moviesList,
        movieDetails: state.movieDetails,
        searchKey: state.searchKey,
        currentPagePath: state.currentPagePath,
        loading: state.loading,
        err: state.err,
        movieCast: state.movieCast,
        totalPages: state.totalPages,
        currentPage: state.currentPage,
        seriesList: state.seriesList,
        randomMovie: state.randomMovie,
        searchKeyHund,
        getMovies,
        getMovieDetails,
        clearMovies,
        setCurrentPage,
        getRandomMovie,
        clearMovieDetails,
        setCurrentPagePath
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};
export default GlobalState;
