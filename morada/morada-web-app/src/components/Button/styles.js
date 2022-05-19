import { Link } from 'react-router-dom';
import styled, {css} from 'styled-components';
import {PRIMARY_COLOR} from "../../constantes/styles";

const BaseButtonStyle = css`
    width: 100%;
    font-size: 1em;
    color: #fff;
    background-color: ${PRIMARY_COLOR};
    text-align: center;
    border: none;
    border-radius: 6px;
    padding: 9px 0;
    opacity: 0.9;
    &:hover {
        cursor: pointer;
        opacity: 1;
    }
`;
export const ButtonStyled = styled.button`
    ${BaseButtonStyle}
`;
export const LinkStyled = styled(Link)`
    ${BaseButtonStyle}
    text-decoration : none;
    display: block;
`;
