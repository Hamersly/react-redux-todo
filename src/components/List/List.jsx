import React, {useEffect} from "react";
import {ListWrapper, RemoveTasksBlock, RemoveTasksButton, TasksList} from "./List.styles";
import {Input} from "../Input/Input";
import {Task} from "../Task/Task";
import {useDispatch, useSelector} from "react-redux";
import {
  addTask,
  changeTask,
  filterAll,
  filterIsCompleted,
  filterIsNotCompleted,
  removeAllTask,
  removeTask
} from "../../store/actions";
import {FilterBlock} from "../FilterBlock/FilterBlock";

export const List = () => {
  const todos = useSelector((state) => state.todoReducer)
  const todoList = todos.sortedList
  const flag = todos.flag
  const dispatch = useDispatch()

  useEffect(() => {
    localStorage.clear();
    localStorage.setItem("todos", JSON.stringify(todos));
  });

  const addTodo = (text) => {
    dispatch(addTask(text))
    filterTodo()
  };

  const removeTodo = (id) => {
    dispatch(removeTask(id))
    filterTodo()
  };

  const ChangeValueTodo = (id, value, text) => {
    dispatch(changeTask(id, value, text))
    filterTodo()
  };

  const removeAll = () => {
    dispatch(removeAllTask())
  }

  const filterTodo = () => {
    switch (flag) {
      case "FILTER_ALL":
        return dispatch(filterAll())
      case "FILTER_IS_COMPLETED":
        return dispatch(filterIsCompleted())
      case "FILTER_IS_NOT_COMPLETED":
        return dispatch(filterIsNotCompleted())
      default:
        return dispatch(filterAll())
    }
  }

  return (
    <ListWrapper>
      <Input addTodo={addTodo}/>
      <FilterBlock></FilterBlock>
      <TasksList>
        {todoList.map((item) => (
          <Task
            removeTodo={removeTodo}
            task={item}
            ChangeValueTodo={ChangeValueTodo}
            key={item.id}
          />
        ))}
      </TasksList>
      <RemoveTasksBlock>
        {todoList.length > 1 ? (
          <RemoveTasksButton onClick={() => removeAll()}>
            Удалить всё
          </RemoveTasksButton>
        ) : (
          <div></div>
        )}
      </RemoveTasksBlock>
    </ListWrapper>
  );
};
