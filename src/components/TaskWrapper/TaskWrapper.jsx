import {TaskText, Wrapper} from "./TaskWrapper.styles";

export const TaskWrapper = ({task, changeValueTodo}) => {
  return (
    <Wrapper onClick={() => changeValueTodo(task.id, 'isCompleted')}>
      {task.isCompleted ? (
        <TaskText Completed={"text-decoration: line-through;"}>
          {task.text}
        </TaskText>
      ) : (
        <TaskText>{task.text}</TaskText>
      )}
    </Wrapper>
  )
};