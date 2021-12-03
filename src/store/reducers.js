import {combineReducers} from "redux";
import {
  ADD_TASK,
  CHANGE_TASK,
  FILTER_ALL_TASKS,
  FILTER_IS_COMPLETED_TASKS,
  REMOVE_ALL_TASKS,
  REMOVE_TASK
} from './actions';

const loadingFromLocalStorage = () => {
  const localTodo = JSON.parse(localStorage.getItem("todoList"));
  if (localTodo === null) {
    return [];
  } else {
    return localTodo;
  }
};

const newTodo = (text) => {
  return {
    id: new Date().getTime(),
    date: new Date().toLocaleString(),
    text,
    isCompleted: false,
    change: false,
  };
}

export const todoReducer = (state = {todoList: loadingFromLocalStorage()}, action) => {
  switch (action.type) {

    case ADD_TASK:
      return {
        ...state, todoList: [...state.todoList, newTodo(action.text)]
      }

    case REMOVE_ALL_TASKS:
      return {
        ...state, todoList: []
      }

    case REMOVE_TASK:
      return {
        ...state, todoList: state.todoList.filter((task) => task.id !== action.id)
      }

    case CHANGE_TASK:
      return {
        ...state, todoList: state.todoList.map((task) =>
          task.id === action.id && action.text
            ? {...task, [action.value]: !task[action.value], text: action.text}
            : task.id === action.id
              ? {...task, [action.value]: !task[action.value]}
              : {...task}
        ),
      }

    case FILTER_ALL_TASKS:
      return {
        ...state
      }

    case FILTER_IS_COMPLETED_TASKS:
      return {
        ...state, todoList: state.todoList.filter((task) => task.isCompleted)
      }

    default:
      return state
  }
}

export const rootReducer = combineReducers({
  todoReducer
});