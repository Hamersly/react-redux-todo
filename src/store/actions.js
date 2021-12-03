export const ADD_TASK = 'ADD_TASK'
export const REMOVE_ALL_TASKS = 'REMOVE_ALL_TASKS'
export const REMOVE_TASK = 'REMOVE_TASK'
export const CHANGE_TASK = 'CHANGE_TASK'
export const FILTER_ALL_TASKS = 'FILTER_ALL_TASKS'
export const FILTER_IS_COMPLETED_TASKS = 'FILTER_IS_COMPLETED_TASKS'
export const FILTER_IS_NOT_COMPLETED_TASKS = 'FILTER_IS_NOT_COMPLETED_TASKS'


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

export const filterAllTasks = () => ({
  type: FILTER_ALL_TASKS
})

export const filterIsCompletedTaks = () => ({
  type: FILTER_IS_COMPLETED_TASKS
})

export const filterIsNotCompletedTaks = () => ({
  type: FILTER_IS_NOT_COMPLETED_TASKS
})

