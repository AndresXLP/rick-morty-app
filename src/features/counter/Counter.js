import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, reset, selectCount } from "./counterSlices";

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
      {/* <button onClick={toggleCounterHandler}>Toogle Counter</button> */}
    </div>
  );
};
