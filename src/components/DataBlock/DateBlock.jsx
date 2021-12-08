import {Block, ChangeButton, Date, RemoveButton} from "./DateBlock.styles";

export const DateBlock = ({task, changeValueTodo, removeTodo}) => {

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
        <RemoveButton onClick={() => removeTodo(task.id)}>X</RemoveButton>
      </div>
    </Block>
  )
}
