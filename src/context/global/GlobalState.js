import React, { useReducer } from "react";
import GlobalContext from "./globalContext";
import globalReducer from "./globalReducer";
import axios from "axios";
import {
  SET_DEFAULT_JOBS,
  SET_SEARCH_JOBS,
  SET_LOADING,
  SET_MODEL,
  SET_ERR,
  CLEAR_SEARCH_JOBS,
  CLEAR_DEAFAULT_JOBS
} from "../types";
const GlobalState = props => {
  const initState = {
    defaultJobs: [],
    searchJobs: [],
    loading: false,
    model: null,
    err: null
  };
  const [state, dispatch] = useReducer(globalReducer, initState);
  // get default jobs for home page
  const getDefaultJobs = () => {
    setLoading(true);
    setError(null);
    clearDefaultJobs();
    axios
      .get(
        "https://api.adzuna.com/v1/api/jobs/gb/search/10?app_id=8ba6341e&app_key=2863bf154d48bce5fe3ebd1fcc58bb27%09&results_per_page=10&what_and=web"
      )
      .then(res => {
        dispatch({ type: SET_DEFAULT_JOBS, payload: res.data.results });
        setLoading(false);
      })
      .catch(err => {
        setError(1);
      });
  };
  // get jobs by search
  const getJobs = data => {
    setLoading(true);
    setError(null);
    clearSearchJobs();
    axios
      .get(
        `https://api.adzuna.com/v1/api/jobs/gb/search/10?app_id=8ba6341e&app_key=2863bf154d48bce5fe3ebd1fcc58bb27%09&results_per_page=100&what=${data.skill}&where=${data.loaction}`
      )
      .then(res => {
        dispatch({ type: SET_SEARCH_JOBS, payload: res.data.results });
        setLoading(false);
      })
      .catch(err => {
        setLoading(false);
        setError(2);
      });
  };
  // set loadin
  const setLoading = value => dispatch({ type: SET_LOADING, payload: value });
  // set model
  const setModel = modelId =>
    setTimeout(() => dispatch({ type: SET_MODEL, payload: modelId }), 2000);
  // set err
  const setError = err => dispatch({ type: SET_ERR, payload: err });
  // clear searched jobs
  const clearSearchJobs = () => dispatch({ type: CLEAR_SEARCH_JOBS });
  //clear default jobs
  const clearDefaultJobs = () => dispatch({ type: CLEAR_DEAFAULT_JOBS });

  return (
    <GlobalContext.Provider
      value={{
        defaultJobs: state.defaultJobs,
        searchJobs: state.searchJobs,
        loading: state.loading,
        model: { ...state.model },
        setModel,
        getDefaultJobs,
        getJobs
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};
export default GlobalState;
