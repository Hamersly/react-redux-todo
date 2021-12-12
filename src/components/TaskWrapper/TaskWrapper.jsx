import {TaskText, Wrapper} from "./TaskWrapper.styles";

export const TaskWrapper = ({task, changeValueTodo}) => {

  return (
    <Wrapper onClick={() => changeValueTodo(task.id, 'isCompleted')}>
        <TaskText Completed={task.isCompleted}>
          {task.text}
        </TaskText>
    </Wrapper>
  );
}