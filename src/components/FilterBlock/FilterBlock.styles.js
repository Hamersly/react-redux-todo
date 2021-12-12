import styled from "styled-components";
import {MyButton} from "../List/List.styles";

export const Filters = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CompletedFilterButton = styled(MyButton)`
  margin: 30px 10px;
  background-color: ${(props) => props.Color === "FILTER_IS_COMPLETED" && "red"} ;
`;

export const AllFilterButton = styled(MyButton)`
  margin: 30px 10px;
  background-color: ${(props) => props.Color === "FILTER_ALL" && "red"} ;
`;

export const IsNotCompletedFilterButton = styled(MyButton)`
  margin: 30px 10px;
  background-color: ${(props) => props.Color === "FILTER_IS_NOT_COMPLETED" && "red"} ;
`;