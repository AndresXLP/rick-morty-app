import { useDispatch, useSelector } from "react-redux";
import { addAsyncAmount } from "./counterActions";
import {
  decrement,
  increment,
  reset,
  selectCount,
  viewShow,
  toggle,
} from "./counterSlices";

export const Counter = () => {
  const count = useSelector(selectCount);
  const show = useSelector(viewShow);
  const dispatch = useDispatch();

  return (
    <div className="boxing">
      <h1>Redux Counter</h1>
      <div>{show && count}</div>
      <div>
        <button
          data-testid="incrementButton"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <button
          data-testid="decrementButton"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
      <div>
        <button onClick={() => dispatch(increment(5))}>Increment x5</button>
        <button onClick={() => dispatch(decrement(5))}>Decrement x5</button>
      </div>
      <button data-testid="resetButton" onClick={() => dispatch(reset())}>
        Reset Counter
      </button>
      <button onClick={() => dispatch(addAsyncAmount())}>Add Async</button>
      <button onClick={() => dispatch(toggle())}>Toogle Counter</button>
    </div>
  );
};
