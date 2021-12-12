import {Block, ChangeButton, Date, RemoveButton} from "./DateBlock.styles";
import {useDispatch} from "react-redux";
import {removeTask} from "../../store/todo/actions";

export const DateBlock = ({task, changeValueTodo}) => {
  const dispatch = useDispatch()

  return (
    <Block>
      <Date>{task.date}</Date>
      <div>
        <ChangeButton
          onClick={() => changeValueTodo(task.id, 'change')}
          change={task.change}>ред.
        </ChangeButton>
        <RemoveButton onClick={() => dispatch(removeTask(task.id))}>X</RemoveButton>
      </div>
    </Block>
  )
}
