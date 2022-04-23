import styled, {createGlobalStyle} from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    body {
       margin: 0;
       padding: 0;
       font-family: 'Lato', sans-serif;
       box-sizing: border-box;
    }
`;

export const SubTitle = styled.p`
   color: #878D9E;
   font-size: 1.0em;
   text-transform: capitalize;
   margin: 5px 0 0;
`;
