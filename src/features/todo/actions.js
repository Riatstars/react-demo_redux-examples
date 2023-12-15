import apiService from "../../app/apiService";
import { ADD_TODO, TOGGLE_TODO, SET_FILTER, GET_TODOS } from "./reducer";

export const addTodo = (text) => async (dispatch) => {
  if (text == "") return;
  try {
    const todo = { id: new Date(), text, completed: false };
    await apiService.post("/todos", todo);
    //phải có 2 dòng dưới để reset thì toggle todo mới
    //hoạt động trên những item mới được add
    const res2 = await apiService.get("/todos");
    dispatch({ type: GET_TODOS, payload: res2.data });
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
    const target = data.data[0];
    const res = await apiService.put("/todos/" + id, {
      ...target,
      completed: !target.completed,
    });
    dispatch({ type: TOGGLE_TODO, payload: res.data.completed });
    //phải có 2 dòng dưới thì toggle todo mới hoạt động
    const res2 = await apiService.get("/todos");
    dispatch({ type: GET_TODOS, payload: res2.data });
  } catch (error) {}
};
export const setFilter = (filter) => {
  return { type: SET_FILTER, payload: filter };
};
