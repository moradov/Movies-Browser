import React, { useReducer } from "react";
import CounterContext from "./counterContext";
import counterReducer from "./counterReducer";
import { ADD_ONE, ADD_TWO, ADD_THREE } from "./types";

const counterState = props => {
  const initState = {
    total: 0
  };
  const [state, dispatch] = useReducer(counterReducer, initState);
  //ADD ONE
  const addOne = () => dispatch({ type: ADD_ONE });
  const addTwo = () => dispatch({ type: ADD_TWO });
  const addThree = () => dispatch({ type: ADD_THREE });

  return (
    <CounterContext.Provider
      value={{ total: state.total, addOne, addTwo, addThree }}
    >
      {props.children}
    </CounterContext.Provider>
  );
};
export default counterState;
