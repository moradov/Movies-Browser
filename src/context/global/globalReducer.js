export default (state, action) => {
  switch (action.type) {
    case "DEFAULT_JOBS_LOADED":
      return {
        ...state,
        defaultJobs: action.payload,
        loading: false
      };
    case "SEARCH_JOBS":
      return {
        ...state,
        searchJobs: action.payload,
        loading: false
      };
    case "SET_LOADING":
      return {
        ...state,
        loading: action.payload
      };
    case "SET_MODEL":
      return {
        ...state,
        model: { ...action.payload }
      };
    default:
      return {
        ...state
      };
  }
};
