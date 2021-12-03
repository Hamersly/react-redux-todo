import styled from "styled-components";

export const TaskWrapper = styled.div`
  display: flex;
  padding: 15px;
  // margin: 5px 0;
  justify-content: space-between;
  align-items: center;
`;

export const TaskBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: space-around;
  margin: 30px 0 0 0;
  box-shadow: 0 0 10px 5px black;
  background-color: #a9a9a9;
  border-radius: 30px;
`;

export const TaskChanger = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 0 15px 0;
`;

export const DateBlock = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Date = styled.h3`
  color: orange;
  margin: 15px 0 5px 15px;
  width: auto;
  text-shadow: 1px 1px 2px black;
`;

export const RemoveButton = styled.button`
  background-color: orange;
  border: none;
  padding: 5px 10px;
  margin: 15px 15px 0 0;
  box-shadow: 0 0 10px 3px black;
  border-radius: 50px;
`;

export const ChangeButton = styled(RemoveButton)`
  ${(props) => props.Color};
`;

export const SaveButton = styled(RemoveButton)`
  margin: 15px 0 0 0;;
`;

export const TaskText = styled.h3`
  ${(props) => props.Completed};
  word-break: break-word;
  hyphens: auto;
`;

export const ChangeText = styled.textarea`
  margin: 15px 15px 0 15px;
  padding: 5px;
  background-color: #a9a9a9;
  width: 95%;
  color: black;
  border: none;
  resize: none;
`;
