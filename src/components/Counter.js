import { useDispatch, useSelector } from "react-redux";

export const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter);
  const show = useSelector((state) => state.show);
  const incrementHandler = () => {
    dispatch({ type: "increment" });
  };
  const decrementHandler = () => {
    dispatch({ type: "decrement" });
  };
  const incrementHandlerX5 = () => {
    dispatch({ type: "increment", payload: 5 });
  };
  const decrementHandlerX5 = () => {
    dispatch({ type: "decrement", payload: 5 });
  };
  const resetCounterHandler = () => {
    dispatch({ type: "reset" });
  };
  const toggleCounterHandler = () => {
    dispatch({ type: "show" });
  };

  return (
    <div className="boxing">
      <h1>Redux Counter</h1>
      <div>{show && counter}</div>
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <div>
        <button onClick={incrementHandlerX5}>Increment x5</button>
        <button onClick={decrementHandlerX5}>Decrement x5</button>
      </div>
      <button onClick={resetCounterHandler}>Reset Counter</button>
      <button onClick={toggleCounterHandler}>Toogle Counter</button>
    </div>
  );
};
