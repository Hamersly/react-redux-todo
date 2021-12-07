import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  padding: 15px;
  // margin: 5px 0;
  justify-content: space-between;
  align-items: center;
`;

export const TaskText = styled.h3`
  ${(props) => props.Completed};
  word-break: break-word;
  white-space: pre-line;
  hyphens: auto;
`;