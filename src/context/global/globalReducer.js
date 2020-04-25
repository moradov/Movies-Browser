import {
  SET_LOADING,
  SET_SEARCH_KEY_TO_STATE,
  SET_MOVIES_DATA,
  SET_MOVIE_DETAILS,
  SET_MOVIE_CAST,
  SET_ERROR,
  CLEAR_MOVIES,
  CLEAR_MOVIE_DETAILS,
  SET_TOTAL_PAGES,
  SET_CURRENT_PAGE,
  SET_RANDOM_MOVIE_TO_STATE,
  SET_CURRENT_PAGE_PATH,
} from "./types";
export default (state, action) => {
  switch (action.type) {
    case SET_SEARCH_KEY_TO_STATE:
      return {
        ...state,
        searchKey: action.payload,
      };
    case SET_MOVIES_DATA:
      return {
        ...state,
        moviesList: action.payload,
        loading: false,
      };
    case SET_MOVIE_DETAILS:
      return {
        ...state,
        movieDetails: action.payload,
        loading: false,
      };
    case SET_MOVIE_CAST:
      return {
        ...state,
        movieCast: action.payload,
        loading: false,
      };
    case SET_LOADING:
      return {
        ...state,
        loading: action.payload,
      };
    case SET_ERROR:
      return {
        ...state,
        err: action.payload,
      };
    case CLEAR_MOVIES:
      return {
        ...state,
        moviesList: [],
      };
    case CLEAR_MOVIE_DETAILS:
      return {
        ...state,
        movieDetails: [],
        tes: null,
      };
    case SET_TOTAL_PAGES:
      return {
        ...state,
        totalPages: action.payload,
      };
    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.payload,
      };
    case SET_CURRENT_PAGE_PATH:
      return {
        ...state,
        currentPagePath: action.payload,
      };
    case SET_RANDOM_MOVIE_TO_STATE:
      return {
        ...state,
        randomMovie: action.payload,
        loading: false,
      };
    default:
      return {
        ...state,
      };
  }
};
