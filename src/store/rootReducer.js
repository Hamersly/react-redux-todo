import {combineReducers} from "redux";
import {todoReducer} from "./todo/reducers";

export const rootReducer = combineReducers({
  todos: todoReducer,
});