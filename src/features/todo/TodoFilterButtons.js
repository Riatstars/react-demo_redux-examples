import React from "react";
import { useDispatch } from "react-redux";
import { setFilter } from "./actions";

function TodoFilterButtons() {
  const dispatch = useDispatch();

  return (
    <div>
      <button onClick={() => dispatch(setFilter("SHOW_ALL"))}>SHOW_ALL</button>
      <button onClick={() => dispatch(setFilter("SHOW_COMPLETED"))}>
        SHOW_COMPLETED
      </button>
      <button onClick={() => dispatch(setFilter("SHOW_ACTIVE"))}>
        SHOW_ACTIVE
      </button>
    </div>
  );
}

export default TodoFilterButtons;
