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
  SET_CURRENT_PAGE_PATH
} from './types';
export default (state, action) => {
  switch (action.type) {
    case SET_SEARCH_KEY_TO_STATE:
      return {
        ...state,
        searchKey: action.payload
      };
      break;
    case SET_MOVIES_DATA:
      return {
        ...state,
        moviesList: action.payload,
        loading: false
      };
      break;
    case SET_MOVIE_DETAILS:
      return {
        ...state,
        movieDetails: action.payload,
        loading: false
      };
      break;
    case SET_MOVIE_CAST:
      return {
        ...state,
        movieCast: action.payload,
        loading: false
      };
      break;
    case SET_LOADING:
      return {
        ...state,
        loading: action.payload
      };
      break;
    case SET_ERROR:
      return {
        ...state,
        err: action.payload
      };
      break;
    case CLEAR_MOVIES:
      return {
        ...state,
        moviesList: []
      };
      break;
    case CLEAR_MOVIE_DETAILS:
      return {
        ...state,
        movieDetails: [],
        tes: null
      };
      break;
    case SET_TOTAL_PAGES:
      return {
        ...state,
        totalPages: action.payload
      };
      break;
    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.payload
      };
      break;
    case SET_CURRENT_PAGE_PATH:
      return {
        ...state,
        currentPagePath: action.payload
      };
      break;
    case SET_RANDOM_MOVIE_TO_STATE:
      return {
        ...state,
        randomMovie: action.payload,
        loading: false
      };
      break;
    default:
      return {
        ...state
      };
  }
};
