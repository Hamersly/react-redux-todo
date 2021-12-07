import {useEffect} from "react";
import {ListWrapper, TasksList} from "./List.styles";
import {Input} from "../Input/Input";
import {Task} from "../Task/Task";
import {FilterBlock} from "../FilterBlock/FilterBlock";
import {RemoveTasksBlock} from "../RemoveTasksBlock/RemoveTasksBlock";
import {useDispatch, useSelector} from "react-redux";
import {addTask, changeTask, filterAll, filterIsCompleted, filterIsNotCompleted, removeTask} from "../../store/actions";

export const List = () => {
  const todos = useSelector((state) => state.todos)
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

  const changeValueTodo = (id, value, text) => {
    dispatch(changeTask(id, value, text))
    filterTodo()
  };

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
      <FilterBlock/>
      <TasksList>
        {todoList.map((item) => (
          <Task
            removeTodo={removeTodo}
            task={item}
            changeValueTodo={changeValueTodo}
            key={item.id}
          />
        ))}
      </TasksList>
      <RemoveTasksBlock todoList={todoList}/>
    </ListWrapper>
  );
};
