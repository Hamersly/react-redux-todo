import styled from "styled-components";

export const Block = styled.div`
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