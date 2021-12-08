import {TaskText, Wrapper} from "./TaskWrapper.styles";

export const TaskWrapper = ({task, changeValueTodo}) => {

  const TaskStatus = () => {
    if (task.isCompleted) return "text-decoration: line-through;"
  }

  return (
    <Wrapper onClick={() => changeValueTodo(task.id, 'isCompleted')}>
        <TaskText Completed={TaskStatus}>
          {task.text}
        </TaskText>
    </Wrapper>
  );
}