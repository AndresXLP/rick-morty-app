import { useDispatch, useSelector } from "react-redux";
import { addAsyncAmount } from "./counterActions";
import {
  decrement,
  increment,
  reset,
  selectCount,
  toggle,
} from "./counterSlices";

export const Counter = () => {
  const count = useSelector(selectCount);
  const dispatch = useDispatch();

  return (
    <div className="boxing">
      <h1>Redux Counter</h1>
      <div>{count}</div>
      <div>
        <button onClick={() => dispatch(increment())}>Increment</button>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
      </div>
      <div>
        <button onClick={() => dispatch(increment(5))}>Increment x5</button>
        <button onClick={() => dispatch(decrement(5))}>Decrement x5</button>
      </div>
      <button onClick={() => dispatch(reset())}>Reset Counter</button>
      <button onClick={() => dispatch(addAsyncAmount())}>Add Async</button>
      <button onClick={() => dispatch(toggle())}>Toogle Counter</button>
    </div>
  );
};
