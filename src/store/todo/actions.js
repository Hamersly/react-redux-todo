import {
  ADD_TASK,
  CHANGE_TASK,
  FILTER_ALL,
  FILTER_IS_COMPLETED,
  FILTER_IS_NOT_COMPLETED,
  REMOVE_ALL_TASKS,
  REMOVE_TASK
} from "./types";

export const addTask = (text) => ({
  type: ADD_TASK,
  text,
});

export const changeTask = (id, value, text) => ({
  type: CHANGE_TASK,
  id,
  value,
  text
})

export const removeTask = (id) => ({
  type: REMOVE_TASK,
  id
})

export const removeAllTask = () => ({
  type: REMOVE_ALL_TASKS
})

export const filterAll = () => ({
  type: FILTER_ALL
})

export const filterIsCompleted = () => ({
  type: FILTER_IS_COMPLETED
})

export const filterIsNotCompleted = () => ({
  type: FILTER_IS_NOT_COMPLETED
})

