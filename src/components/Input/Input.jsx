import {useState} from "react";
import {AddButton, InputBlock, StyledInput} from "./Input.styles";
import {useDispatch} from "react-redux";
import {addTask} from "../../store/actions";

export const Input = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch()

  const addTodoInList = () => {
    if (text.trim().length) {
      dispatch(addTask(text))
      setText("");
    }
  };

  const handleSubmit = (e) => {
    if (e.key === "Enter") {
      addTodoInList();
    }
  };

  return (
    <InputBlock>
      <StyledInput
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={handleSubmit}
        placeholder="Введи задачу"
      />
      <AddButton onClick={addTodoInList}><h3>+</h3></AddButton>
    </InputBlock>
  );
};
