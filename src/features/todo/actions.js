import apiService from "../../app/apiService";
import { ADD_TODO, TOGGLE_TODO, SET_FILTER, GET_TODOS } from "./reducer";

export const addTodo = (text) => async (dispatch) => {
  try {
    const todo = { id: new Date(), text, completed: false };
    const res = await apiService.post("/todos", todo);
    console.log(res);
    dispatch({ type: ADD_TODO, payload: { id: todo.id, text } });
  } catch (error) {
    console.log(error);
  }
};

export const getTodos = (text) => async (dispatch) => {
  try {
    const res = await apiService.get("/todos");
    dispatch({ type: GET_TODOS, payload: res.data });
  } catch (error) {
    console.log(error);
  }
};

export const toggleTodo = (id) => async (dispatch) => {
  try {
    const data = await apiService.get("/todos?id=" + id);
    console.log(data.data[0]);
    const target = data.data[0];
    const res = await apiService.put("/todos/" + id, {
      ...target,
      completed: !target.completed,
    });
    console.log(res);
    dispatch({ type: TOGGLE_TODO, payload: res.data.completed });
    const res2 = await apiService.get("/todos");
    dispatch({ type: GET_TODOS, payload: res2.data });
  } catch (error) {}
};
export const setFilter = (filter) => {
  return { type: SET_FILTER, payload: filter };
};
