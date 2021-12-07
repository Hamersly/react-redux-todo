import {removeAllTask} from "../../store/actions";
import {RemBlock, RemoveTasksButton} from "./RemoveTasksBlock.styles";
import {useDispatch} from "react-redux";

export const RemoveTasksBlock = ({todoList}) => {
  const dispatch = useDispatch()
  return (
    <RemBlock>
      {todoList.length > 1 &&
        <RemoveTasksButton onClick={() => dispatch(removeAllTask())}>
          Удалить всё
        </RemoveTasksButton>
      }
    </RemBlock>
  )
};