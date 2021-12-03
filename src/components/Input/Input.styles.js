import styled from "styled-components";
import {MyButton} from "../List/List.styles";

export const InputBlock = styled.div`
    display: flex;
    
`;

export const StyledInput = styled.input`
    width: 100%;
    padding: 10px 15px;
    margin-top: 30px;
    border-radius: 30px;
    box-shadow: 0 0 10px 5px black;
    outline: none;
`;

export const AddButton = styled(MyButton)`
    margin: 30px auto 0 10px;
`;
