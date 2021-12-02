import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlices";

export const store = configureStore({
  reducer: { counter: counterReducer },
});

/*
import { createStore } from "redux";

const initialState = { counter: 0, show: true };
const counterReducer = (state = initialState, action) => {
  if (action.type === "increment") {
    return {
      ...state,
      counter: state.counter + (action.payload || 1),
    };
  }
  if (action.type === "decrement") {
    return {
      ...state,
      counter: state.counter - (action.payload || 1),
    };
  }
  if (action.type === "show") {
    return {
      ...state,
      show: !state.show,
    };
  }
  if (action.type === "reset") {
    return {
      ...state,
      counter: 0,
    };
  }

  return state;
};
export const store = createStore(counterReducer);
*/
