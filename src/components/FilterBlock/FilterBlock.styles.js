import styled from "styled-components";
import {MyButton} from "../List/List.styles";

export const Filters = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FilterButton = styled(MyButton)`
  margin: 30px 10px;
  ${(props) => props.Color};
`;