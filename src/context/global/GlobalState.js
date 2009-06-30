import React, { useReducer } from "react";
import GlobalContext from "./globalContext";
import globalReducer from "./globalReducer";
import axios from "axios";
const GlobalState = props => {
  const initState = {
    defaultJobs: [],
    searchJobs: [],
    loading: false,
    model: {
      display: false,
      msg: ""
    }
  };
  const [state, dispatch] = useReducer(globalReducer, initState);
  // get default jobs for home page
  const getDefaultJobs = async () => {
    setLoading(true);
    try {
      const res = await axios.get(
        "https://api.adzuna.com/v1/api/jobs/gb/search/10?app_id=8ba6341e&app_key=2863bf154d48bce5fe3ebd1fcc58bb27%09&results_per_page=10&what_and=web"
      );
      dispatch({ type: "DEFAULT_JOBS_LOADED", payload: res.data.results });
      console.log(res.data.results);
    } catch (error) {
      console.log(error);
    }
  };
  // get jobs by search
  const getJobs = async data => {
    setLoading(true);
    try {
      const res = await axios.get(
        `https://api.adzuna.com/v1/api/jobs/gb/search/10?app_id=8ba6341e&app_key=2863bf154d48bce5fe3ebd1fcc58bb27%09&results_per_page=100&what=${data[0]}&where=${data[1]}`
      );
      dispatch({ type: "SEARCH_JOBS", payload: res.data.results });
      console.log(res);
      console.log(data[0], data[1]);
    } catch (error) {
      console.log(error);
    }
  };
  // set loadin
  const setLoading = value => dispatch({ type: "SET_LOADING", payload: value });
  // set model
  const setModel = modelArgs =>
    setTimeout(() => dispatch({ type: "SET_MODEL", payload: modelArgs }), 2000);
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
