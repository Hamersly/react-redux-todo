import {
  ADD_TASK,
  CHANGE_TASK,
  FILTER_ALL,
  FILTER_IS_COMPLETED,
  FILTER_IS_NOT_COMPLETED,
  REMOVE_ALL_TASKS,
  REMOVE_TASK
} from './types';

const initialState = () => {
  const localTodo = JSON.parse(localStorage.getItem("todos"));
  if (localTodo === null) {
    return {
      todoList: [],
      sortedList: [],
      flag: FILTER_ALL
    };
  } else {
    return localTodo;
  }
};

export const todoReducer = (state = initialState(), action) => {
  switch (action.type) {
    case ADD_TASK:
      const todo = {
        id: new Date().getTime(),
        date: new Date().toLocaleString(),
        text: action.text,
        isCompleted: false,
        change: false,
      }
      return {
        ...state,
        todoList: [...state.todoList, todo],
      }

    case REMOVE_ALL_TASKS:
      return {
        ...state,
        todoList: [],
        sortedList: [],
      }

    case REMOVE_TASK:
      return {
        ...state,
        todoList: state.todoList.filter((task) => task.id !== action.id),
      }

    case CHANGE_TASK:
      return {
        ...state,
        todoList: state.todoList.map((task) =>
          task.id === action.id && action.text
            ? {...task, [action.value]: !task[action.value], text: action.text}
            : task.id === action.id
              ? {...task, [action.value]: !task[action.value]}
              : {...task}
        )
      }

    case FILTER_ALL:
      return {
        ...state,
        sortedList: state.todoList,
        flag: action.type
      }

    case FILTER_IS_COMPLETED:
      return {
        ...state,
        sortedList: state.todoList.filter((task) => task.isCompleted),
        flag: action.type
      }

    case FILTER_IS_NOT_COMPLETED:
      return {
        ...state,
        sortedList: state.todoList.filter((task) => !task.isCompleted),
        flag: action.type
      }

    default:
      return state
  }
}


