import {combineReducers} from "redux";
import {todoReducer} from "./reducers";

export const rootReducer = combineReducers({
  todos: todoReducer,
});