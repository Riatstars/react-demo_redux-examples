import React from "react";
import { useDispatch, useSelector } from "react-redux";

function Counter() {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.count);
  return (
    <div>
      <button onClick={() => dispatch({ type: "COUNTER.INCREMENT" })}>+</button>
      <span>{count}</span>
      <button onClick={() => dispatch({ type: "COUNTER.DECREMENT" })}>-</button>
    </div>
  );
}

export default Counter;
