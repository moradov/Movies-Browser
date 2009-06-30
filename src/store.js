import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import MainReducer from "./reducers/mainReducer";

const initState = {};
const middleware = [thunk];

const store = createStore(
  MainReducer,
  initState,
  composeWithDevTools(applyMiddleware(...middleware))
);
export default store;
