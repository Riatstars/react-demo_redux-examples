import React, { useEffect } from "react";
import TodoAdd from "./TodoAdd";
import TodoList from "./TodoList";
import TodoFilterButtons from "./TodoFilterButtons";
import { useDispatch } from "react-redux";
import { getTodos, toggleTodo } from "./actions";

function Todo() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTodos());
  }, [dispatch]);

  return (
    <div>
      <TodoAdd />
      <TodoList />
      <TodoFilterButtons />
    </div>
  );
}

export default Todo;
