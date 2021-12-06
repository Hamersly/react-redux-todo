import styled from "styled-components";
import {MyButton} from "../List/List.styles";

export const Filters = styled.div`
  display: flex;
  justify-content: center;
`;

export const FilterButton = styled(MyButton)`
  margin: 30px 30px 0 10px;
  ${(props) => props.Color};
`;