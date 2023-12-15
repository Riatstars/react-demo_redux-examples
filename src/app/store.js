import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";
import { thunk } from "redux-thunk";

import counterReducer from "../features/counter/reducer";
import multiCounterReducer from "../features/multiCounter/reducer";
import todoReducer from "../features/todo/reducer";

const initialState = {};
const store = createStore(
  combineReducers({
    counter: counterReducer,
    multiCounter: multiCounterReducer,
    todo: todoReducer,
  }),
  initialState,
  composeWithDevTools(applyMiddleware(thunk))
);
export default store;
