import styled from "styled-components";
import {RemoveButton} from "../DataBlock/DateBlock.styles";

export const Changer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 0 15px 0;
`;

export const SaveButton = styled(RemoveButton)`
  margin: 15px 0 0 0;;
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