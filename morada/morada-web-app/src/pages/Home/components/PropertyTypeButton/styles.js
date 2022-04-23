import styled from 'styled-components'

export const PropertyTypeButtonWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #5078e1;
    border-radius: 10px;
    margin: 0 5px;
    min-width: 150px;
    cursor: pointer;
    p {
        color: #ffffff;
     }
    &:hover {
    background: #ffffff;
    border: 1px solid #5078e1;
     p {
        color: #5078e1;
     }
      svg {
         color: #5078e1;
        }
    }
    
`;

export const IconWrapper = styled.div`
 color: #ffffff;
 margin-top: 10px;
 svg {
  font-size: 2em;
 }
`
