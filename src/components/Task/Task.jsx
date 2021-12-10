import {useState} from "react";
import {DateBlock} from "../DataBlock/DateBlock";
import {TaskChanger} from "../TaskChanger/TaskChanger";
import {TaskWrapper} from "../TaskWrapper/TaskWrapper";
import {
  TaskBlock,
} from "./Task.styles";
import {useDispatch} from "react-redux";
import {changeTask} from "../../store/actions";

export const Task = ({task}) => {
  const [text, setText] = useState(task.text);
  const dispatch = useDispatch()

  const changeValueTodo = (id, value, text) => {
    dispatch(changeTask(id, value, text))
  };

  const changeTodo = () => {
    if (text.trim().length) {
      changeValueTodo(task.id, 'change', text);
      setText("");
    }
  };

  return (
    <TaskBlock>

      <DateBlock
        task={task}
        changeValueTodo={changeValueTodo}>
      </DateBlock>

      {task.change ?
        (<TaskChanger
          changeTodo={changeTodo}
          task={task}
          setText={setText}>
        </TaskChanger>) :

        (<TaskWrapper
          onClick={() => changeValueTodo(task.id, 'isCompleted')}
          task={task}
          changeValueTodo={changeValueTodo}>
        </TaskWrapper>)}

    </TaskBlock>
  );
};
