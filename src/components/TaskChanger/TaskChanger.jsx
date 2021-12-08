import {Changer, ChangeText, SaveButton} from "./TaskChanger.styles";

export const TaskChanger = ({changeTodo, task, setText}) => (
  <Changer>
    <ChangeText
      defaultValue={task.text}
      onChange={(e) => setText(e.target.value)}
      type="text"
      wrap="hard"
      rows="3"
    />
    <SaveButton onClick={changeTodo}>Сохранить</SaveButton>
  </Changer>
);
