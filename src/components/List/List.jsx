import React, {useEffect} from "react";
import {FilterBlock, FilterButton, ListWrapper, RemoveTasksBlock, RemoveTasksButton, TasksList} from "./List.styles";
import {Input} from "../Input/Input";
import {Task} from "../Task/Task";
import {useDispatch, useSelector} from "react-redux";
import {addTask, changeTask, removeAllTask, removeTask} from "../../store/actions";

export const List = () => {
  const todoList = useSelector((state) => state.todoReducer.todoList)
  const dispatch = useDispatch()

  useEffect(() => {
    localStorage.clear();
    localStorage.setItem("todoList", JSON.stringify(todoList));
  });

  const addTodo = (text) => {
    dispatch(addTask(text))
  };

  const removeTodo = (id) => {
    dispatch(removeTask(id))
  };

  const ChangeValueTodo = (id, value, text) => {
    dispatch(changeTask(id, value, text))
  };

  const removeAll = () => {
    dispatch(removeAllTask())
  }

  const filterTodo = (status) => {
    switch (status) {
      case 'completed':
        return todoList.filter((todo) => todo.isCompleted);
      case 'notCompleted':
        return todoList.filter((todo) => !todo.isCompleted);
      case 'all':
        return todoList;
      default:
        return todoList;
    }
  }

  return (
    <ListWrapper>
      <Input addTodo={addTodo}/>
      <FilterBlock>
        <FilterButton onClick={() => filterTodo('completed')}>Сделано</FilterButton>
        <FilterButton onClick={() => filterTodo('all')}>Всё</FilterButton>
        <FilterButton onClick={() => filterTodo('notCompleted')}>Не сделано</FilterButton>
      </FilterBlock>
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
