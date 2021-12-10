import {removeAllTask} from "../../store/actions";
import {RemBlock, RemoveTasksButton} from "./RemoveTasksBlock.styles";
import {useDispatch, useSelector} from "react-redux";

export const RemoveTasksBlock = () => {
  const taskList = useSelector((state) => state.todos.sortedList)
  const dispatch = useDispatch()

  return (
    <RemBlock>
      {taskList.length > 1 &&
        <RemoveTasksButton onClick={() => dispatch(removeAllTask())}>
          Удалить всё
        </RemoveTasksButton>
      }
    </RemBlock>
  )
};