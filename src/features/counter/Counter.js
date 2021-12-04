import "./counter.css";
import { useDispatch, useSelector } from "react-redux";
import { addAsyncAmount } from "./counterActions";
import {
  decrement,
  increment,
  reset,
  selectCount,
  selectShow,
  toggle,
} from "./counterSlices";

export const Counter = () => {
  const count = useSelector(selectCount);
  const show = useSelector(selectShow);
  const dispatch = useDispatch();

  return (
    <div className="container w-25 bg-light rounded-3 mt-5 pt-2 pb-2">
      <div className="d-flex flex-column justify-content-center">
        <h1 className="fs-2">REDUX COUNTER</h1>
        <div className="">
          <h1 className={show ? `trans` : `trans text-light`}>{count}</h1>
        </div>
        <div className="justify-content-center row btn-group-justified">
          <div className="d-flex justify-content-center">
            <button
              disabled={!show ? true : false}
              className="btn btn-dark m-1 col-6"
              onClick={() => dispatch(increment())}
            >
              Increment
            </button>
            <button
              disabled={!show ? true : false}
              className="btn btn-dark m-1 col-6"
              onClick={() => dispatch(decrement())}
            >
              Decrement
            </button>
          </div>
          <div className="d-flex justify-content-center">
            <button
              disabled={!show ? true : false}
              className="btn btn-dark m-1 col-6"
              onClick={() => dispatch(increment(5))}
            >
              Incrementx5
            </button>
            <button
              disabled={!show ? true : false}
              className="btn btn-dark m-1 col-6"
              onClick={() => dispatch(decrement(5))}
            >
              Decrementx5
            </button>
          </div>
          <div className="justify-content-center row btn-group-justified">
            <button
              disabled={!show ? true : false}
              className="btn btn-dark m-1"
              onClick={() => dispatch(reset())}
            >
              Reset Counter
            </button>
            <button
              disabled={!show ? true : false}
              className="btn btn-dark m-1 asyncButton"
              onClick={() => dispatch(addAsyncAmount())}
            >
              Add Async
            </button>
            <button
              className="btn btn-dark m-1"
              onClick={() => dispatch(toggle())}
            >
              Toogle Counter
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
