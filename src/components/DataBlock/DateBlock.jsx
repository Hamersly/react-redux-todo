import {ChangeButton, Date, Block, RemoveButton} from "./DateBlock.styles";

export const DateBlock = ({task, changeValueTodo, removeTodo}) => {
  return (
    <Block>
      <Date>{task.date}</Date>
      <div>

        {task.change ?
          (<ChangeButton
            onClick={() => changeValueTodo(task.id, 'change')}
            Color={"background-color: red;"}>ред.
          </ChangeButton>) :
          (<ChangeButton onClick={() => changeValueTodo(task.id, 'change')}>ред.</ChangeButton>)}

        <RemoveButton onClick={() => removeTodo(task.id)}>x</RemoveButton>
      </div>
    </Block>
  )
}
