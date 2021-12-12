import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  padding: 15px;
  justify-content: space-between;
  align-items: center;
`;

export const TaskText = styled.h3`
  text-decoration: ${(props) => props.Completed && 'line-through'};
  word-break: break-word;
  white-space: pre-line;
  hyphens: auto;
`;