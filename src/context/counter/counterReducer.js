import { ADD_ONE, ADD_TWO, ADD_THREE } from "./types";
export default (state, action) => {
  switch (action.type) {
    case ADD_ONE:
      return {
        ...state,
        total: state.total + 1
      };
    case ADD_TWO:
      return {
        ...state,
        total: state.total + 2
      };
    case ADD_THREE:
      return {
        ...state,
        total: state.total + 3
      };
    default:
      return state;
  }
};
