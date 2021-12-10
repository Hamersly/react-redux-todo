import {useEffect} from "react";
import {ListWrapper, TasksList} from "./List.styles";
import {Input} from "../Input/Input";
import {Task} from "../Task/Task";
import {FilterBlock} from "../FilterBlock/FilterBlock";
import {RemoveTasksBlock} from "../RemoveTasksBlock/RemoveTasksBlock";
import {useSelector} from "react-redux";

export const List = () => {
  const todos = useSelector((state) => state.todos)
  const todoList = todos.sortedList

  useEffect(() => {
    localStorage.clear();
    localStorage.setItem("todos", JSON.stringify(todos));
  });

  return (
    <ListWrapper>
      <Input />
      <FilterBlock/>
      <TasksList>
        {todoList.map((item) => (
          <Task
            task={item}
            key={item.id}
          />
        ))}
      </TasksList>
      <RemoveTasksBlock />
    </ListWrapper>
  );
};
