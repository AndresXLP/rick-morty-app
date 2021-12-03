import { incrementByAmount } from "./counterSlices";
import { fetchCount } from "./counterApi";

export const addAsyncAmount = (value) => {
  return async (dispatch) => {
    const amount = await fetchCount(value);
    dispatch(incrementByAmount());
  };
};
