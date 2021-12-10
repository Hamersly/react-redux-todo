import {Block, ChangeButton, Date, RemoveButton} from "./DateBlock.styles";
import {useDispatch} from "react-redux";
import {removeTask} from "../../store/actions";

export const DateBlock = ({task, changeValueTodo}) => {
  const dispatch = useDispatch()

  const changeColor = () => {
    if (task.change) return "background-color: red;"
  }

  return (
    <Block>
      <Date>{task.date}</Date>
      <div>
        <ChangeButton
          onClick={() => changeValueTodo(task.id, 'change')}
          change={changeColor}>ред.
        </ChangeButton>
        <RemoveButton onClick={() => dispatch(removeTask(task.id))}>X</RemoveButton>
      </div>
    </Block>
  )
}
