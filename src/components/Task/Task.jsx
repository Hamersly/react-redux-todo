import React, {useState} from "react";
import {
  ChangeButton,
  ChangeText,
  Date,
  DateBlock,
  RemoveButton,
  SaveButton,
  TaskBlock,
  TaskChanger,
  TaskText,
  TaskWrapper,
} from "./Task.styles";

export const Task = ({
                       task,
                       removeTodo,
                       ChangeValueTodo
                     }) => {
  const [value, setValue] = useState(task.text);

  const changeTodo = () => {
    if (value.trim().length !== 0) {
      ChangeValueTodo(task.id, 'change', value.trim());
      setValue("");
    }
  };

  return (
    <TaskBlock>
      <DateBlock>
        <Date>{task.date}</Date>
        <div>
          {task.change ? (
            <ChangeButton
              onClick={() => ChangeValueTodo(task.id, 'change')}
              Color={"background-color: red;"}
            >
              ред.
            </ChangeButton>
          ) : (
            <ChangeButton onClick={() => ChangeValueTodo(task.id, 'change')}>
              ред.
            </ChangeButton>
          )}

          <RemoveButton onClick={() => removeTodo(task.id)}>
            x
          </RemoveButton>
        </div>
      </DateBlock>

      {task.change ? (
        <TaskChanger>
          <ChangeText
            defaultValue={task.text}
            onChange={(e) => setValue(e.target.value)}
            type="text"
            wrap="hard"
            rows="3"
          />
          <SaveButton onClick={changeTodo}>Сохранить</SaveButton>
        </TaskChanger>
      ) : (
        <TaskWrapper onClick={() => ChangeValueTodo(task.id, 'isCompleted')}>
          {task.isCompleted ? (
            <TaskText Completed={"text-decoration: line-through;"}>
              {task.text}
            </TaskText>
          ) : (
            <TaskText>{task.text}</TaskText>
          )}
        </TaskWrapper>
      )}
    </TaskBlock>
  );
};
